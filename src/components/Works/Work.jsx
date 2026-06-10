import proGif7 from "../../assets/Project-gif/comingsoon-ezgif.com-optimize.gif";
import proGif8 from "../../assets/Project-gif/proiamg.gif";
import proGif9 from "../../assets/Project-gif/weblogsWorkV-ezgif.com-video-to-gif-converter.gif";
import proGifpr from "../../assets/Project-gif/ScreencastFrom2025-01-1923-55-32-ezgif.com-video-to-gif-converter.gif";
import hashtagxoxo from "../../assets/Project-gif/hashtagxoxo.gif";
import metavisiorns from "../../assets/Project-gif/metavisiorns.gif";
import motosure from "../../assets/Project-gif/motosure.gif";
import maticalgo from "../../assets/Project-gif/maticalgos.gif";
import { RiGithubLine } from "@remixicon/react";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

import ExperienceBox from "../ExperienceBox";
import SEO from "../SEO";
const experienceData = [
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

const projects = [
  {
    image: motosure,
    title:
      "Motosure Assist - Roadside assistance service provider landing page.",
    desc: "Build a full fleged SEO friendly landing page for Motosure Assist, a roadside assistance service provider. with best SEO practices and modern tech stack like Vite + React js, Tailwind, React-Routers. Collaborated with UI/UX designers to implement responsive designs and ensure optimal user experience across devices. Worked with github actions for CI/CD deployment automation. for testing and production releases.",
    wlink: "https://motosure.in/",
    order: "  ",
  },
  {
    image: metavisiorns,
    title: "MetaVisionRS - EdTech and Product Company.",
    desc: "Created a complete SEO friendly website for MetaVisionRS, an EdTech and Product Company. using modern tech stack like ReactJs, Tailwind Css, and implemented database with Supabase PSQL. Worked on creating a scalable and efficient database schema using Supabase to handle user data and interactions.",
    wlink: "https://metavisionrs.in/",
    order: "flex-row-reverse",
  },
  {
    image: maticalgo,
    title: "MaticAlgos - Trading Strategy Builder SaaS based web application.",
    desc: "Worked on a contract basis project enhance features of MaticAlgo platform using React.js for frontend development. Implemented Posthog analytics to track user behavior and engagement on the platform. Implemented React charts with rechart library to visualize trading data and performance metrics effectively.",
    wlink: "https://spark.maticalgos.com/",
    order: "",
  },
  {
    image: hashtagxoxo,
    title:
      "Hashtagxoxo - Women cosmetics and beauty products e-commerce website.",
    desc: "Created a complete E-commerce website with modern tech stack like Reactjs, Tailwind Css, MongoDB, Mongoose, Node js, Express js. Implemented secure user authentication and authorization using JWT. Developed a responsive and user-friendly UI using Tailwind CSS to enhance the shopping experience across devices. with a admin panel (CMS), order management, product management, order tracking system and payment gateway integration. and Meta ads tracking.",
    wlink: "https://hashtagxoxo.com/",
    order: "flex-row-reverse",
  },

  {
    image: proGifpr,
    title: "Projectly - Learn programming by creating next level projects.",
    desc: "Build a full stack web application with modern tech stack like Nextjs , Next auth, Github Auth (OAuth) MongoDB, Mongoose, Appwrite, Tailwind Css, Framer motion, Node js, Express js. Implemented secure user authentication and authorization using Next Auth. Projectly was build to help developers/student to learn programming by building real world projects.",
    wlink: "https://projectly-dev.vercel.app/",
    order: "",
  },
  {
    image: proGif9,
    title:
      "Weblogs - Free blogging website for content creater and developers.",
    desc: "Build a full stack blogging web application with modern tech stack like Next js, Tailwind, MongoDB, Mongoose. Implemented secure user authentication and authorization using JWT. Developed a responsive and user-friendly UI using Tailwind CSS  post management, comment system and rich text editor. with all CRUD operations for blog posts.",
    glink: "https://github.com/devXlalit/Project_weblogs.git",
    wlink: "https://weblogs-five.vercel.app/",
    order: "flex-row-reverse",
  },

  {
    image: proGif8,
    title: "The Blunt - YouTube Content Media Official Website.",
    desc: "Worked on a contract basis out sourced project for building the landing page for The Blunt, a Youtube content creating company with 200k+ subscribers. Enhanced user engagement by developing a responsive landing page using Vite and React.js, resulting in a 25% increase in visitor retention. to showcase their services and offerings effectively.",
    wlink: "https://theblunt.media/",
    order: "",
  },
];
const Work = () => {
  return (
    <div>
      <SEO
        title={
          "Lalit Pagare | devxlalit | Hire Freelance Full Stack Developer & DevOps Engineer"
        }
        description={
          "Freelance Full Stack Developer & DevOps Engineer. Building enterprise-grade web applications with CI/CD, Docker, & Kubernetes. 3+ years of expertise. Hire a remote full stack devops specialist for projects. Expert in modern web apps, automation, and reliable cloud deployment (AWS/Azure). 3 years experience."
        }
        keywords={
          "freelance full stack devops enginee, full stack developer devops consultant, hire full stack devops freelancer, remote full stack devops specialist, corporate full stack development devops, enterprise full stack and devops services, full-stack CI/CD implementation"
        }
      />
      <div id="experience" className="h-auto w-full pt-12 py-0 md:p-12 ">
        <motion.h1 className="font-extrabold text-2xl md:text-4xl leading-none ">
          CORPORATE EXPERIENCE
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, width: "0%" }}
          animate={{ opacity: 1, width: "10%" }}
          transition={{ delay: 1, duration: 0.8 }}
          id="radial-bar1"
          className="h-2 md:h-4 w-12 md:w-20 bg-[#08D9D6] rounded-full "
        ></motion.div>

        <div className="flex">
          <div className="mt-10 w-full">
            {experienceData.map((item, index) => (
              <ExperienceBox
                key={index}
                JobTitle={item.JobTitle}
                CompanyName={item.CompanyName}
                WebsiteLink={item.WebsiteLink}
                Date={item.Date}
                Summary={item.Summary}
                ListItems={item.ListItems}
                Tech={item.Tech}
                isLast={index === experienceData.length - 1}
                index={index}
              />
            ))}
          </div>
        </div>
        <div className="h-full mt-16" id="recent-pro">
          <h2 className="font-extrabold text-2xl md:text-4xl leading-none">
            PROJECTS SHOWCASE
          </h2>
          <div
            id="radial-bar1"
            className="h-2 md:h-4 w-12 md:w-24 bg-[#08D9D6] rounded-full "
            data-scroll
            data-scroll-speed="2"
          ></div>

          <div className="flex py-10 flex-wrap gap-7 md:px-6" id="rec-pro">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                title={project.title}
                desc={project.desc}
                wlink={project.wlink}
                order={project.order}
              />
            ))}
          </div>
        </div>

        <div id="upcoming-pro">
          <h2 className="font-extrabold text-2xl md:text-4xl leading-none pt-20">
            UPCOMING PROJECTS
          </h2>
          <div
            id="radial-bar2"
            className="h-2 md:h-4 w-12 md:w-20 bg-[#FF2E63] rounded-full"
          ></div>
          <div className="md:px-6" id="project-card">
            <img
              id="pr-gif1"
              className="mt-10 rounded-2xl h-44"
              src={proGif7}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ image, title, desc, glink, wlink, order }) => (
  <div
    className={`flex md:flex-nowrap flex-wrap justify-items-center items-center gap-10 p-4  ${order} `}
  >
    <div className="flex md:w-3/5" id="project-card">
      <img
        id="pr-gif1"
        className="shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] rounded-2xl "
        src={image}
        alt=""
      />
    </div>
    <div className="md:w-2/5 flex flex-col justify-center">
      <h1 className="md:text-2xl leading-tight pb-2">{title}</h1>
      <p className="font-[gilroy-medium] md:text-xl leading-tight">
        <span className="opacity-70">{desc}</span>
      </p>
      <span className="flex gap-2 md:gap-5 ">
        {glink && (
          <a href={glink} target="_blank" rel="noopener noreferrer">
            <button
              id="pro-btn"
              className="flex text-sm  justify-center hover:scale-105 hover:bg-[#EAEAEA] hover:text-[#252A34] duration-300 items-start gap-1 bg-[#252A34] text-[#EAEAEA] text-center  mt-6 py-2 px-4 rounded-full"
            >
              <RiGithubLine size={20} />
              GitHub
            </button>
          </a>
        )}

        <a href={wlink} target="_blank" rel="noopener noreferrer">
          <button
            id="pro-btn"
            className="flex text-lg justify-center hover:underline hover:scale-105 hover:bg-[#EAEAEA] hover:text-[#252A34] duration-300 items-center gap-1 bg-[#252A34] text-[#EAEAEA]  text-center  mt-6 py-2 px-4 rounded-full"
          >
            Visit
            <MdArrowOutward size={22} className="mb-1" />
          </button>
        </a>
      </span>
    </div>
  </div>
);

export default Work;
