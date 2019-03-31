import { Component } from 'react';
import html from './add.jsx';
import { ServicesUserLogin } from '../../../../services/user/login.js';

class PageLogadoPacientAdd extends Component {
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
  }

  render() {
    return html(this, this.state);
  }
}
export default PageLogadoPacientAdd;

