import React, { Component } from 'react';

class LayoutCarregando extends Component {

  render() {
    return (
      <div className="page-carregando animated fadeIn fast">
        <center>
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
          <h3>Carregando...</h3>
        </center>
      </div>
    )
  }
}
export default LayoutCarregando;

