import * as actions from "./appActions"
import appReducer from "./reducers"

const expect = require("chai").expect;

describe("test reducers",()=> {

    it("test appreducer listAPps", ()=> {
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
        let listAppsAction = actions.listAllApps(apps);
        let initialState = [
            {}
        ];
        const newState = appReducer(initialState, listAppsAction);
        console.log(newState);
        /*   expect(newState.length).to.equal(2);
         expect(newState[0].appName).to.equal("oldApp");
         expect(newState[1].Name).to.equal("TestApp"); */

    });

});