<?php
require '../main.php';

$api = new API("POST", "json", "UTF-8");

// Gets
$get = $api->gets(["token"]);
$api->getsObrigatorias($get, "*");
// Bodys
$body = $api->bodys(["central_tempeture", "cardio_frequency", "resp_frequency", "total_leucocyto", "left_deviation", "systolc_arterial_pressure", "arterial_pressure", "oliguria", "creatinine", "pao2_fio2_relation", "spo2", "platelet", "lactate", "consciouness_status", "bilirubin", "user_id", "pacient_id"]);
$api->bodysObrigatorias($body, "*");
// Token
$api->verificarToken($get['token']);

// Variaveis
$dataHora = date('d/m/Y - H:i:s', time());

// Query MYSQL
$query = mysqli_query($connect, "INSERT INTO `pacient_data`(`central_tempeture`, `cardio_frequency`, `resp_frequency`, `total_leucocyto`, `left_deviation`, `systolc_arterial_pressure`, `arterial_pressure`, `oliguria`, `creatinine`, `pao2_fio2_relation`, `spo2`, `platelet`, `lactate`, `consciouness_status`, `bilirubin`, `user_id`, `pacient_id`, `created_at`, `updated_at`) VALUES ('".$body['central_tempeture']."','".$body['cardio_frequency']."','".$body['resp_frequency']."','".$body['total_leucocyto']."','".$body['left_deviation']."','".$body['systolc_arterial_pressure']."','".$body['arterial_pressure']."','".$body['oliguria']."','".$body['creatinine']."','".$body['pao2_fio2_relation']."','".$body['spo2']."','".$body['platelet']."','".$body['lactate']."','".$body['consciouness_status']."','".$body['bilirubin']."','".$body['user_id']."','".$body['pacient_id']."','".$dataHora."','".$dataHora."')");
if ($query) {
    $api->resposta("OK", "Criado e salvo no banco de dados !", $query);
} else {
  $api->resposta("ERRO", "Não conseguimos salvar no banco de dados, talvez esse e-mail ja esta cadastrado!");
}
?>