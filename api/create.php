<?php
require_once '../../config/database.php';

$data = json_decode(file_get_contents("php://input"));

$name = $data->name;
$age = $data->age;
$class = $data->class;

$query = "INSERT INTO students (name, age, class) VALUES (:name, :age, :class)";
$stmt = $pdo->prepare($query);
$stmt->bindParam(':name', $name);
$stmt->bindParam(':age', $age);
$stmt->bindParam(':class', $class);

if($stmt->execute()){
    echo json_encode(['message' => 'Student added successfully']);
} else {
    echo json_encode(['message' => 'Failed to add student']);
}
?>
