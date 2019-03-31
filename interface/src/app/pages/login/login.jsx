import React, { Component } from 'react';
import LayoutError from '../../layout/error/error';
import LayoutCarregando from '../../layout/carregando/carregando';

class PageLoginLayout extends Component {
    render() {
        return (
            <div className="bg">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="resposta">
                            {this.props.resposta}
                        </div>

                        <form onSubmit={this.props.This.formSubmit} id="form-login" className="form-signin modal-login">
                            <div className="responsive-size">
                                <img src="/assets/img/logotipo_branca_mobile.png" width="200" className="center-img" alt="Logotipo do aplicativo." />
                                <br />
                                <input id="email" name="email" type="email" className="form-control form-login" placeholder="E-mail" required autoFocus />
                                <input id="senha" name="senha" type="password" className="form-control form-login" placeholder="Senha" required />
                                <div className="reslogin"></div>
                                <button type="submit" className="btn btn-lg btn-login btn-block">Entrar</button>
                            </div>
                        </form>

                    </div>
                </div></div>
        )
    }
}

export default function html(This, state) {

    if (state.erro != null) {
        return (<PageLoginLayout This={This} resposta={<LayoutError erro={state.erro} />}></PageLoginLayout>);
    } else if (!state.isLoaded) {
        return (<PageLoginLayout This={This} resposta={<LayoutCarregando />}></PageLoginLayout>);
    } else {

        // API carregada com sucesso pagina oficial
        return (<PageLoginLayout This={This}></PageLoginLayout>);
    }
}