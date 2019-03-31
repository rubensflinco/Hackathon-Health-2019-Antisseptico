<?php
require '../../main.php';

$api = new API("POST", "json", "UTF-8");

// Gets
$get = $api->gets(["token"]);
$api->getsObrigatorias($get, ["token"]);
// Bodys
$body = $api->bodys(["email", "senha", "notification_token"]);
$api->bodysObrigatorias($body, ["email", "senha"]);
// Token
$api->verificarToken($get['token']);

// Variaveis
$dataHora = date('d/m/Y - H:i:s', time());
$password = hash('sha512', $body['senha']);
$email = $body['email'];

// Query MYSQL
$query = mysqli_fetch_array(mysqli_query($connect, "SELECT * FROM `company_user` WHERE `email` = '" . $email . "' "));
if ($query['id']) {
  if ($query['password'] == $password) {
    mysqli_query($connect, "UPDATE `company_user` SET `notification_token`='".$body['notification_token']."',`updated_at`='".$dataHora."' WHERE `id`='".$query['id']."'");
    $api->resposta("OK", "Pode logar o usuario", $query['user_token']);
  } else {
    $api->resposta("ERRO", "Senha, e-mail incorreto.");
  }
} else {
  $api->resposta("ERRO", "Senha, e-mail incorreto.");
}
 