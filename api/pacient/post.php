<?php
require '../main.php';

$api = new API("POST", "json", "UTF-8");

// Gets
$get = $api->gets(["token"]);
$api->getsObrigatorias($get, "*");
// Bodys
$body = $api->bodys(["name", "birth_date", "taxpayer_registry", "registration_completed", "gender", "mothers_name", "image_url", "registration_completed_at"]);
$api->bodysObrigatorias($body, "*");
// Token
$api->verificarToken($get['token']);

// Variaveis
$dataHora = date('d/m/Y - H:i:s', time());

// Query MYSQL
$query = mysqli_query($connect, "INSERT INTO `pacient`(`name`, `birth_date`, `taxpayer_registry`, `registration_completed`, `gender`, `mothers_name`, `image_url`, `registration_completed_at`, `created_at`, `updated_at`) VALUES ('".$body['name']."','".$body['birth_date']."','".$body['taxpayer_registry']."','".$body['registration_completed']."','".$body['gender']."','".$body['mothers_name']."','".$body['image_url']."','".$body['registration_completed_at']."','".$dataHora."','".$dataHora."')");
if ($query) {
    $api->resposta("OK", "Criado e salvo no banco de dados !", $query);
} else {
  $api->resposta("ERRO", "Não conseguimos salvar no banco de dados, talvez esse e-mail ja esta cadastrado!");
}
?>