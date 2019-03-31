<?php
require 'mysql/connect.php';

class API
{

    public function __construct($metodo, $res, $charset, $timezone = "America/Sao_Paulo"){
        $this->header($metodo, $res, $charset);
        date_default_timezone_set($timezone);
    }

    public function bodys($Bodys){
        $obj = null;
        $eBody = json_decode(file_get_contents('php://input'));
        foreach ($Bodys as $Body) {
            $obj[$Body] = $this->noSqlInject($eBody->$Body);
        }
        return $obj;
    }

    public function gets($GETs){
        $obj = null;
        foreach ($GETs as $GET) {
            $obj[$GET] = $this->noSqlInject($_GET[$GET]);
        }
        return $obj;
    }


    public function bodysObrigatorias($params, $paramsObrigatorios){
        if ($paramsObrigatorios == "*") {

            foreach ($params as $parametro) {
                foreach($parametro as $key => $val) {
                    if (!$params[$key]) {
                        echo $this->resposta("ERRO", "Está faltando alguns parametros.");
                        exit(401);
                        return;
                    }else
                    if ($params[$key] == null) {
                        echo $this->resposta("ERRO", "Está faltando alguns parametros.");
                        exit(401);
                        return;
                    }
                }
            }

        } else {

            foreach ($paramsObrigatorios as $parametro) {
                if (!$params[$parametro]) {
                    echo $this->resposta("ERRO", "Está faltando alguns parametros.");
                    exit(401);
                    return;
                }else
                if ($params[$parametro] == null) {
                    echo $this->resposta("ERRO", "Está faltando alguns parametros.");
                    exit(401);
                    return;
                }
            }

        }
    }

    public function getsObrigatorias($params, $paramsObrigatorios){
        if ($paramsObrigatorios == "*") {

            foreach ($params as $parametro) {
                foreach($parametro as $key => $val) {
                    if (!$params[$key]) {
                        echo $this->resposta("ERRO", "Está faltando alguns parametros.");
                        exit(401);
                        return;
                    }else
                    if ($params[$key] == null) {
                        echo $this->resposta("ERRO", "Está faltando alguns parametros.");
                        exit(401);
                        return;
                    }
                }
            }

        } else {

            foreach ($paramsObrigatorios as $parametro) {
                if (!$params[$parametro]) {
                    echo $this->resposta("ERRO", "Está faltando alguns parametros.");
                    exit(401);
                    return;
                }else
                if ($params[$parametro] == null) {
                    echo $this->resposta("ERRO", "Está faltando alguns parametros.");
                    exit(401);
                    return;
                }
            }

        }
    }

    public function header($metodo, $res, $charset){
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/$res; charset=$charset");
        header("Access-Control-Allow-Credentials: true");
        header("Access-Control-Allow-Methods: $metodo");
        header("Access-Control-Max-Age: 1000");
        header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
        header("Cache-Control: no-cache, must-revalidate");
        if (strtolower($_SERVER['REQUEST_METHOD']) != strtolower($metodo)) {
            echo $this->resposta("ERRO", "Metodo de acesso a API incorreto.");
            exit(401);
            return;
        }
    }
    
    public function verificarToken($token){
        if ($token !== "9f3eb59b17f92558802189384836c7cb") {
            echo $this->resposta("ERRO", "Token de acesso incorreto.");
            exit(401);
        }
    }

    public function resposta($status, $motivo, $add = null){
        if ($add == null) {
            $json = array(
                'status' => $status,
                'statusMotivo' => $motivo
            );
        } else {
            $json = array(
                'status' => $status,
                'statusMotivo' => $motivo,
                'resposta' => $add
            );
        }
        echo json_encode($json, JSON_UNESCAPED_UNICODE);
        exit(200);
        return json_encode($json, JSON_UNESCAPED_UNICODE);
    }

    public function noSqlInject($sql){
        // remove palavras que contenham sintaxe sql
        $sql = preg_replace(array("/(from|select|insert|delete|where|drop table|show tables|#|\*|--|\\\\)/"), "", $sql);
        $sql = trim($sql); //limpa espaços vazio
        $sql = strip_tags($sql); //tira tags html e php
        $sql = addslashes($sql); //Adiciona barras invertidas a uma string
        return $sql;
    }
}
 