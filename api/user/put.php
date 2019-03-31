<?php
require '../main.php';

$api = new API("PUT", "json", "UTF-8");

// Gets
$get = $api->gets(["token"]);
$api->getsObrigatorias($get, "*");
// Bodys
$body = $api->bodys(["user_token", "name", "email", "password", "image_url", "permission"]);
$api->bodysObrigatorias($body, "*");
// Token
$api->verificarToken($get['token']);

// Variaveis
$dataHora = date('d/m/Y - H:i:s', time());
$password = hash('sha512', $body['senha']);

// Query MYSQL
$query = mysqli_query($connect, "UPDATE `company_user` SET `name`='".$body['name']."',`email`='".$body['email']."',`password`='".$password."',`image_url`='".$body['image_url']."',`permission`='".$body['permission']."',`updated_at`='".$dataHora."' WHERE `user_token`='".$body['user_token']."' ");
if ($query) {
    $api->resposta("OK", "Dados modificados e salvos no banco de dados!", $query);
} else {
  $api->resposta("ERRO", "Não conseguimos salvar no banco de dados!");
}
?>