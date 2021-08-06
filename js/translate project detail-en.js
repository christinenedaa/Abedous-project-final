console.log(i18next);

i18next.init({
  // lng: currentLanguage, // if you're using a language detector, do not define the lng option

  resources: {
    en: {
      translation: {
        projecthead: "Projects",
      },
    },
    ar: {
      translation: {
        projecthead: "المشاريع",
      },
    },
  },
});
// initialized and ready to go!
// i18next is already initialized, because the translation resources where passed via init function
document.querySelector("#projecthead").innerHTML = i18next.t("projecthead");
