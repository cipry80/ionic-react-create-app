import React  from 'react';
import { Switch } from 'react-router-dom';
import { withCookies } from 'react-cookie';
//import PrivateRoute from '../helpers/PrivateRoute'
import URL_REPO from './helpers/UrlRepo'

import Layout from './layout/Layout';
// pages
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import NotFound from './pages/NotFound/NotFound';

const Routes = () => (
    <Switch>
        <Layout exact path={URL_REPO.ROOT} component={Home} />
        <Layout path={URL_REPO.DASHBOARD} component={Dashboard} />
        <Layout path={URL_REPO.NOTFOUND} component={NotFound} />
    </Switch>
);

export default withCookies(Routes);
