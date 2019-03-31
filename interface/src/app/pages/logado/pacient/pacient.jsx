import React from 'react';
import Moment from 'react-moment';
import LayoutError from '../../../layout/error/error';
import LayoutCarregando from '../../../layout/carregando/carregando';
import { RemoveButtonList } from '../../../../assets/js/fun';
import { Link } from 'react-router';

export default function html(This, state) {

    if (state.erro != null) {
        return (<div><LayoutError erro={state.erro}></LayoutError><Link className="btn-add-down" to="/logado/pacientes/add"><i className="fa fa-plus fa-2x animated rotateIn delay-5" aria-hidden="true"></i></Link></div>);
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

                        {
                        
                            state.getPacient.map(i => (
                                <tr key={i.id}>
                            <td>{i.name}</td>
                            <td>{i.gounde}</td>
                            <td remove-mobile=""><Moment format="DD/MM/YYYY">{i.createdAt}</Moment></td>
                            <td className="center">
                                <Link className="opc azul" to={"/logado/pacientes/details/" + i.id}><i className="fa fa-chevron-right" aria-hidden="true"></i></Link>
                                <RemoveButtonList></RemoveButtonList>
                            </td>
                        </tr>
                        ))
                    }


                    </tbody>
                </table>

                <Link className="btn-add-down" to="/logado/pacientes/add"><i className="fa fa-plus fa-2x animated rotateIn delay-5" aria-hidden="true"></i></Link>

            </div>
        )

    }
}