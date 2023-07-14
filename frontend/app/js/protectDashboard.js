const loggedIn = sessionStorage.getItem("user");

if (!loggedIn) {
  console.log("...you are off");
  window.location.href = "login.html";
}
