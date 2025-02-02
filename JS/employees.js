function updateEmployee(employeeId) {
  alert("Updating employee with ID: " + employeeId);
}

// Function to handle the delete action
function deleteEmployee(employeeId) {
  const row = document.getElementById("emp" + employeeId);
  if (row) {
    row.remove(); // Remove the row from the table
    alert("Employee with ID: " + employeeId + " has been deleted.");
  }
}

// Function to handle the edit action
function editEmployee(employeeId) {
  const row = document.getElementById("emp" + employeeId);
  if (row) {
    const cells = row.getElementsByTagName("td");
    const name = cells[0].textContent;
    const id = cells[1].textContent;
    const district = cells[2].textContent;
    const panchayath = cells[3].textContent;

    alert(
      "Edit employee details:\nName: " +
        name +
        "\nID: " +
        id +
        "\nDistrict: " +
        district +
        "\nPanchayath: " +
        panchayath
    );
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



function gettingemployees(docId) {
  const docRef = db.collection("Employees").doc(docId); // Reference to the document

  docRef
    .get()
    .then((docSnapshot) => {
      if (docSnapshot.exists) {
        // Get only the 'name' field
        Name = docSnapshot.data().name;
        district = docSnapshot.data().district;
        panchayath = docSnapshot.data().panchayath;
        wardNumber = documentId.data().ward;
        console.log("Employee Name:", Name);
      } else {
        console.log("No document found with the provided ID");
      }
    })
    .catch((error) => {
      console.error("Error getting document:", error);
    });
}

gettingemployees(1)




// Call the function with a sample document ID


function addRow() {
  // Increment the employee count to create a unique ID for the new row
  empCount++;

  // Create a new row element
  let newRow = document.createElement("tr");
  newRow.id = "emp" + empCount;

  // Create the cells for the new row
  newRow.innerHTML = `
    <td> ${Name}</td>
    <td>${docIdId}</td>
    <td> ${district}</td>
    <td>${Panjayath}</td>
    <td>${ wardNumber}</td>
    <td>
      <button onclick="updateEmployee(${empCount})">Update</button>
      <i class="fas fa-trash-alt delete-icon" onclick="deleteEmployee(${empCount})"></i>
    </td>
  `;

  // Append the new row to the table
  document.querySelector("#employeeTable tbody").appendChild(newRow);
}

function updateEmployee(id) {
  alert(`Updating employee with ID: ${id}`);
}

function deleteEmployee(id) {
  const row = document.getElementById("emp" + id);
  row.parentNode.removeChild(row);
}
function addEmployeePage(){
  window.location.href = "/HTML/addemploy.html";
}



