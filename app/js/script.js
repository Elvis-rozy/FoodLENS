const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
        } else {
            entry.target.classList.remove('appear');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((elem) => observer.observe(elem));


/* const first = document.querySelector(".A");
const second = document.querySelector(".B");
const third = document.querySelector(".C");
const fourth = document.querySelector(".D");

const list = [first, second, third, fourth];

setInterval (function slideshow() {
    while (true) {
        for (let i = 0; i < list.length; i++){
            list[i-1].classList.add('slide-out');
            list[i].classList.add('slide-in');

        }
    }
}, 3000); */