//-----------------Fetch data-------------------------//
// const axios = require("axios");
const { axios } = window;
axios.defaults.baseURL="https://jsonplaceholder.typicode.com";

const id = window.location.hash.substring(1);
axios.get(`/posts/${id}`)
// .then(({ data})=>{
.then(({ data:{title,body}})=>{

	const projecttitle = document.querySelector(".project_title");
	const projectTitleH1 = document.getElementById("projectTitle");
	projectTitleH1.innerText = title;

	projecttitle.appendChild(projectTitleH1);

	const projectdescription = document.querySelector(".projectdescription");
	const projectdescp = document.getElementById("description");
	projectdescp.innerText = body;

})