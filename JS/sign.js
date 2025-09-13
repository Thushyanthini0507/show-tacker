const users = [];

document.getElementById("signupBtn").addEventListener("click", function () {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("inputPassword6").value;

  const nameError = document.getElementById("nameMessage");
  const emailError = document.getElementById("emailMessage");
  const passwordError = document.getElementById("passwordMessage");

  nameError.innerText = emailError.innerText = passwordError.innerText = "";

  let isValid = true;

  if (!/^[A-Za-z\s]{6,}$/.test(name)) {
    nameError.innerText = "Invalid name (Only letters, min 6 chars)";
    nameError.style.color = "red";
    isValid = false;

  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailError.innerText = "Your email address is invalid";
    emailError.style.color = "red";
    isValid = false;

  } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/.test(password)) {
    passwordError.innerText = "Password is required";
    passwordError.style.color = "red";
    isValid = false;
    
  } else {
    const user = { name, email, password };
    users.push(user);
    alert("Sign Up Successful!");
  }
});
