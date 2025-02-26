<?php
require_once '../../config/database.php';

$data = json_decode(file_get_contents("php://input"));
$id = $data->id;
$name = $data->name;
$age = $data->age;
$class = $data->class;

$query = "UPDATE students SET name = :name, age = :age, class = :class WHERE id = :id";
$stmt = $pdo->prepare($query);
$stmt->bindParam(':id', $id);
$stmt->bindParam(':name', $name);
$stmt->bindParam(':age', $age);
$stmt->bindParam(':class', $class);

if($stmt->execute()){
    echo json_encode(['message' => 'Student updated successfully']);
} else {
    echo json_encode(['message' => 'Failed to update student']);
}
?>
