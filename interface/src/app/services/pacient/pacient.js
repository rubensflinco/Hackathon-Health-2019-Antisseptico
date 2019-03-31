import { request } from '../../../assets/js/fun';
const config = require('../../../config.js');

export class ServicesPacient {

  getPacient(token) {
    return request("GET", config.react.api.baseUrl + '/api/pacient/get.php?token='+config.react.api.token+'&user_token=' + token, {}, {
      'Content-Type': 'application/json'
  });
  }

}