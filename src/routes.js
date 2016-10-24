
import React from 'react';
import { DefaultRoute, Link, Route, RouteHandler,IndexRoute } from 'react-router';

import App from './containers/App.js';
import Home from './containers/Home.js';
import  AppCardComp from './components/cards/Cards'
import MyApps from './containers/MyApps.js';
//import Description from './containers/description/Description.js';
import Search from './containers/Search.js';
import Category from './containers/Category.js';


    export default (
    <Route path="/" component={App}>
        <IndexRoute component={AppCardComp} />
        <Route path="/my_apps" component={MyApps} />

        <Route path="/search/:query" component={Search} />
        <Route path="/category/:cat" component={Category} />

    </Route>)
