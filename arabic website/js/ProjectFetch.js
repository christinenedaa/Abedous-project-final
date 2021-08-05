//-----------------Fetch data-------------------------//
// const axios = require("axios");
const { axios } = window;
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";



axios.get(`/photos/`)
    .then(({ data }) => {
        data.splice(0,10).forEach(({ //TODO: delete .splice(0,10)
            id,
            title,
            thumbnailUrl,        
        }) => {
            addProjectToProjectPage(id,thumbnailUrl,title,title);
        })
    })

function addProjectToProjectPage(
        id,
        img,
        title,
        shortDescription,
    ){
        const projectdetailsLink = document.createElement("a");
        projectdetailsLink.setAttribute("href",`projectdetails.html#${id}`)

        const projectContainer = document.createElement("div");
        projectContainer.classList.add("tile");
        
        projectdetailsLink.appendChild(projectContainer);
        
        const projectImage = document.createElement("img");
        projectImage.setAttribute("src",img);
        const projectTextsContainer = document.createElement("div");
        projectTextsContainer.classList.add("text");
        
        projectContainer.appendChild(projectImage);
        projectContainer.appendChild(projectTextsContainer);
        
        const projectTitle = document.createElement("h1");
        projectTitle.innerText = title;
        
        const projectShortDescription = document.createElement("h2");
        projectShortDescription.classList.add("animate-text");
        projectShortDescription.innerText = shortDescription;

        projectTextsContainer.appendChild(projectTitle);
        projectTextsContainer.appendChild(projectShortDescription);

        const wrapDiv = document.querySelector(".flex-wrap");

        wrapDiv.appendChild(projectdetailsLink);
}