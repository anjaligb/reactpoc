/*var expect = require('chai').expect;
import { createStore } from 'redux';
import rootReducer from './index';

import * as appActions from './appActions';

describe('Store list - allapps', () => {
    it('should test fetching apps', () => {
        // arrange
        const apps =
            {
                "id": "concur",
                "code": "a311a86b-e4fb-4d1f-a310-b26bc545d9e0",
                "img": "/b7mmavvmat/Submitted21/2013_11_QuickBooks_Intuit_App_Icon_MIST6621.png",
                "name": "Concur Travel and Expense",
                "vendor": "Concur",
                "tagline": "Easy expense management for small businesses on the go!",
                "rating": 5,
                "reviews": 194
            };
        const store = createStore(rootReducer, []);
        // act
        const action = appActions.listAllApps(apps);
        store.dispatch(action);

        // assert
        const actual = store.getState().apps.apps;
        console.log("get state", store.getState())
        console.log("actual is", actual);
        const expected =  {
            "id": "concur",
            "code": "a311a86b-e4fb-4d1f-a310-b26bc545d9e0",
            "img": "/b7mmavvmat/Submitted21/2013_11_QuickBooks_Intuit_App_Icon_MIST6621.png",
            "name": "Concur Travel and Expense",
            "vendor": "Concur",
            "tagline": "Easy expense management for small businesses on the go!",
            "rating": 5,
            "reviews": 194
        };
        expect(actual).to.deep.equal({
            "id": "concur",
            "code": "a311a86b-e4fb-4d1f-a310-b26bc545d9e0",
            "img": "/b7mmavvmat/Submitted21/2013_11_QuickBooks_Intuit_App_Icon_MIST6621.png",
            "name": "Concur Travel and Expense",
            "vendor": "Concur",
            "tagline": "Easy expense management for small businesses on the go!",
            "rating": 5,
            "reviews": 194
        });


    });
});
*/