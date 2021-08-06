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
const baseURL = `http://192.168.43.157:8000`;
axios.defaults.baseURL = `${baseURL}/api`;

// const images = Array.from({ length: 8 }).map(
//   () => "https://loremflickr.com/640/360"
// );

// const data = {
//   id: 1,
//   title: "Service 1",
//   short_description: "short Desc",
//   description: "desc",
//   images: images,
// };

// console.log(data);

const id = window.location.hash.substring(1);

axios
  .get(`/services/${id}`)
  .then(({ data: { title, description, title_a, description_a, images } }) => {
    // console.log(`${b aseURL}/storage/${data.images[0]}`);
    if (currentLanguage == "en") {
      addTitle(title);
      addDescription(description);
    } else {
      addTitle(title_a);
      addDescription(description_a);
    }
    addImages(images);

    // data.forEach(({ id, images, title }) => {
    //   // const image = `${baseURL}/storage/${images[0]}`;
    //   console.log(title);
    // });
  })
  .then(() => handleSlider(jQuery));

function addTitle(title) {
  const ServiceTitleH1 = document.getElementById("ServiceTitle");
  ServiceTitleH1.innerText = title;
}
function addDescription(description) {
  const projectdescriptionn = document.getElementById("ServiceDescription");
  projectdescriptionn.innerHTML = description;
}

function addImages(images) {
  images.forEach((img) => {
    const image = `${baseURL}/storage/${img}`;
    addImage(image);
  });
}

function addImage(image) {
  addProjectToProjectPage(image);
}

// // background-image:url(images/alhayra9.jpg); width: 100%; height: 100%;

function addProjectToProjectPage(img) {
  const SliderImages = document.createElement("div");
  SliderImages.setAttribute(
    "style",
    `background-image:url(${img}); width: 100%; height: 100%;`
  );

  const ImageSliderrDiv = document.querySelector(".slider");
  ImageSliderrDiv.insertBefore(SliderImages, ImageSliderrDiv.firstChild);
}

function handleSlider($) {
  "use strict";

  $.fn.sliderResponsive = function (settings) {
    var set = $.extend(
      {
        slidePause: 5000,
        fadeSpeed: 800,
        autoPlay: "on",
        showArrows: "off",
        hideDots: "off",
        hoverZoom: "on",
        titleBarTop: "off",
      },
      settings
    );

    var $slider = $(this);
    var size = $slider.find("> div").length; //number of slides
    var position = 0; // current position of carousal
    var sliderIntervalID; // used to clear autoplay

    // Add a Dot for each slide
    $slider.append("<ul></ul>");
    $slider.find("> div").each(function () {
      $slider.find("> ul").append("<li></li>");
    });

    // Put .show on the first Slide
    $slider.find("div:first-of-type").addClass("show");

    // Put .showLi on the first dot
    $slider.find("li:first-of-type").addClass("showli");

    //fadeout all items except .show
    $slider.find("> div").not(".show").fadeOut();

    // If Autoplay is set to 'on' than start it
    if (set.autoPlay === "on") {
      startSlider();
    }

    // If showarrows is set to 'on' then don't hide them
    if (set.showArrows === "on") {
      $slider.addClass("showArrows");
    }

    // If hideDots is set to 'on' then hide them
    if (set.hideDots === "on") {
      $slider.addClass("hideDots");
    }

    // If hoverZoom is set to 'off' then stop it
    if (set.hoverZoom === "off") {
      $slider.addClass("hoverZoomOff");
    }

    // If titleBarTop is set to 'on' then move it up
    if (set.titleBarTop === "on") {
      $slider.addClass("titleBarTop");
    }

    // function to start auto play
    function startSlider() {
      sliderIntervalID = setInterval(function () {
        nextSlide();
      }, set.slidePause);
    }

    // on mouseover stop the autoplay
    $slider.mouseover(function () {
      if (set.autoPlay === "on") {
        clearInterval(sliderIntervalID);
      }
    });

    // on mouseout starts the autoplay
    $slider.mouseout(function () {
      if (set.autoPlay === "on") {
        startSlider();
      }
    });

    //on right arrow click
    $slider.find("> .right").click(nextSlide);

    //on left arrow click
    $slider.find("> .left").click(prevSlide);

    // Go to next slide
    function nextSlide() {
      position = $slider.find(".show").index() + 1;
      if (position > size - 1) position = 0;
      changeCarousel(position);
    }

    // Go to previous slide
    function prevSlide() {
      position = $slider.find(".show").index() - 1;
      if (position < 0) position = size - 1;
      changeCarousel(position);
    }

    //when user clicks slider button
    $slider.find(" > ul > li").click(function () {
      position = $(this).index();
      changeCarousel($(this).index());
    });

    //this changes the image and button selection
    function changeCarousel() {
      $slider.find(".show").removeClass("show").fadeOut();
      $slider.find("> div").eq(position).fadeIn(set.fadeSpeed).addClass("show");
      // The Dots
      $slider.find("> ul").find(".showli").removeClass("showli");
      $slider.find("> ul > li").eq(position).addClass("showli");
    }

    return $slider;
  };

  //////////////////////////////////////////////
  // Activate each slider - change options
  //////////////////////////////////////////////
  $(document).ready(function () {
    $("#slider1").sliderResponsive({
      // Using default everything
      // slidePause: 5000,
      // fadeSpeed: 800,
      // autoPlay: "on",
      // showArrows: "off",
      // hideDots: "off",
      // hoverZoom: "on",
      // titleBarTop: "off"
    });

    $("#slider2").sliderResponsive({
      fadeSpeed: 300,
      autoPlay: "off",
      showArrows: "on",
      hideDots: "on",
    });

    $("#slider3").sliderResponsive({
      hoverZoom: "off",
      hideDots: "on",
    });
  });
}
