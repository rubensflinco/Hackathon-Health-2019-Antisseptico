import * as firebase from 'firebase';
import * as Fun from '../../../assets/js/fun';

firebase.initializeApp({
  messagingSenderId: "905645807535"
});

export function requestPermission() {
  return new Promise((resolve, reject) => {

    let FBM = firebase.messaging();

    FBM.requestPermission().then(() => {

      FBM.getToken().then(token => {
        console.log(token);
        localStorage.setItem('token_push', token);
        resolve(token);
      }).catch(error => {
        localStorage.setItem('token_push', "ERROR_GET_TOKEN");
        reject(error)
      });

    }).catch(error => {
      localStorage.setItem('token_push', "USER_NOT_PERMIT");
      reject(error);
    });

  });
}

export function receiveMessage() {
  let FBM = firebase.messaging();

  FBM.onMessage(payload => {
    console.log("nova mensagem recebida. ", payload);
    Fun.abrirNotificao(payload.notification.title, payload.notification.body, payload.notification.click_action, '<img src="'+payload.notification.icon+'">');
  })

}