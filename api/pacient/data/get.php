<?php
require '../main.php';

$api = new API("GET", "json", "UTF-8");

// Gets
$get = $api->gets(["token", "limit", "id"]);
$api->getsObrigatorias($get, ["token"]);
// Token
$api->verificarToken($get['token']);

// Condições
if ((!$get['limit']) || ($get['limit'] == "all")) {
    $limit = "";
} else {
    $limit ="LIMIT ".$get['limit'];
}

$where = "";
if ($get['id']) {
    $where = "WHERE `id` = '".$get['id']."' ";
}

// Query MYSQL
$query = mysqli_query($connect, "SELECT * FROM `pacient_data` ".$where." ORDER BY `id` DESC  ".$limit." ");
if ($query){
    $array = array();
    while($res = mysqli_fetch_array($query) ){
        array_push($array, $res);
    }
    $api->resposta("OK", "Conseguimos acessar e consultar o banco de dados.", $array);
  } else {
    $api->resposta("ERRO", "Não achamos nada ou aconteceu algum erro na conexão com o banco.");
}
?>