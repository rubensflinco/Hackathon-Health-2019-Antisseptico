import React from 'react';
import LayoutError from '../../../../layout/error/error';
import LayoutCarregando from '../../../../layout/carregando/carregando';

export default function html(This, state) {

    if (state.erro != null) {
        return (<LayoutError erro={state.erro}></LayoutError>);
    } else if (!state.isLoaded) {
        return (<LayoutCarregando></LayoutCarregando>);
    } else {

        // API carregada com sucesso pagina oficial
        return (
            <div className="animated fadeIn fast">


                <div className="col-md-8 col-md-offset-2">
                    <div className="detalhes-info-titulo">
                        <span className="corta animated bounceInLeft">Rubens Flinco</span>
                        <span className="pull-right animated bounceInRight">17/06/1999</span>
                    </div>

                    <div className="detalhes-info-corpo animated fadeInDown fast">
                        <b>Regra: </b>
                        <span>BBBB</span>
                        <br />
                        <b>Sentença da regra:</b>
                        <span>AAAA</span>

                        <hr />

                    </div>
                </div>


            </div>
        )

    }
}