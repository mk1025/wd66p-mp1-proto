"use strict";
var _a;
const navbar = document.getElementById("nav-bar");
const scrollhead = document.getElementById("Scroll-Head");
const featureBtn = document.getElementById("Feature-btn");
const featureBtnMobile = document.getElementById("Feature-btn-mb");
const featureSct = document.getElementById("Feature-sct");
const sideMenu = document.getElementById("side-menu");
let scrollChange = false;
window.addEventListener("scroll", () => {
    const scrollPosition = document.querySelector("body").scrollHeight * 0.3;
    let isScrolledPast = window.scrollY >= scrollPosition;
    // console.log(`${isScrolledPast} == ${scrollChange}`);
    console.log(scrollPosition);
    // window.scrollY >= 50
    //   ? scrollhead?.classList.remove("hidden")
    //   : scrollhead?.classList.add("hidden");
    if (!scrollChange &&
        isScrolledPast &&
        (sideMenu === null || sideMenu === void 0 ? void 0 : sideMenu.classList.contains("hidden"))) {
        navbar === null || navbar === void 0 ? void 0 : navbar.classList.remove("bg-none");
        navbar === null || navbar === void 0 ? void 0 : navbar.classList.add("bg-white");
        scrollChange = true;
    }
    else if (scrollChange &&
        !isScrolledPast &&
        (sideMenu === null || sideMenu === void 0 ? void 0 : sideMenu.classList.contains("hidden"))) {
        navbar === null || navbar === void 0 ? void 0 : navbar.classList.remove("bg-white");
        navbar === null || navbar === void 0 ? void 0 : navbar.classList.add("bg-none");
        scrollChange = false;
    }
});
scrollhead === null || scrollhead === void 0 ? void 0 : scrollhead.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
featureBtn === null || featureBtn === void 0 ? void 0 : featureBtn.addEventListener("click", () => {
    featureSct === null || featureSct === void 0 ? void 0 : featureSct.scrollIntoView({ behavior: "smooth" });
});
featureBtnMobile === null || featureBtnMobile === void 0 ? void 0 : featureBtnMobile.addEventListener("click", () => {
    toggleClass("side-menu", "hidden");
    featureSct === null || featureSct === void 0 ? void 0 : featureSct.scrollIntoView({ behavior: "smooth" });
});
function showDialog(id) {
    let dialog = document.getElementById(id);
    dialog === null || dialog === void 0 ? void 0 : dialog.showModal();
}
function toggleClass(id, target) {
    let element = document.getElementById(id);
    element.classList.toggle(target);
}
(_a = document.getElementById("side-menu-btn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    toggleClass("side-menu", "hidden");
});
