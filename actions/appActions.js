import * as types from './actionTypes';
import appsApi from '../api/mockApps';
export function listAllApps(apps) {
    return {type: types.LIST_APPS, apps};
}


export function loadApps(){
    return function(dispatch){

        return appsApi.getAllApps().then(apps => {
            dispatch(listAllApps(apps))
        }).catch(error =>{
            throw error;
        });
     /*  fetch('../../json/all.json')
      // fetch('http://pppdc9prdcdm.corp.intuit.net:9000/api/v2/categories/accounts-payable-management/appcards')

            .then(function(response) {
                return response.json();

            }).then(function(json) {

            console.log("fetch data returned", json.MyAppsList);
          dispatch(listAllApps(json));

        }.bind(this)).catch(function(ex) {
            console.log('parsing failed', ex)
        });
*/

    }

}