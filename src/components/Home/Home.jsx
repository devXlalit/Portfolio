import {
  RiBootstrapFill,
  RiGithubFill,
  RiNextjsFill,
  RiNotionFill,
  RiTailwindCssFill,
} from "@remixicon/react";
import { SiNestjs, SiTypescript } from "react-icons/si";
import { RiLinkedinBoxFill } from "@remixicon/react";
import { FaTwitter } from "react-icons/fa";
import "animate.css";
import { Link } from "react-router-dom";
import TextChanger from "../../TextChanger";
import Tooltipx from "../Tooltipx";
import { PiReadCvLogoBold } from "react-icons/pi";
import { color, motion } from "framer-motion";
import GitHubHeatmap from "../GitHubHeatmap";
import avatarImg from "../../assets/IMG_20250128_041115_816-removebg-preview (3).png";
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
} from "react-icons/fa";
import { FaDocker } from "react-icons/fa";

import {
  SiAppwrite,
  SiExpress,
  SiGnubash,
  SiMongodb,
  SiPostman,
  SiRedux,
} from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoPostgresql } from "react-icons/bi";
import { VscAzure } from "react-icons/vsc";
import { SiYaml } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { SiGithubactions } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";

import SEO from "../SEO.jsx";

const tools = [
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

const Home = () => {
  return (
    <motion.div
      className="h-auto w-full pt-12 py-0 md:p-12  font-extrabold "
      id="container"
    >
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
      <span className="flex justify-center">
        <img
          className=" mb-4 md:block md:absolute md:top-36 rounded-full h-60 md:h-60 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] md:right-60"
          src={
            "https://pbs.twimg.com/profile_images/2008509739911815168/YeO76mcY_400x400.jpg"
          }
          referrerPolicy="no-referrer"
          alt="avatar image"
        />
      </span>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="text-center md:text-left text-6xl md:text-8xl leading-tight "
      >
        I'm <span className="text-[#08D9D6]">Lalit,</span>
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="text-center md:text-left text-4xl md:text-8xl"
      >
        <span id="change-text" className="w-full">
          {<TextChanger />}
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-[#FF2E63]"
        >
          DEVELOPER
        </motion.span>
      </motion.h1>
      <GitHubHeatmap />
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        id="bottom"
        className="flex flex-wrap justify-center md:justify-start md:gap-32"
      >
        <div className="flex gap-5 pt-10" id="social">
          <a
            title="LinkedIn"
            href="https://www.linkedin.com/in/lalit-pagare-b4926b228"
            target="_blank"
          >
            <RiLinkedinBoxFill
              size={42}
              className="hover:text-blue-500 text-[#252A34] transition-all duration-300 cursor-pointer"
            />
          </a>
          <a title="Twitter (X)" href="https://x.com/devXlalit" target="_blank">
            <FaTwitter
              size={38}
              className="hover:text-blue-500 text-[#252A34] transition-all duration-300 cursor-pointer"
            />
          </a>
          <a
            title="Resume"
            href="https://drive.google.com/file/d/15ra8EBsQ7cbfoY3yleDiAKIRSXqtD5jI/view?usp=sharing"
            target="_blank"
          >
            <PiReadCvLogoBold
              size={42}
              className="hover:opacity-50 text-[#252A34] transition-all duration-300 cursor-pointer"
            />
          </a>
          <a title="GitHub" href="https://github.com/devXlalit" target="_blank">
            <RiGithubFill
              size={42}
              className="hover:text-purple-500 text-[#252A34] transition-all duration-300 cursor-pointer"
            />
          </a>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          id="button"
          className="text-sm px-6 md:px-10 text-[#EAEAEA] bg-[#252A34] py-3 md:h-12 mt-8 rounded-full hover:bg-[#EAEAEA] hover:text-[#252A34] duration-300"
          //   className="px-14 py-1 mt-8 rounded-full hover:bg-white slide_from_left"
        >
          <Link to="/work">Explore my work...</Link>
        </motion.button>
      </motion.div>

      <motion.div layout id="skills" className="pt-36 w-full h-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-2xl leading-7 md:text-5xl font-extrabold"
        >
          TOOLS & TECHNOLOGIES
        </motion.h2>
        <motion.div
          initial={{ opacity: 0.2, width: "0%" }}
          animate={{ opacity: 1, width: "10%" }}
          transition={{ duration: 1 }}
          id="radial-bar1"
          className="h-2 md:h-4 w-12 md:w-20 bg-[#08D9D6] rounded-full "
        ></motion.div>
        <div className=" mt-6  flex gap-5  w-full">
          <div className="skills-card-sm drop-shadow-2xl rounded-3xl p-6  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] md:p-12">
            <div className="flex mt-8 flex-wrap gap-7 justify-center">
              {tools.map(({ Icon, color, title }, i) => (
                <Tooltipx
                  key={i}
                  icon={<Icon size={60} color={color} />}
                  title={title}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
