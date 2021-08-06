// const {i18next} = window;
console.log(i18next)

i18next.init({
  lng: 'ar', // if you're using a language detector, do not define the lng option
  debug: true,
  resources: {
    en: {

      translation: {
        // Header

        // "home": "Home",
        // 'about':"About",
        // 'services':"Services",
        // 'projects':"Projects",
        // 'contacts':"Contact Us",
        // 'language':"Language",
        // 'linkat':"Links",
        // 'adress':"2 Al Nuaimia - Ajman - United Arab Emirates.",
        // 'pageend':"We would love to hear from you",
        // 'footabout':"About Abedous",
        'head1contact':"Contact Us",
        'headingline':"We will be honoured to be in touch with you",
        'tele':"+971-67312884",
        'namecontact':"Name",
        'emailcontact':"Email",
        'messagecontact':"Please write your message",



     

        // About Us Page
        
       


      }
    },
    ar: {
      translation: {
        // Header

        // "home": "الصفحة الرئيسية",
        // 'about':"معلومات عنا",
        // 'services':"خدماتنا",
        // 'projects':"مشاريعنا",
        // 'contacts':"تواصل معنا",
        // 'language':"اللغة",
        // 'linkat':"الروابط",
        // 'adress':"2 النعومية - عجان - الامارات العربية المتحدة",
        // 'pageend':"يسعدنا التواصل دائما",
        // 'footabout':"عن شركتنا",
        'head1contact':"تواصل معنا",
        'headingline':"يشرفنا أن نتواصل معك",
        'tele':"971-67312884+",
        'namecontact':"الاسم",
        'emailcontact':"البريد الالكتروني",
        'messagecontact':"تفضل بكتابة ما ترغب به",










        // Footer
      }
    }
  }
});
// initialized and ready to go!
// i18next is already initialized, because the translation resources where passed via init function
// document.querySelectorAll(".nav-link")[0].innerHTML = i18next.t('home');
// document.querySelectorAll(".nav-link")[1].innerHTML = i18next.t('about');
// document.querySelectorAll(".nav-link")[2].innerHTML = i18next.t('services');
// document.querySelectorAll(".nav-link")[3].innerHTML = i18next.t('projects');
// document.querySelectorAll(".nav-link")[4].innerHTML = i18next.t('contacts');
// document.querySelectorAll(".nav-link")[5].innerHTML = i18next.t('language');

// document.querySelectorAll("#footer-li>a")[0].innerHTML = i18next.t('home');
// document.querySelectorAll("#footer-li>a")[1].innerHTML = i18next.t('about');
// document.querySelectorAll("#footer-li>a")[2].innerHTML = i18next.t('services');
// document.querySelectorAll("#footer-li>a")[3].innerHTML = i18next.t('projects');
// document.querySelectorAll("#footer-li>a")[4].innerHTML = i18next.t('contacts');
// document.querySelector("#linkat").innerHTML = i18next.t('linkat');
// document.querySelector("#adress").innerHTML = i18next.t('adress');
// document.querySelector("#footabout").innerHTML = i18next.t('footabout');
// document.querySelector("#pageend").innerHTML = i18next.t('pageend');
document.querySelector("#head1contact").innerHTML = i18next.t('head1contact');
document.querySelector("#headingline").innerHTML = i18next.t('headingline');
document.querySelectorAll("#contactinfo>li")[0].innerHTML = i18next.t('adress');
document.querySelectorAll("#contactinfo>li")[1].innerHTML = i18next.t('tele');



document.querySelector("#namecontact").setAttribute("placeholder",i18next.t('namecontact'));
document.querySelector("#emailcontact").setAttribute("placeholder",i18next.t('emailcontact'));
document.querySelector("#messagecontact").setAttribute("placeholder",i18next.t('messagecontact'));









