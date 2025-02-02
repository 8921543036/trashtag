document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || subject === "" || message === "") {
        alert("All fields are required!");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address!");
        return;
    }

    document.getElementById("responseMessage").classList.remove("hidden");
    document.getElementById("contactForm").reset(); // Clear the form
});

// Email validation function
function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


