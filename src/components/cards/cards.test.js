var expect = require('chai').expect;
import React from 'react';
import TestUtils from 'react-addons-test-utils';
//import AppCardComp from './Cards';
//import AppCardBoxComp from './Cards';
import {AppCardRatingsComp, AppCardBoxComp, AppCardComp, AppCard}  from './Cards';

import {mount, shallow} from 'enzyme';
var jsdom = require('jsdom').jsdom;

const props = {
    data: [
        {
            "id": "1099misce-file",
            "code": "4220c271-51cd-4815-807e-ca64761af8c3",
            "img": "/b7nigcbq4n/Submitted15/tax1099-logo-qbapps.png",
            "name": "1099 MISC e-file by Tax1099.com",
            "vendor": "TechAtlantis, Inc",
            "tagline": "E-File your year-end forms easily and quickly!",
            "rating": 5,
            "reviews": 3,
            "pro":false
        },{
            "id": "quickbooks-online-with-oneandone",
            "code": "7f65a34b-d516-4458-9704-148a570f6665",
            "img": "/b7qbvwdfda/Submitted7/oneandone-icon-150x150.png",
            "name": "1and1 by OneSaas",
            "vendor": "OneSaas",
            "tagline": "Get 1and1 and QuickBooks Online happily teamed up",
            "rating": 2.5,
            "reviews": 0,
            "pro":false
        },{
            "id": "3dcart-sync",
            "code": "e369eac7-2677-4182-9420-c24fa35e6830",
            "img": "/b7qau2kq5i/Submitted31/LogoName.png",
            "name": "3dcart Sync - Unify",
            "vendor": "Webgility, Inc.",
            "tagline": "Sync Your 3dcart Store with QuickBooks",
            "rating": 5,
            "reviews": 1,
            "pro":true
        },{
            "id": "get your due shipping refunds!",
            "code": "64c016fc-7298-4c5d-b28a-779a45296a27",
            "img": "/b7n43ya7at/Submitted101/LogoName.png",
            "name": "71lbs: FedEx &amp; UPS Shipping Refunds",
            "vendor": "71 Pounds, Inc.",
            "tagline": "71lbs puts (unexpected) FedEx/UPS monies into your bottom line.",
            "rating": 5,
            "reviews": 8,
            "pro":false
        }]

};



/*
describe('AppCardRatingsComp via Enzyme', () => {
    it('render react comp', () => {
       // const wrapper = setup();
        //console.log(wrapper.debug());
        let wrapper = shallow(<AppCardRatingsComp  key={"get your due shipping refunds"} rating={3} reviews={ 8}/>);

        console.log("Logging Rating component return from shall dom  ", wrapper.debug());
        expect(wrapper.find('div')).to.exist; // Element present
       // expect(wrapper.find(AppCardComp)).to.exist; //component present
    });

   it('AppCardBoxComp react comp', () => {
        // const wrapper = setup();
        //console.log(wrapper.debug());
        let wrapper1 = shallow(<AppCardBoxComp data={props.data} />);
        console.log("Logging AppCardComp component return from shall dom: ", wrapper1.debug());
        expect(wrapper1.find('div')).to.exist; // Element present
      //  expect(wrapper.find(AppCardComp)).to.exist; //component present
    });

    it('AppCardComp react comp', () => {
        // const wrapper = setup();
        //console.log(wrapper.debug());
        let wrapper1 = shallow(<AppCardComp data={props.data} />);
        console.log("Logging AppCardComp component return from shall dom: ", wrapper1.debug());
        expect(wrapper1.find('div')).to.exist; // Element present
        //  expect(wrapper.find(AppCardComp)).to.exist; //component present
    });
    it('AppCard react comp', () => {
        // const wrapper = setup();
        //console.log(wrapper.debug());
        let wrapper1 = shallow(<AppCard data={props.data} />);
        console.log("Logging AppCardComp component return from shall dom: ", wrapper1.debug());
        expect(wrapper1.find('div')).to.exist; // Element present
        //  expect(wrapper.find(AppCardComp)).to.exist; //component present
    });

});



*/
//TODO - create more tests with mount to do real dom interactions
// TODO- create Tests to test highlevel Appcard component
//get the routing