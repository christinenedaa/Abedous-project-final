if (!localStorage.getItem("lang")) localStorage.setItem("lang", "en");

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
