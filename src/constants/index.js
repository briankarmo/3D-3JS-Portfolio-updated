import {
  mobile,
  backend,
  creator,
  web,


  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  tesla,
  carrent,
  jobit,
  threejs,
  tripguide, 
  bkbeats,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Html, CSS, Javascript",
    icon: mobile,
  },
  {
    title: "API implementation",
    icon: backend,
  },
  {
    title: "Node for server-side development",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];


const projects = [
  {
    name: "BK CodeTube",
    description: "Code to the beat with BKinc! Learn, Code, Relax with Soothing Coding Music!",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "RapidAPI",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/briankarmo/BK-CodeTube-/",
  },
  {
    name: "Modern App",
    description: "A Modern business Demo App, buit with React and TailwindCSS",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "Smooth Scroll",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/briankarmo/bk_modern_app",
  },
{
  name: "Weather tracker",
  description: "A Weather tracker app, tracking data from weathermap.org, changes to a sunny view of Detroit city when the temperature is above 60℉",
  tags: [
    {
      name: "React",
      color: "blue-text-gradient",
    },
    {
      name: "OpenWeatherMap.org",
      color: "green-text-gradient",
    },
    {
      name: "TailwindCSS",
      color: "pink-text-gradient",
    },
  ],
  image: tripguide,
  source_code_link: "https://github.com/briankarmo/weather-app",
},
{
  name: "BK Tube",
  description: "A video sharing app created with vite/React and tailwindcss, fetching data from RapidAPI",
  tags: [
    {
      name: "React",
      color: "blue-text-gradient",
    },
    {
      name: "RapidAPI",
      color: "green-text-gradient",
    },
    {
      name: "TailwindCSS",
      color: "pink-text-gradient",
    },
  ],
  image: tesla,
  source_code_link: "https://bkinctube.netlify.app/",
},
{

name: "Wordpress Landing Page",
  description: "A simple static website, built by Wordpress",
  tags: [
    
    {
      name: "WordPress",
      color: "green-text-gradient",
    },
    {
      name: "Blocks",
      color: "pink-text-gradient",
    },
  ],
  image: meta,
  source_code_link: "https://briankarmo.com/woodmere-party-store/",
},
{

name: "B.K. Beats",
  description: "A music app created with react/vite styled with tailwind/Data from Rapid API",
  tags: [
    {
      name: "React",
      color: "blue-text-gradient",
    },
    {
      name: "Rapidapi",
      color: "green-text-gradient",
    },
    {
      name: "Vite",
      color: "pink-text-gradient",
    },
  ],
  image: bkbeats,
  source_code_link: "https://github.com/briankarmo/BK-LYRIKS",
    
}
]


   
export { services, technologies, projects };