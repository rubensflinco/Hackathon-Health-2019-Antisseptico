import React from 'react';
import LayoutError from '../../../layout/error/error';
import LayoutCarregando from '../../../layout/carregando/carregando';

export default function html(This, state) {

    if (state.erro != null) {
        return (<LayoutError erro={state.erro}></LayoutError>);
    } else if (!state.isLoaded) {
        return (<LayoutCarregando></LayoutCarregando>);
    } else {

        // API carregada com sucesso pagina oficial
        return (
            <div className="animated fadeIn fast">
                <div>
                    <center><h1>RU, tudo ótimo?</h1></center>
                </div>

                <br/><br/>

            </div>
        )

    }
}