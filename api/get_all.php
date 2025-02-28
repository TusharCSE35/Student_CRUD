<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE'); 
header('Access-Control-Allow-Headers: Content-Type'); 

require_once '../config/database.php';
require_once '../models/student.php';

$database = new Database();
$db = $database->connection();

$student = new Student($db);
$stmt = $student->getAll();
$students = [];

while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
    $students[] = $row;
}

echo json_encode($students);
?>
