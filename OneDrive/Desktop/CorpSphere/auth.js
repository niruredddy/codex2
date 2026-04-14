// Signup
function signup() {
  let name = document.getElementById("name").value;
  let org = document.getElementById("org").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let user = { name, org, email, password };

  localStorage.setItem(email, JSON.stringify(user));

  alert("Signup successful!");
  window.location.href = "login.html";
}

// Login
function login() {
  let org = document.getElementById("org").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let user = JSON.parse(localStorage.getItem(email));

  if (user && user.password === password && user.org === org) {
    localStorage.setItem("orgName", org);
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    alert("Invalid credentials or organization!");
  }
}