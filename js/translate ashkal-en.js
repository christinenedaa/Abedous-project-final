// const {i18next} = window;
// console.log(i18next)

i18next.init({
  // lng: 'ar', // if you're using a language detector, do not define the lng option

  resources: {
    en: {
      translation: {
        servicehead: "Services",

        // About Us Page
      },
    },
    ar: {
      translation: {
        servicehead: "خدماتنا",
      },
    },
  },
});
// initialized and ready to go!
// i18next is already initialized, because the translation resources where passed via init function

document.querySelector("#servicehead").innerHTML = i18next.t("servicehead");
