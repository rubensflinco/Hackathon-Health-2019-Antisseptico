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
import PageLogadoPacient from './app/pages/logado/pacient/pacient';
import PageLogadoPacientDetails from './app/pages/logado/pacient/details/details';
import PageLogadoPacientAdd from './app/pages/logado/pacient/add/add';
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
            <Route path='pacientes' name="Lista de pacientes" component={PageLogadoPacient}></Route>
            <Route path='pacientes/add' name="Adicionar pacientes" component={PageLogadoPacientAdd}></Route>
            <Route path='pacientes/details' name="Detalhes do paciente" component={PageLogadoPacientDetails}></Route>
        </Route>
        <Route path='*' component={Page404} />
    </Router>
), document.getElementById('root'));

ServicesUserLogin.prototype.verificar();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
