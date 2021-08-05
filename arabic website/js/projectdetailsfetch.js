//-----------------Fetch data-------------------------//
// const axios = require("axios");
const { axios } = window;
axios.defaults.baseURL="https://jsonplaceholder.typicode.com";

const id = window.location.hash.substring(1);
axios.get(`/posts/${id}`)
// .then(({ data})=>{
.then(({ data:{title,body}})=>{

// bgeb data bta3t l title 
	const projectTitleH1 = document.getElementById("projectTitle");
	projectTitleH1.innerText = title;

	// bgeb data bta3t l images gallery 
	// const imageGallery = document.querySelector(".IMGcontainer");
	// const IMGGallery = document.getElementById("projectTitle");
	// IMGGallery.innerText = image;
	// imageGallery.appendChild(IMGGallery);

// bgib data bta3t l description
	const projectdescriptionn = document.querySelector("#projectDescription");
	projectdescriptionn.innerText = body;

// bgib data bta3t l location "short description"
	const projectlocation = document.querySelectorAll(".text-box mb-1:nth-child(4)");
	const projectloc = document.getElementById("projectLocation");
	projectloc.innerText = body;
	projectlocation.appendChild(projectloc);

})
