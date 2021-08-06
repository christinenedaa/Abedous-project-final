// const { i18next } = window;

// i18next.languages = ["ar", "en"];
// console.log(i18next);
// const currentLanguage = localStorage.getItem("lang");

i18next.init({
  lng: currentLanguage, // if you're using a language detector, do not define the lng option

  resources: {
    en: {
      translation: {
        head1: "Mission",
        paramission:
          "Our mission is to deliver for our customers the best quality of construction services at competitive rates with highest level of professionalism and integrity resulting in long term relationships with our employees, customers, suppliers and subcontractors.",
        head3: "Why Abedous Contracting Co.?",
        parahead1:
          "We recognize that our clients have a choice when picking a construction company. At Abedous Co. LLC, we strive to exceed expectations and maximize value. Abedous Co. LLC commitment is your benefit.",
        head2: "Vision",
        paravision:
          "Abedous Co. LLC is committed to building long-term relationships based on integrity Performance, value, and client satisfaction. We will continue to meet the changing needs our clients with our quality services delivered by the most qualified people. Our vision is to be recognized and respected as one of the premier total facility management companies in UAE.",

        // About Us Page
      },
    },
    ar: {
      translation: {
        head1: "مهمتنا",
        paramission:
          "مهمتنا هي أن نقدم لعملائنا أفضل جودة لخدمات البناء بأسعار تنافسية مع أعلى مستوى من الاحتراف والنزاهة مما يؤدي إلى علاقات طويلة الأمد مع موظفينا وعملائنا وموردينا ومقاولينا من الباطن.",
        head2: "رؤيتنا",
        paravision:
          "تلتزم شركة أبيدوس المحدودة ببناء علاقات طويلة الأمد مبنية على النزاهة في الأداء والقيمة ورضا العملاء. سنستمر في تلبية الاحتياجات المتغيرة لعملائنا من خلال خدماتنا عالية الجودة التي يقدمها أكثر الأشخاص المؤهلين. تتمثل رؤيتنا في أن يتم الاعتراف بها واحترامها كواحدة من الشركات الرائدة في إدارة المرافق الشاملة في الإمارات العربية المتحدة.",
        head3: "لماذا شركة أبيدوس للمقاولات؟",
        parahead1:
          "نحن ندرك أن لعملائنا الاختيار عند اختيار شركة إنشاءات. في شركة أبيدوس ، نسعى جاهدين لتجاوز التوقعات وتحقيق أقصى قدر من القيمة. التزام شركة أبيدوس هو لمصلحتك.",

        // Footer
      },
    },
  },
});
// initialized and ready to go!
// i18next is already initialized, because the translation resources where passed via init function

document.querySelector("#head1").innerHTML = i18next.t("head1");
document.querySelector("#paramission").innerHTML = i18next.t("paramission");
document.querySelector("#head2").innerHTML = i18next.t("head2");
document.querySelector("#paravision").innerHTML = i18next.t("paravision");
document.querySelector("#head3").innerHTML = i18next.t("head3");
document.querySelector("#parahead1").innerHTML = i18next.t("parahead1");
document.querySelector("#abouthead1").innerHTML = i18next.t("abouthead1");
