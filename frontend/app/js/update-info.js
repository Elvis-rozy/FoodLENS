/*=========================================
Password section Hide/View
=========================================*/
let eyeicon = document.getElementById('eyeicon');
let password = document.getElementById('password');

eyeicon.onclick = ()  => {
    if (password.type == "password") {
        password.type = "text";
        eyeicon.src = "Images/logo/eye-open.png";
    } else {
        password.type = "password";
        eyeicon.src = "Images/logo/eye-close.png";
    }
}
/*=========================================
Update-Form Validation and Submission
=========================================*/
const username = document.getElementById('name');
const email = document.getElementById('email');
const form = document.getElementById('form');

form.addEventListener('submit', function (e) {

    if (username.value == null || username.value === "") {
        e.preventDefault();
        alert("Username is required");
        return false;
    } else if (username.value.length < 6) {
        e.preventDefault();
        alert("Username must be 6 characters or more");
        return false;
    } else if (email.value == null || email.value === "") {
        e.preventDefault();
        alert("Email address cannot be blank");
        return false;
    } else if (password.value == null || password.value === "") {
        e.preventDefault();
        alert("Password cannot be blank");
        return false;
    } else if (password.value.length <= 7) {
        e.preventDefault();
        alert("Password must be at least 8 characters long.");
        return false;
    } else if (password.value.length >= 20) {
        e.preventDefault();
        alert("Password must be less than 20 characters.");
        return false;
    } else if (password.value === 'password') {
        e.preventDefault();
        alert("Password cannot be password.");
        return false;
    } else {
        // Collect form data
        var formData = new FormData(this);

        function passValue () {
            const username = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const bio = document.getElementById('bio').value;
            const carb = document.getElementById('carbPercent').value;
            const prot = document.getElementById('protPercent').value;
            const fat = document.getElementById('fatPercent').value;
            const preference = document.getElementById('preference').value;
            const allergens = document.getElementById('allergens').value;
            sessionStorage.setItem('textvalue', username);
            sessionStorage.setItem('emailvalue', email);
            sessionStorage.setItem('biovalue', bio);
            sessionStorage.setItem('carbvalue', carb);
            sessionStorage.setItem('protvalue', prot);
            sessionStorage.setItem('fatvalue', fat);
            sessionStorage.setItem('preferencevalue', preference);
            sessionStorage.setItem('allergenvalue', allergens);
            return false;
        }

        passValue();

        // Make a POST request using fetch API
        fetch("http://localhost:3000/api/v1/auth/updateUser", {
            method: "POST" ,
            body: formData
        }).then(function(response) {
            if (response.ok) {
                // Successful response handling
                alert("New form data successfully submitted!");
                console.log("New form data successfully submitted!");
            } else {
                // Error response handling
                console.log("Error submitting form data.");
                console.error(error);
            }
        })
        .catch(function(error) {
            // Network or fetch API error handling
            console.log("An error occurred whilst fetching update POST - data:", error);
        });
    }
})