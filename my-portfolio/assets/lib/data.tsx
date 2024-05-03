import {
  AdobeXdIcon,
  CanvasIcon,
  CssIcon,
  DjangoIcon,
  FigmaIcon,
  HtmlIcon,
  IllustratorIcon,
  JavascriptIcon,
  MongoIcon,
  NextJsIcon,
  NextJsWhiteIcon,
  NodeJsIcon,
  PythonIcon,
  ReactIcon,
  SassIcon,
  ShopifyIcon,
  SvelteIcon,
  TailwindIcon,
  TypescriptIcon,
  VueIcon,
  WebFlowIcon,
  WordpressIcon,
} from "../icons";

export const skillsDataWeb = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "Django",
        hash: "#Django",
        icon: <DjangoIcon className="w-10 h-10"/>,
        color: "#4FC08D",
      },
      {
        title: "Python",
        hash: "#Python",
        icon: <PythonIcon className="flex items-center justify-center" />,
        color: "#fdd22f",
      },
      {
        title: "HTML",
        hash: "#html",
        icon: <HtmlIcon />,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: <CssIcon />,
        color: "#1572B6",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: <TypescriptIcon />,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: <ReactIcon />,
        color: "#61DAFB",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: <JavascriptIcon />,
        color: "#F7DF1E",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: [<NextJsIcon />, <NextJsWhiteIcon />],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: <NodeJsIcon />,
        color: "#339933",
      },
      {
        title: "Tailwind CSS",
        hash: "#Tailwind",
        icon: <TailwindIcon />,
        color: "#38B2AC",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: <MongoIcon />,
        color: "#449C45",
      },
      {
        title: "SASS/SCSS",
        hash: "#SASS/SCSS",
        icon: <SassIcon />,
        color: "#CC6699",
      },
      {
        title: "Svelte & SvelteKit",
        hash: "#Svelte",
        icon: <SvelteIcon />,
        color: "#FF3E00",
      },
      {
        title: "Vue.js",
        hash: "#Vue",
        icon: <VueIcon />,
        color: "#41b883",
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Design",
    skills: [
      {
        title: "Adobe Illustrator",
        hash: "#Illustrator",
        icon: <IllustratorIcon />,
        color: "#FF9A00",
      },
      {
        title: "Adobe XD",
        hash: "#Adobe XD",
        icon: <AdobeXdIcon />,
        color: "#FF61F6",
      },
      { title: "Figma", hash: "#Figma", icon: <FigmaIcon />, color: "#F24E1E" },
      {
        title: "Canva",
        hash: "#Canva",
        icon: <CanvasIcon />,
        color: "#00C4CC",
      },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "CMS",
    skills: [
      {
        title: "WordPress",
        hash: "#WordPress",
        icon: <WordpressIcon />,
        color: "#21759B",
      },
      {
        title: "Shopify",
        hash: "#Shopify",
        icon: <ShopifyIcon />,
        color: "#7AB55C",
      },
      {
        title: "Webflow",
        hash: "#Webflow",
        icon: <WebFlowIcon />,
        color: "#4353FF",
      },
    ],
  },
] as const;

export const testimonialData = [
  {
    image:"/images/pic27.jpg",
    name: "KIng James",
    role: "Architect Developer",
    starNumber: 4,
    message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat deleniti quos, dicta expedita delectus excepturi a. Praesentium dolores voluptates exercitationem?"
  },
  {
    image:"/images/c2.jpg",
    name: "Adonis Simo",
    role: "Cloud Ing",
    starNumber: 3,
    message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat deleniti quos, dicta expedita delectus excepturi a. Praesentium dolores voluptates exercitationem?"
  },
  {
    image:"/images/pic36.jpg",
    name: "Axel Nana",
    role: "Full Stack Developer",
    starNumber: 4,
    message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat deleniti quos, dicta expedita delectus excepturi a. Praesentium dolores voluptates exercitationem?"
  },
  {
    image:"/images/pic29.jpg",
    name: "Divine Kamdoum",
    role: "IT NetWork",
    starNumber: 3,
    message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat deleniti quos, dicta expedita delectus excepturi a. Praesentium dolores voluptates exercitationem?"
  },
  {
    image:"/images/pic36.jpg",
    name: "Alban Foko",
    role: "Web Developer",
    starNumber: 5,
    message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat deleniti quos, dicta expedita delectus excepturi a. Praesentium dolores voluptates exercitationem?"
  }
]

export const visionData = [
  {
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis at optio corrupti dolor doloribus vero, natus saepe explicabo rerum eum sapiente pariatur, consectetur delectus dolorem."
  },
  {
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis at optio corrupti dolor doloribus vero, natus saepe explicabo rerum eum sapiente pariatur, consectetur delectus dolorem."
  },
  {
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis at optio corrupti dolor doloribus vero, natus saepe explicabo rerum eum sapiente pariatur, consectetur delectus dolorem."
  },
  {
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis at optio corrupti dolor doloribus vero, natus saepe explicabo rerum eum sapiente pariatur, consectetur delectus dolorem."
  }
]