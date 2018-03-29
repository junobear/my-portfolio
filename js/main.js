import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
    {
        'title': "Work Example",
        'href': "https://example.com",
        'desc': "Work Example - this works",
        'image': {
            'desc': "example screenshot of a project involving code",
            'src': "images/example1.png",
            'comment': ""
        }
    },
    {
        'title': "Lambda Boilerplate",
        'href': "https://lambdaexample.com",
        'desc': "hegemony en antropis en amen.",
        'image': {
            'desc': "Serverless Portfolio",
            'src': "images/lambdadelete.png",
            'comment': ""
        }
    },
    {
        'title': "Abot Snapshot",
        'href': "https://abotiswhatitisabout.com",
        'desc': "Its all about ABOT",
        'image': {
            'desc': "Abot Snapshot",
            'src': "images/abotsnapshot.png",
            'comment': ""
        }
    }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));