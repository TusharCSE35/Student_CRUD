<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE');
header('Access-Control-Allow-Headers: Content-Type'); 

require_once '../config/database.php';
require_once '../models/student.php';

if($_SERVER['REQUEST_METHOD']==='DELETE' && isset($_GET['id'])){
    $database = new Database();
    $db = $database->connection();

    $student = new Student($db);
    $student->id = $_GET['id'];

    if($student->delete()){
        echo json_encode(['message' => 'Student deleted successfully']);
    }else{
        echo json_encode(['message' => 'Failed to delete student']);
    }
}else{
    echo json_encode(['message' => 'Student ID is required']);
}
?>
