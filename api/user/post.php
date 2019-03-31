<?php
require '../main.php';

$api = new API("POST", "json", "UTF-8");

// Gets
$get = $api->gets(["token"]);
$api->getsObrigatorias($get, "*");
// Bodys
$body = $api->bodys(["name", "email", "password", "image_url", "permission", "notification_token"]);
$api->bodysObrigatorias($body, "*");
// Token
$api->verificarToken($get['token']);

// Variaveis
$dataHora = date('d/m/Y - H:i:s', time());
$userToken = hash('sha512', $body['email']);
$password = hash('sha512', $body['senha']);

// Query MYSQL
$query = mysqli_query($connect, "INSERT INTO `company_user`(`user_token`, `name`, `email`, `password`, `image_url`, `permission`, `notification_token`, `created_at`, `updated_at`) VALUES ('".$userToken."','".$body['name']."','".$body['email']."','".$password."','".$body['image_url']."','".$body['permission']."','".$body['notification_token']."','".$dataHora."','".$dataHora."')");
if ($query) {
    $api->resposta("OK", "Usuario criado e salvo no banco de dados !", $query);
} else {
  $api->resposta("ERRO", "Não conseguimos salvar no banco de dados, talvez esse e-mail ja esta cadastrado!");
}
?>