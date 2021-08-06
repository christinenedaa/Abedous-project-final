//-----------------Fetch data-------------------------//
// const axios = require("axios");
const { axios } = window;

const baseURL = `http://192.168.43.157:8000`;
axios.defaults.baseURL = `${baseURL}/api`;

const id = window.location.hash.substring(1);

axios
  .get(`/projects/${id}`)
  .then(
    ({
      data: {
        title,
        description,
        short_description,
        title_a,
        description_a,
        short_description_a,
        images,
      },
    }) => {
      if (currentLanguage == "en") {
        addTitle(title);
        addDescription(description);
        addShortDescription(short_description);
      } else {
        addTitle(title_a);
        addDescription(description_a);
        addShortDescription(short_description_a);
      }
      addImages(images);
    }
  )
  .then(() => handlePopupImages());

function addTitle(title) {
  const projectTitleH1 = document.getElementById("projectTitle");
  projectTitleH1.innerText = title;
}

function addDescription(description) {
  const projectdescriptionn = document.querySelector("#projectDescription");
  projectdescriptionn.innerHTML = description;
}

function addShortDescription(shortDescription) {
  const projectlocation = document.querySelector("#projectLocation");
  projectlocation.innerText = shortDescription;
}

function addImages(images) {
  images.forEach((img) => {
    const image = `${baseURL}/storage/${img}`;
    addImage(image);
  });
}

function addImage(img) {
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

  const imagetag = document.createElement("img");
  imagetag.setAttribute("src", img);
  imagetag.setAttribute("alt", "Popup Image");
  imagetag.setAttribute("style", "width:60%");

  // console.log(imagetag);
  const divclose = document.createElement("div");
  divclose.classList.add("close-btn");

  imagetag.appendChild(divclose);

  const divclosebar = document.createElement("div");
  divclosebar.classList.add("bar");

  const divclosebar2 = document.createElement("div");
  divclosebar2.classList.add("bar");

  divclose.appendChild(divclosebar);
  divclose.appendChild(divclosebar2);

  // const Imagepopup = document.querySelector(".img-popup");
  // Imagepopup.appendChild(imagetag);
}

function handlePopupImages() {
  $(document).ready(function () {
    // required elements
    var imgPopup = $(".img-popup");
    var imgCont = $(".container__img-holder");
    var popupImage = $(".img-popup img");
    var closeBtn = $(".close-btn");

    // handle events
    imgCont.on("click", function () {
      const Imagepopup = document.querySelector(".img-popup");
      const imageNode = $(this)[0];

      const clonedImage = imageNode.childNodes[0].cloneNode(true);
      clonedImage.setAttribute("id", "popUpClonedImage");
      Imagepopup.appendChild(clonedImage);

      var img_src = $(this).children("img").attr("src");

      imgPopup.children("img").attr("src", img_src);
      imgPopup.addClass("opened");
    });

    $(imgPopup, closeBtn).on("click", function () {
      imgPopup.removeClass("opened");

      const ImagepopupContainer = document.querySelector(
        ".container__img-holder"
      );
      const clonedImagepopup = document.querySelector("#popUpClonedImage");

      clonedImagepopup.parentNode.removeChild(clonedImagepopup);
      imgPopup.children("img").attr("src", "");
    });

    popupImage.on("click", function (e) {
      e.stopPropagation();
    });
  });
}

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
