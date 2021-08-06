const {i18next} = window;
console.log(i18next)

i18next.init({
  lng: 'ar', // if you're using a language detector, do not define the lng option
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
        'head1':"Mission",
        'paramission':"Our mission is to deliver for our customers the best quality of construction services at competitive rates with highest level of professionalism and integrity resulting in long term relationships with our employees, customers, suppliers and subcontractors.",



        // Footer




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
        'head1':"مهمتنا",
        'paramission':"مهمتنا هي أن نقدم لعملائنا أفضل جودة لخدمات البناء بأسعار تنافسية مع أعلى مستوى من الاحتراف والنزاهة مما يؤدي إلى علاقات طويلة الأمد مع موظفينا وعملائنا وموردينا ومقاولينا من الباطن.",
        'head2':"رؤيتنا",
        'paravision':"تلتزم شركة أبيدوس المحدودة ببناء علاقات طويلة الأمد مبنية على النزاهة في الأداء والقيمة ورضا العملاء. سنستمر في تلبية الاحتياجات المتغيرة لعملائنا من خلال خدماتنا عالية الجودة التي يقدمها أكثر الأشخاص المؤهلين. تتمثل رؤيتنا في أن يتم الاعتراف بها واحترامها كواحدة من الشركات الرائدة في إدارة المرافق الشاملة في الإمارات العربية المتحدة.",
        'head3':"لماذا شركة أبيدوس للمقاولات؟",
        'parahead1':"نحن ندرك أن لعملائنا الاختيار عند اختيار شركة إنشاءات. في شركة أبيدوس ، نسعى جاهدين لتجاوز التوقعات وتحقيق أقصى قدر من القيمة. التزام شركة أبيدوس هو لمصلحتك.",





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
document.querySelector("#links").innerHTML = i18next.t('linkat');
document.querySelector("#adress").innerHTML = i18next.t('adress');
document.querySelector("#footabout").innerHTML = i18next.t('footabout');
document.querySelector("#pageend").innerHTML = i18next.t('pageend');
document.querySelector("#head1").innerHTML = i18next.t('head1');
document.querySelector("#paramission").innerHTML = i18next.t('paramission');
document.querySelector("#head2").innerHTML = i18next.t('head2');
document.querySelector("#paravision").innerHTML = i18next.t('paravision');
document.querySelector("#head3").innerHTML = i18next.t('head3');
document.querySelector("#parahead1").innerHTML = i18next.t('parahead1');

