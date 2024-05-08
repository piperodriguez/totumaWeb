$(document).ready(function(){
    document.querySelector("#sidebar").classList.toggle("expand");
 });
const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
   document.querySelector("#sidebar").classList.toggle("expand");
});