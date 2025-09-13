const users = [
  { email: "thusi@gmail.com", password: "thusi123" },
  { email: "sharuksh@gmail.com", password: "sharuksh123" },
  { email: "alex@gmail.com", password: "alex123" },
  { email: "shri@gmail.com", password: "shiri123" },
  { email: "kala@gmail.com", password: "kala123" },
];

let loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function () {

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("inputPassword6").value.trim();

  const validUser = users.find(
    (user) => user.email === email && user.password === password
  );

  if (validUser) {
    alert("Login Successful");
  } else {
    alert("Login Unsuccessful");
  }
});
