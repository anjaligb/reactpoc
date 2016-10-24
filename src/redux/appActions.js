import * as types from './actionTypes';

export function listAllApps(apps) {
    return {type: types.LIST_APPS, apps};
}


export function loadApps(){
    return function(dispatch){


       //fetch('../../json/all.json')
        fetch('http://pppdc9prdcdm.corp.intuit.net:9000/api/v2/categories/accounts-payable-management/appcards')

            .then(function(response) {
                return response.json();

            }).then(function(json) {

            console.log("fetch data returned", json.MyAppsList);
            dispatch(listAllApps(json.MyAppList));

        }.bind(this)).catch(function(ex) {
            console.log('parsing failed', ex)
        });


    }

}