<?php
require '../main.php';

$api = new API("DELETE", "json", "UTF-8");

// Gets
$get = $api->gets(["token"]);
$api->getsObrigatorias($get, "*");
// Bodys
$body = $api->bodys(["id"]);
$api->bodysObrigatorias($body, "*");
// Token
$api->verificarToken($get['token']);

// Query MYSQL
$query = mysqli_query($connect, "DELETE FROM `pacient_data` WHERE 'id'='".$body['id']."' ");
if ($query) {
    $api->resposta("OK", "Dados deletados do banco de dados!", $query);
} else {
  $api->resposta("ERRO", "Não conseguimos deletar no banco de dados!");
}
?>