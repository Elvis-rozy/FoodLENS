const token = localStorage.getItem("token");
const saveBtn = document.querySelector(".save-btn");
const add_allergies_btn = document.querySelector(".add-allergies");
const add_intolerance_btn = document.querySelector(".add-intolerance");

const allergy_selectDom = document.querySelector("#select-allergy");

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
document.getElementById("edit-userName").value = user.username;
document.getElementById("edit-email").value = user.email;
document.getElementById("edit-diet").value = user.diet;
const username3 = document.getElementById("userName");
if (username3) {
  username3.innerHTML = user.username;
}

let edit_allergies = user.allergies.map((item) => {
  return `<p class="allergy1 capitalised">${item} <span><i class='bx bx-x' id="bx-x"></i></span></p>`;
});
edit_allergies = edit_allergies.join("");
document.querySelector(".allergy-container1").innerHTML = edit_allergies;

const allergies_remove_btns = document.querySelectorAll("#bx-x");
allergies_remove_btns.forEach((btn, id) => {
  if (btn) {
    btn.addEventListener("click", () => {
      console.log("hi");

      let new_allergies = user.allergies.filter((item, index) => {
        if (index !== id) {
          return item;
        }
      });
      document.querySelector(".allergy-container1").innerHTML = new_allergies;
      user = {
        user: {
          email: user.email,
          username: user.username,
          diet: user.diet,
          allergies: new_allergies,
          intolerance: user.intolerance,
          token: user.token,
        },
      };
      // user.allergies=new_allergies
      sessionStorage.setItem("updatedUser", JSON.stringify(user));
      console.log(user);
    });
  }
});

let edit_intolerance = user.intolerance.map((item) => {
  return ` <p class="allergy1 capitalised">${item} <span><i class='bx bx-x'  id="bx-x1"></i></span></p>`;
});
edit_intolerance = edit_intolerance.join("");
document.querySelector("#intolerance-container1").innerHTML = edit_intolerance;

const intolerance_remove_btns = document.querySelectorAll("#bx-x1");

intolerance_remove_btns.forEach((btn, id) => {
  if (btn) {
    btn.addEventListener("click", () => {
      console.log("hi");

      let new_intolerance = user.intolerance.filter((item, index) => {
        if (index !== id) {
          return item;
        }
      });
      document.querySelector("#intolerance-container1").innerHTML =
        new_intolerance;

      user = {
        user: {
          email: user.email,
          username: user.username,
          diet: user.diet,
          allergies: user.allergies,
          intolerance: new_intolerance,
          token: user.token,
        },
      };
      // user.intolerance=new_intolerance
      sessionStorage.setItem("updatedUser", JSON.stringify(user));
      console.log(user);
    });
  }
});

saveBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const data = JSON.parse(sessionStorage.getItem("updatedUser"));
  let { user } = data;
  console.log(user);

  user = {
    email: user.email,
    username: user.username,
    diet: user.diet,
    allergies: user.allergies,
    intolerance: user.intolerance,
    token: user.token,
  };

  // user.intolerance=new_intolerance
  sessionStorage.setItem("user", JSON.stringify(user));

  fetch("http://localhost:3000/api/v1/auth/updateUser", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response
        .json()
        .then((response) =>
          sessionStorage.setItem("user", JSON.stringify(response))
        )
        .then(() => {});
    })
    .catch((error) => console.log(error));
});
