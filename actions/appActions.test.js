/*

import * as actions from "./appActions"
import * as types from "./actionTypes"

const expect = require("chai").expect;


import thunk from "redux-thunk"
import fetchMock from "fetch-mock"
import configureMockStore from "redux-mock-store"

import sinon from "sinon"

describe("test AppActions ", function(){
    let apps = [
        {
            "id": "concur",
            "code": "a311a86b-e4fb-4d1f-a310-b26bc545d9e0",
            "img": "/b7mmavvmat/Submitted21/2013_11_QuickBooks_Intuit_App_Icon_MIST6621.png",
            "name": "Concur Travel and Expense",
            "vendor": "Concur",
            "tagline": "Easy expense management for small businesses on the go!",
            "rating": 5,
            "reviews": 194
        }, {
            "id": "constantcontact",
            "code": "806be324-7ad0-4a52-91a8-8fcfdd61dba1",
            "img": "/b7qvsekepv/Submitted9/LogoName.png",
            "name": "Constant Contact for QuickBooks Online",
            "vendor": "Constant Contact",
            "tagline": "Keep in touch with your clients by syncing QuickBooks and Constant Contact",
            "rating": 4.5,
            "reviews": 4
        }];

    it("test listApps",() =>{
        let result= actions.listAllApps(apps);
        console.log("result",result);
        expect(result.type).to.equal(types.LIST_APPS);
        expect(result.apps).to.equal(apps);
    });


});



const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Test async call ", () => {

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

   beforeEach(() => {
        fetchMock.get("*", {data: {apps: [{appUrl: "newUrl"}]}});
        fetchMock.mock("../../json/all.json", apps);
    });

    afterEach(()=> {
        fetchMock.restore();
    });

    it("Test fetch all Apps  async call", (done)=> {
        const listAppAction = [
            {type: types.LIST_APPS, apps: {}}
        ];

        const store = mockStore({apps: []}, listAppAction);
        console.log("store = ",store);
        store.dispatch(actions.loadApps(apps)).then(()=> {
            //assert(window.fetch).called;
            try {
                const result = store;

                const actions = store.getActions();
                console.log("result actions",actions);
                console.log("result actions of 0",actions[0].type);
                expect(actions[0].type).to.equal(types.LIST_APPS);
                done();
            }
            catch (error) {
                done(error);
            }
        });

    });
});

*/