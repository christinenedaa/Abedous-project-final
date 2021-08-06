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
}
