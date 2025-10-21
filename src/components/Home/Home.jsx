import {
  RiBootstrapFill,
  RiGithubFill,
  RiNextjsFill,
  RiNotionFill,
  RiTailwindCssFill,
} from "@remixicon/react";
import { SiTypescript } from "react-icons/si";
import { RiLinkedinBoxFill } from "@remixicon/react";
import { FaTwitter } from "react-icons/fa";
import "animate.css";
import { Link } from "react-router-dom";
import TextChanger from "../../TextChanger";
import Tooltipx from "../Tooltipx";
import { PiReadCvLogoBold } from "react-icons/pi";
import { motion } from "framer-motion";
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
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAppwrite,
  SiExpress,
  SiGnubash,
  SiGooglecloud,
  SiJquery,
  SiMongodb,
  SiMongoose,
  SiNetlify,
  SiNpm,
  SiObsidian,
  SiPassport,
  SiPostman,
  SiRedux,
  SiShadcnui,
} from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { FiFramer } from "react-icons/fi";
import { MdAnimation } from "react-icons/md";
import { TbApi, TbBrandOauth } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoVercel } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { VscAzure } from "react-icons/vsc";
import { SiYaml } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { SiGithubactions } from "react-icons/si";
import SEO from "../SEO.jsx";
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
          src={avatarImg}
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
              <Tooltipx
                icon={<FaReact size={60} color="#61DAFB" />}
                title="React "
              />
              <Tooltipx
                icon={<VscAzure size={60} color="#0078D4" />}
                title="Azure"
              />
              <Tooltipx
                icon={<SiRedux size={60} color="#764ABC" />}
                title="Redux "
              />
              <Tooltipx
                icon={<FaJs size={60} color="#F7DF1E" />}
                title="JavaScript "
              />
              <Tooltipx
                icon={<SiCurl size={60} color="#E95420" />}
                title="cURL "
              />
              <Tooltipx
                icon={<SiTypescript size={60} color="#007acc" />}
                title="Typescript"
              />
              <Tooltipx
                icon={<FaHtml5 size={60} color="#E34F26" />}
                title="HTML "
              />
              <Tooltipx
                icon={<FaDocker size={60} color="#0db7ed" />}
                title="Docker"
              />
              <Tooltipx icon={<SiYaml size={60} color="" />} title={"YAML"} />
              <Tooltipx
                icon={<RiTailwindCssFill size={60} color="#06B6D4" />}
                title="Tailwind "
              />
              <Tooltipx
                icon={<RiBootstrapFill size={60} color="#7952B3" />}
                title="BootStrap "
              />
              <Tooltipx
                icon={<IoLogoCss3 size={60} color="#1572B6" />}
                title="CSS "
              />
              <Tooltipx
                icon={
                  <img
                    src="https://posthog.com/brand/posthog-logomark.svg"
                    width={70}
                  />
                }
                title="PostHog"
              />
              <Tooltipx
                icon={<FaFigma size={60} color="#F24E1E" />}
                title="Figma "
              />
              <Tooltipx
                icon={<FiFramer size={60} color="#0055FF" />}
                title="FramerMotion "
              />
              <Tooltipx
                icon={<MdAnimation size={60} color="#66DEB1" />}
                title="GSAP "
              />
              <Tooltipx
                icon={<SiJquery size={60} color="#0769AD" />}
                title="JQuery "
              />
              <Tooltipx
                icon={<SiShadcnui size={60} color="#000000" />}
                title="ShadUI "
              />
              <Tooltipx
                icon={<FaNodeJs size={60} color="#5FA04E" />}
                title="NodeJs"
              />
              <Tooltipx
                icon={<SiGithubactions size={60} color="" />}
                title={"Workflows"}
              />
              <Tooltipx
                icon={
                  <svg
                    width="55"
                    height="55"
                    viewBox="0 0 109 113"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
                      fill="url(#paint0_linear)"
                    />
                    <path
                      d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
                      fill="url(#paint1_linear)"
                      fill-opacity="0.2"
                    />
                    <path
                      d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z"
                      fill="#3ECF8E"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="53.9738"
                        y1="54.974"
                        x2="94.1635"
                        y2="71.8295"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#249361" />
                        <stop offset="1" stop-color="#3ECF8E" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear"
                        x1="36.1558"
                        y1="30.578"
                        x2="54.4844"
                        y2="65.0806"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop />
                        <stop offset="1" stop-opacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                }
                title="Supabase"
              />
              <Tooltipx
                icon={
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    height={60}
                    width={60}
                    fill="#B4CA65"
                  >
                    <title>EJS</title>
                    <path d="m8.291 5.696-1.258-1.58 1.668-1.55 1.258 1.58-1.668 1.55zm2.34 2.048.205-1.55-5.412-.03-.204 1.55 3.945.022L7.8 17.852l-.839.77-.405-.004c.385.403.803.81 1.236 1.214l1.378-1.265 1.458-10.823h.004zm-6.757 7.254s2.925-.468 3.54.38c0 0-1.756-2.925-4.184-2.925 0-.074-.098-1.353 5.146-2.609l.206-1.53c-8.346 1.108-14.287 4.322.265 13.12 0 0-5.675-4.71-4.973-6.436zM13 6.223 11.216 7.86l-.526 4.037 1.316 1.638 5.675.058.556.702-.38 2.633-.713.685-.018.017h2.193l.556-4.037-1.345-1.638-5.646-.058-.556-.702.351-2.633.731-.702 5.032.058.556.673-.176 1.229h1.55l.264-1.902-1.317-1.667-6.318-.03zm2.882 11.908.545-.523-4.305-.035-.965-1.17-1.258 1.17 1.346 1.667 6.318.03 1.22-1.139h-2.901zM13.13 8.965a103.16 103.16 0 0 1 4.624-.554l-4.145-.048-.457.44-.022.162zm8.026-1.156-.025.179-.018.132c.92-.07 1.87-.139 2.887-.2 0 0-1.113-.067-2.844-.11zM1.914 18.392l1.404 1.784 2.66.02c-1.292-.875-2.393-1.708-3.296-2.499l-.768.695z" />
                  </svg>
                }
                title="EJS"
              />
              <Tooltipx
                icon={<SiExpress size={60} color="#000000" />}
                title="ExpressJs"
              />
              <Tooltipx
                icon={<RiNextjsFill size={60} color="#000000" />}
                title="NextJs"
              />
              <Tooltipx
                icon={<SiPassport size={60} color="#34E27A" />}
                title="PassportJs"
              />
              <Tooltipx
                icon={<DiRedis size={60} color="D82C20" />}
                title="Redis"
              />
              <Tooltipx
                icon={<BiLogoPostgresql size={60} color="#4169E1" />}
                title="PostgreSQL"
              />
              <Tooltipx
                icon={<SiNpm size={60} color="#CB3837" />}
                title="NPM"
              />
              <Tooltipx
                icon={<SiMongodb size={60} color="#47A248" />}
                title="MongoDB"
              />
              <Tooltipx
                icon={<SiMongoose size={60} color="#880000" />}
                title="Mongoose"
              />
              <Tooltipx
                icon={<SiGooglecloud size={60} color="#4285F4" />}
                title="GoogleCloud"
              />
              <Tooltipx
                icon={<TbBrandOauth size={60} color="#EB5424" />}
                title="OAuth"
              />
              <Tooltipx
                icon={<SiAppwrite size={60} color="#FD366E" />}
                title="Appwrite"
              />
              <Tooltipx
                icon={<VscVscode size={60} color="#2F80ED" />}
                title="VsCode"
              />
              <Tooltipx
                icon={<FaGitAlt size={60} color="#F05032" />}
                title="Git"
              />
              <Tooltipx
                icon={<SiPostman size={60} color="#FF6C37" />}
                title="Postman"
              />
              <Tooltipx
                icon={<FaGithub size={60} color="#181717" />}
                title="GitHub"
              />
              <Tooltipx
                icon={<SiNetlify size={60} color="#00C7B7" />}
                title="Netlify"
              />
              <Tooltipx
                icon={<SiObsidian size={60} color="#7C3AED" />}
                title="Obsidian"
              />

              <Tooltipx
                icon={<RiNotionFill size={60} color="#00000" />}
                title="Notion"
              />
              <Tooltipx
                icon={<IoLogoVercel size={60} color="#000000" />}
                title="Vercel"
              />
              <Tooltipx
                icon={<FaLinux size={60} color="#FCC624" />}
                title="Linux"
              />
              <Tooltipx
                icon={<SiGnubash size={60} color="#00000" />}
                title="BashScript"
              />
              <Tooltipx
                icon={<SiAdobephotoshop size={60} color="#1864ab" />}
                title="Photoshop"
              />
              <Tooltipx
                icon={<SiAdobeillustrator size={60} color="#FF9A00" />}
                title="Illustrator"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
