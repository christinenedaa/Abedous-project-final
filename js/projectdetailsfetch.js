//-----------------Fetch data-------------------------//
// const axios = require("axios");
const { axios } = window;
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";


// axios.get(`/photos/`)
//     .then(({ data }) => {
//         data.splice(0,1) .forEach(({ //TODO: delete splice(0,10)
//             id,
//             title,
//             thumbnailUrl,        
//         }) => {
//             addProjectToProjectPage(id,thumbnailUrl,title);
//         })
//     })


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


const images = Array.from({length:20}).map(()=>("https://loremflickr.com/640/360"))

const data = {
    id: 1,
    title: "Project 1",
    short_description: "short Desc",
    description: "desc",
    images:images,
}

console.log(data)

// data .forEach(({ //TODO: delete splice(0,10)
//                 id,
//                 title,
//                 thumbnailUrl,        
//             }) => {
//                 addProjectToProjectPage(id,thumbnailUrl,title);
//             })


const projectTitleH1 = document.getElementById("projectTitle");
projectTitleH1.innerText = data.title;

data.images.forEach(img=>{
    console.log("img")
    addProjectToProjectPage(img)
})

// bgib data bta3t l description
	const projectdescriptionn = document.querySelector("#projectDescription");
	projectdescriptionn.innerText = data.description;

// bgib data bta3t l location "short description"
	const projectlocation = document.querySelector("#projectLocation");
	projectlocation.innerText = data.short_description;

function addProjectToProjectPage(
        img,
    ){
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
        projectImages.setAttribute("src",img);
        
        ImagesHolder.appendChild(projectImages);

        const ImageContainerDiv = document.querySelector(".IMGcontainer");
        ImageContainerDiv.appendChild(ImagesHolder);

}
