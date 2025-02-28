<?php
class Student{
    private $conn;
    private $table = "students";

    public $id;
    public $name;
    public $age;
    public $department;

    public function __construct($db) {
        $this->conn = $db;
    }


    // Create Student
    public function create(){
        $query = "INSERT INTO {$this->table} (name,age,department) VALUES(:name, :age, :department)";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':name', $this->name);
        $stmt->bindParam(':age', $this->age);
        $stmt->bindParam(':department', $this->department);

        if($stmt->execute()){
            return true;
        }
        return false;
    }
    
    // Get All Students
    public function getAll(){
        $query = "SELECT id, name, age, department FROM {$this->table}";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }

    // Get a single Student
    public function getOne(){
        $query = "SELECT id, name, age, department FROM {$this->table} WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':id', $this->id);
        $stmt->execute();
        return $stmt;
    }

    // Delele Student
    public function delete(){
        $query = "DELETE FROM {$this->table} WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':id', $this->id);

        if($stmt->execute()){
            return true;
        }
        return false;
    }

    // Update Student
    public function update(){
        $query = "UPDATE {$this->table} SET name=:name, age=:age, department=:department where id=:id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':name', $this->name);
        $stmt->bindParam(':age', $this->age);
        $stmt->bindParam(':department', $this->department);
        $stmt->bindParam(':id', $this->id);

        if($stmt->execute()){
            return true;
        }
        return false;
    }
}
?>