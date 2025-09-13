const addForm = document.getElementById("addform");

addForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const addText = document.getElementById("addtext").value.trim();
  const output = document.getElementById("output");
  const isValid = /^[A-Za-z]/.test(addText);

  if (addText === "") {
    output.innerText = "Please enter a show name.";
    output.style.color = "red";
  } else if (!isValid) {
    output.innerText = "Invalid TV Show name";
    output.style.color = "red";
  } else {
    output.innerText = "TV Show Name has been added";
    output.style.color = "green";
  }
});
