import { Component } from 'react';
import html from './add.jsx';
import { browserHistory } from 'react-router';
import * as Fun from '../../../../../assets/js/fun';
import { ServicesUserLogin } from '../../../../services/user/login.js';

class PageLogadoPacientAdd extends Component {
  constructor(props) {
    super(props);
    this.formSubmit = this.formSubmit.bind(this, this);
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

  formSubmit(This , e){
    e.preventDefault();
    let data = new FormData(e.target);
    // data.get("")
    browserHistory.push('/logado/pacientes');
    setTimeout(()=>{
      Fun.abrirNotificao("Iniciar o pacote de 1 hora", This.state.getUser.name+" o paciente "+data.get("name")+" precisa de você !", "https://sepsisguardian.planetsweb.com.br", "https://i.imgur.com/WPAmkkF.png");
    }, 2000);

  }

  render() {
    return html(this, this.state);
  }
}
export default PageLogadoPacientAdd;

