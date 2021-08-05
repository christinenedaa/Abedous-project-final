// //-----------------Fetch data-------------------------//
// // const axios = require("axios");
// const { axios } = window;
// axios.defaults.baseURL="https://jsonplaceholder.typicode.com";

// const id = window.location.hash.substring(1);
// axios.get(`/posts/${id}`)
// // .then(({ data})=>{
// .then(({ data:{title,body}})=>{

// // bgeb data bta3t l title 
// 	const ServiceTitleH1 = document.getElementById("ServiceDescrptionTitle");
// 	ServiceTitleH1.innerText = title;

// 	// bgeb data bta3t l images gallery 
// 	// const imageGallery = document.querySelector(".IMGcontainer");
// 	// const IMGGallery = document.getElementById("projectTitle");
// 	// IMGGallery.innerText = image;
// 	// imageGallery.appendChild(IMGGallery);

// // bgib data bta3t l location "short description"
// const Servicedescription = document.getElementById("ServiceDescription");
// Servicedescription.innerText = body;

// })



////////////////////////////////////////////////////////
//-----------------Fetch data-------------------------//
// const axios = require("axios");
const { axios } = window;
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

const images = Array.from({length:6}).map(()=>("https://loremflickr.com/640/360"))

const data = {
    id: 1,
    title: "Service 1",
    short_description: "short Desc",
    description: "desc",
    images:images,
}

console.log(data)

// bgeb data bta3t l title 
const ServiceTitleH1 = document.getElementById("ServiceTitle");
ServiceTitleH1.innerText = data.title;

data.images.forEach(img=>{
    console.log("img")
	console.log(img);
    addProjectToProjectPage(img)
})

// bgib data bta3t l description
	const projectdescriptionn = document.getElementById("ServiceDescription");
	projectdescriptionn.innerText = data.description;

function addProjectToProjectPage(
        img,
    ){
        
        const SliderImages = document.createElement("div");
        SliderImages.setAttribute("style","background-image: url(" + img + ");width: 100%;geight: 100%");


        const ImageSliderrDiv = document.querySelector(".slider");
        ImageSliderrDiv.appendChild(SliderImages);

}

