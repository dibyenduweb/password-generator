document.getElementById("generate").addEventListener("click", generatePassword);
document
  .getElementById("toggleVisibility")
  .addEventListener("click", toggleVisibility);
document.getElementById("copyPassword").addEventListener("click", copyPassword);

function generatePassword() {
  const length = document.getElementById("length").value;
  const includeUppercase = document.getElementById("uppercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$&*";

  let characters = lowercase;
  if (includeUppercase) characters += uppercase;
  if (includeNumbers) characters += numbers;
  if (includeSymbols) characters += symbols;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  document.getElementById("password").value = password;
}

function toggleVisibility() {
  const passwordField = document.getElementById("password");
  const toggleButton = document.getElementById("toggleVisibility");

  if (passwordField.type === "password") {
    passwordField.type = "text";
    toggleButton.textContent = "Hide";
  } else {
    passwordField.type = "password";
    toggleButton.textContent = "Show";
  }
}

function copyPassword() {
  const passwordField = document.getElementById("password");
  passwordField.select();
  passwordField.setSelectionRange(0, 99999); // For mobile devices

  navigator.clipboard
    .writeText(passwordField.value)
    .then(() => {
      alert("Password copied to clipboard!");
    })
    .catch((err) => {
      alert("Failed to copy password");
    });
}
