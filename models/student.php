<?php
class Student{
    private $conn;
    private $table = "students";

    public $id;
    public $name;
    public $age;
    public $dept;

    public function __construct($db) {
        $this->conn = $db;
    }
    
    // Get All Students
    public function getAll(){
        $query = "SELECT id, name, age, department FROM {$this->table}";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }
}
?>