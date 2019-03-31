import { request } from '../../../assets/js/fun';
const config = require('../../../config.js');

export class ServicesUser {

  getUser(token) {
    return request("GET", config.react.api.baseUrl + '/api/user/get.php?token=123&userToken=' + token, {}, {
      'Content-Type': 'application/json'
  });
  }

  loginUser(User, Pass, Push) {
    return request("POST", config.react.api.baseUrl + '/api/user/login/post.php?token=123&', {
      email: User,
      senha: Pass,
      codigoNotificPush: Push,
      verificaGrupo: "EQUIPE"
    }, {
      'Content-Type': 'application/json'
  });
  }

}