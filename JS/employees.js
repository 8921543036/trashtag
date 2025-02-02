
function updateEmployee(employeeId) {
  alert("Updating employee with ID: " + employeeId);
}

// Function to handle the delete action
function deleteEmployee(employeeId) {
  const row = document.getElementById('emp' + employeeId);
  if (row) {
    row.remove(); // Remove the row from the table
    alert("Employee with ID: " + employeeId + " has been deleted.");
  }
}

// Function to handle the edit action
function editEmployee(employeeId) {
  const row = document.getElementById('emp' + employeeId);
  if (row) {
    const cells = row.getElementsByTagName("td");
    const name = cells[0].textContent;
    const id = cells[1].textContent;
    const district = cells[2].textContent;
    const panchayath = cells[3].textContent;

    alert("Edit employee details:\nName: " + name + "\nID: " + id + "\nDistrict: " + district + "\nPanchayath: " + panchayath);
  }
}

// Function to filter the table based on search input (search by Employee ID)
function searchTable() {
  const input = document.getElementById("searchBar");
  const filter = input.value.toLowerCase();
  const table = document.getElementById("employeeTable");
  const rows = table.getElementsByTagName("tr");

  // Loop through all rows, hide those who don't match the search query
  for (let i = 1; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName("td");
    const id = cells[1].textContent.toLowerCase();
    
    // Check if the ID contains the search query
    if (id.indexOf(filter) > -1) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
}

function addEmployeePage(){
    window.location.href = "/HTML/addemploy.html";
}

let empCount = 1; // To track the number of employee rows.


function updateEmployee(id) {
  alert(`Updating employee with ID: ${id}`);
}

function deleteEmployee(id) {
  const row = document.getElementById('emp' + id);
  row.parentNode.removeChild(row);
}

function editEmployee(id) {
  alert(`Editing employee with ID: ${id}`);
}


function getDocumentByName(idvalue) {
  const collectionRef = db.collection("employees");

  collectionRef.where("ID", "==", idvalue).get().then((querySnapshot) => {
    if (!querySnapshot.empty) {
      querySnapshot.forEach((doc) => {
         data = doc.data();
         Name = data.Name;  // Assuming 'name' is a field in your document
         district = data.district;
         panjayath = data.panjayath;
         ward = data.Ward;
       
      });
    } else {
      console.log("No document found with the ID:", idvalue);
    }
  }).catch((error) => {
    console.error("Error getting documents:", error);
  });
}


// Example usage
getDocumentByName(1); 
function addRow(id) {
 

  // Create the cells for the new row
  newRow.innerHTML = `
    <td>${Name}</td>
    <td>${id}</td>
    <td> ${district}</td>
    <td>Panchayath A${empCount}</td>
    <td>
      <button onclick="updateEmployee(${empCount})">Update</button>
      <i class="fas fa-trash-alt delete-icon" onclick="deleteEmployee(${empCount})"></i>
      <i class="fas fa-edit edit-icon" onclick="editEmployee(${empCount})"></i>
    </td>
  `;

  // Append the new row to the table
  document.querySelector('#employeeTable tbody').appendChild(newRow);
}
