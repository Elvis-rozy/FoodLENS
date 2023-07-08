/*=====================================
Profile page Setup
=====================================*/
const dashBtn = document.querySelector("#editt");
const editBtn = document.querySelector("#edit");

const userDropDown = document.querySelector(".bxs-down-arrow");
const logoutDom = document.querySelector(".logout");
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
Active.addEventListener("click", function () {
  Active.classList.add("Active");

  Editbtn.classList.remove("Active");
  Catbtn.classList.remove("Active");
  Homebtn.classList.remove("Active");
  Contctbtn.classList.remove("Active");
});
if (Editbtn) {
  Editbtn.addEventListener("click", function () {
    Editbtn.classList.add("Active");

    Active.classList.remove("Active");
    Catbtn.classList.remove("Active");
    Homebtn.classList.remove("Active");
    Contctbtn.classList.remove("Active");
  });
}
userDropDown.addEventListener("click", () => {
  console.log("hi");
  logoutDom.classList.toggle("show");
});

logoutDom.addEventListener("click", () => {
  sessionStorage.removeItem("user");
  const loggedIn = false;
  localStorage.setItem("loggedIn", loggedIn);
  window.location.href = "login.html";
});
