// Toggle password visibility
document.getElementById("togglePassword").addEventListener("click", function() {
    const passwordField = document.getElementById("password");
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
});

// Handle login button click
document.getElementById("loginBtn").addEventListener("click", function() {
    window.location.href = "pagina-siguiente.html"; // Redirige a la página deseada
});
