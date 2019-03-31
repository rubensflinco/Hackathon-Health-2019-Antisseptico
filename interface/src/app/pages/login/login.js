import { Component } from 'react';
import { browserHistory } from 'react-router'
import { ServicesUser } from '../../services/user/user';
import { ServicesUserLogin } from '../../services/user/login';
import * as Fun from '../../../assets/js/fun';
import html from './login.jsx';

class PageLogin extends Component {
    constructor(props) {
        super(props);
        this.formSubmit = this.formSubmit.bind(this, this);
        this.state = {
            json: null,
            erro: null,
            isLoaded: false
        };
    }

    componentDidMount() {
        ServicesUserLogin.prototype.redirectLogin();

        this.setState({
            isLoaded: true
        });
    }

    formSubmit(This, e) {
        e.preventDefault();
        let data = new FormData(e.target);

        let email = data.get("email");
        let senha = data.get("senha");
        let token_push = localStorage.getItem('token_push');

        This.setState({
            isLoaded: false,
            erro: null
        });

        ServicesUser.prototype.loginUser(email, senha, token_push).then(function (res) {

            if (res.status === "OK") {
                localStorage.setItem('token_login', res.resposta);
                setTimeout(() => {
                    This.setState({
                        isLoaded: true,
                        erro: null
                    });
                    browserHistory.push('/logado');
                }, 1000);
            } else {

                // erro usuario ou senha errada
                if (res.statusMotivo) {
                    This.setState({
                        erro: "" + res.statusMotivo
                    });
                    return;
                }
            }
        }).catch(function (error) {

            // A resposta deu algum outro erro inesperado
            if (Fun.isJson(error)) {
                This.setState({
                    erro: "" + error
                });
                return;
            } else
                This.setState({
                    erro: "" + error
                });
            return;

        });
    }

    render() {
        return html(this, this.state);
    }
}
export default PageLogin;