const token = localStorage.getItem("token");






function displayProfile(){




















}

fetch("http://localhost:3000/api/v1/auth/getuser", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
})
  .then((response) => {
    return response.json().then((data) => {
      sessionStorage.setItem("user", JSON.stringify(data));
    });
  })
  .catch((error) => console.log(error));

const data = JSON.parse(sessionStorage.getItem("user"));
const { user } = data;

//window.addEventListener("DOMContentLoaded", () => display_user_detail());

const username1 = document.querySelector(".username");
if(username1){
    username1.innerHTML=user.username
}

const username2 = document.querySelector("#username");
if (username2) {
  username2.innerHTML = user.username;
}

const username3 = document.getElementById("userName");
if (username3) {
  username3.innerHTML = user.username;
}
const email1 = document.getElementById("email");
if (email1) {
  email1.innerHTML = user.email;
}

const username4 = document.getElementById("userName1");
if (username4) {
  username4.innerHTML = user.username;
}

const email2 = document.getElementById("email2");
if (email2) {
  email2.innerHTML = user.email;
}

const email3 = document.getElementById("email1");
if (email3) {
  email3.innerHTML = user.email;
}


const diet = document.getElementById("diet");
if (diet) {
  diet.innerHTML = user.diet;
}

//document.querySelector(".username").innerHTML = user.username;
//document.querySelector("#username").innerHTML = user.username;
//document.getElementById("userName").innerHTML = user.username;
//document.getElementById("email").innerHTML = user.email;
//document.getElementById("userName1").innerHTML = user.username;
//document.getElementById("email2").innerHTML = user.email;
//document.getElementById("email1").innerHTML = user.email;
//document.getElementById("diet").innerHTML = user.diet;


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


