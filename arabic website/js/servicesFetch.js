//-----------------Fetch data-------------------------//
// const axios = require("axios");
const { axios } = window;
// url = "https://653a8c1416cf.ngrok.io";
// axios.defaults.baseURL = `${url}/api`;
axios.defaults.baseURL = `https://jsonplaceholder.typicode.com`;

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
axios.get(`/photos/`).then(({ data }) => {
  data.splice(0, 10).forEach(
    ({
      //TODO: delete .splice(0,10)
      id,
      title,
      thumbnailUrl,
    }) => {
      addServiceToServicesPage(id, thumbnailUrl, title);
    }
  );
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

const servicedata = {
  id: 1,
  title: "اداره المرافق",
  description:
    "اداره المرافق اداره المرافق اداره المرافق اداره المرافق اداره المرافق اداره المرافق اداره المرافق اداره المرافق اداره المرافق",
};

const textcontainer = document.createElement("div");
textcontainer.classList.add("text-container");
textcontainer.setAttribute(
  "style",
  "display: flex; flex-direction: column; justify-content: center; align-items: center;"
);

const h2texttitle = document.createElement("h2");
h2texttitle.classList.add("animate__animated", "animate__bounce");
h2texttitle.innerText = servicedata.title;

const ptext = document.createElement("p");
ptext.setAttribute("style", "width: 42%");
ptext.innerText = servicedata.description;

textcontainer.appendChild(h2texttitle);
textcontainer.appendChild(ptext);

const colclass = document.querySelector(".col-lg-17");
colclass.appendChild(textcontainer);
