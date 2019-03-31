import { request } from '../../../assets/js/fun';
const config = require('../../../config.js');

export class ServicesUser {

  getUser(token) {
    return request("GET", config.react.api.baseUrl + '/api/user/get.php?token='+config.react.api.token+'&user_token=' + token, {}, {
      'Content-Type': 'application/json'
  });
  }

  loginUser(User, Pass, Push) {
    return request("POST", config.react.api.baseUrl + '/api/user/login/post.php?token='+config.react.api.token, {
      email: User,
      password: Pass,
      notification_token: Push
    }, {
      'Content-Type': 'application/json'
  });
  }

}