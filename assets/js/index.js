let menuIcon = document.querySelector(".toggle-menu");
let menu = document.querySelector(".menu-drawer");
let overLay = document.querySelector(".menu-overlay");
// menu.style.backgroundColor = "red";
menuIcon.addEventListener("click", (e) => {
    menu.style.transform = "translateX(0)";
    overLay.style.opacity = "1";
    overLay.style.visibility = "visible";
});

overLay.addEventListener("click", (e) => {
    menu.style.transform = "translateX(-100%)";
    overLay.style.opacity = "0";
    overLay.style.visibility = "hidden";
});
