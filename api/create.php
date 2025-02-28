<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE');
header('Access-Control-Allow-Headers: Content-Type'); 

require_once '../config/database.php';
require_once '../models/student.php';

$data = json_decode(file_get_contents("php://input"));

if(!empty($data->name) && !empty($data->age) && !empty($data->department)){
    $database = new Database();
    $db = $database->connection();

    $student = new Student($db);
    $student->name = $data->name;
    $student->age = $data->age;
    $student->department = $data->department;

    if($student->create()){
        echo json_encode(['message' => 'Student added successfully']);
    } else {
        echo json_encode(['message' => 'Failed to add student']);
    }
} else {
    echo json_encode(['message' => 'Failed to add student']);
}
?>
