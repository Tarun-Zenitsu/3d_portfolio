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
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";

  import school from '../assets/company/school.png'
  import college from '../assets/company/college.png'
  import degree from '../assets/company/degree.png'
  import kopykitab from '../assets/company/kopykitab.png';
  import webdev from '../assets/company/webdev.jpg';
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "journey",
      title: "Journey",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Love Gaming",
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "TypeScript",
      icon: typescript,
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
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Schooling",
      company_name: "UGHS,Lingmarni",
      icon: school,
      iconBg: "#383E56",
      date: "2004 - 2014",
      points: [
        "My education journey began in my village, Lingmarni.",
        "It is a small and beautiful village situated in Sonepur, Odisha.",
        "In this serene village, I successfully completed my matriculation.",
      ],
    },
    {
      title: "Intermediate",
      company_name: "Panchayat Juniour College,Bargarh",
      icon: college,
      iconBg: "#E6DEDD",
      date: "2015 - 2016",
      points: [
        "Successfully finished my intermediate education at the respected government institution, Panchayat College, Bargarh.",
        "Chose the science stream, specializing in Physics, Chemistry, Mathematics, and Biology, to gain a comprehensive understanding of scientific and mathematical concepts.",
      ],
    },
    {
      title: "Bachelor of Technology (Degree)",
      company_name: "Bhubaneswar College of Engineering",
      icon: degree,
      iconBg: "#383E56",
      date: "2017 - 2020",
      points: [
        "Successfully earned my Bachelor of Technology degree from Bhubaneswar College of Engineering.",
        "Pursued a specialization in Electronics and Communication Engineering during my studies.",
        "Despite my specialization, my passion for computer science led me to work on web development projects, combining my interests and skills to create meaningful web-based applications.",
      ],
    },
    {
      title: "Software Engineering intern",
      company_name: "Kopykitab",
      icon: kopykitab,
      iconBg: "#383E56",
      date: "Jun 2021 - August 2021",
      points: [
        "Joined Kopykitab as a software engineer intern, contributing to the design of their login page and integrating the backend with the frontend.",
        "Played a crucial role in creating a seamless user experience by enabling users to input data, processing it through the AI model, and displaying the best title and description for their articles.",
        " Collaborated with the team on the development of an AI model, which generates optimized titles and descriptions for users' articles, enhancing the overall usability and value of the platform.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Freelancer",
      icon: webdev,
      iconBg: "#383E56",
      date: " 2022 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "I have been contributing to open-source project. By collaborating with a community of developers, I actively participate in enhancing the project's features, fixing issues, and making valuable contributions to its growth and development.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
import aisumarizer from '../assets/aiSummarizer.jpg';
import movix from '../assets/movix.jpg';
import todo from '../assets/todo.jpeg';
  const projects = [
    {
      name: "AI Articles Summarizer",
      description:
        "An article summarizer app using OpenAI's GPT model and Redux Toolkit integration, providing summaries by pasting the article link for easy access.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "OpenAI's GPT model",
          color: "green-text-gradient",
        },
        {
          name: "Redux",
          color: "pink-text-gradient",
        },
      ],
      image: aisumarizer,
      source_code_link: "https://github.com/Tarun-Zenitsu/ai_summarizer",
      live_demo_link: "https://aisummarizer-gpt.netlify.app/",
    },
    {
      name: "Movix",
      description:
        "Movix, a React-based movie database, integrates Redux and TMDB. Browse and discover films effortlessly, sorting by IMDb rating, genre, and more. Enjoy!",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "TMDB api",
          color: "green-text-gradient",
        },
        {
          name: "redux",
          color: "pink-text-gradient",
        },
      ],
      image: movix,
      source_code_link: "https://github.com/Tarun-Zenitsu/movix",
      live_demo_link: "https://movix-iota-jade.vercel.app/",
    },
    {
      name: "Todo App",
      description:
        "This is a powerful Todo App built with React Next.js. Utilize Firebase as the backend for seamless user data storage and management.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Next.js",
          color: "green-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
      ],
      image: todo,
      source_code_link: "https://github.com/Tarun-Zenitsu/todo",
      live_demo_link: "https://todo-delta-pied.vercel.app/login",
    },
    // {
    //   name: "Weather App",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };