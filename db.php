<?php
// Configurações do banco de dados
$host = 'Mysql@127.0.0.1:3306'; // ou o endereço do seu servidor MySQL
$user = 'rafaeru server';      // Usuário MySQL
$password = 'Bob&duquesa123';      // Senha do MySQL (deixe vazio para o usuário root local)
$dbname = 'radio_db';// Nome do banco de dados

// Criação da conexão
$conn = new mysqli($host, $user, $password, $dbname);

// Verificando a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}
?>
