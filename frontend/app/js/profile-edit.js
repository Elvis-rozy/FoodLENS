const token = localStorage.getItem("token");

const allergiesContainer = document.querySelector(".allergy-container1");
const intoleranceContainer = document.querySelector("#intolerance-container1");

const saveBtn = document.querySelector(".save-btn");
const add_allergies_btn = document.querySelector(".add-allergies");
const add_intolerance_btn = document.querySelector(".add-intolerance");
let dietDom = document.getElementById("edit-diet");
const uploadForm = document.querySelector(".upload");
const defaultUploadBtn = document.querySelector(".default-camera-btn");
const customBtn = document.querySelector(".camBtn");
const profileImageDom = document.querySelector(".img-span");
const welcomeDom = document.querySelector(".welcome");
let firstLogin = localStorage.getItem("firstLogin");
let usernameDom = document.getElementById("edit-userName");
let selected;

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

window.addEventListener("DOMContentLoaded", () => displayProfile());

function fecthData() {
  const user = JSON.parse(sessionStorage.getItem("updatedUser"));
  let { email, diet, username, intolerance, allergies, userPicture } = user;

  console.log(username);
  return user;
}

function loadWelcomeMessage() {
  setTimeout(() => {
    welcomeDom.innerHTML = `<i class="bx bxs-user-circle"></i>`;
  }, 5000);

  if (firstLogin) {
    welcomeDom.innerHTML = "Welcome";
  } else {
    welcomeDom.innerHTML = "Welcome Back";
  }
}

function loadDiet(diet) {
  let diet_to_display = dietData.map((item) => {
    if (item == diet) {
      selected = "selected";
    } else {
      selected = "";
    }

    return ` <option value=${item} ${selected} class="opt" >${item}</option>`;
  });
  dietDom.innerHTML = diet_to_display;
  dietDom.addEventListener("change", async () => {
    const user = await fecthData();
    let updated_diet = dietDom.options[dietDom.selectedIndex].text;
    console.log(dietDom.options[dietDom.selectedValue]);
    console.log(updated_diet);
    user.diet = updated_diet;
    sessionStorage.setItem("updatedUser", JSON.stringify(user));
    displayProfile();
  });
}

async function displayProfile() {
  const user = await fecthData();
  //console.log(user)
  let { email, diet, username, intolerance, allergies, userPicture } = user;

  loadWelcomeMessage();

  loadDiet(diet);
  usernameDom.value = username;
  document.getElementById("edit-email").value = email;

  displayProfilePicture(username, userPicture);

  const username3 = document.getElementById("userName");
  if (username3) {
    username3.innerHTML = username;
  }

  displayAllergies_intolerance(allergiesContainer, allergies);
  displayAllergies_intolerance(intoleranceContainer, intolerance);
}

function displayProfilePicture(username, userPicture) {
  if (userPicture) {
    profileImageDom.innerHTML = `<img src=${userPicture} alt="" class="userImg">`;
  } else {
    profileImageDom.innerHTML = `<h1 class="img-span-text">${username.charAt(
      0
    )}</h1>`;
  }
}

/** */

function t() {
  let edit_allergies = allergies.map((item, index) => {
    return `<p class="allergy1 capitalised">${item} <span><i class='bx bx-x' id="bx-x" data-index=${index}></i></span></p>`;
  });
  edit_allergies = edit_allergies.join("");
  document.querySelector(".allergy-container1").innerHTML = edit_allergies;

  document
    .querySelector(".allergy-container1")
    .addEventListener("click", (e) => {
      if (e.target.matches(/*"#bx-x"*/ "[data-index]")) {
        console.log("clicked");
        let newId = parseInt(e.target.dataset.index, 10);
        //console.log(newId);
        const lowercaseItem = allergies[newId].toLowerCase();
        // let itemPressed = e.target.parentElement.parentElement.innerText;
        //let lowercaseItem = itemPressed.toLowerCase();
        console.log(lowercaseItem);

        let new_allergies = allergies.filter((item) => {
          console.log(item);
          return item !== lowercaseItem;
        });

        // Display new allergies after filter
        let newest_allergies = new_allergies.map((item, newIndex) => {
          return `<p class="allergy1 capitalised">${item} <span><i class='bx bx-x' id="bx-x" data-index=${newIndex}></i></span></p>`;
        });
        document.querySelector(".allergy-container1").innerHTML =
          newest_allergies.join("");
        window.location.reload();
        user.allergies = new_allergies;
        sessionStorage.setItem("updatedUser", JSON.stringify(user));
        console.log(user);
      }
    });

  let edit_intolerance = intolerance.map((item, index) => {
    return ` <p class="allergy1 capitalised">${item} <span><i class='bx bx-x'  id="bx-x1" data-index=${index}></i></span></p>`;
  });
  edit_intolerance = edit_intolerance.join("");
  document.querySelector("#intolerance-container1").innerHTML =
    edit_intolerance;

  document
    .querySelector("#intolerance-container1")
    .addEventListener("click", (e) => {
      if (e.target.matches(/*"#bx-x1"*/ "[data-index]")) {
        //  let itemPressed = e.target.parentElement.parentElement.innerText;
        //  let lowercaseItem = itemPressed.toLowerCase();
        let newId = parseInt(e.target.dataset.index, 10);
        const lowercaseItem = intolerance[newId].toLowerCase();
        let new_intolerance = intolerance.filter((item) => {
          return item !== lowercaseItem;
        });

        // Display new intolerance items after filter
        let newest_intolerance = new_intolerance.map((item, newIndex) => {
          return `<p class="allergy1 capitalised">${item} <span><i class='bx bx-x' id="bx-x1" data-index=${newIndex}></i></span></p>`;
        });
        document.querySelector("#intolerance-container1").innerHTML =
          newest_intolerance.join("");
        window.location.reload();
        user.intolerance = new_intolerance;
        sessionStorage.setItem("updatedUser", JSON.stringify(user));
        console.log(user);
      }
    });

  //updating edited username in sessionStorage

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

    let allergies_to_add = allergies.map((item, index) => {
      return `<p class="allergy1 capitalised">${item} <span><i class='bx bx-x' id="bx-x" data-index=${index}></i></span></p>`;
    });
    allergies_to_add = allergies_to_add.join("");
    document.querySelector(".allergy-container1").innerHTML = allergies_to_add;
    window.location.reload();
  });

  //add_intolerance_btn;

  add_intolerance_btn.addEventListener("click", async () => {
    const user = await JSON.parse(sessionStorage.getItem("updatedUser"));
    let { intolerance } = user;

    let intolerance_to_add = intolerance.map((item, newIndex) => {
      return `<p class="allergy1 capitalised">${item} <span><i class='bx bx-x' id="bx-x1" data-index=${newIndex}></i></span></p>`;
    });
    intolerance_to_add = intolerance_to_add.join("");
    document.querySelector("#intolerance-container1").innerHTML =
      intolerance_to_add;
    window.location.reload();
  });
}

// Profile upload logic

defaultBtnActive = () => {
  defaultUploadBtn.click();
  console.log("Hi");
};

customBtn.addEventListener("click", defaultBtnActive);

uploadForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  defaultUploadBtn.addEventListener("change", async (e) => {
    const user = await fecthData();
    console.log(user);

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

//save profile logic
function saveProfile() {
  const user = JSON.parse(sessionStorage.getItem("updatedUser"));

  console.log(user);

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
        .then((response) =>
          sessionStorage.setItem("updatedUser", JSON.stringify(response.user))
        )
        .then(() => {});
    })
    .catch((error) => console.log(error));
}

//save profile logic
saveBtn.addEventListener("click", (e) => {
  e.preventDefault();
  saveProfile();
  displayProfile();
});

//updating username
usernameDom.addEventListener("input", async (e) => {
  const user = await fecthData();
  e.preventDefault();
  const new_name = e.target.value;
  console.log(new_name);

  user.username = new_name;
  sessionStorage.setItem("updatedUser", JSON.stringify(user));
});

//allergies and intolerance display
async function displayAllergies_intolerance(container, array) {
  let edit_allergies = array.map((item, index) => {
    return `<p class="allergy1 capitalised">${item} <span><i class='bx bx-x' id="bx-x" data-index=${index}></i></span></p>`;
  });
  edit_allergies = edit_allergies.join("");
  container.innerHTML = edit_allergies;
}

//allergies ad intolerance selection
allergy_selectDom.forEach(async (DOM, index) => {
  const user = await fecthData();
  DOM.addEventListener("change", () => {
    if (index == 0) {
      console.log("Hi");
      // var value = DOM.options[DOM.selectedIndex].value;
      allergies_added = DOM.options[DOM.selectedIndex].text;

      console.log(allergies_added);
      user.allergies = [...user.allergies, allergies_added];

      console.log(user);
      sessionStorage.setItem("updatedUser", JSON.stringify(user));
    }
    if (index == 1) {
      console.log("Hello");
      intolerance_added = DOM.options[DOM.selectedIndex].text;

      console.log(intolerance_added);
      user.intolerance = [...user.intolerance, intolerance_added];

      sessionStorage.setItem("updatedUser", JSON.stringify(user));
    }
  });
});

//add allergies and intolerance btn
function addAllergies_intolerance(container, array) {
  let allergies_to_add = array.map((item, index) => {
    return `<p class="allergy1 capitalised">${item} <span><i class='bx bx-x' id="bx-x" data-index=${index}></i></span></p>`;
  });
  allergies_to_add = allergies_to_add.join("");
  container.innerHTML = allergies_to_add;
  //window.location.reload();
}

//add allergies
add_allergies_btn.addEventListener("click", async () => {
  const user = await JSON.parse(sessionStorage.getItem("updatedUser"));
  let { allergies } = user;
  addAllergies_intolerance(allergiesContainer, allergies);
});

//add intolerance
add_intolerance_btn.addEventListener("click", async () => {
  const user = await JSON.parse(sessionStorage.getItem("updatedUser"));
  let { intolerance } = user;
  addAllergies_intolerance(intoleranceContainer, intolerance);
});

//remove allergy

allergiesContainer.addEventListener("click", async (e) => {
  const user = await fecthData();
  const { allergies } = user;
  if (e.target.matches(/*"#bx-x"*/ "[data-index]")) {
    console.log("clicked");
    let newId = parseInt(e.target.dataset.index, 10);
    //console.log(newId);
    const lowercaseItem = allergies[newId].toLowerCase();
    // let itemPressed = e.target.parentElement.parentElement.innerText;
    //let lowercaseItem = itemPressed.toLowerCase();
    console.log(lowercaseItem);

    let new_allergies = allergies.filter((item) => {
      console.log(item);
      return item !== lowercaseItem;
    });

    // Display new allergies after filter
    let newest_allergies = new_allergies.map((item, newIndex) => {
      return `<p class="allergy1 capitalised">${item} <span><i class='bx bx-x' id="bx-x" data-index=${newIndex}></i></span></p>`;
    });
    allergiesContainer.innerHTML = newest_allergies.join("");
    // window.location.reload();
    user.allergies = new_allergies;
    sessionStorage.setItem("updatedUser", JSON.stringify(user));
    console.log(user);
  }
});

intoleranceContainer.addEventListener("click", async (e) => {
  const user = await fecthData();
  const { intolerance } = user;
  if (e.target.matches(/*"#bx-x"*/ "[data-index]")) {
    console.log("clicked");
    let newId = parseInt(e.target.dataset.index, 10);
    //console.log(newId);
    const lowercaseItem = intolerance[newId].toLowerCase();
    // let itemPressed = e.target.parentElement.parentElement.innerText;
    //let lowercaseItem = itemPressed.toLowerCase();
    console.log(lowercaseItem);

    let new_allergies = intolerance.filter((item) => {
      console.log(item);
      return item !== lowercaseItem;
    });

    // Display new allergies after filter
    let newest_allergies = new_allergies.map((item, newIndex) => {
      return `<p class="allergy1 capitalised">${item} <span><i class='bx bx-x' id="bx-x" data-index=${newIndex}></i></span></p>`;
    });
    intoleranceContainer.innerHTML = newest_allergies.join("");
    // window.location.reload();
    user.intolerance = new_allergies;
    sessionStorage.setItem("updatedUser", JSON.stringify(user));
    console.log(user);
  }
});
