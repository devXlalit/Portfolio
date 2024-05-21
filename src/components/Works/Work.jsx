import React from "react";

import proGif1 from "../../assets/Project-gif/ViteReact-GoogleChrome2024-04-2503-23-44-ezgif.com-video-to-gif-converter.gif";
import proGif2 from "../../assets/Project-gif/moviewebpagevideo-ezgif.com-video-to-gif-converter.gif";
import proGif3 from "../../assets/Project-gif/Timeline1-ezgif.com-video-to-gif-converter.gif";
import proGif4 from "../../assets/Project-gif/pr5-ezgif.com-video-to-gif-converter.gif";
import proGif5 from "../../assets/Project-gif/pr6-ezgif.com-video-to-gif-converter.gif";
import proGif6 from "../../assets/Project-gif/pr7-ezgif.com-video-to-gif-converter.gif";
import proGif7 from "../../assets/Project-gif/comingsoon-ezgif.com-optimize.gif";
import proGif8 from "../../assets/Project-gif/proiamg.gif";
import {
  RiAdvertisementLine,
  RiGitRepositoryCommitsLine,
  RiGitRepositoryLine,
  RiGithubLine,
  RiLink,
  RiLinkM,
} from "@remixicon/react";
const Work = () => {
  return (
    <div>
      <div id="experience" className="h-auto w-full pt-12 py-0 md:p-12 ">
        <h1
          className="font-extrabold text-2xl md:text-4xl leading-none "
          data-scroll
          data-scroll-speed="2"
        >
          WORK & EXPERIENCE
        </h1>
        <div
          id="radial-bar1"
          className="h-2 md:h-4 w-12 md:w-20 bg-[#08D9D6] rounded-full "
          data-scroll
          data-scroll-speed="2"
        ></div>
        <div data-scroll-direction="right" data-scroll-speed="3">
          <h2 className="pt-8 text-xl leading-none md:text-3xl font-extrabold">
            Freelance at Quolomb, Vijay Nagar (Indore)
          </h2>
          <p className="pt-6 pb-4 text-sm md:text-lg">
            <b>
              👉I recently completed a freelance web development project for{" "}
              <a
                href="https://qoulomb.com/about/"
                target="__blank"
                className="text-blue-500 underline"
              >
                Quolomb.
              </a>
            </b>{" "}
            In this project, I built a React.js application from the ground up,
            utilizing third-party libraries like React Router to enhance
            efficiency. I also deployed the finished project live on the
            internet. This project provided valuable insights into corporate
            work environments. It involved collaboration through Figma for
            design purposes, social meetings, group discussions, project
            management tools, and teamwork. The project involved building a web
            application for{" "}
            <a
              href="https://theblunt.media/"
              target="__blank"
              className="text-blue-500 underline"
            >
              <b>The Blunt,</b>
            </a>{" "}
            a social media agency with over 200,000{" "}
            <a
              href="https://www.youtube.com/@TheBLUNT"
              target="__blank"
              className="text-blue-500 underline"
            >
              <b>subscribers.</b>
            </a>
            I'd like to express my gratitude to Quolomb for this fantastic
            opportunity and extend my interest in future collaborations with The
            Blunt.
          </p>
        </div>
        <div>
          <h1 className="font-extrabold text-2xl md:text-4xl leading-none pt-16 ">
            CONTRIBUTIONS
          </h1>
          <div
            id="radial-bar2"
            className="h-2 md:h-4 w-12 md:w-20 bg-[#FF2E63] rounded-full"
          ></div>
          <div className="mt-10 md:w-80 p-4 md:p-6 shadow-lg shadow-zinc-500/50 rounded-2xl">
            <h2 className="md:text-xl ">
              <b>useApi (React Hook) - </b>
              This React API hook makes API fetching easier. It takes a URL as a
              parameter and returns three values: response, error, and loading.
              It can also be customized for more efficient use.
            </h2>
            <button className="">
              <a
                href="https://github.com/devXlalit/useApi-Hook"
                target="__blank"
                className="font-extrabold flex items-center gap-1 bg-[#252A34] text-[#EAEAEA] text-center  mt-3 py-2 px-4 rounded-full"
              >
                <RiGitRepositoryLine /> Visit
              </a>
            </button>
          </div>
        </div>
        <div className="h-full mt-16" id="recent-pro" data-scroll-speed="10">
          <h2 className="font-extrabold text-2xl md:text-4xl leading-none">
            RECENT PROJECT
          </h2>
          <div
            id="radial-bar1"
            className="h-2 md:h-4 w-12 md:w-20 bg-[#08D9D6] rounded-full "
            data-scroll
            data-scroll-speed="2"
          ></div>
          <div className="flex flex-wrap gap-7 md:px-6" id="rec-pro">
            <ProjectCard
              imgSrc={proGif1}
              link="https://devxlalit.github.io/javascript_bootcamp/"
              buttonText="Visit"
              buttonIcon={<RiLink size={20} />}
            />
            <ProjectCard
              imgSrc={proGif8}
              link="https://theblunt.media/"
              buttonText="Visit"
              buttonIcon={<RiLink size={20} />}
            />
            <ProjectCard
              imgSrc={proGif5}
              link="https://devxlalit.github.io/Type-tester/"
              buttonText="Visit"
              buttonIcon={<RiLink size={20} />}
            />
            <ProjectCard
              imgSrc={proGif2}
              link="https://github.com/lalit-pagare/React-movie-app"
              buttonText="Github"
              buttonIcon={<RiLink size={20} />}
            />
            <ProjectCard
              imgSrc={proGif3}
              link="https://github.com/lalit-pagare/Jokes-Generator"
              buttonText="Github"
              buttonIcon={<RiGithubLine size={20} />}
            />
            <ProjectCard
              imgSrc={proGif4}
              link="https://github.com/lalit-pagare/tictactao"
              buttonText="Github"
              buttonIcon={<RiGithubLine size={20} />}
            />

            <ProjectCard
              imgSrc={proGif6}
              link="https://github.com/lalit-pagare/Wheather-app"
              buttonText="Github"
              buttonIcon={<RiGithubLine size={20} />}
            />
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

const ProjectCard = ({ imgSrc, link, buttonText, buttonIcon }) => (
  <div className="flex flex-col justify-center items-center" id="project-card">
    <img id="pr-gif1" className="mt-10 rounded-2xl h-44" src={imgSrc} alt="" />
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button
        id="pro-btn"
        className="font-extrabold flex items-center gap-1 bg-[#252A34] text-[#EAEAEA] text-center  mt-3 py-2 px-4 rounded-full"
      >
        {buttonIcon}
        {buttonText}
      </button>
    </a>
  </div>
);

export default Work;
