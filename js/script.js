var link = document.querySelector(".subscription-form .form-btn");
var popup = document.querySelector(".modal-form");
var close = document.querySelector(".modal-form .close-btn");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-form-show");
});
close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-form-show");
});