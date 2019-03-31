// import firebase from 'firebase';
// import { BehaviorSubject } from 'rxjs';
// import $ from 'jquery';

// export class ServicesPush {

//   currentMessage = new BehaviorSubject(null);

//   AtivarMessagingService() {
//     const userId = 'user001';
//     this.requestPermission(userId);
//     this.receiveMessage();
//     let message = this.currentMessage;
//     return message;
//   }

//   requestPermission() {
//     localStorage.removeItem('token_push');
//     this.angularFireMessaging.requestToken.subscribe(
//       (token) => {
//         console.log(token);
//         localStorage.setItem('token_push', token);
//       },
//       (err) => {
//         console.error('Não é possível obter permissão para notificar.', err);
//         localStorage.setItem('token_push', 'USER_NOT_PERMIT');
//       }
//     );
//   }

//   /**
//    * hook method when new notification received in foreground
//    */
//   receiveMessage() {
//     this.angularFireMessaging.messages.subscribe(
//       (payload) => {
//         console.log("nova mensagem recebida. ", payload);
//         this.currentMessage.next(payload);
//         this.abrirNotificao(payload.notification.title, payload.notification.body, payload.notification.click_action);
//       })
//   }

//   abrirNotificao(titulo, texto, link = null) {
//     let htmlAparecer;
//     if (link == null) {
//       htmlAparecer = '<div class="notificacao animated fadeInDown"><i class="fa fa-bell-o fa-4x" aria-hidden="true"></i><p class="titulo">' + titulo + '</p><span class="body">' + texto + '</span></div>';
//     } else {
//       htmlAparecer = '<a href='+link+'><div class="notificacao animated fadeInDown"><i class="fa fa-bell-o fa-4x" aria-hidden="true"></i><p class="titulo">' + titulo + '</p><span class="body">' + texto + '</span></div></a>';
//     }
//     $('body').append(htmlAparecer);
//     setTimeout(() => {
//       $('.notificacao').addClass('animated fadeOutUp');
//       setTimeout(() => {
//         $('.notificacao').remove();
//       }, 1000);
//     }, 5000);
//   }
  
// }