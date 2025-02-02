document.addEventListener("DOMContentLoaded", function() {
    const buttonContainer = document.getElementById("buttonContainer");

    // Create 50 numbered buttons dynamically
    for (let i = 1; i <= 50; i++) {
        let button = document.createElement("button");
        button.textContent = i;
        button.classList.add("numberButton");
        button.addEventListener("click", function() {
            alert("Button " + i + " clicked");
        });
        buttonContainer.appendChild(button);
    }
});

// Function to search buttons
function searchButtons() {
    let searchValue = document.getElementById("searchBox").value.toLowerCase();
    let buttons = document.querySelectorAll(".numberButton");

    buttons.forEach(button => {
        if (button.textContent.includes(searchValue)) {
            button.classList.remove("hidden");
        } else {
            button.classList.add("hidden");
        }
    });
}

// Event listener for Check-out button
document.getElementById("checkoutBtn").addEventListener("click", function() {
    document.getElementById("reasonColumn").classList.remove("hidden");
});

// Event listener for Check-in button
document.getElementById("checkinBtn").addEventListener("click", function() {
    document.getElementById("reasonColumn").classList.add("hidden");
});

