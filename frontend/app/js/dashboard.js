/*=====================================
Profile page Setup
=====================================*/
//const dashBtn = document.querySelector("#editt");
//const editBtn = document.querySelector("#edit");
const logoutDom = document.querySelector(".logout-container");
const account = document.querySelector(".account");
const Active = document.querySelector(".Active");
const Editbtn = document.querySelector(".edit-btn");
const Homebtn = document.querySelector(".home-btn");
const Catbtn = document.querySelector(".cat-btn");
const Contctbtn = document.querySelector(".contct-btn");

/*Desktop side navigation buttons setup*/
if (Homebtn) {
  Homebtn.addEventListener("click", function () {
    Homebtn.classList.add("Active");

    Active.classList.remove("Active");
    Editbtn.classList.remove("Active");
    Catbtn.classList.remove("Active");
    Contctbtn.classList.remove("Active");
  });
}
if (Catbtn) {
  Catbtn.addEventListener("click", function () {
    Catbtn.classList.add("Active");

    Active.classList.remove("Active");
    Editbtn.classList.remove("Active");
    Homebtn.classList.remove("Active");
    Contctbtn.classList.remove("Active");
  });
}
if (Contctbtn) {
  Contctbtn.addEventListener("click", function () {
    Contctbtn.classList.add("Active");

    Active.classList.remove("Active");
    Editbtn.classList.remove("Active");
    Catbtn.classList.remove("Active");
    Homebtn.classList.remove("Active");
  });
}
if (Active) {
  Active.addEventListener("click", function () {
    Active.classList.add("Active");

    Editbtn.classList.remove("Active");
    Catbtn.classList.remove("Active");
    Homebtn.classList.remove("Active");
    Contctbtn.classList.remove("Active");
  });
}
if (Editbtn) {
  Editbtn.addEventListener("click", function () {
    Editbtn.classList.add("Active");

    Active.classList.remove("Active");
    Catbtn.classList.remove("Active");
    Homebtn.classList.remove("Active");
    Contctbtn.classList.remove("Active");
  });
}

logoutDom.addEventListener("click", () => {
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("updatedUser");
  localStorage.removeItem("token");
  const loggedIn = false;
  localStorage.setItem("loggedIn", loggedIn);
  window.location.href = "login.html";
});
