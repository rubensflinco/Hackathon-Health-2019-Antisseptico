import React, { Component } from 'react';
import { Link } from 'react-router';

class LayoutMenuLogoReturn extends Component {

  verificarRota(p) {
    if (p === "/logado") {
      return false;
    } else {
      return true;
    }
  }

  render() {
    let props = this.props.props.props;
    let pathName = props.location.pathname;
    let pageName = props.routes[1].name;

    if (this.verificarRota(pathName)) {

      return (
        <div>

          {/* Navbar logo quando está no PC */}
          <div className="navbar-header" remove-mobile="">
            <Link to="/logado">
              <img src="/assets/img/logotipo_branca_pc.png" className="logo-pc img-responsive" alt="Logo do aplicativo." remove-mobile="" />
            </Link>
          </div>

          {/* Navbar logo quando está no Mobile */}
          <div className="navbar-header" remove-pc="">
            <button className="navbar-toggle navbar-toggle-left" onClick={props.router.goBack.bind(null)}>
              <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
            </button>
            <h3 className="navbar-pageName">{pageName}</h3>
          </div>

        </div>
      )

    } else {

      return (
        <div className="navbar-header">
          <a href="/">
            <img src="/assets/img/logotipo_branca_mobile.png" className="logo-mobile img-responsive center-img" alt="Logo do aplicativo." remove-pc="" />
            <img src="/assets/img/logotipo_branca_pc.png" className="logo-pc img-responsive" alt="Logo do aplicativo." remove-mobile="" />
          </a>
        </div>
      )

    }
  }
}
export default LayoutMenuLogoReturn;

