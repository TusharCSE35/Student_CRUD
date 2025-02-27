// script.js

// Function to handle the AJAX request to fetch all students
function fetchAllStudents() {
    fetch('api/student/get_all.php')
      .then(response => response.json())
      .then(data => {
        let studentList = document.getElementById('student-list');
        studentList.innerHTML = ''; // Clear current list
        data.forEach(student => {
          studentList.innerHTML += `
            <tr>
              <td>${student.name}</td>
              <td>${student.email}</td>
              <td>${student.phone}</td>
              <td>
                <button onclick="editStudent(${student.id})">Edit</button>
                <button onclick="deleteStudent(${student.id})">Delete</button>
              </td>
            </tr>
          `;
        });
      })
      .catch(error => console.error('Error:', error));
  }
  
  // Function to handle the AJAX request to get a single student by ID
  function fetchStudentById(id) {
    fetch(`api/student/get_one.php?id=${id}`)
      .then(response => response.json())
      .then(data => {
        document.getElementById('student-name').value = data.name;
        document.getElementById('student-email').value = data.email;
        document.getElementById('student-phone').value = data.phone;
        document.getElementById('student-id').value = data.id;
      })
      .catch(error => console.error('Error:', error));
  }
  
  // Function to handle the AJAX request to create a new student
  function createStudent(event) {
    event.preventDefault();
  
    const name = document.getElementById('student-name').value;
    const email = document.getElementById('student-email').value;
    const phone = document.getElementById('student-phone').value;
  
    fetch('api/student/create.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone }),
    })
      .then(response => response.json())
      .then(data => {
        alert('Student created successfully!');
        window.location.href = 'index.html'; // Redirect to list page
      })
      .catch(error => console.error('Error:', error));
  }
  
  // Function to handle the AJAX request to update a student
  function updateStudent(event) {
    event.preventDefault();
  
    const id = document.getElementById('student-id').value;
    const name = document.getElementById('student-name').value;
    const email = document.getElementById('student-email').value;
    const phone = document.getElementById('student-phone').value;
  
    fetch('api/student/update.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, name, email, phone }),
    })
      .then(response => response.json())
      .then(data => {
        alert('Student updated successfully!');
        window.location.href = 'index.html'; // Redirect to list page
      })
      .catch(error => console.error('Error:', error));
  }
  
  // Function to handle the AJAX request to delete a student
  function deleteStudent(id) {
    if (confirm('Are you sure you want to delete this student?')) {
      fetch(`api/student/delete.php?id=${id}`, {
        method: 'DELETE',
      })
        .then(response => response.json())
        .then(data => {
          alert('Student deleted successfully!');
          fetchAllStudents(); // Refresh the list
        })
        .catch(error => console.error('Error:', error));
    }
  }
  
  // Call fetchAllStudents when the page loads to populate the student list
  document.addEventListener('DOMContentLoaded', fetchAllStudents);
  



// |STUDENT-CRUD/
// │── api/
// │   ├── get_all.php
// │   ├── get_one.php
// │   ├── create.php
// │   ├── update.php
// │   └── delete.php
// │── config/
// │   ├── database.php 
// │── public/
// │   ├── index.html
// │   ├── add.html
// │   ├── edit.html
// │── assets/
// │   ├── css/
// │   │   ├── add.css
// │   │   ├── edit.css
// │   │   ├── style.css
// │   └── js/
// │       ├── scripts.js
// └── README.md
