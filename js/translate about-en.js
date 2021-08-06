const { i18next } = window;

const currentLanguage = localStorage.getItem("lang");

i18next.init({
  lng: currentLanguage, // if you're using a language detector, do not define the lng option
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

        // About Us Page

        abouthead1: "About Us",
        aaamm: "Why Trusting Abedous Company?",
        paragraph1about:
          "Abedous General Contracting has attained its reputation as one of the reliable and diversified contracting firms in Ajman-UAE. Since 2006 Abedous General Contracting LLC has provided its clients with viable solutions to any complexities in their construction needs. The company’s strength lies in traditional construction methods re-enforced by creative, fresh approaches to cutting edge technologies and delivery systems. Abedous Co. has assembled a team of construction professionals that offer a single source solution for all construction related needs. Abedous Co. LLC supports its clients in every aspect from project inception to commission of the fully operational facility.",

        paragraph2about:
          "Abedous provides services when you need it, where you need it, by timely and by qualified and experienced technical staff. Our qualified, experienced and dedicated technicians are always ready to assist our customers in all their requirements. We strive to fulfill and exceed our customer expectations with quality, reliability and on time services.",
        abouthead2: "Abedous Specialization",

        service1: "Building Contracting",
        service2: "Facilities Management Division",
        service3: "Interiors Division",

        abouthead1: "About Us",
      },
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
        aaamm: "لماذا نثق في شركة أبيدوس؟",
        paragraph1about:
          "اكتسبت شركة عبيدوس للمقاولات العامة سمعتها كواحدة من شركات المقاولات الموثوقة والمتنوعة في عجمان - الإمارات العربية المتحدة. منذ عام 2006 ، زودت شركة أبيدوس للمقاولات العامة عملائها بحلول قابلة للتطبيق لأي تعقيدات في احتياجات البناء الخاصة بهم. تكمن قوة الشركة في أساليب البناء التقليدية معزز من خلال مناهج إبداعية وحديثة لأحدث التقنيات وأنظمة التسليم. قامت شركة عبيدوس بتجميع فريق من محترفو البناء الذين يقدمون حل مصدر واحد للجميع الاحتياجات المتعلقة بالبناء. تدعم شركة أبدوس عملائها في كل جانب من بداية المشروع إلى التكليف الكامل منشأة تشغيلية.",
        abouthead1: "معلومات عنا",
        paragraph2about:
          "تقدم شركةأبيدوس الخدمات عندما تحتاجها ، وحيث تحتاجها ، وفي الوقت المناسب وبواسطة كادر فني مؤهل وذو خبرة. إن الفنيين المؤهلين وذوي الخبرة والمتخصصين لدينا مستعدون دائمًا لمساعدة عملائنا في جميع متطلباتهم. نحن نسعى جاهدين لتحقيق وتجاوز توقعات عملائنا من خلال خدمات الجودة والموثوقية وفي الوقت المحدد.",
        abouthead2: "تخصص شركة أبيدوس",

        service1: "مقاولات البناء",
        service2: "قسم إدارة المرافق",
        service3: "قسم الديكورات الداخلية",

        // Footer
      },
    },
  },
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
document.querySelector("#aaamm").innerHTML = i18next.t("aaamm");
document.querySelector("#abouthead1").innerHTML = i18next.t("abouthead1");
document.querySelector("#paragraph1about").innerHTML =
  i18next.t("paragraph1about");
document.querySelector("#abouthead2").innerHTML = i18next.t("abouthead2");
document.querySelector("#paragraph2about").innerHTML =
  i18next.t("paragraph2about");

document.querySelectorAll("li")[9].innerHTML = i18next.t("service1");
document.querySelectorAll("li")[10].innerHTML = i18next.t("service2");
document.querySelectorAll("li")[11].innerHTML = i18next.t("service3");
