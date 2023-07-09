const data = JSON.parse(sessionStorage.getItem("user"));
const { user } = data;
//const { username, diet, email } = user;
//console.log(username);
document.getElementById("userName").innerText = user.username;
document.getElementById("email").innerHTML = user.email;
//document.getElementById("bio").innerHTML = user.diet;
//document.getElementById("carb").innerHTML = sessionStorage.getItem("carbvalue");
//document.getElementById("prot").innerHTML = sessionStorage.getItem("protvalue");
//document.getElementById("fat").innerHTML = sessionStorage.getItem("fatvalue");
//document.getElementById("preference").innerHTML =
//  sessionStorage.getItem("preferencevalue");
//document.getElementById("allergens").innerHTML = user.allergies;

// javascript for dashboard2
document.getElementById("userName").innerText = user.username;
document.getElementById("email").innerHTML = user.email;
document.getElementById("diet").innerHTML = user.diet;
const profile_editbtn = document.querySelector(".flex-img");

//document.getElementById("intolerance").innerHTML = user.intolerance;

let all_allergies = user.allergies.map((item) => {
  return ` <p class="allergy">${item}</p>`;
});
all_allergies = all_allergies.join("");
document.querySelector(".allergy-container").innerHTML = all_allergies;

let all_intolerance = user.intolerance.map((item) => {
  return ` <p class="allergy">${item}</p>`;
});
all_intolerance = all_intolerance.join("");
document.querySelector("#intolerance").innerHTML = all_intolerance;

profile_editbtn.addEventListener(click, () => {});
