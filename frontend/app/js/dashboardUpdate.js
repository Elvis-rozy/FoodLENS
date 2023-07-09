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


//edit info update value
document.getElementById("edit-userName").value = user.username;
document.getElementById("edit-email").value = user.email;
document.getElementById("edit-diet").value = user.diet;

const profile_editbtn = document.querySelector(".flex-img");
const editpage = document.querySelector(".profile-edit-page");
const userPage = document.querySelector(".user");
const container = document.querySelector(".all");

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

profile_editbtn.addEventListener("click", () => {
  console.log("HI");
  userPage.classList.add("hide");
  editpage.classList.add("show");
  container.classList.add("host-edit");
});


//edit page 
let edit_allergies = user.allergies.map((item) => {
  return `<p class="allergy1">${item} <span><i class='bx bx-x'></i></span></p>`;
});
edit_allergies = edit_allergies.join("");
document.querySelector(".allergy-container1").innerHTML = edit_allergies;

let edit_intolerance = user.intolerance.map((item) => {
  return ` <p class="allergy1">${item} <span><i class='bx bx-x'></i></span></p>`;
});
edit_intolerance = edit_intolerance.join("");
document.querySelector("#intolerance-container1").innerHTML = edit_intolerance;
