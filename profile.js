document.getElementById("profileForm").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent page reload

  // Get values from form
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const bio = document.getElementById("bio").value;

  // Update profile card if values are provided
  if (name) document.getElementById("displayName").textContent = name;
  if (email) document.getElementById("displayEmail").textContent = email;
  if (bio) document.getElementById("displayBio").textContent = bio;

  alert("Profile updated successfully!");
});
