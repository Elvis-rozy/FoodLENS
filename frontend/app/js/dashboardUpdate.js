const data = JSON.parse(sessionStorage.getItem("user"));
const { user } = data;
//const { username, diet, email } = user;
//console.log(username);
//document.getElementById("userName").innerText = user.username;
//document.getElementById("email").innerHTML = user.email;
//document.getElementById("bio").innerHTML = user.diet;
//document.getElementById("carb").innerHTML = sessionStorage.getItem("carbvalue");
//document.getElementById("prot").innerHTML = sessionStorage.getItem("protvalue");
//document.getElementById("fat").innerHTML = sessionStorage.getItem("fatvalue");
//document.getElementById("preference").innerHTML =
//  sessionStorage.getItem("preferencevalue");
//document.getElementById("allergens").innerHTML = user.allergies;

// javascript for dashboard2
document.querySelector(".username").innerHTML = user.username;
document.querySelector("#username").innerHTML = user.username;
document.getElementById("userName").innerHTML = user.username;
document.getElementById("email").innerHTML = user.email;
document.getElementById("userName1").innerHTML = user.username;
document.getElementById("email2").innerHTML = user.email;
document.getElementById("email1").innerHTML = user.email;
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
  return ` <p class="allergy capitalised">${item}</p>`;
});
all_allergies = all_allergies.join("");
document.querySelector(".allergy-container").innerHTML = all_allergies;

let all_intolerance = user.intolerance.map((item) => {
  return ` <p class="allergy capitalised">${item}</p>`;
});
all_intolerance = all_intolerance.join("");
document.querySelector("#intolerance").innerHTML = all_intolerance;

profile_editbtn.addEventListener("click", () => {
  userPage.classList.add("hide");
  editpage.classList.add("show");
  container.classList.add("host-edit");
});

//edit page
let edit_allergies = user.allergies.map((item) => {
  return `<p class="allergy1 capitalised">${item} <span><i class='bx bx-x' id="bx-x"></i></span></p>`;
});
edit_allergies = edit_allergies.join("");
document.querySelector(".allergy-container1").innerHTML = edit_allergies;

const allergies_remove_btns = document.querySelectorAll("#bx-x");
allergies_remove_btns.forEach((btn, id) => {
  btn.addEventListener("click", () => {
    console.log("hi");
    let new_allergies = user.allergies.filter((item, index) => {
      if (index !== id) {
        return item;
      }
    });
    document.querySelector(".allergy-container1").innerHTML = new_allergies;
  });
});

let edit_intolerance = user.intolerance.map((item) => {
  return ` <p class="allergy1 capitalised">${item} <span><i class='bx bx-x'  id="bx-x1"></i></span></p>`;
});
edit_intolerance = edit_intolerance.join("");
document.querySelector("#intolerance-container1").innerHTML = edit_intolerance;

const intolerance_remove_btns = document.querySelectorAll("#bx-x1");
intolerance_remove_btns.forEach((btn, id) => {
  btn.addEventListener("click", () => {
    console.log("hi");

    let new_intolerance = user.allergies.filter((item, index) => {
      if (index !== id) {
        return item;
      }
    });
    document.querySelector("#intolerance-container1").innerHTML =
      new_intolerance;
  });
});
//remove allergies
