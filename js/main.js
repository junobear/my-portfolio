import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
    {
        'title': "Work Example",
        'image': {
            'desc': "example screenshot of a project involving code",
            'src': "images/example1.png",
            'comment': ""
        }
    },
    {
        'title': "Lambda Boilerplate",
        'image': {
            'desc': "Serverless Portfolio",
            'src': "images/lambdadelete.png",
            'comment': ""
        }
    },
    {
        'title': "Abot Snapshot",
        'image': {
            'desc': "Abot Snapshot",
            'src': "images/abotsnapshot.png",
            'comment': ""
        }
    }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));