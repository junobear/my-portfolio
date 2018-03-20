import React from 'react';
import { shallow } from 'enzyme';
import ExampleWork, { ExampleWorkBubble } from '../js/example-work';

const myWork = [
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
];

describe("ExampleWork component", () => {
    let component = shallow(<ExampleWork work={myWork}/>);
    it("Should be a 'secton' element", () => {
        expect(component.type()).toEqual('section');
    });
    it("Should contain as many children as there are work examples", () => {
        expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length);
    });
});

describe("ExampleWorkBubble component", () => {
    let component = shallow(<ExampleWorkBubble example={myWork[1]}/>);
    let images = component.find("img");

    it("Should contain a single 'img' element.", () => {
        expect(images.length).toEqual(1);
    });

    it("Should have image src set correctly.", () => {
        {/*expect(images.node.props.src).toEqual(myWork[1].image.src);*/}
        expect(images.getElement(0).props.src).toEqual(myWork[1].image.src);
    });
});