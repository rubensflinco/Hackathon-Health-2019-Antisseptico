import React, { Component } from 'react';

class LayoutError extends Component {

  render() {
    return (
      <div className="page-error animated fadeIn fast">
        <center>
          <i className="animated infinite tada fa fa-times fa-3x"></i>
          <h3>{this.props.erro}</h3>
        </center>
      </div>
    )
  }
}
export default LayoutError;

