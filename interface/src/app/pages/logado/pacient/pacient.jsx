import React from 'react';
import LayoutError from '../../../layout/error/error';
import LayoutCarregando from '../../../layout/carregando/carregando';
import { RemoveButtonList } from '../../../../assets/js/fun';
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

                <table className="table sumir" id="Tabela" data-page-length='15'>
                    <thead className="center">
                        <tr>
                            <th>Nome</th>
                            <th>Sexo</th>
                            <th remove-mobile="">Data de nascimento</th>
                            <th>Opções</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>Rubens Flinco</td>
                            <td>Masculino</td>
                            <td remove-mobile="">19/02/1999</td>
                            <td className="center">
                                <Link className="opc azul" to="/logado/pacientes/details"><i className="fa fa-chevron-right" aria-hidden="true"></i></Link>
                                <RemoveButtonList></RemoveButtonList>
                            </td>
                        </tr>
                        

                    </tbody>
                </table>

                <Link className="btn-add-down" to="/logado/pacientes/add"><i className="fa fa-plus fa-2x animated rotateIn delay-5" aria-hidden="true"></i></Link>

            </div>
        )

    }
}