document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("add-student-form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); 
  
      const name = document.getElementById("name").value;
      const age = document.getElementById("age").value;
      const department = document.getElementById("department").value;
  
      if (name && age && department) {
        const studentData = {
          name: name,
          age: age,
          department: department,
        };
  
        fetch("http://localhost:8000/api/create.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(studentData),
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (result) {
            if (result.message === "Student added successfully") {
              alert("Student Added Successfully!");
              form.reset(); 
            } else {
              alert("Error: " + result.message);
            }
          })
          .catch(function (error) {
            alert("Error adding student: " + error);
          });
      } else {
        alert("Please fill all fields!");
      }
    });
  });
  