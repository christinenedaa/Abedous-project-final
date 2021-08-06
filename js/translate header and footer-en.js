const { i18next } = window;

const currentLanguage = localStorage.getItem("lang");

i18next.init({
  lng: currentLanguage, // if you're using a language detector, do not define the lng option
  debug: true,
  resources: {
    en: {

      translation: {
        // Header

        "home": "Home",
        'about':"About",
        'services':"Services",
        'projects':"Projects",
        'contacts':"Contact Us",
        'language':"Language",
        'linkat':"Links",
        'adress':"2 Al Nuaimia - Ajman - United Arab Emirates.",
        'pageend':"We would love to hear from you",
        'footabout':"About Abedous",

       



      }
    },
    ar: {
      translation: {
        // Header

        "home": "الصفحة الرئيسية",
        'about':"معلومات عنا",
        'services':"خدماتنا",
        'projects':"مشاريعنا",
        'contacts':"تواصل معنا",
        'language':"اللغة",
        'linkat':"الروابط",
        'adress':"2 النعومية - عجان - الامارات العربية المتحدة",
        'footabout':"عن شركتنا",
        'pageend':"يسعدنا التواصل دائما",


    




        // Footer
      }
    }
  }
});
// initialized and ready to go!
// i18next is already initialized, because the translation resources where passed via init function
document.querySelectorAll(".nav-link")[0].innerHTML = i18next.t('home');
document.querySelectorAll(".nav-link")[1].innerHTML = i18next.t('about');
document.querySelectorAll(".nav-link")[2].innerHTML = i18next.t('services');
document.querySelectorAll(".nav-link")[3].innerHTML = i18next.t('projects');
document.querySelectorAll(".nav-link")[4].innerHTML = i18next.t('contacts');
document.querySelectorAll(".nav-link")[5].innerHTML = i18next.t('language');

document.querySelectorAll("a")[10].innerHTML = i18next.t('home');
document.querySelectorAll("a")[11].innerHTML = i18next.t('about');
document.querySelectorAll("a")[12].innerHTML = i18next.t('services');
document.querySelectorAll("a")[13].innerHTML = i18next.t('projects');
document.querySelectorAll("a")[14].innerHTML = i18next.t('contacts');
document.querySelector("#linkat").innerHTML = i18next.t('linkat');
document.querySelector("#adress").innerHTML = i18next.t('adress');
document.querySelector("#footabout").innerHTML = i18next.t('footabout');
document.querySelector("#pageend").innerHTML = i18next.t('pageend');


