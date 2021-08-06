//-----------------Fetch data-------------------------//
const { axios } = window;

const baseURL = `http://192.168.43.157:8000`;
axios.defaults.baseURL = `${baseURL}/api`;

axios.get(`projects/`).then(({ data }) => {
  data.forEach(
    ({
      id,
      title,
      short_description,
      title_a,
      short_description_a,
      images,
    }) => {
      const image = `${baseURL}/storage/${images[0]}`;
      if (currentLanguage == "en")
        addProjectToProjectPage(id, image, title, short_description);
      else addProjectToProjectPage(id, image, title_a, short_description_a);
    }
  );
});

function addProjectToProjectPage(id, img, title, shortDescription) {
  const projectdetailsLink = document.createElement("a");
  projectdetailsLink.setAttribute("href", `projectdetails.html#${id}`);

  const projectContainer = document.createElement("div");
  projectContainer.classList.add("tile");

  projectdetailsLink.appendChild(projectContainer);

  const projectImage = document.createElement("img");
  projectImage.setAttribute("src", img);
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
