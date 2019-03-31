import React, { Component } from 'react';
import { Link } from 'react-router';
import * as Fun from '../../../../assets/js/fun';
import $ from 'jquery';

class LayoutMenuCompleto extends Component {

  openNav() {
    document.getElementById("menu-mySidenav").style.width = "250px";
    $('.menu-sidenav').addClass("menu-sidenav-open");
    $('#menu-mySidenav-backdrop').addClass("menu-backdrop");
  }

  closeClicBlack() {
    $("#menu-mySidenav-backdrop,.menu-sidenav a,.menu-sidenav .closebtn").on("click", function () {
      document.getElementById("menu-mySidenav").style.width = "0";
      $('.menu-sidenav').removeClass("menu-sidenav-open");
      $('#menu-mySidenav-backdrop').removeClass("menu-backdrop");
    });
  }

  componentDidMount() {
    this.closeClicBlack();
  }

  render() {
    return (
      <div>
        <div id="menu-mySidenav" className="menu-sidenav">
        <img className="menu-foto" src="/assets/img/topoMenu.png" alt="Logotipo com o wallpaper do aplicativo." />
          <Link to="/logado">
            <i className="fa fa-home " aria-hidden="true"></i><span>Home</span>
          </Link>

          <Link to="/logado/pacientes">
            <i className="fa fa-users " aria-hidden="true"></i><span>Pacientes</span>
          </Link>

          <a href="/" onClick={Fun.sairDaConta}>
            <i className="fa fa-power-off " aria-hidden="true"></i><span>Sair</span>
          </a>

          <button className="closebtn">
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
          </button>
        </div >
        <div id="menu-mySidenav-backdrop" />
      </div>
    )
  }
}
export default LayoutMenuCompleto;

