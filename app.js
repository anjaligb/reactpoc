import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import routes from './routes';
import {loadApps} from './redux/appActions';
import configureStore from './redux/configureStore';

import {Provider} from 'react-redux';



import App from './containers/App.js';
import Home from './containers/Home.js';
import MyApps from './containers/MyApps.js';
//import Description from './containers/description/Description.js';
import Search from './containers/Search.js';
import Category from './containers/Category.js';

import listAllApps from './redux/appActions';
/*
ReactDOM.render(
  (<Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/my_apps" component={MyApps} />
      <Route path="/app/:appId" component={Description} />
      <Route path="/search/:query" component={Search} />
      <Route path="/category/:cat" component={Category} />
      <Route path="/todo" component={Todo} />
    </Route>
  </Router>), document.getElementById('app')
);

*/

const store = configureStore();

store.dispatch(loadApps());
//let allAppsSTore = createStore(appReducer);

ReactDOM.render(

    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
