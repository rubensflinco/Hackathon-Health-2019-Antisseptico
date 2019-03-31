<?php
require '../main.php';

$api = new API("GET", "json", "UTF-8");

// Gets
$get = $api->gets(["token", "limit", "id", "user_token", "email"]);
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

if ($get['user_token']) {
    $where = "WHERE `user_token` = '".$get['user_token']."' ";
}

if ($get['email']) {
    $where = "WHERE `email` = '".$get['email']."' ";
}

// Query MYSQL
$query = mysqli_query($connect, "SELECT * FROM `company_user` ".$where." ORDER BY `id` DESC  ".$limit." ");
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