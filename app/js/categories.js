/*============================================
Category page head links Setup
============================================*/
const catgory_pastries = document.querySelector('.a');
const catgory_starch = document.querySelector('.b');
const catgory_meat = document.querySelector('.c');
const catgory_fruits = document.querySelector('.d');
const catgory_vegan = document.querySelector('.e');

const pastries = document.getElementById("pastries");
const starch = document.getElementById("starches");
const meat = document.getElementById("meat_seafood");
const fruits = document.getElementById("fruits");
const vegan = document.getElementById("vegan");


catgory_pastries.addEventListener('click', function() {
    catgory_pastries.classList.add('big');
    catgory_pastries.classList.remove('small');

    catgory_meat.classList.remove('big');
    catgory_starch.classList.remove('big');
    catgory_fruits.classList.remove('big');
    catgory_vegan.classList.remove('big');

    catgory_meat.classList.add('small');
    catgory_starch.classList.add('small');
    catgory_fruits.classList.add('small');
    catgory_vegan.classList.add('small');

    pastries.classList.remove('Hide');
    pastries.classList.add('Grid');

    starch.classList.add('Hide');
    meat.classList.add('Hide');
    fruits.classList.add('Hide');
    vegan.classList.add('Hide');
});

catgory_starch.addEventListener('click', function() {
    catgory_starch.classList.add('big');
    catgory_starch.classList.remove('small');

    catgory_meat.classList.remove('big');
    catgory_pastries.classList.remove('big');
    catgory_fruits.classList.remove('big');
    catgory_vegan.classList.remove('big');

    catgory_meat.classList.add('small');
    catgory_pastries.classList.add('small');
    catgory_fruits.classList.add('small');
    catgory_vegan.classList.add('small');

    starch.classList.remove('Hide');
    starch.classList.add('Grid');

    meat.classList.add('Hide');
    pastries.classList.add('Hide');
    fruits.classList.add('Hide');
    vegan.classList.add('Hide');
});

catgory_meat.addEventListener('click', function() {
    catgory_meat.classList.add('big');
    catgory_meat.classList.remove('small');

    catgory_starch.classList.remove('big');
    catgory_pastries.classList.remove('big');
    catgory_fruits.classList.remove('big');
    catgory_vegan.classList.remove('big');

    catgory_starch.classList.add('small');
    catgory_pastries.classList.add('small');
    catgory_fruits.classList.add('small');
    catgory_vegan.classList.add('small');

    meat.classList.remove('Hide');
    meat.classList.add('Grid');

    starch.classList.add('Hide');
    pastries.classList.add('Hide');
    fruits.classList.add('Hide');
    vegan.classList.add('Hide');
});


catgory_fruits.addEventListener('click', function() {
    catgory_fruits.classList.add('big');
    catgory_fruits.classList.remove('small');

    catgory_meat.classList.remove('big');
    catgory_pastries.classList.remove('big');
    catgory_starch.classList.remove('big');
    catgory_vegan.classList.remove('big');

    catgory_meat.classList.add('small');
    catgory_pastries.classList.add('small');
    catgory_starch.classList.add('small');
    catgory_vegan.classList.add('small');

    fruits.classList.remove('Hide');
    fruits.classList.add('Grid');

    starch.classList.add('Hide');
    meat.classList.add('Hide');
    pastries.classList.add('Hide');
    vegan.classList.add('Hide');
});

catgory_vegan.addEventListener('click', function() {
    catgory_vegan.classList.add('big');
    catgory_vegan.classList.remove('small');

    catgory_meat.classList.remove('big');
    catgory_pastries.classList.remove('big');
    catgory_starch.classList.remove('big');
    catgory_fruits.classList.remove('big');

    catgory_meat.classList.add('small');
    catgory_pastries.classList.add('small');
    catgory_starch.classList.add('small');
    catgory_fruits.classList.add('small');

    vegan.classList.remove('Hide');
    vegan.classList.add('Grid');

    starch.classList.add('Hide');
    meat.classList.add('Hide');
    pastries.classList.add('Hide');
    fruits.classList.add('Hide');
});