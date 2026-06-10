// Project GIFs
import proGif7 from "../assets/Project-gif/comingsoon-ezgif.com-optimize.gif";
import proGif8 from "../assets/Project-gif/proiamg.gif";
import proGif9 from "../assets/Project-gif/weblogsWorkV-ezgif.com-video-to-gif-converter.gif";
import proGifpr from "../assets/Project-gif/ScreencastFrom2025-01-1923-55-32-ezgif.com-video-to-gif-converter.gif";
import hashtagxoxo from "../assets/Project-gif/hashtagxoxo.gif";
import metavisiorns from "../assets/Project-gif/metavisiorns.gif";
import motosure from "../assets/Project-gif/motosure.gif";
import maticalgo from "../assets/Project-gif/maticalgos.gif";

// Tool / tech icons
import {
  RiBootstrapFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "@remixicon/react";
import { SiNestjs, SiTypescript } from "react-icons/si";
import { RiLinkedinBoxFill, RiGithubFill } from "@remixicon/react";
import { FaTwitter } from "react-icons/fa";
import { PiReadCvLogoBold } from "react-icons/pi";
import { SiCurl } from "react-icons/si";
import {
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLinux,
  FaNodeJs,
  FaReact,
  FaDocker,
} from "react-icons/fa";
import {
  SiAppwrite,
  SiExpress,
  SiGnubash,
  SiMongodb,
  SiPostman,
  SiRedux,
  SiYaml,
  SiGithubactions,
} from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoPostgresql } from "react-icons/bi";
import { VscAzure } from "react-icons/vsc";
import { DiRedis } from "react-icons/di";
import { RiSupabaseFill } from "react-icons/ri";

export const upcomingProject = proGif7;

// Social / contact links shown in the identity + social tiles
export const socials = [
  {
    Icon: RiLinkedinBoxFill,
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/lalit-pagare-b4926b228",
    hover: "hover:text-blue-500",
  },
  {
    Icon: FaTwitter,
    title: "Twitter (X)",
    href: "https://x.com/devXlalit",
    hover: "hover:text-blue-500",
  },
  {
    Icon: PiReadCvLogoBold,
    title: "Resume",
    href: "https://drive.google.com/file/d/15ra8EBsQ7cbfoY3yleDiAKIRSXqtD5jI/view?usp=sharing",
    hover: "hover:text-[#08D9D6]",
  },
  {
    Icon: RiGithubFill,
    title: "GitHub",
    href: "https://github.com/devXlalit",
    hover: "hover:text-purple-500",
  },
];

// Headline figures — all drawn from real claims already in the portfolio copy
export const stats = [
  { value: "3+", label: "Years building" },
  { value: "100k+", label: "Users served" },
  { value: "70%", label: "Boot-camp growth" },
];

export const tools = [
  { Icon: FaReact, color: "#61DAFB", title: "React" },
  { Icon: VscAzure, color: "#0078D4", title: "Azure" },
  { Icon: SiRedux, color: "#764ABC", title: "Redux" },
  { Icon: FaJs, color: "#F7DF1E", title: "JavaScript" },
  { Icon: SiCurl, color: "#E95420", title: "cURL" },
  { Icon: SiTypescript, color: "#007acc", title: "Typescript" },
  { Icon: FaHtml5, color: "#E34F26", title: "HTML" },
  { Icon: FaDocker, color: "#0db7ed", title: "Docker" },
  { Icon: SiYaml, color: null, title: "YAML" },
  { Icon: RiTailwindCssFill, color: "#06B6D4", title: "Tailwind" },
  { Icon: RiBootstrapFill, color: "#7952B3", title: "BootStrap" },
  { Icon: IoLogoCss3, color: "#1572B6", title: "CSS" },
  { Icon: FaFigma, color: "#F24E1E", title: "Figma" },
  { Icon: FaNodeJs, color: "#5FA04E", title: "NodeJs" },
  { Icon: SiGithubactions, color: null, title: "CI/CD" },
  { Icon: RiSupabaseFill, color: "#40c057", title: "Supabase" },
  { Icon: SiNestjs, color: "#e64980", title: "NestJS" },
  { Icon: SiExpress, color: "#000000", title: "ExpressJs" },
  { Icon: RiNextjsFill, color: "#000000", title: "NextJs" },
  { Icon: DiRedis, color: "#D82C20", title: "Redis" },
  { Icon: BiLogoPostgresql, color: "#4169E1", title: "PostgreSQL" },
  { Icon: SiMongodb, color: "#47A248", title: "MongoDB" },
  { Icon: SiAppwrite, color: "#FD366E", title: "Appwrite" },
  { Icon: FaGitAlt, color: "#F05032", title: "Git" },
  { Icon: SiPostman, color: "#FF6C37", title: "Postman" },
  { Icon: FaGithub, color: "#181717", title: "GitHub" },
  { Icon: FaLinux, color: "#FCC624", title: "Linux" },
  { Icon: SiGnubash, color: "#000000", title: "BashScript" },
];

export const experienceData = [
  {
    JobTitle: "Software Engineer",
    CompanyName: "MetaVisionRS - EdTech and Product Company",
    WebsiteLink: "https://metavisionrs.in/",
    Date: "May 2025 - Present",
    Summary:
      "Building and scaling the MotoSure Assist platform end-to-end — from database architecture to cloud deployment.",
    ListItems: [
      {
        k: "Database architecture",
        v: "Designed a scalable PostgreSQL schema and ER system on Supabase built to handle 100k+ users, with optimized queries, functions, triggers, and views for performance and data integrity.",
      },
      {
        k: "Backend & APIs",
        v: "Built and maintained RESTful APIs with Node.js and Express, secured by robust authentication and authorization.",
      },
      {
        k: "Cloud & deployment",
        v: "Deployed and managed web apps on Microsoft Azure for high availability and scalability.",
      },
      {
        k: "Frontend",
        v: "Shipped responsive web apps in React and TypeScript with Context API state management.",
      },
      {
        k: "CI/CD & quality",
        v: "Automated test and release pipelines with GitHub Actions, and led QA, bug fixing, and code reviews.",
      },
    ],
    Tech: [
      "PostgreSQL",
      "Supabase",
      "Node.js",
      "Express",
      "React",
      "TypeScript",
      "Azure",
      "GitHub Actions",
    ],
  },
  {
    JobTitle: "Full Stack Engineer",
    CompanyName: "MaticAlgos - Trading Strategy Builder",
    WebsiteLink: "https://buildalgos.com/",
    Date: "Dec 2024 - Jan 2025",
    Summary:
      "Contract work enhancing the MaticAlgos trading-strategy platform.",
    ListItems: [
      {
        k: "Feature development",
        v: "Built and enhanced platform features with React.",
      },
      {
        k: "Analytics",
        v: "Integrated PostHog to track user behavior and engagement.",
      },
      {
        k: "Data visualization",
        v: "Built interactive trading charts with Recharts to surface performance metrics.",
      },
    ],
    Tech: ["React", "PostHog", "Recharts"],
  },
  {
    JobTitle: "Frontend Engineer",
    CompanyName: "Futuristic Coding Academy",
    WebsiteLink: "https://futuristiccodingacademy.com/",
    Date: "May 2023 - Aug 2024",
    Summary:
      "Owned the frontend and growth-focused landing pages for an ed-tech academy.",
    ListItems: [
      {
        k: "Frontend build",
        v: "Developed the full site in React and Tailwind CSS with a responsive, user-friendly interface.",
      },
      {
        k: "Conversion",
        v: "Designed a landing page that grew boot-camp registrations by 70%.",
      },
      {
        k: "Performance & revenue",
        v: "Optimized site performance, driving a 40% traffic lift and ₹70K in boot-camp revenue.",
      },
      {
        k: "Workflow",
        v: "Delivered landing pages 5× faster using Git/GitHub and rapid bug resolution.",
      },
    ],
    Tech: ["React", "Tailwind CSS", "Git"],
  },
  {
    JobTitle: "Frontend Developer",
    CompanyName: "Qoulomb - Content writing and marketing agency",
    WebsiteLink: "https://qoulomb.com/",
    Date: "Oct 2023 - Dec 2023",
    Summary:
      "Contract landing page for The Blunt, a YouTube creator with 200k+ subscribers.",
    ListItems: [
      {
        k: "Landing page",
        v: "Built a responsive marketing page with Vite and React to showcase their services.",
      },
      {
        k: "Engagement",
        v: "Increased visitor retention by 25%.",
      },
    ],
    Tech: ["Vite", "React"],
  },
];

export const projects = [
  {
    image: motosure,
    title:
      "Motosure Assist - Roadside assistance service provider landing page.",
    desc: "An SEO-friendly landing page for a roadside-assistance provider, built with Vite + React, Tailwind, and React Router. Collaborated with UI/UX designers on responsive layouts and shipped via GitHub Actions CI/CD.",
    tags: ["React", "Vite", "Tailwind", "SEO"],
    wlink: "https://motosure.in/",
    featured: true,
  },
  {
    image: metavisiorns,
    title: "MetaVisionRS - EdTech and Product Company.",
    desc: "A full SEO-friendly website for an EdTech product company using React and Tailwind, backed by a scalable Supabase (PostgreSQL) schema for user data and interactions.",
    tags: ["React", "Tailwind", "Supabase"],
    wlink: "https://metavisionrs.in/",
  },
  {
    image: maticalgo,
    title: "MaticAlgos - Trading Strategy Builder.",
    desc: "Enhanced features of a trading SaaS platform in React. Added PostHog analytics and Recharts-based visualizations for trading performance metrics.",
    tags: ["React", "PostHog", "Recharts"],
    wlink: "https://spark.maticalgos.com/",
  },
  {
    image: hashtagxoxo,
    title: "Hashtagxoxo - Cosmetics e-commerce platform.",
    desc: "A full e-commerce store with React, Node/Express, and MongoDB. JWT auth, an admin CMS, order and product management, order tracking, payment gateway, and Meta ads tracking.",
    tags: ["React", "Node.js", "MongoDB", "JWT"],
    wlink: "https://hashtagxoxo.com/",
  },
  {
    image: proGifpr,
    title: "Projectly - Learn by building real projects.",
    desc: "A full-stack app on Next.js with NextAuth + GitHub OAuth, MongoDB, and Appwrite — helping students learn programming by shipping real-world projects.",
    tags: ["Next.js", "NextAuth", "MongoDB", "Appwrite"],
    wlink: "https://projectly-dev.vercel.app/",
  },
  {
    image: proGif9,
    title: "Weblogs - Blogging platform for creators.",
    desc: "A full-stack blogging app on Next.js + MongoDB with JWT auth, a rich-text editor, comments, and full CRUD on posts.",
    tags: ["Next.js", "MongoDB", "JWT"],
    glink: "https://github.com/devXlalit/Project_weblogs.git",
    wlink: "https://weblogs-five.vercel.app/",
  },
  {
    image: proGif8,
    title: "The Blunt - YouTube media official site.",
    desc: "A responsive landing page for a YouTube creator with 200k+ subscribers, built with Vite + React — lifting visitor retention by 25%.",
    tags: ["Vite", "React"],
    wlink: "https://theblunt.media/",
  },
];
