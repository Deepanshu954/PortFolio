import {
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export type Skill = {
  skill_name: string;
  image: string;
  width: number;
  height: number;
};

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },

  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] satisfies Skill[];

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/_deepanshu95",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/Deepanshu954",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/Deepanshu954",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },

  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },


  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },


] satisfies Skill[];

export const FULLSTACK_SKILL: Skill[] = [];

export const OTHER_SKILL: Skill[] = [];

export const PROJECTS = [
  {
    id: "sentinel",
    title: "Sentinel",
    description:
      "Infrastructure autoscaling pipeline with reactive monitoring, Grafana observability, and multi-phase traffic simulation.",
    image: "/projects/sentinel.png",
    link: "https://github.com/Deepanshu954/sentinel",
  },
  {
    id: "community-detection",
    title: "Community Detection Showcase",
    description:
      "Interactive Streamlit dashboard for social network analysis with Louvain, Label Propagation, and Greedy Modularity algorithms.",
    image: "/projects/community_detection.png",
    link: "https://github.com/Deepanshu954/community_detection_showcase",
  },
  {
    id: "blockchain-apps",
    title: "Blockchain Applications",
    description:
      "Decentralized applications built on blockchain technology exploring smart contracts and distributed ledger systems.",
    image: "/projects/blockchain.png",
    link: "https://github.com/Deepanshu954/Blockchain-Applications",
  },
  {
    id: "job-prediction",
    title: "Job Prediction",
    description:
      "Machine learning system for predicting job placements using classification models and feature engineering.",
    image: "/projects/job_prediction.png",
    link: "https://github.com/Deepanshu954/JobPrediction",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [

      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/Deepanshu954",
      },

    ],
  },
  {
    title: "Social Media",
    data: [

      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/Deepanshu954",
      },
    ],
  },
  {
    title: "About",
    data: [
   
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:deepanshu95488@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;
