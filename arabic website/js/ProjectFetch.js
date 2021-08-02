//-----------------Fetch data-------------------------//
// const axios = require("axios");
const { axios } = window;
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

axios.get(`/posts/`)
    .then(({ data }) => {
        console.log(data);
        data.map(post => console.log(posts))
        // const mainprojecttitle = document.getElementById("title_project");
        // mainprojecttitle.innerText = title;
    })