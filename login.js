function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
        alert("No account found. Please sign up first.");
        return;
    }

    if (storedUser.email === email && storedUser.password === password) {
        alert("Login successful!");
        // Redirect to the dashboard or main page
        window.location.href = "dashboard.html";
    } else {
        alert("Incorrect email or password. Please try again.");
    }
}
