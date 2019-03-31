import React from 'react';
import { browserHistory } from 'react-router'
import * as ServicesPush from '../../app/services/push/register';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;
window.fecharModalIMG = fecharModalIMG;
require('bootstrap');
require('../../../node_modules/datatables.net/js/jquery.dataTables');
require('../../../node_modules/datatables.net-bs/js/dataTables.bootstrap');
require('../../../node_modules/datatables.net-responsive/js/dataTables.responsive');

export function sairDaConta() {
    localStorage.removeItem("token_login");
    localStorage.removeItem("userData");
    browserHistory.push('/');
}

export function request(Type, Url, Data, Headers = null) {
    return new Promise((resolve, reject) => {
        let body = null;
        if (Type !== "GET") {
            body = JSON.stringify(Data);
        }
        fetch(Url, {
            method: Type,
            body,
            cache: 'no-cache',
            headers: Headers
        }).then(function (res) {
            if (res.ok === true) {
                resolve(res.json());
            } else
                if (res.status === 401) {
                    resolve(res.json());
                } else
                    if (res.statusText != null) {
                        reject(res.status + " " + res.statusText);
                    } else {
                        reject(res.status);
                    }
        }).catch(function (error) {
            reject(error);
            return;
        });

    });
}

export function isJson(item) {
    item = typeof item !== "string"
        ? JSON.stringify(item)
        : item;

    try {
        item = JSON.parse(item);
    } catch (e) {
        return false;
    }

    if (typeof item === "object" && item !== null) {
        return true;
    }

    return false;
}

export function dataFormatada(data, calDias = 0) {
    var dataS = new Date();
    data = new Date(data);
    data = dataS.setDate(data.getDate() + (calDias));
    data = dataS.toLocaleDateString();
    data = data.split('/').reverse().join('-');
    return data;
}

export function AtivarMessagingService() {
    ServicesPush.requestPermission().then((r) => {
        ServicesPush.receiveMessage();
    }).catch(error => {
        console.log(error);
    });
}

export function AtivarSelect2() {
    $(document).ready(function () {
        $(".select2").select2({
            selected: true,
            width: "100%"
        });
    });
}

export function ValSelect2(v) {
    $(document).ready(function () {
        $('.select2').select2().select2('val', v)
    });
}

export function AtivarPopover() {
    $(document).ready(function () {
        $('[data-toggle="popover"]').popover();
    });
}

export function ErroDataTable(erro) {
    $(document).ready(function () {
        $('#Tabela').html(erro);
    });
}

export function abrirModalIMG(fotoId, fotoName, fotoUrl) {
    fecharModalIMG().then(() => {
        $(document).ready(function () {
            let html = '<div id="ModalFotoID' + fotoId + '" class="modal fade ModalFoto' + fotoId + '" tabindex="-1" role="dialog" aria-labelledby="ModalFoto' + fotoId + '"> <div class="modal-dialog modal-lg" role="document"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick="fecharModalIMG(' + fotoId + ')"><span aria-hidden="true">×</span></button> <h4 class="modal-title" id="ModalFoto' + fotoId + '">' + fotoName + '</h4> </div> <div class="modal-body"> <img src="' + fotoUrl + '" width="100%" height="100%"> </div> </div> </div></div>';
            $('body').append(html);
            $('.ModalFoto' + fotoId).modal('show');
        });
    });
}

export async function fecharModalIMG() {
    $(document).ready(function () {
        $('.modal').modal('hide');
        $('.modal').remove();
        $('.modal-backdrop').remove();
        return;
    });
}

export function AtivarDataTable() {
    $(document).ready(function () {
        $('.table').css('opacity', '0');
        if ($('#Tabela').hasClass('dataTable')) { } else {
            $('#Tabela').DataTable({
                responsive: false,
                order: [],
                language: { 'url': '/assets/fw/datatables/languagePT_BR.json' },
                bLengthChange: false
            });
            $('#Tabela').show();
            setInterval(() => {
                $('.table').css('opacity', '0');
                $('#Tabela_filter').css({ 'text-align': 'center' });
                $('#Tabela_wrapper div.col-sm-6').addClass('center');
                $('#Tabela_wrapper div.center').removeClass('col-sm-6');
                $('#Tabela_filter input').attr("placeholder", 'Buscar...');
                $('.table').css('opacity', '1');
                let icon = $('#Tabela_filter label .icon-pesquisa').html();
                if (!icon) {
                    $('#Tabela_filter label').append('<div class="icon-pesquisa"><i class="fa fa-search" aria-hidden="true"></i></div>');
                }
            }, 1);
        }
    });
}

export function openPopoverRemoveConfirm(elementName, buttonNameOK, funClick) {
    $(document).ready(function () {
        $(elementName).popover({
            placement: 'bottom',
            html: 'true',
            title: 'Tem certeza ?',
            content: '<div class="center"><a id="' + buttonNameOK + '" class="btn btn-success btn-circle"><i class="fa fa-check" aria-hidden="true"></i></a>' +
                '<a class="btn btn-danger btn-circle" onclick="$(&quot;' + elementName + '&quot;).popover(&quot;hide&quot;);"><i class="fa fa-times" aria-hidden="true"></i></a></div>'
        });
        $(elementName).popover('show');
    });

    $(document).ready(function () {
        $('#' + buttonNameOK).click(funClick);
    });
}

export function abrirNotificao(titulo, texto, link = null, icon = '<i class="fa fa-bell-o fa-3x" aria-hidden="true"></i>', time = 5000) {
    $(document).ready(function () {
        let notificacaoId = Math.floor((Math.random() * 9999) + 1);
        let htmlAparecer;
        if (link == null) {
            htmlAparecer = '<div id="notificacaoId'+notificacaoId+'" class="notificacao animated fadeInDown"><div class="col-md-1 icon">' + icon + '</div><div class="col-md-11 corpo"><p class="titulo">' + titulo + '</p><span class="texto">' + texto + '</span></div></div>';
        } else {
            htmlAparecer = '<a href=' + link + '><div id="notificacaoId'+notificacaoId+'" class="notificacao animated fadeInDown"><div class="col-md-1 icon">' + icon + '</div><div class="col-md-11 corpo"><p class="titulo">' + titulo + '</p><span class="texto">' + texto + '</span></div></div></a>';
        }
        $('body').append(htmlAparecer);
         setTimeout(() => {
            $('#notificacaoId'+notificacaoId+'').addClass('animated fadeOutUp');
            setTimeout(() => {
                $('#notificacaoId'+notificacaoId+'').remove();
            }, 1000);
        }, time);
    });
}

export function changeRegrasDisabled() {
    $(document).ready(function () {
        $("[name='regra']").change(function () {
            let r = $(this).val();
            if (r === 'ZERO') {
                $("[name='quantiRegra']").val(0);
                $("[name='quantiRegra']").attr('disabled', 'disabled');
            } else {
                $("[name='quantiRegra']").removeAttr('disabled');
            }
        });
    });
}

export function SentencaTraduz(props) {
    const s = props.s;
    const sV = props.sV;
    if (s === 'LESS_THAN') {
        return <span>Menor que {sV}</span>;
    } else
        if (s === 'EXACTLY') {
            return <span>Exatos {sV}</span>;
        } else
            if (s === 'ZERO') {
                return <span>Exatos zero</span>;
            } else {
                return <span>ERRO</span>;
            }
}

export function titleize(text) {
    var words = text.toLowerCase().split(" ");
    for (var a = 0; a < words.length; a++) {
        var w = words[a];
        words[a] = w[0].toUpperCase() + w.slice(1);
    }
    return words.join(" ");
}

export function RemoveButtonList(props) {
    const classID = props.classID;
    const fun = props.fun;

    return (<div class="opc vermelho" onClick={abrirModalRemoveConfirm.bind(null, classID, fun)}><i class="fa fa-trash" aria-hidden="true"></i></div>);

}

export function abrirModalRemoveConfirm(classID, fun) {
    fecharModalIMG().then(() => {
        $(document).ready(function () {
            let html = '<div class="modal-remove-confirm modal fade" id="' + classID + '" tabindex="-1" role="dialog" aria-labelledby="' + classID + '"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><i class="fa fa-exclamation-circle fa-5x" aria-hidden="true"></i><h3 class="modal-title" id="' + classID + '">Remover ?</h3></div><div class="modal-footer"><button type="button" class="btn btn-default btn-lg" data-dismiss="modal">Cancelar</button><button type="button" class="btn btn-roxo btn-lg" id="Confirmar' + classID + '" data-dismiss="modal">Confirmar</button></div></div></div></div>';
            $('body').append(html);
            $('#' + classID).modal('show');
            $('#Confirmar' + classID).on("click", () =>{
                abrirNotificao('Carregando...', 'Espere um momento nossos servidores estão processando.', null, '<i class="fa fa-spinner fa-pulse fa-4x fa-fw" aria-hidden="true"></i>')
                setTimeout(fun, 1);
            });
        });
    });
}