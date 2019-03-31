import React from 'react';
import LayoutError from '../../layout/error/error';
import LayoutCarregando from '../../layout/carregando/carregando';
import LayoutMenuReduzido from '../../layout/menu/reduzido/reduzido';

export default function html(state, props) {

    if (state.erro != null) {
        return (<LayoutError erro={state.erro}></LayoutError>);
    } else if (!state.isLoaded) {
        return (<LayoutCarregando></LayoutCarregando>);
    } else {

        // API carregada com sucesso pagina oficial
        return (
            <div>
                <LayoutMenuReduzido props={props} />
                <div className="espaco-navbar-top" />

                <div className="container">
                    {props.children}
                </div>
            </div>
        )

    }
}