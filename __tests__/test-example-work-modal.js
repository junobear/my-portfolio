import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ExampleWorkModal from '../js/example-work-modal';

const myExample = 
    {
        'title': "Lambda Boilerplate",
        'href': "https://lambdaexample.com",
        'desc': "hegemony en antropis en amen.",
        'image': {
            'desc': "Serverless Portfolio",
            'src': "images/lambdadelete.png",
            'comment': ""
        }
    };

describe("ExampleWorkModal component", () => {
    let component = mount(<ExampleWorkModal example={myExample} 
        open={false}/>);
    let openComponent = mount(<ExampleWorkModal example={myExample} 
        open={true}/>);

    let mockCloseModalFn = jest.fn(); 
    let closeComponent = mount(<ExampleWorkModal example={myExample}
        open={true} closeModal={mockCloseModalFn}/>);

    let anchors = component.find("a");

    it("Should contain a single 'a' element", () => {
        expect(anchors.length).toEqual(1);
    });

    it("Should link to our project.", () => {
        expect(anchors.getElement(0).props.href).toEqual(myExample.href);
    });

    it("Should have the modal class set correctly.", () => {
    {/*expect(rcomponent.find(".background--skyBlue").hasClass("modal--closed")).toBe(true);*/}
        {/*console.log(rcomponent.find("background--skyBlue modal--closed").text());
        console.log(component.find("div").children().text);*/}
        expect(component.find("div").length).toEqual(2);
        {/*expect(rcomponent.find(".background--skyBlue").hasClass("modal--closed")).toBe(true);*/}
        expect(openComponent.find(".background--skyBlue").hasClass("modal--open")).toBe(true);
    });

    it("Should call the closeModal handler when clicked.", () => {
        {/*expect(closeComponent.find(".color--cloud")).toBe(true);*/}
        closeComponent.find('.color--cloud').first().simulate('click');
        expect(mockCloseModalFn).toHaveBeenCalled();
    });
});
