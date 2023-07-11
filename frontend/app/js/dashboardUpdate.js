const token = localStorage.getItem("token");

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

window.addEventListener("DOMContentLoaded", () => display_user_detail());

/**x
const data = JSON.parse(sessionStorage.getItem("user"));
const { user } = data;
 */
const add_allergies_btn = document.querySelector(".add-allergies");
const add_intolerance_btn = document.querySelector(".add-intolerance");

const allergy_selectDom = document.querySelector("#select-allergy");

/** 

selectedValue = () => {
  // var selected_options = allergy_selectDom.selectedOptions;

  // for (var i = 0; i < selected_options.length; i++) {
  //  // echoes the text of the option
  //  let theLang = selected_options[i].text;
  //   console.log(theLang);
  // }

  var value = allergy_selectDom.options[allergy_selectDom.selectedIndex].value;
  var text = allergy_selectDom.options[allergy_selectDom.selectedIndex].text;

  console.log(text);
  allergies_array = [...allergies_array, text];
  console.log(allergies_array);
  //document.querySelector(".allergy-container").innerHTML = text;
  let edit_allergies = allergies_array.map((item) => {
    return `<p class="allergy1 capitalised">${item} <span><i class='bx bx-x' id="bx-x"></i></span></p>`;
  });
  edit_allergies = edit_allergies.join("");
  document.querySelector(".allergy-container1").innerHTML = edit_allergies;
  const allergies_remove_btns = document.querySelectorAll("#bx-x");
  allergies_remove_btns.forEach((btn, id) => {
    btn.addEventListener("click", () => {
      console.log("hi");
      let new_allergies = allergies_array.filter((item, index) => {
        if (index !== id) {
          return item;
        }
      });
      document.querySelector(".allergy-container1").innerHTML = new_allergies;
    });
  });
};

*/

/*
//get user details
const token2 = localStorage.getItem("token");
let user_from_server = [];

fetch("http://localhost:3000/api/v1/auth/getuser", {
  //fetch("https://foodlens.onrender.com/api/v1/auth/login", {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Autorization: `Bearer ${JSON.stringify(token2)}`,
  },
})
  .then(function (response) {
    if (response.ok) {
      return response.json().then((user) => {
        console.log(user);
      });

      // Successful response handling
    } else {
      // Error response handling
      console.log("Invalid credentials.");
    }
  })
  .catch(function (error) {
    // Network or fetch API error handling
    console.log("An error occurred whilst fetching login POST - data:", error);
  });
*/
//Plan B

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

/** 
let allergies_array = [];
allergies_array.push(user.allergies);
console.log(allergies_array);

let intolerance_array = [];
intolerance_array.push(user.intolerance);
*/
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
const saveBtn = document.querySelector(".save-btn");

//document.getElementById("intolerance").innerHTML = user.intolerance;
/** 
let all_allergies = allergies_array.map((item) => {
  return ` <p class="allergy capitalised">${item}</p>`;
});
all_allergies = all_allergies.join("");
document.querySelector(".allergy-container").innerHTML = all_allergies;

let all_intolerance = intolerance_array.map((item) => {
  return ` <p class="allergy capitalised">${item}</p>`;
});
all_intolerance = all_intolerance.join("");
document.querySelector("#intolerance").innerHTML = all_intolerance;
*/

/** 
//edit page
let edit_allergies = allergies_array.map((item) => {
  return `<p class="allergy1 capitalised">${item} <span><i class='bx bx-x' id="bx-x"></i></span></p>`;
});
edit_allergies = edit_allergies.join("");
document.querySelector(".allergy-container1").innerHTML = edit_allergies;

const allergies_remove_btns = document.querySelectorAll("#bx-x");
allergies_remove_btns.forEach((btn, id) => {
  btn.addEventListener("click", () => {
    console.log("hi");
    let new_allergies = allergies_array.filter((item, index) => {
      if (index !== id) {
        return item;
      }
    });
    document.querySelector(".allergy-container1").innerHTML = new_allergies;
  });
});

let edit_intolerance = intolerance_array.map((item) => {
  return ` <p class="allergy1 capitalised">${item} <span><i class='bx bx-x'  id="bx-x1"></i></span></p>`;
});
edit_intolerance = edit_intolerance.join("");
document.querySelector("#intolerance-container1").innerHTML = edit_intolerance;

const intolerance_remove_btns = document.querySelectorAll("#bx-x1");
intolerance_remove_btns.forEach((btn, id) => {
  btn.addEventListener("click", () => {
    console.log("hi");

    let new_intolerance = intolerance_array.filter((item, index) => {
      if (index !== id) {
        return item;
      }
    });
    document.querySelector("#intolerance-container1").innerHTML =
      new_intolerance;
  });
});
//remove allergies
*/
//update user details in doms
function display_user_detail() {
  const data = JSON.parse(sessionStorage.getItem("user"));
  let { user } = data;

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

  //edit page
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
  document.querySelector("#intolerance-container1").innerHTML =
    edit_intolerance;

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
          );
      })
      .catch((error) => console.log(error));
  });
}

function getUser() {
  const token = localStorage.getItem("token");
  fetch("http://localhost:3000/api/v1/auth/getuser", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
}
