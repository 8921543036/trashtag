function updateReason(selectElement) {
    const reasonInput = selectElement.closest('tr').querySelector('td:nth-child(3) input');
    if (selectElement.value === 'Not Collected') {
      reasonInput.disabled = false; // Enable reason input if not collected
    } else {
      reasonInput.disabled = true; // Disable reason input if collected
      reasonInput.value = ''; // Clear reason when collection is done
    }
  }

  // Function to add a new row to the table
  function addRow() {
    const table = document.getElementById('collectionTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    const houseNumberCell = newRow.insertCell(0);
    const collectionCell = newRow.insertCell(1);
    const reasonCell = newRow.insertCell(2);

    houseNumberCell.innerHTML = prompt("Enter House Number:");

    const select = document.createElement("select");
    select.innerHTML = `
      <option value="">Select</option>
      <option value="Collected">Collected</option>
      <option value="Not Collected">Not Collected</option>
    `;
    select.onchange = function() {
      updateReason(this);
    };
    collectionCell.appendChild(select);

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter Reason";
    input.disabled = true; // Initially disabled
    reasonCell.appendChild(input);
  }