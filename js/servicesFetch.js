//-----------------Fetch data-------------------------//
// const axios = require("axios");
const { axios } = window;
// url = "https://653a8c1416cf.ngrok.io";
// axios.defaults.baseURL = `${url}/api`;
const baseURL = `http://192.168.43.157:8000`;
axios.defaults.baseURL = `${baseURL}/api`;

// axios.get(`/services/`)
//     .then(({ data }) => {
//         data
//         .forEach(({
//             id,
//             title,
//             images,
//         }) => {
//             const image = `${url}/storage/${images[0]}`
//             addServiceToServicesPage(id,image,title);
//         })
//     })

axios.get(`/services`).then(({ data }) => {
  data.forEach(({ id, title, title_a, images }) => {
    const image = `${baseURL}/storage/${images[0]}`;
    if (currentLanguage == "en") addServiceToServicesPage(id, image, title);
    else addServiceToServicesPage(id, image, title_a);
  });
});

function addServiceToServicesPage(id, img, title) {
  const servicesdetailsLink = document.createElement("a");
  servicesdetailsLink.setAttribute("href", `Ashkal.html#${id}`);

  const ServicesContainer = document.createElement("div");
  ServicesContainer.classList.add("tile");

  servicesdetailsLink.appendChild(ServicesContainer);

  const ServicesImage = document.createElement("img");
  ServicesImage.setAttribute("src", img);
  const ServicesTextsContainer = document.createElement("div");
  ServicesTextsContainer.classList.add("text");

  ServicesContainer.appendChild(ServicesImage);
  ServicesContainer.appendChild(ServicesTextsContainer);

  const servicesTitle = document.createElement("h1");
  servicesTitle.innerText = title;

  const servicestShortDescription = document.createElement("h2");
  servicestShortDescription.classList.add("animate-text");
  // servicestShortDescription.innerText = shortDescription;

  const PargraphDescription = document.createElement("p");
  PargraphDescription.classList.add("animate-text");

  ServicesTextsContainer.appendChild(servicesTitle);
  ServicesTextsContainer.appendChild(servicestShortDescription);
  ServicesTextsContainer.appendChild(PargraphDescription);

  const wrapDiv = document.querySelector(".flex-wrap");

  wrapDiv.appendChild(servicesdetailsLink);
}

axios.get("http://192.168.43.157:8000/api/servicesDetails").then(({ data }) => {
  // console.log(data[0].title_a);
  data.forEach(({ title, description, title_a, description_a }) => {
    if (currentLanguage == "en") createServiceDetails(title, description);
    else createServiceDetails(title_a, description_a);
  });
});
// const servicedata = {
//   id: 1,
//   title: " Management",
//   description:
//     " we have a firm focus on providing quality air conditioning and heating solutions for our clients. It’s what they deserve, and it’s why we’re in business. Keeping people cool in the summer and warm in the winter is our No. 1 priority.",
// };

function createServiceDetails(title, description) {
  const textcontainer = document.createElement("div");
  textcontainer.classList.add("text-container");
  textcontainer.setAttribute(
    "style",
    "display: flex; flex-direction: column; justify-content: center; align-items: center;"
  );

  const h2texttitle = document.createElement("h2");
  h2texttitle.classList.add("animate__animated", "animate__bounce");
  h2texttitle.innerText = title;

  const ptext = document.createElement("p");
  ptext.setAttribute("style", "width: 42%; font-size:22px; padding-top: 10px;");
  ptext.innerText = description;

  textcontainer.appendChild(h2texttitle);
  textcontainer.appendChild(ptext);

  const colclass = document.querySelector(".col-lg-17");
  colclass.appendChild(textcontainer);
}
