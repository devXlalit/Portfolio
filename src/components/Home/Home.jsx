import React from "react";
import { RiGithubFill } from "@remixicon/react";
import { RiLinkedinBoxFill } from "@remixicon/react";
import { RiStackOverflowFill } from "@remixicon/react";
import { RiInstagramFill } from "@remixicon/react";
import { RiScrollToBottomLine } from "@remixicon/react";
// importing Images
// Frontend
import ReactLogo from "../../assets/Images/1174949_js_react js_logo_react_react native_icon.webp";
import jsLogo from "../../assets/Images/javascript-39394.webp";
import htmlLogo from "../../assets/Images/dfsdf.webp";
import tailwindLogo from "../../assets/Images/pngwing.com (2).webp";
import bootstarpLogo from "../../assets/Images/pngwing.com (3).webp";
import photoshopLogo from "../../assets/Images/pngwing.com (6).webp";
import IllustratorLogo from "../../assets/Images/pngwing.com (7).webp";
import cssLogo from "../../assets/Images/pngwing.com (1).webp";
import figmaLogo from "../../assets/Images/pngwing.com (8).webp";
import framerLogo from "../../assets/Images/framer-motion.svg";
import gsapLogo from "../../assets/Images/gsap-greensock.svg";
import githubLogo from "../../assets/Images/pngwing.com (4).webp";
import shadcnLogo from "../../assets/Images/shadcn-ui-seeklogo.svg";
import reduxLogo from "../../assets/Images/5848309bcef1014c0b5e4a9a.png";
import jqueryLogo from "../../assets/Images/pngwing.com (4).png";
import "animate.css";

// Backend
import nodeJs from "../../assets/Images/885px-Node.js_logo.svg.webp";
import ejs from "../../assets/Images/EJS-Abrv._Green-Grass_High-Res.webp";
import expressJs from "../../assets/Images/node-js-express-js-javascript-solution-stack-web-application-others-237f81086df923da9c2718e6170912c9.webp";
import nextJs from "../../assets/Images/pngwing.com (5).webp";
import passport from "../../assets/Images/Passport-01.svg";
import api from "../../assets/Images/pngwing.com (9).webp";
import postgreSql from "../../assets/Images/pngwing.com.webp";
import npm from "../../assets/Images/810px-Npm-logo.svg.png";
import mongoDb from "../../assets/Images/MongoDB_logo_PNG1.webp";
import firebase from "../../assets/Images/firebase.png";
import oAuth from "../../assets/Images/oauth.png";

// TOOLS
import vsCode from "../../assets/Images/vscode.png";
import Git from "../../assets/Images/pngegg(2).webp";
import Postman from "../../assets/Images/pngwing.com (10).webp";
import Vercel from "../../assets/Images/5848309bcef1014c0b5e4a9a.png";
import Netlify from "../../assets/Images/c++.webp";
import Neovim from "../../assets/Images/neovim.svg";

// Languages
import Python from "../../assets/Images/python.webp";
import Java from "../../assets/Images/java.webp";
import Cplusplus from "../../assets/Images/c++.webp";
import R from "../../assets/Images/r-programming-language-icon.png";
import C from "../../assets/Images/cpro.png";
import Javascript from "../../assets/Images/javascript-39394.webp";
import { Link } from "react-router-dom";
import TextChanger from "../../TextChanger";
import bashScript from "../../assets/Images/full_colored_dark.svg";
const Home = () => {
  return (
    <div
      class="h-auto w-full pt-12 py-0 md:p-12  font-extrabold "
      id="container"
      data-scroll
      data-scroll-speed="4"
    >
      <h1 class="text-center md:text-left text-6xl md:text-8xl leading-tight ">
        I'm <span className="text-[#08D9D6]">Lalit,</span>
      </h1>
      <h1 class="text-center md:text-left text-4xl md:text-8xl">
        <span id="change-text" className="w-full">
          {<TextChanger />}
        </span>
        <span className="text-[#FF2E63]">DEVELOPER</span>
      </h1>
      <div
        id="bottom"
        class="flex flex-wrap justify-center md:justify-start md:gap-32"
      >
        <div class="flex gap-5 pt-10" id="social">
          <a
            href="https://www.linkedin.com/in/lalit-pagare-b4926b228"
            target="_blank"
          >
            <RiLinkedinBoxFill
              size={42}
              className="hover:text-blue-500 text-[#252A34] transition-all duration-300 cursor-pointer"
            />
          </a>
          <a href="https://www.instagram.com/lalit_devl/" target="_blank">
            <RiInstagramFill
              size={42}
              className="hover:text-pink-500 text-[#252A34] transition-all duration-300 cursor-pointer"
            />
          </a>
          <a
            href="https://stackoverflow.com/users/23515297/lalit-pagare"
            target="_blank"
          >
            <RiStackOverflowFill
              size={42}
              className="hover:text-amber-600 text-[#252A34] transition-all duration-300 cursor-pointer"
            />
          </a>
          <a href="https://github.com/devXlalit" target="_blank">
            <RiGithubFill
              size={42}
              className="hover:text-purple-500 text-[#252A34] transition-all duration-300 cursor-pointer"
            />
          </a>
        </div>
        <button
          id="button"
          className="text-sm px-6 md:px-12 text-[#EAEAEA] bg-[#252A34] py-3 md:h-12 mt-8 rounded-full hover:bg-[#EAEAEA] hover:text-[#252A34] duration-300"
          //   className="px-14 py-1 mt-8 rounded-full hover:bg-white slide_from_left"
        >
          <Link to="/work">Explore my work...</Link>
        </button>
        <RiScrollToBottomLine
          size={30}
          className="animate__animated animate__shakeY infinite animate__delay-4s animate__slower animate__infinite absolute hidden lg:block md:right-80 md:bottom-14"
        />
      </div>
      <div id="skills" className="pt-36 h-auto" data-scroll>
        <h2
          className="text-2xl leading-7 md:text-5xl font-extrabold"
          data-scroll-direction="2"
        >
          SKILLS & TECHNOLOGIES
        </h2>
        <div
          id="radial-bar1"
          className="h-2 md:h-4 w-12 md:w-20 bg-[#08D9D6] rounded-full "
          data-scroll
          data-scroll-speed="2"
        ></div>
        <div className="mt-12 md:p-12 flex gap-5 flex-wrap justify-center w-full">
          <div className="skills-card-sm drop-shadow-2xl rounded-3xl p-6 md:w-96 shadow-lg md:p-12">
            <h1 className="text-xl md:text-3xl font-extrabold text-center">
              FRONT-END
            </h1>
            <div className="flex mt-8 flex-wrap gap-5">
              <img
                className="h-8 md:h-10"
                title="React Js"
                src={ReactLogo}
                alt="React Js"
              />
              <img
                className="h-8 md:h-10"
                title="Javascript"
                src={jsLogo}
                alt="Javascript"
              />
              <img
                className="h-8 md:h-10"
                title="HTML"
                src={htmlLogo}
                alt="HTML"
              />
              <img
                className="h-8 md:h-10"
                title="Tailwind Css"
                src={tailwindLogo}
                alt="Tailwind Css"
              />
              <img
                className="h-8 md:h-10"
                title="Bootstrap"
                src={bootstarpLogo}
                alt="Bootstrap"
              />
              <img
                className="h-8 md:h-10"
                title="Adobe Photoshop"
                src={photoshopLogo}
                alt="Adobe Photoshop"
              />
              <img
                className="h-8 md:h-10"
                title="Adobe Illustrator"
                src={IllustratorLogo}
                alt="Adobe Illustrator"
              />
              <img
                className="h-8 md:h-10"
                title="CSS"
                src={cssLogo}
                alt="CSS"
              />
              <img
                className="h-8 md:h-10"
                title="Figma"
                src={figmaLogo}
                alt="Figma"
              />
              <img
                className="h-8 md:h-10"
                title="Framer Motion"
                src={framerLogo}
                alt="Framer Motion"
              />
              <img
                className="h-8 md:h-10"
                title="GSAP"
                src={gsapLogo}
                alt="GSAP"
              />
              <img
                className="h-8 md:h-10"
                title="JQuery"
                src={jqueryLogo}
                alt="JQuery"
              />
              <img
                className="h-8 md:h-10"
                title="Shadcn Ui"
                src={shadcnLogo}
                alt="Shadcn Ui"
              />
              <img
                className="h-8 md:h-10"
                title="Redux"
                src={reduxLogo}
                alt="Redux"
              />
            </div>
          </div>
          <div className="skills-card-sm drop-shadow-2xl rounded-3xl p-6 md:w-96 shadow-lg md:p-12">
            <h1 className="text-xl md:text-3xl font-extrabold text-center">
              BACK-END
            </h1>
            <div className="flex mt-8 flex-wrap gap-5">
              <img
                className="h-8 md:h-10"
                title="Node Js"
                src={nodeJs}
                alt="Node Js"
              />
              <img className="h-8 md:h-10" title="Ejs" src={ejs} alt="Ejs" />
              <img
                className="h-8 md:h-10"
                title="Express Js"
                src={expressJs}
                alt="Express Js"
              />
              <img
                className="h-8 md:h-10"
                title="Next js"
                src={nextJs}
                alt="Next Js"
              />
              <img
                className="h-8 md:h-10"
                title="passport"
                src={passport}
                alt="passport"
              />
              <img className="h-8 md:h-10" title="Api" src={api} alt="Api" />
              <img
                className="h-8 md:h-10"
                title="PostgreSql"
                src={postgreSql}
                alt="postgreSql"
              />
              <img className="h-8 md:h-10" title="CSS" src={npm} alt="CSS" />
              <img
                className="h-8 md:h-10"
                title="MongoDb"
                src={mongoDb}
                alt="MongoDb"
              />
              <img
                className="h-8 md:h-10"
                title="Firebase"
                src={firebase}
                alt="Firebase"
              />
              <img
                className="h-8 md:h-10"
                title="oauth"
                src={oAuth}
                alt="Oauth"
              />
            </div>
          </div>

          <div className="skills-card-sm drop-shadow-2xl rounded-3xl p-6 md:w-96 shadow-lg md:p-12">
            <h1 className="text-xl md:text-3xl font-extrabold text-center">
              TOOLS
            </h1>
            <div className="flex mt-8 flex-wrap gap-5">
              <img
                className="h-8 md:h-10"
                title="vs Code"
                src={vsCode}
                alt="vs Code"
              />
              <img className="h-8 md:h-10" title="Git" src={Git} alt="Git" />
              <img
                className="h-8 md:h-10"
                title="Postman"
                src={Postman}
                alt="Postman"
              />
              <img
                className="h-8 md:h-10"
                title="Github"
                src={githubLogo}
                alt="Github"
              />
              <img
                className="h-8 md:h-10"
                title="Bootstrap"
                src={bootstarpLogo}
                alt="Bootstrap"
              />
              <img
                className="h-8 md:h-10"
                title="Adobe Photoshop"
                src={photoshopLogo}
                alt="Adobe Photoshop"
              />
              <img
                className="h-8 md:h-10"
                title="Neo Vim"
                src={Neovim}
                alt="Neo Vim"
              />
            </div>
          </div>
          <div className="skills-card-sm drop-shadow-2xl rounded-3xl p-6 md:w-96 shadow-lg md:p-12">
            <h1 className="text-xl md:text-3xl font-extrabold text-center">
              LANGUAGES
            </h1>
            <div className="flex mt-8 flex-wrap gap-5">
              <img
                className="h-8 md:h-10"
                title="Python"
                src={Python}
                alt="Python"
              />
              <img
                className="h-8 md:h-10"
                title="Bash"
                src={bashScript}
                alt="Bash"
              />
              <img className="h-8 md:h-10" title="java" src={Java} alt="java" />
              <img
                className="h-8 md:h-10"
                title="C++"
                src={Cplusplus}
                alt="C++"
              />
              <img
                className="h-8 md:h-10"
                title="R programming"
                src={R}
                alt="R programming"
              />
              <img
                className="h-8 md:h-10"
                title="C Programming"
                src={C}
                alt="C Programming"
              />
              <img
                className="h-8 md:h-10"
                title="Javascript"
                src={Javascript}
                alt="Javascript"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
