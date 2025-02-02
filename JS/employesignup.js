function validateForm() {
    // Clear previous errors
    document.getElementById('user-id-error').textContent = '';
    document.getElementById('password-error').textContent = '';

    // Get the input values
    const userId = document.getElementById('user-id').value;
    const password = document.getElementById('password').value;
    let isValid = true;

    // Validate User ID
    if (userId === '') {
        document.getElementById('user-id-error').textContent = 'User ID is required';
        isValid = false;
    } else if (userId.length < 5) {
        document.getElementById('user-id-error').textContent = 'User ID must be at least 5 characters long';
        isValid = false;
    }

    // Validate Password
    if (password === '') {
        document.getElementById('password-error').textContent = 'Password is required';
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById('password-error').textContent = 'Password must be at least 6 characters long';
        isValid = false;
    }

    return isValid;
}