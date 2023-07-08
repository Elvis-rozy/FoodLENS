const data = JSON.parse(sessionStorage.getItem("user"));
const { user } = data;
//const { username, diet, email } = user;
//console.log(username);
document.getElementById("userName").innerText = user.username;
document.getElementById("email").innerHTML = user.email;
document.getElementById("bio").innerHTML = user.diet;
document.getElementById("carb").innerHTML = sessionStorage.getItem("carbvalue");
document.getElementById("prot").innerHTML = sessionStorage.getItem("protvalue");
document.getElementById("fat").innerHTML = sessionStorage.getItem("fatvalue");
document.getElementById("preference").innerHTML =
  sessionStorage.getItem("preferencevalue");
document.getElementById("allergens").innerHTML = user.allergies;
