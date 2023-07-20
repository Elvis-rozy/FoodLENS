window.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");

  let loading = document.querySelector(".loading");
  let dashboard = document.querySelector(".dashboard-food");
  const userImage = document.querySelector(".flex-img");
  const userImage2 = document.querySelector(".flex-img2");
  //const avarta = `<h1 class="img-span-text">EA</h1>`;
  const welcomeDom = document.querySelector(".welcome");
  let firstLogin = localStorage.getItem("firstLogin");

  //hide dashboard

  dashboard.style.display = "none";
  loading.style.display = "block";

  //fetching user

  fetch("http://localhost:3000/api/v1/auth/getuser", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json().then((data) => {
        sessionStorage.setItem("user", JSON.stringify(data.user));
        sessionStorage.setItem("updatedUser", JSON.stringify(data.user));
      });
    })
    .catch((error) => console.log(error));

  const user = JSON.parse(sessionStorage.getItem("user"));
  const { email, username, allergies, intolerance, diet, userPicture } = user;

  setTimeout(() => {
    if (user) {
      setTimeout(() => {
        welcomeDom.innerHTML = `<i class="bx bxs-user-circle"></i>`;
      }, 5000);

      if (firstLogin) {
        welcomeDom.innerHTML = "Welcome";
      } else {
        welcomeDom.innerHTML = "Welcome Back";
      }

      //window.addEventListener("DOMContentLoaded", () => display_user_detail());

      if (userPicture) {
        userImage.innerHTML = `<img src=${userPicture}  class="edit-img"><p class="edit-text">Edit Profile</p>`;
        userImage2.innerHTML = `<img src=${userPicture}  class="profile-img">`;
        
       let editBtn = document.querySelector(".edit-text");
       editBtn.addEventListener("click", () => {
          window.location.href = "edit-page.html";
       });
      } else {
        userImage.innerHTML = `<h1 class="img-span-text2">${username.charAt(
          0
        )}</h1><p class="edit-text">Edit Profile</p>`;
        userImage2.innerHTML = `<h1 class="img-span-text1">${username.charAt(
          0
        )}</h1>`;
        
       let editBtn = document.querySelector(".edit-text");
       editBtn.addEventListener("click", () => {
         window.location.href="edit-page.html"
       });
      }

      const username1 = document.querySelector(".username");
      if (username1) {
        username1.innerHTML = username;
      }

      const username2 = document.querySelector("#username");
      if (username2) {
        username2.innerHTML = username;
      }

      const username3 = document.getElementById("userName");
      if (username3) {
        username3.innerHTML = username;
      }
      const email1 = document.getElementById("email");
      if (email1) {
        email1.innerHTML = email;
      }

      const username4 = document.getElementById("userName1");
      if (username4) {
        username4.innerHTML = username;
      }

      const email2 = document.getElementById("email2");
      if (email2) {
        email2.innerHTML = email;
      }

      const email3 = document.getElementById("email1");
      if (email3) {
        email3.innerHTML = email;
      }

      const dietDom = document.getElementById("diet");
      if (dietDom) {
        dietDom.innerHTML = diet;
      }
      /**
      editBtn.addEventListener("click", () => {
        var queryParams = new URLSearchParams({
          username: username,
        });
        window.location.href = "edit-page111.html?" + queryParams.toString();
      });

       */
      //document.querySelector(".username").innerHTML = user.username;
      //document.querySelector("#username").innerHTML = user.username;
      //document.getElementById("userName").innerHTML = user.username;
      //document.getElementById("email").innerHTML = user.email;
      //document.getElementById("userName1").innerHTML = user.username;
      //document.getElementById("email2").innerHTML = user.email;
      //document.getElementById("email1").innerHTML = user.email;
      //document.getElementById("diet").innerHTML = user.diet;

      let all_allergies = allergies.map((item) => {
        return ` <p class="allergy capitalised">${item}</p>`;
      });
      all_allergies = all_allergies.join("");
      document.querySelector(".allergy-container").innerHTML = all_allergies;

      let all_intolerance = intolerance.map((item) => {
        return ` <p class="allergy capitalised">${item}</p>`;
      });
      all_intolerance = all_intolerance.join("");
      document.querySelector("#intolerance").innerHTML = all_intolerance;

      dashboard.style.display = "block";
      loading.style.display = "none";
    }
  }, 2000);

  //end of dom loaded
});

