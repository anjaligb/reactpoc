import * as types from '../actions/actionTypes';
import {combineReducers} from 'redux';
/*
var defaultApps=  [
        {
            "id": "1099misce-file",
            "code": "4220c271-51cd-4815-807e-ca64761af8c3",
            "img": "/b7nigcbq4n/Submitted15/tax1099-logo-qbapps.png",
            "name": "1099 MISC e-file by Tax1099.com",
            "vendor": "TechAtlantis, Inc",
            "tagline": "E-File your year-end forms easily and quickly!",
            "rating": 5,
            "reviews": 3,
            "pro": false
        }, {
            "id": "quickbooks-online-with-oneandone",
            "code": "7f65a34b-d516-4458-9704-148a570f6665",
            "img": "/b7qbvwdfda/Submitted7/oneandone-icon-150x150.png",
            "name": "1and1 by OneSaas",
            "vendor": "OneSaas",
            "tagline": "Get 1and1 and QuickBooks Online happily teamed up",
            "rating": 2.5,
            "reviews": 0,
            "pro": false
        }, {
            "id": "3dcart-sync",
            "code": "e369eac7-2677-4182-9420-c24fa35e6830",
            "img": "/b7qau2kq5i/Submitted31/LogoName.png",
            "name": "3dcart Sync - Unify",
            "vendor": "Webgility, Inc.",
            "tagline": "Sync Your 3dcart Store with QuickBooks",
            "rating": 5,
            "reviews": 1,
            "pro": true
        }, {
            "id": "get your due shipping refunds!",
            "code": "64c016fc-7298-4c5d-b28a-779a45296a27",
            "img": "/b7n43ya7at/Submitted101/LogoName.png",
            "name": "71lbs: FedEx &amp; UPS Shipping Refunds",
            "vendor": "71 Pounds, Inc.",
            "tagline": "71lbs puts (unexpected) FedEx/UPS monies into your bottom line.",
            "rating": 5,
            "reviews": 8,
            "pro": false
        },
    {
        "id": "agiliron",
        "code": "ee83311f-6d8c-4c16-86a8-a00fd251a108",
        "pro": true,
        "img": "/b7mxm749ji/Submitted3/appcardlogo.png",
        "name": "Agiliron",
        "vendor": "Agiliron",
        "tagline": "The Complete 'Multi-Channel Commerce' Suite for QuickBooks.",
        "rating": 5,
        "reviews": 6
    },{
        "id": "all orders",
        "code": "5be15a44-3e5f-448f-a1a3-b471d1bf2ab6",
        "img": "/b7qphv7787/Submitted10/LogoName.png",
        "name": "All Orders",
        "vendor": "NumberCruncher",
        "tagline": "Advanced Inventory and Order Management Software",
        "rating": 2,
        "reviews": 0
    },{
        "id": "app-b7qfm6r9fn",
        "code": "bb575a3e-4a7b-4329-ae81-57c7bd53c055",
        "img": "/b7qfm6r9fn/Submitted9/LogoName.png",
        "name": "Amazon by Cloud Cart Connector",
        "vendor": "JMA Web Technologies",
        "tagline": "Sync Inventory, Orders, Track Fees and Gross Profits",
        "rating": 5,
        "reviews": 13
    },{
        "id": "amazon-quickbooks-online-integration",
        "code": "4882cad0-9046-4876-946b-44d7c9540e18",
        "img": "/b7q9cn49r9/Submitted12/LogoName.png",
        "name": "Amazon Integration by Pipemonk",
        "vendor": "ZapStitch Technologies Inc",
        "tagline": "Connect your Amazon store with QuickBooks Online",
        "rating": 5,
        "reviews": 3
    },{
        "id": "amazon-sync",
        "code": "95e06469-8b7c-4432-a4e1-bd0156929a0f",
        "img": "/b7p7hd5iie/Submitted16/LogoName.png",
        "name": "Amazon Sync - Unify",
        "vendor": "Webgility, Inc.",
        "tagline": "Sync Your Amazon Store with QuickBooks",
        "rating": 4.5,
        "reviews": 9
    }];
*/
/*
export default function appReducer(state = defaultApps, action) {
    switch (action.type) {
        case types.LIST_APPS:
           return action.apps;
            return state;

          default:
            return state;
    }
}
*/

  export  function appReducer(state = [], action) {
    console.log("BEFORE setting default: appreducer",action.apps);
    //action.apps = defaultApps;
   // console.log("action apps inside appreducer",action.apps);
    switch (action.type) {
        case types.LIST_APPS:
            console.log("LIST_APPs reducer called")
            return action.apps;
        break;
        case types.LOAD_APPS:
            console.log("LOAD APPS reducer called")
             return action.apps;
        break;
        default:
            return state;
    }
}
const rootReducer = combineReducers({
    apps:appReducer
});


export default rootReducer;