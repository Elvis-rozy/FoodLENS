const profileLink = document.querySelector(".profile-link");
const profileEditLink = document.querySelector(".profileEdit-link");

const profileDetails =  document.querySelector(".personal-details");
const profileEditDetails =  document.querySelector(".profile-edit");

profileEditLink.onclick = () => {
    profileLink.classList.add('show');
    profileLink.classList.remove('off');
    profileEditLink.classList.add('off');
    profileEditLink.classList.remove('show');

    profileEditDetails.classList.toggle('Hide');
    profileDetails.classList.toggle('Hide');
}

profileLink.onclick = () => {
    profileLink.classList.add('off');
    profileLink.classList.remove('show');
    profileEditLink.classList.add('show');
    profileEditLink.classList.remove('off');

    profileEditDetails.classList.toggle('Hide');
    profileDetails.classList.toggle('Hide');
}
/*=========================================
Password section Hide/View
=========================================*/
let eyeicon1 = document.getElementById('eyeicon1');
let eyeicon2 = document.getElementById('eyeicon2');
let eyeicon3 = document.getElementById('eyeicon3');
let password1 = document.getElementById('password1');
let password2 = document.getElementById('password2');
let password3 = document.getElementById('password3');

eyeicon1.onclick = ()  => {
    if (password1.type == "password") {
        password1.type = "text";
        eyeicon1.src = "Images/logo/eye-open.png";
    } else {
        password1.type = "password";
        eyeicon1.src = "Images/logo/eye-close.png";
    }
}
eyeicon2.onclick = ()  => {
    if (password2.type == "password") {
        password2.type = "text";
        eyeicon2.src = "Images/logo/eye-open.png";
    } else {
        password2.type = "password";
        eyeicon2.src = "Images/logo/eye-close.png";
    }
}
eyeicon3.onclick = ()  => {
    if (password3.type == "password") {
        password3.type = "text";
        eyeicon3.src = "Images/logo/eye-open.png";
    } else {
        password3.type = "password";
        eyeicon3.src = "Images/logo/eye-close.png";
    }
}
/*=========================================
Update-Form Validation and Submission
=========================================*/
const username = document.getElementById('name');
const email = document.getElementById('email');
const form = document.getElementById('form');

form.addEventListener('submit', function (e) {
    // Collect form data
    var formData = new FormData(this);
    function passValue () {
        const username = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const diet = document.getElementById('diet').value;
        const img = document.getElementById('photo').getAttribute('src');
        sessionStorage.setItem('textvalue', username);
        sessionStorage.setItem('emailvalue', email);
        sessionStorage.setItem('dietvalue', diet);
        sessionStorage.setItem('imgvalue', img);
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
            alert("Dashboard Updated");
            console.log("Dashboard Updated");
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
})
/*========================================
Dashboard image edit
=========================================*/
const imgDiv = document.querySelector('.image-edit');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');

//setting an event listener to the file seelector to perform function when image is received
file.addEventListener('change', function (){
    //the first file received from the user selection is then saved in a variable
    const chosenFile = this.files[0];
    if (chosenFile) {
        //using the filereader function to load the received file into the source of the img tag
        const reader = new FileReader();
        reader.addEventListener('load', function (){
            img.setAttribute('src', reader.result);
        })
        reader.readAsDataURL(chosenFile);
    }
})