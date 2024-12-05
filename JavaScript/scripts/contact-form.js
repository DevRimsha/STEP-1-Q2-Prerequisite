document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");


    form.addEventListener("submit", (e) => {
        e.preventDefault(); 

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            formMessage.textContent = "All fields are required!";
            formMessage.style.color = "red";
            return;
        }
        if (!validateEmail(email)) {
            formMessage.textContent = "Please enter a valid email address!";
            formMessage.style.color = "red";
            return;
        }

        formMessage.textContent = "Thank you for your message!";
        formMessage.style.color = "green";

        form.reset();
    });
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
