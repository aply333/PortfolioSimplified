import projectData from "./projectsData.js";

const projectBox = document.getElementById("projectBox");

const card = (project) => {
  const projectCard = document.createElement("DIV");
  projectCard.className = "card";

  const image = document.createElement("IMG");
  image.setAttribute("src", project.img);

  const title = document.createElement("H3");
  title.textContent = project.title;

  const hrBreak = document.createElement("HR");

  const stack = document.createElement("UL");
  project.stack.forEach((item) => {
    let stackItem = document.createElement("LI");
    stackItem.textContent = item;
    stack.appendChild(stackItem);
  });

  const details = document.createElement("P");
  details.textContent = project.description;
  details.className = "projectInfo";

  const live = document.createElement("A");

  projectCard.appendChild(image);
  projectCard.appendChild(title);
  projectCard.appendChild(hrBreak);
  projectCard.appendChild(stack);
  projectCard.appendChild(details);

  const gitHub = document.createElement("A");
  if (project.github !== "empty") {
    gitHub.textContent = "GitHub Link";
    gitHub.setAttribute("href", project.github);
    gitHub.setAttribute("target", "_blank")
    projectCard.appendChild(gitHub)
  }

  let clicked = false;
  projectCard.addEventListener("click", () => {
    if (clicked === false) {
      clicked = true;
      projectCard.className = "card open";
    } else {
      clicked = false;
      projectCard.className = "card";
    }
  });

  return projectCard;
};

projectData.map((project) => {
  projectBox.appendChild(card(project));
});
