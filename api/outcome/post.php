<?php
require '../main.php';

$api = new API("POST", "json", "UTF-8");

// Gets
$get = $api->gets(["token"]);
$api->getsObrigatorias($get, "*");
// Bodys
$body = $api->bodys(["type", "description", "url", "pacient_id", "user_id"]);
$api->bodysObrigatorias($body, "*");
// Token
$api->verificarToken($get['token']);

// Variaveis
$dataHora = date('d/m/Y - H:i:s', time());

// Query MYSQL
$query = mysqli_query($connect, "INSERT INTO `outcome`(`type`, `description`, `url`, `pacient_id`, `user_id`, `created_at`, `updated_at`) VALUES ('".$body['type']."','".$body['description']."','".$body['url']."','".$body['pacient_id']."','".$body['user_id']."','".$dataHora."','".$dataHora."')");
if ($query) {
    $api->resposta("OK", "Criado e salvo no banco de dados !", $query);
} else {
  $api->resposta("ERRO", "Não conseguimos salvar no banco de dados, talvez esse e-mail ja esta cadastrado!");
}
?>