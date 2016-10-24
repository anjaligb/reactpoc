import "whatwg-fetch"

class AppsApi {



    static getAllApps() {

        /*    fetch('../../json/all.json')
         // fetch('http://pppdc9prdcdm.corp.intuit.net:9000/api/v2/categories/accounts-payable-management/appcards')

         .then(function(response) {
         return response.json();

         }).then(function(json) {

         console.log("fetch data returned", json.MyAppsList);
         dispatch(listAllApps(json));

         }.bind(this)).catch(function(ex) {
         console.log('parsing failed', ex)
         });
         }*/

        return new Promise((resolve, reject) => {
            fetch("../../json/all.json")

            .then((response) => {
                return response.json();
            }).then(response => {
                resolve(response);
            }).catch(response => {
                reject(response);
            });
        });


    }
}


export default AppsApi;