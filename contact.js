// Function to validate the form
function validateForm(event) {
    // Prevent form submission for validation
    event.preventDefault();

    // Get form fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation checks
    if (name === '') {
        alert('Please enter your name.');
        return false;
    }

    if (email === '') {
        alert('Please enter your email address.');
        return false;
    }

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (message === '') {
        alert('Please enter a message.');
        return false;
    }

    // If all validations pass, alert the user (you could also send the form data to the server here)
    alert('Thank you for your feedback! Your message has been sent.');
    // Optionally, clear the form after submission
    document.querySelector('form').reset();
    return true;
}

// Attach event listener to the form for validation on submit
document.querySelector('form').addEventListener('submit', validateForm);
