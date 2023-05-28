const navbar = document.getElementById("nav-bar");
const scrollhead = document.getElementById("Scroll-Head");
const featureBtn = document.getElementById("Feature-btn");
const featureBtnMobile = document.getElementById("Feature-btn-mb");
const featureSct = document.getElementById("Feature-sct");
const sideMenu = document.getElementById("side-menu");
let scrollChange = false;

window.addEventListener("scroll", () => {
  const scrollPosition = document.querySelector("body")!.scrollHeight * 0.3;

  let isScrolledPast = window.scrollY >= scrollPosition;
  // console.log(`${isScrolledPast} == ${scrollChange}`);

  console.log(scrollPosition);
  // window.scrollY >= 50
  //   ? scrollhead?.classList.remove("hidden")
  //   : scrollhead?.classList.add("hidden");

  if (
    !scrollChange &&
    isScrolledPast &&
    sideMenu?.classList.contains("hidden")
  ) {
    navbar?.classList.remove("bg-none");
    navbar?.classList.add("bg-white");

    scrollChange = true;
  } else if (
    scrollChange &&
    !isScrolledPast &&
    sideMenu?.classList.contains("hidden")
  ) {
    navbar?.classList.remove("bg-white");
    navbar?.classList.add("bg-none");
    scrollChange = false;
  }
});

scrollhead?.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

featureBtn?.addEventListener("click", () => {
  featureSct?.scrollIntoView({ behavior: "smooth" });
});

featureBtnMobile?.addEventListener("click", () => {
  toggleClass("side-menu", "hidden");
  featureSct?.scrollIntoView({ behavior: "smooth" });
});

function showDialog(id: string) {
  let dialog = document.getElementById(id) as HTMLDialogElement;
  dialog?.showModal();
}

function toggleClass(id: string, target: string) {
  let element = document.getElementById(id) as HTMLElement;
  element.classList.toggle(target);
}

document.getElementById("side-menu-btn")?.addEventListener("click", () => {
  toggleClass("side-menu", "hidden");
});
