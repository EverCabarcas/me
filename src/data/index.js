export default {
  identity: {
    firstName: "Ever",
    lastName: "Cabarcas",
    title: "Software Developer",
  },
  contact: {
    phone: "301 5054 097",
    location: "Cartagena",
    email: "evercabarcasmallarino@gmail.com",
  },
  about:
    "Training in design and software development. Passionate about good practices and quality in the products made. Person committed to their work, with good communication skills, time management and teamwork. I have experience in Front-End and Back-End development. In search of new challenges that enhance my skills.",
  networks: [
    {
      name: "linkedin",
      color: "#357AB6",
      profileUrl: "",
    },
    {
      name: "github",
      color: "#171515",
      profileUrl: "",
    },
    {
      name: "twitter",
      color: "#5DA9DD",
      profileUrl: "",
    },
  ],
  experience: [
    {
      company: "Globant",
      position: "NodeJs Developer",
      logo: { url: "/globant.jpg", height: "24px", color: "#c3d500" },
      period: "MAY/2021 - PRESENT",
      abstract:
        "Worked as part of a multi-disciplinary team, in charge of the development and maintainance of the backend services for the Great Minds organization.",
      techStack: ["expressjs", "javascript", "nodejs", "nestjs"],
    },
    {
      company: "Elemento43",
      position: "NodeJs Developer",
      logo: { url: "/elemento43.svg", height: "36px", color: "#7400C1" },
      period: "NOV/2018 - MAY/2021",
      abstract:
        "I work in a multidisciplinary group responsible for the construction of services and microservices in Nodejs, Django and Laravel for several products of international clients",
      techStack: ["expressjs", "javascript", "nodejs", "django"],
    },
    {
      company: "Open International",
      position: "PLSQL Developer",
      logo: { url: "condorlabs.svg", height: "18px", color: "#fdcd08" },
      period: "JAN/2018 - NOV/2018",
      abstract:
        "Worked as a PLSQL developer holding and maintaining the company's main product through centralized software components.",
      techStack: ["oracle"],
    },
  ],
  skillSets: [
    {
      skillCategory: "Basic Skills",
      color: "rgba(9, 149, 255, 0.5)",
      bgColor: "rgba(9, 149, 255, 0.25)",
      skills: [
        { name: "Software Design", level: 85 },
        { name: "Unit Testing", level: 75 },
      ],
    },
    {
      skillCategory: "Programming Languages",
      color: "rgba(255, 209, 75, 0.9)",
      bgColor: "rgba(255, 209, 75, 0.25)",
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 75 },
        { name: "Java", level: 60 },
      ],
    },
    {
      skillCategory: "Frameworks & Libraries",
      color: "rgba(255, 48, 91, 0.5)",
      bgColor: "rgba(255, 48, 91, 0.25)",
      skills: [
        { name: "NodeJS", level: 85 },
        { name: "React", level: 80 },
        { name: "Angular", level: 80 },
      ],
    },
    {
      skillCategory: "Soft Skills",
      skills: [
        { name: "Self Learning", level: 97 },
        { name: "Problem Solving", level: 90 },
        { name: "Communication", level: 80 },
        { name: "Adaptability", level: 85 },
      ],
    },
  ],
  languages: [
    { lang: "ES", name: "Spanish", level: 5, native: true },
    { lang: "EN", name: "English", level: 3, native: false },
  ],
};
