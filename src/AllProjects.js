import artsy from "./images/artsy.png";
import squazzle from "./images/squazzle.png";
import space from "./images/space.jpg";
import QR from "./images/QR.png";
import sunnySide from "./images/sunnyside.png";
import getLinked from "./images/getLinked.png";
import mitera from "./images/mitera.png";
import squareBox from "./images/squareBox.png";
import riskOffice from "./images/riskOffice.png";

export const data = {
  experience: [
    {
      position: "Frontend Engineer • SnappyCX (Remote) ↗",
      duration: "2023 - 2025",
      url: "https://snappycx.com/",
      about:
        "Build, style and maintain critical components for SnappyCX frontend. Worked closely with cross-functional teams including developers, designers and project managers to implement best practices in web accessibility.",
      skills: [
        "CSS",
        "Webflow",
        "JavaScript",
        "CodeSandBox",
        "Collect.Chat",
        "ZohoCRM",
      ],
    },

    {
      position: "Frontend Engineer • ECO ONLINE GLOBAL (Remote) ↗",
      duration: "2023 - 2024",
      url: "https://www.ecoonlineglobal.com/",
      about:
        "Collaborated with backend engineers to define API contracts and ensure seamless integration for Eco Online Global's projects. Identified and addressed performance bottlenecks, conducting regular code reviews to maintain code quality standards, and staying updated on industry best practices to implement relevant optimizations.",
      skills: [
        "TailwindCSS",
        "JavaScript",
        "TypeScript",
        "React",
        "NextJs",
        "Redux",
      ],
    },

    {
      position: "Frontend Engineer • PATHSCAPE (Remote) ↗",
      duration: "2022 - 2023",
      url: "https://www.pathscape.app/",
      about:
        "Implemented modern conventions to improve core dynamic features of Pathscape's main software. Developed user interfaces, seamlessly integrated plugins and significantly enhanced the overall user experience.",
      skills: [
        "Styled-Components",
        "JavaScript",
        "TypeScript",
        "React",
        "NextJs",
        "Recoil",
        "MUI",
        "Redux",
      ],
    },
  ],

  landingPageProjects: [
    {
      name: "Square Box",
      description: "A platform to buy, sell and trade gift cards",
      imgURL: `${squareBox}`,
      hostedURL: "https://squarebox.ng/",
      repoURL: "https://github.com/FinesseCodesWS/ecotfx-frontend",
      featured: false,
      description: "Gift Card and Crypto Trading Application",
      techUsed: [
        "ReactJs",
        "Bootstrap",
        "Vite",
        "MUI",
        "React Redux",
        "CryptoJS",
      ],
    },
    {
      name: "Risk Office",
      description: "A Risk Management Platform",
      imgURL: `${riskOffice}`,
      hostedURL: "https://www.myriskoffice.com/",
      repoURL: "https://github.com/dev-fikayomi/Risk-Office",
      featured: false,
      description: "Risk Management and Analysis",
      techUsed: ["ReactJs", "TailwindCSS", "Vite", "MUI", "React Hook Form"],
    },
    {
      name: "Get Linked",
      description: "A getLinked Hackathon Project",
      techUsed: [
        "NextJs",
        "TypeScript",
        "TailwindCSS",
        "getLinked API",
        "Framer Motion",
      ],
      imgURL: `${getLinked}`,
      repoURL: "https://github.com/Omolaso/getLinked",
      hostedURL: "https://get-linked-zeta.vercel.app/",
      featured: false,
    },
    {
      name: "Artsy",
      description:
        "A website to auction photographs and other amazing artworks.",
      techUsed: ["ReactJs", "TailwindCSS", "RandomJPEGS", "JSON Server"],
      imgURL: `${artsy}`,
      repoURL: "https://github.com/Omolaso/artsy",
      hostedURL: "https://artsymarketplace.netlify.app",
      featured: false,
    },
  ],

  archiveProjects: [
    {
      name: "Web Dico",
      description:
        "A fancy dictionary where you are required to create an account to gain access.",
      techUsed: ["ReactJS", "TailwindCSS", "Firebase", "Dictionary API"],
      repoURL: "https://github.com/Omolaso/webDictionary",
      hostedURL: "https://webdictionary-auth.firebaseapp.com/",
      featured: false,
    },
    {
      name: "Squazzle",
      description:
        "A platform that allows users to list accommodations to-let.",
      techUsed: ["ReactJs", "TailwindCSS", "Firebase"],
      imgURL: `${squazzle}`,
      repoURL:
        "https://github.com/StuternHousemanship/SQUAZZLE-Frontend-Project-Team1.1/tree/main",
      hostedURL: "https://squazzle-stutern.web.app/",
      featured: true,
    },
    {
      name: "QR Code generator",
      description:
        "A code generator for generating rapid codes to access websites.",
      techUsed: ["HTML", "TailwindCSS", "JavaScript"],
      imgURL: `${QR}`,
      repoURL: "https://github.com/Omolaso/QR-Code-Generator",
      hostedURL: "https://omolaso.github.io/QR-Code-Generator/",
      featured: false,
    },
    {
      name: "Mitera",
      description: "An HMO dashboard.",
      techUsed: ["NextJs", "TypeScript", "TailwindCSS", "Supabase"],
      imgURL: `${mitera}`,
      repoURL: "https://github.com/Omolaso/Mitera-Health",
      hostedURL: "https://mitera-health.vercel.app/",
      featured: false,
    },
    {
      name: "Sunnyside Landing Page",
      description:
        "A basic landing page for a brand that assists startups in achieving their aims.",
      techUsed: ["NextJS", "TailwindCSS"],
      imgURL: `${sunnySide}`,
      repoURL: "https://github.com/Omolaso/sunnySide",
      hostedURL: "https://sunnyside-agency-gamma.vercel.app/",
      featured: false,
    },
    {
      name: "Space Tourism",
      description: "A space tourism website.",
      techUsed: ["ReactJS", "TailwindCSS", "SpaceJPEGs"],
      imgURL: `${space}`,
      repoURL: "https://github.com/Omolaso/spaceTourism",
      hostedURL: "https://spacetourplace.netlify.app",
      featured: false,
    },
    {
      name: "Homely",
      description: "A basic landing page for a food ordering service.",
      techUsed: ["ReactJS", "TailwindCSS"],
      repoURL: "https://github.com/Omolaso/Homely.git",
      hostedURL: "https://homelylandingpage.netlify.app/",
      featured: false,
    },
    {
      name: "Joke Generator",
      description: "A Joke App that generates joke for regular humor.",
      techUsed: ["ReactJS", "CSS", "Chuck Norris Joke API"],
      repoURL: "https://github.com/Omolaso/myJokeApp.git",
      hostedURL: "https://myjokeapp.netlify.app/",
      featured: false,
    },
    {
      name: "Application Form",
      description:
        "A validated application form for a POS product where data inputs in the form are stored in the local storage of the browser.",
      techUsed: ["HTML", "CSS", "JavaScript"],
      repoURL: "https://github.com/Omolaso/DeveloperAssessment.git",
      hostedURL: "https://developeraccessment.netlify.app/",
      featured: false,
    },
    {
      name: "Zerohunger",
      description: "An e-commerce website for shopping groceries.",
      techUsed: ["ReactJS", "CSS", "Zerohunger API"],
      repoURL: "https://github.com/Omolaso/zeroHunger_react",
      hostedURL: "https://foodwebzerohunger.netlify.app/",
      featured: false,
    },
    {
      name: "Netflix",
      description: "A movie streaming platform clone.",
      techUsed: ["ReactJS", "TailwindCSS", "MovieDB API"],
      repoURL: "https://github.com/ELIJAHJOHNNY/GROUP-A-PROJECT",
      hostedURL: "https://netflix-duplicate.netlify.app/",
      featured: true,
    },
    {
      name: "Calculator",
      description: "A Basic Calculator.",
      techUsed: ["HTML", "SASS", "JavaScript"],
      repoURL: "https://github.com/Omolaso/BasicCalculator.git",
      hostedURL: "https://omolaso.github.io/BasicCalculator/",
      featured: false,
    },
    {
      name: "Scientific Calculator",
      description: "Calculator with more functionalities.",
      techUsed: ["HTML", "TailwindCSS", "JavaScript"],
      repoURL: "https://github.com/Omolaso/Scientific-Calculator.git",
      hostedURL: "https://omolaso.github.io/Scientific-Calculator/",
      featured: false,
    },
    {
      name: "Todo List App",
      description:
        "Todo-list App for keeping record of daily todos. It has a light and dark mode toggler for the user's preference.",
      techUsed: ["HTML", "CSS", "JavaScript"],
      repoURL: "https://github.com/omolaso/toDo/",
      hostedURL: "https://omolaso.github.io/toDo/",
      featured: false,
    },
    {
      name: "Brightly Landing Page",
      description:
        "A landing page for a learning product for students between the ages of 6 - 10",
      techUsed: ["HTML", "CSS", "JavaScript"],
      repoURL: "https://github.com/Omolaso/Bright.git",
      hostedURL: "https://omolaso.github.io/Bright/",
      featured: false,
    },
  ],

  skills: [
    "HTML",
    "CSS",
    "TailwindCSS",
    "JavaScript",
    "TypeScript",
    "React",
    "NextJS",
    "Webflow",
    "React Native",
  ],

  liveProjects: [
    {
      url: "https://squarebox.ng/",
      title: "Square Box",
      description: "Gift Card and Crypto Trading Application",
    },
    {
      url: "https://admin.squarebox.ng/",
      title: "SquareBox Admin",
      description: "Gift Card and Crypto Trading Application Admin",
    },
    {
      url: "https://www.myriskoffice.com/",
      title: "Risk Office",
      description: "A Risk Management Platform",
    },
    {
      url: "https://manage.myriskoffice.com/",
      title: "Risk Office Admin",
      description: "A Risk Management Platform Admin",
    },
  ],
};
