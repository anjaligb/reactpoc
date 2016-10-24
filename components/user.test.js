import React,{PropTypes} from 'react';
var expect = require('chai').expect;
import TestUtils from 'react-addons-test-utils';
import { shallow, mount, render } from 'enzyme';
var jsdom = require('jsdom').jsdom;

import UserComponent from "./user";

/*

it('Correctly displays the user name and age in paragraphs wrapped under a parent div', () => {
    let wrapper = shallow(<UserComponent
        name={ 'Reign' }
        age={ 26 } />);
    console.log(wrapper.debug());
});

    */
