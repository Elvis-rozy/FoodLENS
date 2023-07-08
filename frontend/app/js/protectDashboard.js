const loggedIn = sessionStorage.getItem("user");
console.log(loggedIn);

if (!loggedIn) {
  window.location.href = "login.html";
}
