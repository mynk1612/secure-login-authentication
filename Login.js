// Simple in-memory storage for registered users
const users = [];

// Function to register a user
function registerUser(username, password) {
    users.push({ username, password });
    alert("User registered successfully!");
}

// Function to authenticate a user
function authenticateUser(username, password) {
    return users.some(user => user.username === username && user.password === password);
}

// Function to show the secure page
function showSecurePage(username) {
    document.getElementById("form-container").style.display = "none";
    document.getElementById("secure-page").style.display = "block";
    document.getElementById("user-name").textContent = username;
}

// Event listener for registration
document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("reg-username").value;
    const password = document.getElementById("reg-password").value;
    registerUser(username, password);
    document.getElementById("register-form").reset();
});

// Event listener for login
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    if (authenticateUser(username, password)) {
        showSecurePage(username);
        localStorage.setItem("loggedInUser", username);
    } else {
        alert("Invalid username or password.");
    }
    document.getElementById("login-form").reset();
});

// Event listener for logout
document.getElementById("logout").addEventListener("click", function() {
    document.getElementById("secure-page").style.display = "none";
    document.getElementById("form-container").style.display = "block";
    localStorage.removeItem("loggedInUser");
});

// Check if the user is already logged in
document.addEventListener("DOMContentLoaded", function() {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        showSecurePage(loggedInUser);
    }
});
