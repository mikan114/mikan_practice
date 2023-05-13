let btn = document.querySelector(".hamburger-menu");
let menyu = document.querySelector("#menyu-ran");
let none = document.querySelector(".none");

btn.onclick = () => {
    menyu.classList.toggle("open");
    none.classList.toggle("ari");
};