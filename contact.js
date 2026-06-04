document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent page reload

  // Get values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Simple validation
  if (name && email && message) {
    document.getElementById("confirmation").classList.remove("hidden");
    document.getElementById("contactForm").reset();
  } else {
    alert("Please fill out all fields before submitting.");
  }
});
