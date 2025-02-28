<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE'); 
header('Access-Control-Allow-Headers: Content-Type'); 

require_once '../config/database.php';
require_once '../models/student.php';

if(isset($_GET['id'])){
    $database = new Database();
    $db = $database->connection();

    $student = new Student($db);
    $student->id = $_GET['id'];
    $stmt = $student->getOne();

    $student_data = $stmt->fetch(PDO::FETCH_ASSOC);
    echo json_encode($student_data);
}else{
    echo json_encode(['message' => 'Student ID is required']);
}
?>
