const form = document.getElementById('contact-form');
const messageDiv = document.getElementById('form-message');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        messageDiv.textContent = "Please fill in all fields.";
        messageDiv.style.color = "red";
    } else {
        messageDiv.textContent = "Thank you for contacting me!";
        messageDiv.style.color = "green";
        form.reset();
    }
});
