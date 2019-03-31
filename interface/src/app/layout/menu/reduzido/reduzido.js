import React, { Component } from 'react';
import { Link } from 'react-router';
import * as Fun from '../../../../assets/js/fun';
import LayoutMenuCompleto from '../completo/completo';
import LayoutMenuLogoReturn from '../logo-return/logo-return';
class LayoutMenuReduzido extends Component {

  render() {
    return (
      <div>

        <LayoutMenuCompleto/>

        <nav className="navbar navbar-gradient navbar-top navbar-fixed-top">
          <div className="container-fluid">

          <LayoutMenuLogoReturn props={this.props}/>

            <div id="navbar" className="navbar-collapse">
              <ul className="nav navbar-right center">
                <li remove-pc="">
                  <Link onClick={LayoutMenuCompleto.prototype.openNav}>
                    <i className="button fa fa-bars fa-2x fa-mobile-3x" aria-hidden="true"></i>
                    <p>Menu</p>
                  </Link>
                </li>
                <li>
                  <Link to="/logado">
                    <i className="button fa fa-home fa-2x fa-mobile-3x" aria-hidden="true"></i>
                    <p>Home</p>
                  </Link>
                </li>
                <li>
                  <Link to="/logado/pacientes">
                    <i className="button fa fa-users fa-2x fa-mobile-3x" aria-hidden="true"></i>
                    <p>Pacientes</p>
                  </Link>
                </li>
                <li className="sair" remove-mobile="">
                  <a href="/" onClick={Fun.sairDaConta}>
                    <i className="fa fa-power-off fa-2x fa-mobile-3x" aria-hidden="true"></i>
                    <p>Sair</p>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </nav >
      </div>
    )
  }
}
export default LayoutMenuReduzido;

