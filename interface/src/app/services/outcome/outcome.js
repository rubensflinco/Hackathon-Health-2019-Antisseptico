import { request } from '../../../assets/js/fun';
const config = require('../../../config.js');

export class ServicesOutcome {

  getOutcome(token) {
    return request("GET", config.react.api.baseUrl + '/api/outcome/get.php?token='+config.react.api.token+'&user_token=' + token, {}, {
      'Content-Type': 'application/json'
  });
  }

}