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
axios.get(`/photos/`)
    .then(({ data }) => {
        data
        .splice(0,10)
        .forEach(({ //TODO: delete .splice(0,10)
            id,
            title,
            thumbnailUrl,        
        }) => {
            addServiceToServicesPage(id,thumbnailUrl,title);
        })
    })

function addServiceToServicesPage(
        id,
        img,
        title,
    ){
        const servicesdetailsLink = document.createElement("a");
        servicesdetailsLink.setAttribute("href",`Ashkal.html#${id}`)

        const ServicesContainer = document.createElement("div");
        ServicesContainer.classList.add("tile");
        
        servicesdetailsLink.appendChild(ServicesContainer);
        
        const ServicesImage = document.createElement("img");
        ServicesImage.setAttribute("src",img);
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