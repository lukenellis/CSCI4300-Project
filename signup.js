function signup() {
    // Get form values
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Basic validation
    if (!fullName || !email || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    // Save user data to localStorage (for demonstration purposes)
    const user = { fullName, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Sign up successful! You can now log in.");

    // Redirect to login page
    window.location.href = "loginpage.html";
}
