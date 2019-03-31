import { Component } from 'react';
import { browserHistory } from 'react-router';
import { ServicesUser } from './user';
import * as Fun from '../../../assets/js/fun';

export class ServicesUserLogin extends Component {

    async get() {
        let resposta;
        let token = localStorage.getItem('token_login');
        await ServicesUser.prototype.getUser(token).then(function(res){
            resposta = res.resposta;
            if (res.resposta[0].user_token !== token) {
                Fun.sairDaConta();
            }
        }).catch(function(err){
            console.log(err);
            Fun.sairDaConta();
        });
        return resposta;
    }

    verificar() {
        let token = localStorage.getItem('token_login');
        ServicesUser.prototype.getUser(token).then(function(res){
            if (res.resposta[0].user_token !== token) {
                Fun.sairDaConta();
            }
        }).catch(function(err){
            console.log(err);
            Fun.sairDaConta();
        });
    }

    redirectLogin() {
        let token = localStorage.getItem('token_login');
        if (token) {
            browserHistory.push("/logado");
        }
    }

}