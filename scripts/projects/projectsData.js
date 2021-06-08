const imageRoot = "./scripts/projects/images/";

const projectData = [
   {
    img: `${imageRoot}/focusedKanban.jpg`,
    title: "Focused Kanban",
    stack: [
      "JavaScript",
      "HTML5",
      "Canvas",
      "CSS",
      "React",
      "ExpressJS",
      "SQLITE3",
      "Knex",
      "Bcrypt",
    ],
    description:
      "Continuation of the TrelloClone project, but this time I’ve decided to build out more and incorporate some unique features. On the desktop users can build and manage a kanban board, then select a task, which will display on their mobile device. Separating planning from the task at hand.",
    github: "https://github.com/aply333/FocusedKanBan",
    live:""
  },
  {
    img: `${imageRoot}/todo.jpg`,
    title: "Task To Date",
    stack: [
      "React",
      "Javascript",
      "HTML",
      "Momment",
      "CSS",
      "Express",
      "Knex",
      "SQL",
      "Redux",
    ],
    description:
      "A Calendar tool paired with a to-do list, built for both mobile and desktop layouts. Made to keep it simple. Components are custom made, and the database was assembled with sqlite3 and knex. The server saves and tracks user inputs, while also providing some level of account authorization.",
      github: "https://github.com/aply333/TaskToDate",
      live: ""
  },
  {
    img: `${imageRoot}/snippet.jpg`,
    title: "Snippet Tool",
    stack: [
      "React",
      "React-Suite",
      "Express",
      "Bcrypt",
      "Knex",
      "SQL",
      "Redux",
      "Ace-Builds",
    ],
    description:
      "This is a web-based, code, marque tool. It allows users to write or paste in code, which then they can highlight and add notes to. The editor will syntax appropriately and the server will store their snippets to their accounts. I chose to use the react-suite component library; it had most resembled my goal in mind and provides a clean professional look.",
    github: "https://github.com/aply333/SnippetFrontEnd",
    live: ""
  },
  {
    img: `${imageRoot}/merchant.jpg`,
    title: "Merchant Market Place",
    stack: ["React", "Redux", "AntDesign", "ExpressJS", "Knex", "ElephantSQL"],
    description:
      "Merchant Market Place is a site that would exclusively catalog local businesses. I worked with a team of six developers, two designers, and a stakeholder. My primary role was to scaffold the front-end of the site and preparing components to be assembled into it. I had greatly enjoyed working on a team, and feel I excel in this.",
    github: "empty",
    live: ""
  },
 {
    img: `${imageRoot}/resturaunt.jpg`,
    title: "Restaurant Passport",
    stack: ["HTML", "CSS", "LESS"],
    description:
      "This site/app both markets restaurants in your area, but also allows users to check-in, collecting a stamp from their visit. My role here was to design and build the landing pages for the project. These portions were made using basic HTML, with LESS to compile the CSS.",

  },
];

export default projectData;
