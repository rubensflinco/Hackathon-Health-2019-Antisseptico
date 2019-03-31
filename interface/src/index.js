import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { ServicesUserLogin } from './app/services/user/login';

import './index.css';

import Page404 from './app/pages/404/404';
import PageLogin from './app/pages/login/login';
import PageLogado from './app/pages/logado/logado';
import PageLogadoHome from './app/pages/logado/home/home';
import { AtivarMessagingService } from './assets/js/fun';

import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;
require('bootstrap');


AtivarMessagingService();

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path='/' component={PageLogin} />
        <Route path='logado' component={PageLogado}>
            <IndexRoute component={PageLogadoHome} />
        </Route>
        <Route path='*' component={Page404} />
    </Router>
), document.getElementById('root'));

ServicesUserLogin.prototype.verificar();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
