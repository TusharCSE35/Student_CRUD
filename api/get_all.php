<?php
require_once '../../config/database.php';

$query = "SELECT * FROM students";
$stmt = $pdo->prepare($query);
$stmt->execute();

$students = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($students);
?>
