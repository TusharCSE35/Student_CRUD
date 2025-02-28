document.addEventListener('DOMContentLoaded', function() {
    fetchAllStudents(); 

    // Function to fetch all students using AJAX
    function fetchAllStudents() {
        fetch('http://localhost:8000/api/get_all.php')
            .then(response => response.json())  
            .then(data => {
                const studentList = document.getElementById('student-list');
                studentList.innerHTML = ''; 

                data.forEach(student => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${student.name}</td>
                        <td>${student.age}</td>
                        <td>${student.department}</td>
                        <td>
                            <a href="edit.html?id=${student.id}" class="btn btn-warning btn-sm">Edit</a>
                            <button class="btn btn-danger btn-sm" onclick="deleteStudent(${student.id})">Delete</button>
                        </td>
                    `;
                    studentList.appendChild(row);
                });
            })
            .catch(error => {
                console.error('Error fetching students:', error);
                alert('Error fetching student data.');
            });
    }

    // Function to delete a student using AJAX
    window.deleteStudent = function(id) {
        if (confirm('Are you sure you want to delete this student?')) {
            fetch(`http://localhost:8000/api/delete.php?id=${id}`, {
                method: 'DELETE'
            })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
                fetchAllStudents();  
            })
            .catch(error => {
                console.error('Error deleting student:', error);
                alert('Error deleting student.');
            });
        }
    }
});
