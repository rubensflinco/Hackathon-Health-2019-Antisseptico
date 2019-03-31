import { Component } from 'react';
import html from './pacient.jsx';
import * as Fun from '../../../../assets/js/fun';
import { ServicesUserLogin } from '../../../services/user/login.js';

class PageLogadoPacient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      json: null,
      erro: null,
      isLoaded: false
    };
  }

  async componentDidMount() {
    const getUser = await ServicesUserLogin.prototype.get();

    await this.setState({
      isLoaded: true,
      getUser
    });
    Fun.AtivarDataTable();
  }

  render() {
    return html(this, this.state);
  }
}
export default PageLogadoPacient;

