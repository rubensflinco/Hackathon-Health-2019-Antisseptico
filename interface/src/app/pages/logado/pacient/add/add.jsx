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

                            <div className="detalhes-info-titulo text-center">
                                <span className="animated bounceInLeft">Dados de identificação</span>
                            </div>

                            <br />

                            <p className="center">Nome</p>
                            <input id="nome" name="nome" type="text" className="form-control" placeholder="Nome do paciente" />

                            <p className="center">Data de nascimento</p>
                            <input id="dataNascimento" name="dataNascimento" type="date" className="form-control" placeholder="Data de nascimento" />

                            <p className="center">Gênero</p>
                            <select id="genero" name="genero" className="form-control" required>
                                <option value="masculino"> Masculino </option>
                                <option value="feminino"> Feminino </option>
                                <option value="outros"> Outros </option>
                            </select>

                            <br /><br />

                            <div className="detalhes-info-titulo text-center">
                                <span className="animated bounceInLeft">Dados clínicos</span>
                            </div>

                            <br />

                            <div class="row">
                                <div class="col-md-6 center">
                                    <p>Temperatura</p>
                                    <input id="central_tempeture" name="central_tempeture" type="number" className="form-control" placeholder="Temperatura" />

                                    <p>Frequência cardíaca</p>
                                    <input id="cardio_frequency" name="cardio_frequency" type="number" className="form-control" placeholder="Frequência cardíaca" />

                                    <p>Frequência respiratoria</p>
                                    <input id="resp_frequency" name="resp_frequency" type="number" className="form-control" placeholder="Frequência respiratoria" />

                                    <p>Leucócitos totais</p>
                                    <input id="total_leucocyto" name="total_leucocyto" type="number" className="form-control" placeholder="Leucócitos totais" />

                                    <p>Desvio a esquerda</p>
                                    <select id="left_deviation" name="left_deviation" className="form-control" required>
                                        <option value="0"> Não </option>
                                        <option value="1"> Sim </option>
                                    </select>

                                    <p>Pressão arterial sistólica</p>
                                    <input id="systolc_arterial_pressure" name="systolc_arterial_pressure" type="number" className="form-control" placeholder="Pressão arterial sistólica" />
                                    
                                    <p>Estado de consciência</p>
                                    <select id="lactate" name="lactate" className="form-control" required>
                                        <option value="0"> Não </option>
                                        <option value="1"> Sim </option>
                                    </select>
                                </div>

                                <div class="col-md-6 center">
                                    <p>Pressão arterial</p>
                                    <input id="arterial_pressure" name="arterial_pressure" type="number" className="form-control" placeholder="Pressão arterial" />

                                    <p>Oligúria</p>
                                    <input id="oliguria" name="oliguria" type="number" className="form-control" placeholder="Oligúria" />

                                    <p>Creatinina</p>
                                    <input id="creatinine" name="creatinine" type="number" className="form-control" placeholder="Creatinina" />

                                    <p>Relação PAO2 / FIO2</p>
                                    <input id="pao2_fio2_relation" name="pao2_fio2_relation" type="number" className="form-control" placeholder="Relação PAO2 / FIO2" />

                                    <p>SPO2</p>
                                    <input id="spo2" name="spo2" type="number" className="form-control" placeholder="SPO2" />

                                    <p>Plaquetas</p>
                                    <input id="platelet" name="platelet" type="number" className="form-control" placeholder="Plaquetas" />

                                    <p>Lactato</p>
                                    <input id="lactate" name="lactate" type="number" className="form-control" placeholder="Lactato" />

                                    <p>Bilirrubina</p>
                                    <input id="bilirubin" name="bilirubin" type="number" className="form-control" placeholder="Bilirrubina" />
                                </div>
                            </div>


                            <br />

                            <div className="center">
                                <br />
                                <div className="center-img">
                                    <Link className="btn btn-default btn-lg" to="/logado/pacientes">Cancelar</Link>&nbsp;
                                    <button type="submit" className="btn btn-roxo btn-lg">Confirmar</button>
                                </div>
                            </div>
                            <br /><br />
                        </div>
                    </div>
                </form>

            </div>
        )

    }
}