document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");
  const message = document.getElementById("formMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name && email) {
      message.textContent = `Thank you, ${name}! You are now registered with ${email}.`;
      message.style.color = "lightgreen";

      // Save to localStorage
      localStorage.setItem("registeredUser", JSON.stringify({ name, email }));

      form.reset();
    } else {
      message.textContent = "Please fill out all fields.";
      message.style.color = "red";
    }
  });
});
