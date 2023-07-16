/*=========================================
Password section Hide/View
=========================================*/
let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.onclick = () => {
  if (password.type == "password") {
    password.type = "text";
    eyeicon.src = "Images/logo/eye-open.png";
  } else {
    password.type = "password";
    eyeicon.src = "Images/logo/eye-close.png";
  }
};
/*=========================================
Login-Form Validation and Submission
=========================================*/
const token = JSON.stringify(localStorage.getItem("token"));
let email = document.getElementById("email");
const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  // Prevent form submission
  e.preventDefault();

  if (email.value == null || email.value === "") {
    alert("Email address cannot be blank");
    return false;
  } else if (password.value == null || password.value === "") {
    alert("Password cannot be blank");
    return false;
  } else if (password.value.length <= 7) {
    alert("Password must be at least 8 characters long.");
    return false;
  } else if (password.value.length >= 20) {
    alert("Password must be less than 20 characters.");
    return false;
  } else if (password.value === "password") {
    alert("Password cannot be password.");
    return false;
  } else {
    // Collect form data
    var formData = new FormData(this);
    email = email.value;
    password = password.value;

    const data = { email: email, password: password };

    // Make a POST request using fetch API
    fetch("http://localhost:3000/api/v1/auth/login", {
      //fetch("https://foodlens.onrender.com/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then(function (response) {
        if (response.ok) {
          return response
            .json()
            .then((data) => {
              console.log(data.user);

              let loggedIn = true;
              sessionStorage.setItem("user", JSON.stringify(data.user));
              console.log(data.user.token);
               localStorage.setItem("token", `${data.user.token}`);
              // sessionStorage.setItem("updatedUser", JSON.stringify(data.user));
              localStorage.setItem("loggedIn", loggedIn);
              
              if (data.user) {
                //  window.location.href = "dashboard2.html";
                // }
                var queryParams = new URLSearchParams({
                  username: data.user.username,
                });
                window.location.href =
                  "dashboard2.html?" + queryParams.toString();
              }
              console.log("Login successful!");
              if (sessionStorage.getItem("loggedIn")) {
                welcomeFlag();
              }
            })
            .then(() => {
              console.log("login again");
            });

          // Successful response handling
        } else {
          // Error response handling
          // window.location.href = "login.html";
          console.log("Invalid credentials.");
        }
      })
      .catch(function (error) {
        // Network or fetch API error handling
        console.log(
          "An error occurred whilst fetching login POST - data:",
          error
        );
      });
  }
});

function welcomeFlag() {
  const lastVisited = localStorage.getItem("lastVisited");
  const present = new Date().getTime();

  if (!lastVisited || present - lastVisited > 12 * 60 * 60 * 1000) {
    localStorage.setItem("firstLogin", true);
    localStorage.setItem("lastVisited", new Date().getTime());
  }
}
