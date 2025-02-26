<?php
require_once '../../config/database.php';

$id = $_GET['id'];
$query = "SELECT * FROM students WHERE id = :id";
$stmt = $pdo->prepare($query);
$stmt->bindParam(':id', $id);
$stmt->execute();

$student = $stmt->fetch(PDO::FETCH_ASSOC);
echo json_encode($student);
?>
