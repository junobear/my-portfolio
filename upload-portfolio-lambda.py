import boto3
import io
import zipfile
import mimetypes


def lambda_handler(event, context):
    s3 = boto3.resource('s3')
    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-east-1:860726570144:deployPortfolioTopic')
    
    # Set default value
    location = {  
        "bucketName": "portfoliobuild.junosummer.com",
        "objectKey": "portfoliobuild.zip"
    }
    try:
        job = event.get("CodePipeline.job")
        if job:
            for artifact in job['data']['inputArtifacts']:
                if artifact['name'] == "MyAppBuild":
                    location = artifact['location']['s3Location']
            
        print ("Building Portfolio from " + str(location))        
        portfolio_bucket = s3.Bucket('portfolio.junosummer.com')
        build_bucket = s3.Bucket(location['bucketName'])
        portfolio_zip = io.BytesIO()
        build_bucket.download_fileobj(location['objectKey'],portfolio_zip)
        
        with zipfile.ZipFile(portfolio_zip) as myzip:
            for name in myzip.namelist():
                obj = myzip.open(name)
                portfolio_bucket.upload_fileobj(obj,name,
                    ExtraArgs={'ContentType': mimetypes.guess_type(name)[0]})
                portfolio_bucket.Object(name).Acl().put(ACL='public-read')
        topic.publish(Subject="Portfolio Deployed", Message="Portofolio has been deployed successfully.")
        if job: 
            codepipeline = boto3.client('codepipeline')
            codepipeline.put_job_success_result(jobId=job['id'])
    except: 
        topic.publish(Subject="Portfolio Deployed Failed", Message="Portofolio has been deployed unsuccessfully.")
        raise
    return "hello from Build portfolio"