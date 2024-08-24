'use strict'

let  navToggler = document.getElementById("toggle");
let cancel = document.querySelector(".cancel");
let navCont = document.querySelector(".nav-links");

navToggler.addEventListener("click", openNav);
cancel.addEventListener("click", closeNav);

function openNav() {
    navCont.classList.add("active");
}

function closeNav() {
    navCont.classList.remove("active");
}