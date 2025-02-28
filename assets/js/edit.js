document.addEventListener('DOMContentLoaded', function() {
    // Function to pre-fill Edit Form Data
    const urlParams = new URLSearchParams(window.location.search);
    const studentId = urlParams.get('id');

    if(studentId){
        fetch(`http://localhost:8000/api/get_one.php?id=${studentId}`) 
            .then(response => response.json())
            .then(student => {
                document.getElementById('student-id').value = student.id;
                document.getElementById('name').value = student.name;
                document.getElementById('age').value = student.age;
                document.getElementById('department').value = student.department;
            })
            .catch(error => {
                console.error('Error fetching student details:', error);
                alert('Error fetching student details.');
            });
    }

    // Function to Update Student Data
    const editForm = document.getElementById('edit-student-form');  
    if(editForm){
        editForm.addEventListener('submit', function(e){
            e.preventDefault();

            const studentData = {
                id: document.getElementById('student-id').value,
                name: document.getElementById('name').value,
                age: document.getElementById('age').value,
                department: document.getElementById('department').value
            };

            fetch(`http://localhost:8000/api/update.php`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(studentData)
            })
                .then(response => response.json())
                .then(data => {
                    alert(data.message);
                    window.location.href = 'index.html'; 
                })
                .catch(error => {
                    console.error('Error updating student:', error);
                    alert('Error updating student.');
                });
        });
    }
});
