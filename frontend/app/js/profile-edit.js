const token = localStorage.getItem("token");
const saveBtn = document.querySelector(".save-btn");
const add_allergies_btn = document.querySelector(".add-allergies");
const add_intolerance_btn = document.querySelector(".add-intolerance");
let dietDom = document.getElementById("edit-diet");
//const camera=document.querySelector(".bx-camera")
//const default_camera = document.querySelector(".default-camera-btn");
const uploadForm = document.querySelector(".upload");
const defaultUploadBtn = document.querySelector(".default-camera-btn");
const customBtn = document.querySelector(".camBtn");
const profileImageDom = document.querySelector(".img-span");
const welcomeDom = document.querySelector(".welcome");
let firstLogin = localStorage.getItem("firstLogin");

let allergies_added;
let intolerance_added;

let dietData = [
  "none",
  "vegan",
  "eggetarian",
  "non vegetarian",
  "pescatarian",
  "omnivorous",
  "carnivorous",
  "pollotarian",
  "semi-vegetarian",
  "fruitarian",
  "paleo",
  "ketogenic",
];

const allergy_selectDom = document.querySelectorAll(".allergy-select");

const user = JSON.parse(sessionStorage.getItem("updatedUser"));
let { email, diet, username, intolerance, allergies, userPicture } = user;

console.log(username);

if (user) {
  setTimeout(() => {
    welcomeDom.innerHTML = `<i class="bx bxs-user-circle"></i>`;
  }, 5000);

  if (firstLogin) {
    welcomeDom.innerHTML = "Welcome";
  } else {
    welcomeDom.innerHTML = "Welcome Back";
  }

  let usernameDom = document.getElementById("edit-userName");
  //let diet_value = document.getElementById("edit-diet");
  //dietDom.selectedIndex = 4;

  //let selected_diet = "vegan";

  //for (let i = 0; i < dietDom.options.length; i++) {
  // if (dietDom.options[i].value == selected_diet) {
  // dietDom.options[i].selected = true; // Set the 'selected' attribute
  //  break; // Exit the loop once the desired option is found
  //  console.log("match");
  // }
  //}

  let selected;

  let diet_to_display = dietData.map((item) => {
    if (item == diet) {
      selected = "selected";
    } else {
      selected = "";
    }

    return ` <option value=${item} ${selected} class="opt" >${item}</option>`;
  });
  dietDom.innerHTML = diet_to_display;

  //  selected = lang == "en-US" ? "selected" : "";

  // selected = lang == "fr-FR" ? "selected" : "";

  //dietDom.options.forEach((item) => {
  // if (item.value == selected_diet) {
  //  item.selected = true;
  //  setAttribute("selected", "true");
  // }
  //});

  //var options = dietDom.options;
  //var key;
  //for (key in options) {
  //  if (options[key].value == selected_diet) {
  //   options[key].setAttribute("selected", "true");
  // }
  //}

  usernameDom.value = username;
  document.getElementById("edit-email").value = email;

  if (userPicture) {
    profileImageDom.innerHTML = `<img src=${userPicture} alt="" class="userImg">`;
  } else {
    profileImageDom.innerHTML = `<h1 class="img-span-text">${username.charAt(
      0
    )}</h1>`;
  }

  const username3 = document.getElementById("userName");
  if (username3) {
    username3.innerHTML = username;
  }

  let edit_allergies = allergies.map((item) => {
    return `<p class="allergy1 capitalised">${item} <span><i class='bx bx-x' id="bx-x"></i></span></p>`;
  });
  edit_allergies = edit_allergies.join("");
  document.querySelector(".allergy-container1").innerHTML = edit_allergies;

  const allergies_remove_btns = document.querySelectorAll("#bx-x");
  allergies_remove_btns.forEach((btn, id) => {
    if (btn) {
      btn.addEventListener("click", () => {
        console.log("hi");

        let new_allergies = allergies.filter((item, index) => {
          if (index !== id) {
            return item;
          }
        });

        //display new allergies after filter
        let newest_allergies = new_allergies.map((item) => {
          return `<p class="allergy1 capitalised">${item} <span><i class='bx bx-x' id="bx-x"></i></span></p>`;
        });
        document.querySelector(".allergy-container1").innerHTML =
          newest_allergies;

        //  user = {
        //  user: {
        //    email: user.email,
        //   username: user.value,
        //   diet: user.value,
        //   allergies: new_allergies,
        //   intolerance: user.intolerance,
        //   token: user.token,
        // },
        // };
        user.allergies = new_allergies;
        sessionStorage.setItem("updatedUser", JSON.stringify(user));
        console.log(user);
      });
    }
  });

  let edit_intolerance = intolerance.map((item) => {
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

        let new_intolerance = intolerance.filter((item, index) => {
          if (index !== id) {
            return item;
          }
        });

        //display new allergies after filter
        let newest_intolerance = new_intolerance.map((item) => {
          return `<p class="allergy1 capitalised">${item} <span><i class='bx bx-x' id="bx-x"></i></span></p>`;
        });
        document.querySelector("#intolerance-container1").innerHTML =
          newest_intolerance;

        // user = {
        //  user: {
        //    email: user.email,
        //   username: user.username,
        //   diet: user.diet,
        //   allergies: user.allergies,
        //  intolerance: new_intolerance,
        //  token: user.token,
        // },
        // };

        user.intolerance = new_intolerance;
        sessionStorage.setItem("updatedUser", JSON.stringify(user));
        console.log(user);
      });
    }
  });

  saveBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const user = JSON.parse(sessionStorage.getItem("updatedUser"));

    console.log(user);

    // user = {
    //  email: user.email,
    //  username: user.username,
    //   diet: user.diet,
    //   allergies: user.allergies,
    //   intolerance: user.intolerance,
    //  token: user.token,
    // };

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
            sessionStorage.setItem("user", JSON.stringify(response.user))
          )
          .then(() => {});
      })
      .catch((error) => console.log(error));
  });

  //updating edited username in sessionStorage

  usernameDom.addEventListener("input", (e) => {
    e.preventDefault();
    const new_name = e.target.value;
    console.log(new_name);

    //user = {
    //  user: {
    //   email: user.email,
    //  username: new_name,
    //  diet: user.diet,
    //  allergies: user.allergies,
    //  intolerance: user.intolerance,
    //  token: user.token,
    // },
    // };
    user.username = new_name;
    sessionStorage.setItem("updatedUser", JSON.stringify(user));
  });

  // onchange mlogic for alergies select
  selectedValue = () => {
    // var selected_options = allergy_selectDom.selectedOptions;
    // for (var i = 0; i < selected_options.length; i++) {
    //  // echoes the text of the option
    //  let theLang = selected_options[i].text;
    //   console.log(theLang);
    // }
  };

  allergy_selectDom.forEach((DOM, index) => {
    DOM.addEventListener("change", () => {
      if (index == 0) {
        // var value = DOM.options[DOM.selectedIndex].value;
        allergies_added = DOM.options[DOM.selectedIndex].text;

        console.log(allergies_added);
        user.allergies = [...user.allergies, allergies_added];

        sessionStorage.setItem("updatedUser", JSON.stringify(user));
      }
      if (index == 1) {
        intolerance_added = DOM.options[DOM.selectedIndex].text;

        console.log(intolerance_added);
        user.intolerance = [...user.intolerance, intolerance_added];

        sessionStorage.setItem("updatedUser", JSON.stringify(user));
      }
    });
  });

  //Add allergies to dom

  add_allergies_btn.addEventListener("click", async () => {
    const user = await JSON.parse(sessionStorage.getItem("updatedUser"));
    let { allergies } = user;

    // user = {
    //   user: {
    //    email: user.email,
    //    username: user.username,
    //    diet: user.diet,
    //   allergies: allergyArray,
    //   intolerance: user.intolerance,
    //   token: user.token,
    // },
    // };

    let allergies_to_add = allergies.map((item) => {
      return `<p class="allergy1 capitalised">${item} <span><i class='bx bx-x' id="bx-x"></i></span></p>`;
    });
    allergies_to_add = allergies_to_add.join("");
    document.querySelector(".allergy-container1").innerHTML = allergies_to_add;
  });

  //add_intolerance_btn;

  add_intolerance_btn.addEventListener("click", async () => {
    const user = await JSON.parse(sessionStorage.getItem("updatedUser"));
    let { intolerance } = user;

    // user = {
    //   user: {
    //    email: user.email,
    //    username: user.username,
    //    diet: user.diet,
    //   allergies: allergyArray,
    //   intolerance: user.intolerance,
    //   token: user.token,
    // },
    // };

    let intolerance_to_add = intolerance.map((item) => {
      return `<p class="allergy1 capitalised">${item} <span><i class='bx bx-x' id="bx-x"></i></span></p>`;
    });
    intolerance_to_add = intolerance_to_add.join("");
    document.querySelector("#intolerance-container1").innerHTML =
      intolerance_to_add;
  });

  dietDom.addEventListener("change", () => {
    let updated_diet = dietDom.options[dietDom.selectedIndex].text;
    console.log(dietDom.options[dietDom.selectedValue]);
    console.log(updated_diet);
    user.diet = updated_diet;
    sessionStorage.setItem("updatedUser", JSON.stringify(user));
  });

  uploadForm.addEventListener("submit", handleSubmit);

  function handleSubmit(e) {
    e.preventDefault();

    defaultUploadBtn.addEventListener("change", (e) => {
      imageFile = e.target.files[0];

      if (imageFile) {
        console.log(imageFile);
        //   upload(imageFile);

        const formData = new FormData();
        formData.append("userPicture", imageFile);
        console.log("form data" + formData);

        try {
          fetch("http://localhost:3000/api/v1/auth/uploads", {
            method: "POST",
            // headers: {
            //   "Content-Type": "multipart/form-data",
            // },
            body: formData,
          })
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              const {
                userPicture: { src },
              } = data;
              console.log(src);
              user.userPicture = src;
              sessionStorage.setItem("updatedUser", JSON.stringify(user));
              profileImageDom.innerHTML = `<img src=${src} alt="" class="userImg">`;
            });
        } catch (error) {
          imageUrl = null;
          console.log(error);
        }
      }
    });
  }

  /**
async function upload(imageFile) {
  const formData = new FormData();
  formData.append("userPicture", imageFile);
  console.log("form data" + formData);

  try {
    const data = await fetch("http://localhost:3000/api/v1/auth/uploads", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });

    imageUrl = data;
    console.log(imageUrl);
  } catch (error) {
    imageUrl = null;
    console.log(error);
  }
   
}
 */
  //upload picture  in edit profile page logic
  defaultBtnActive = () => {
    defaultUploadBtn.click();
    console.log("Hi");
  };

  customBtn.addEventListener("click", defaultBtnActive);
}
