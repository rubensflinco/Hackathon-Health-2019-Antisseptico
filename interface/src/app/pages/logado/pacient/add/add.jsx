import React from 'react';
import LayoutError from '../../../../layout/error/error';
import LayoutCarregando from '../../../../layout/carregando/carregando';
import { Link } from 'react-router';

export default function html(This, state) {

    if (state.erro != null) {
        return (<LayoutError erro={state.erro}></LayoutError>);
    } else if (!state.isLoaded) {
        return (<LayoutCarregando></LayoutCarregando>);
    } else {

        // API carregada com sucesso pagina oficial
        return (
            <div className="animated fadeIn fast">


                <form>

                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <p className="center">Nome</p>
                            <input id="nome" name="nome" type="text" className="form-control" placeholder="Nome da Gôndola" />


                            <p className="center">Descrição</p>
                            <input id="descricao" name="descricao" type="text" className="form-control" placeholder="Descrição da Gôndola" />

                            <div className="center">
                                <br />
                                <div className="center-img">
                                    <Link className="btn btn-default btn-lg" to="/logado/pacientes">Cancelar</Link>&nbsp;
                                    <button type="submit" className="btn btn-roxo btn-lg">Confirmar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        )

    }
}