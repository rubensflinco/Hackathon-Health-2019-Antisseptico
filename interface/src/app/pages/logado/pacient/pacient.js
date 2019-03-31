import { Component } from 'react';
import html from './pacient.jsx';
import * as Fun from '../../../../assets/js/fun';
import { ServicesUserLogin } from '../../../services/user/login.js';
import { ServicesPacient } from '../../../services/pacient/pacient.js';

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
    await this.getPacient(this, getUser.user_token);

    await this.setState({
      getUser,
    });
    Fun.AtivarDataTable();
  }

  getPacient(This, token) {
    ServicesPacient.prototype.getPacient(token).then(function (res) {
      let getPacient = res.resposta;
      if (getPacient) {
        This.setState({
          isLoaded: true,
          getPacient
        });
      } else {
        This.setState({
          isLoaded: true,
          erro: "Banco de dados vazio !"
        });
      }
    }).catch(function (err) {
      console.log(err);
    });
  }


  render() {
    return html(this, this.state);
  }
}
export default PageLogadoPacient;

