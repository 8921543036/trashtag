function validateForm() {
  // Clear previous errors
  console.log('hhhhh');
  document.getElementById("usernameError").textContent = "";
  document.getElementById("userIdError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("confirmPasswordError").textContent = "";
  document.getElementById("districtError").textContent = "";
  document.getElementById("panchayathError").textContent = "";
  document.getElementById("wardNumberError").textContent = "";

  // Get input values
  const username = document.getElementById("username").value;
  const userId = document.getElementById("userId").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const district = document.getElementById("district").value;
  const panchayath = document.getElementById("panchayath").value;
  const wardNumber = document.getElementById("wardNumber").value;

  let isValid = true;

  // Username validation
  if (username === "") {
    document.getElementById("usernameError").textContent =
      "Username is required";
    isValid = false;
  }

  // User ID validation
  if (userId === "") {
    document.getElementById("userIdError").textContent = "User ID is required";
    isValid = false;
  }

  // Password validation
  if (password === "") {
    document.getElementById("passwordError").textContent =
      "Password is required";
    isValid = false;
  } else if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").textContent =
      "Passwords do not match";
    isValid = false;
  }

  // District validation
  if (district === "") {
    document.getElementById("districtError").textContent =
      "Please select a district";
    isValid = false;
  }

  // Panchayath validation
  if (panchayath === "") {
    document.getElementById("panchayathError").textContent =
      "Please select a panchayath";
    isValid = false;
  }

  // Ward Number validation
  if (wardNumber === "" || wardNumber < 1 || wardNumber > 100) {
    document.getElementById("wardNumberError").textContent =
      "Please enter a valid ward number between 1 and 100";
    isValid = false;
  }
  return isValid;
}

// Example for dynamically updating Panchayath options based on selected district
function updatePanchayathOptions() {
  const district = document.getElementById("district").value;
  const panchayathSelect = document.getElementById("panchayath");
  panchayathSelect.innerHTML = '<option value="">Select a panchayath</option>'; // Reset panchayath options

  if (district === "District1") {
    panchayathSelect.innerHTML +=
      '<option value="Panchayath1">Panchayath 1</option><option value="Panchayath2">Panchayath 2</option>';
  } else if (district === "District2") {
    panchayathSelect.innerHTML +=
      '<option value="Panchayath3">Panchayath 3</option><option value="Panchayath4">Panchayath 4</option>';
  } else if (district === "District3") {
    panchayathSelect.innerHTML +=
      '<option value="Panchayath5">Panchayath 5</option><option value="Panchayath6">Panchayath 6</option>';
  }
}
function addEmployeeData() {
  console.log(db);

  // Get the values from input fields
  const username = document.getElementById("username").value;
  const district = document.getElementById("district").value;
  const panchayath = document.getElementById("panchayath").value;
  const wardNumber = document.getElementById("wardNumber").value;

  console.log("Username: ", username);

  // Add data to Firestore if the fields are not empty
  if (username && district && panchayath && wardNumber) {
    // Add the employee data to Firestore
    db.collection("Employees")
      .add({
        Name: username,
        panchayath: panchayath,
        District: district,
        wardNumber: wardNumber,
        Id: Math.floor(Math.random() * 1000), // Generate a random ID for this example
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id); // Log the document ID

        // Fetch the added document using its ID to log only the 'Name' field
       
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });

  } else {
    alert("Please fill in all fields.");
  }
}