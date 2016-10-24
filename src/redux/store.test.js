/*var expect = require('chai').expect;
import { createStore } from 'redux';
import rootReducer from './index';

import * as appActions from './appActions';

describe('Store', function() {
    it('Should handle fetchng apps', function() {
        // arrange

        const apps = {
                "id": "1099misce-file",
                "code": "4220c271-51cd-4815-807e-ca64761af8c3",
                "img": "/b7nigcbq4n/Submitted15/tax1099-logo-qbapps.png",
                "name": "1099 MISC e-file by Tax1099.com",
                "vendor": "TechAtlantis, Inc",
                "tagline": "E-File your year-end forms easily and quickly!",
                "rating": 5,
                "reviews": 3
            };
        const store = createStore(rootReducer, []);
        // act
        const action = appActions.listAllApps(apps);
        store.dispatch(action);
        console.log("store:".store);
        // assert
        const actual = store.getState().apps[0];
        console.log(actual);
        const expected = {
            name: "1099 MISC e-file by Tax1099.com"
        };

        expect(actual).to.equal(expected);
    });
});
*/