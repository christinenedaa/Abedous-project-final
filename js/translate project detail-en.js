console.log(i18next);

i18next.init({
  // lng: currentLanguage, // if you're using a language detector, do not define the lng option

  resources: {
    en: {
      translation: {
        projecthead: "Projects",
        desc: "Project Description",
        loca: "Project Location",
      },
    },
    ar: {
      translation: {
        projecthead: "المشاريع",
        desc: "نبذة مختصرة عن المشروع",
        loca: "مكان المشروع",

      },
    },
  },
});
// initialized and ready to go!
// i18next is already initialized, because the translation resources where passed via init function
document.querySelector("#projecthead").innerHTML = i18next.t("projecthead");
document.querySelector("#desc").innerHTML = i18next.t("desc");
document.querySelector("#loca").innerHTML = i18next.t("loca");

