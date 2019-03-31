import { Component } from 'react';
import html from './logado.jsx';
import $ from 'jquery';

class PageLogado extends Component {

  constructor(props) {
    super(props);
    this.state = {
      json: null,
      erro: null,
      isLoaded: false
    };
  }

  componentDidMount() {
    $('body').css('background-color', '#f1f1f1');
    this.setState({
      json: null,
      erro: null,
      isLoaded: true
    });
  }

  render() {
    return html(this.state, this.props);
  }
}
export default PageLogado;