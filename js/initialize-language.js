if (!localStorage.getItem("lang")) localStorage.setItem("lang", "en");

const currentLanguage = localStorage.getItem("lang");

const english = document.querySelectorAll("a.dropdown-item")[0];
const arabic = document.querySelectorAll("a.dropdown-item")[1];

english.style.cursor = "pointer";
arabic.style.cursor = "pointer";

english.addEventListener("click", () => changeLanguage("en"));
arabic.addEventListener("click", () => changeLanguage("ar"));

function changeLanguage(lang) {
  localStorage.setItem("lang", lang);
  window.location.reload();
}

if (currentLanguage == "ar") {
  const body = document.querySelector("body");
  body.setAttribute("dir", "rtl");

  const navBar = document.querySelector(
    "ul.navbar-nav.navbar-nav-scroll.animate__animated.animate__heartBeat"
  );
  navBar.classList.remove("ms-auto");
  navBar.classList.add("me-auto");

  const wavyAbedousGroup = document.querySelector(".wavy");
  wavyAbedousGroup?.setAttribute("dir", "ltr");

  const pageTitle = document.querySelector("title");
  pageTitle.innerText = "ابيدوس";
}
