import { request } from '../../../../assets/js/fun';
const config = require('../../../../config.js');

export class ServicesPacientData {

  getData(token) {
    return request("GET", config.react.api.baseUrl + '/api/pacient/data/get.php?token='+config.react.api.token+'&user_token=' + token, {}, {
      'Content-Type': 'application/json'
  });
  }

}