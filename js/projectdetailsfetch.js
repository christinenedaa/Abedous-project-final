//-----------------Fetch data-------------------------//
// const axios = require("axios");
const { axios } = window;

const baseURL = `http://localhost:8000`;
axios.defaults.baseURL = `${baseURL}/api`;

const id = window.location.hash.substring(1);

axios
  .get(`/projects/${id}`)
  .then(({ data: { title, description, short_description, images } }) => {
    addTitle(title);
    addDescription(description);
    addShortDescription(short_description);
    addImages(images);
  });

function addTitle(title) {
  const projectTitleH1 = document.getElementById("projectTitle");
  projectTitleH1.innerText = title;
}

function addDescription(description) {
  const projectdescriptionn = document.querySelector("#projectDescription");
  projectdescriptionn.innerText = description;
}

function addShortDescription(shortDescription) {
  const projectlocation = document.querySelector("#projectLocation");
  projectlocation.innerText = shortDescription;
}

function addImages(images) {
  console.log(images);
  images.forEach((img) => {
    const image = `${baseURL}/storage/${img}`;
    console.log(image);
    addImagea(image);
  });
}

function addImagea(img) {
  // bgeb data bta3t l title

  // bgeb data bta3t l images gallery
  // const imageGallery = document.querySelector(".IMGcontainer");
  // const IMGGallery = document.getElementById("projectTitle");
  // IMGGallery.innerText = thumbnailUrl;
  // imageGallery.appendChild(IMGGallery);

  const ImagesHolder = document.createElement("div");
  ImagesHolder.classList.add("container__img-holder");

  const projectImages = document.createElement("img");
  ImagesHolder.classList.add("border_radius_size");
  projectImages.setAttribute("src", img);

  ImagesHolder.appendChild(projectImages);

  const ImageContainerDiv = document.querySelector(".IMGcontainer");
  ImageContainerDiv.appendChild(ImagesHolder);
}

// const imagetag = document.createElement("img");
// imagetag.setAttribute("src", data.images);
// imagetag.setAttribute("alt", "Popup Image");
// imagetag.setAttribute("style", "width:60%");

// const divclose = document.createElement("div");
// divclose.classList.add("close-btn");

// imagetag.appendChild(divclose);

// const divclosebar = document.createElement("div");
// divclosebar.classList.add("bar");

// const divclosebar2 = document.createElement("div");
// divclosebar2.classList.add("bar");

// divclose.appendChild(divclosebar);
// divclose.appendChild(divclosebar2);

// const Imagepopup = document.querySelector(".img-popup");
// Imagepopup.appendChild(imagetag);

// {
//     "id": 1,
//     "title": "Project 1",
//     "short_description": "short Desc",
//     "description": "desc",
//     "images": [
//         "uploads/b40a53880ba03b457c242ab7253d4355.png",
//         "uploads/ca4a02d16b741938fea1fdc107a58d77.png",
//         "uploads/24d7c3c1e0a98ec039111132b2be81aa.png",
//         "uploads/5e4ca7b949585a1ccdfd7f3f0f02d445.png"
//     ]
// }

// const images = Array.from({length:20}).map(()=>("https://loremflickr.com/640/360"))

// const data = {
//     id: 1,
//     title: "Project 1",
//     short_description: "short Desc",
//     description: "desc",
//     images:images,
// }

// data.images.forEach(img=>{
//     console.log("img")
//     addProjectToProjectPage(img)
// })
