import React from 'react';

import {Route, Switch } from 'react-router-dom';

import LocationsPage from './LocationsPage';
import CategoriesPage from './CategoriesPage';
import PageNotFound from '../components/404/PageNotFound';

const Routes = () => {
    return (
        <Switch>
            <Route path='/' component={LocationsPage} exact={true}></Route>
            <Route path='/cat' component={CategoriesPage}></Route>
            <Route component={PageNotFound}></Route>
        </Switch>
    )
}
 
export default Routes;