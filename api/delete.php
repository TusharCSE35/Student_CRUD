<?php
require_once '../../config/database.php';

$id = $_GET['id'];

$query = "DELETE FROM students WHERE id = :id";
$stmt = $pdo->prepare($query);
$stmt->bindParam(':id', $id);

if($stmt->execute()){
    echo json_encode(['message' => 'Student deleted successfully']);
} else {
    echo json_encode(['message' => 'Failed to delete student']);
}
?>
