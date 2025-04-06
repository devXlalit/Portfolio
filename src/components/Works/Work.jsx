import proGif1 from "../../assets/Project-gif/ViteReact-GoogleChrome2024-04-2503-23-44-ezgif.com-video-to-gif-converter.gif";
import proGif7 from "../../assets/Project-gif/comingsoon-ezgif.com-optimize.gif";
import proGif8 from "../../assets/Project-gif/proiamg.gif";
import proGif9 from "../../assets/Project-gif/weblogsWorkV-ezgif.com-video-to-gif-converter.gif";
import proGifpr from "../../assets/Project-gif/ScreencastFrom2025-01-1923-55-32-ezgif.com-video-to-gif-converter.gif";
import proGif0 from "../../assets/Project-gif/ScreencastFrom2025-02-2413-31-53-ezgif.com-video-to-gif-converter.gif";
import { RiGithubLine, RiLink } from "@remixicon/react";
import { motion } from "framer-motion";
import ExperienceBox from "../ExperienceBox";
const experienceData = [
  {
    JobTitle: "Full Stack Developer",
    CompanyName: "BuildAlgo - Trading Strategy Builder",
    WebsiteLink: "https://buildalgos.com/",
    Date: "Dec 2024 - Jan 2025",
    ListItems: [
      "Tech Stack: React.js, Next.js, TypeScript, Tailwind CSS, Shadcn UI, Radix UI, PostHog, Recharts.",
      "Contributed to BuildAlgo (trading strategy builder) with Git/GitHub version control as a remote full-stack developer.",
      "Implemented user event capture and user CTR analytics with Posthog and boosted company analytics by 40% and user revisit by 50%.",
      "Collaborated with the team and increased website overall performance by 40%. Resolved website bugs and unnecessary API calls.",
    ],
  },
  {
    JobTitle: "Web Developer & Project Manager",
    CompanyName: "Futuristic Coding Academy",
    WebsiteLink: "https://futuristiccodingacademy.com/",
    Date: "May 2023 - Aug 2024",
    ListItems: [
      "Tech Stack: React.js, JavaScript, Razorpay, Tailwind CSS.",
      "Increased Boot Camp Registrations by 70% Designed and developed a landing page that significantly boosted offline students.",
      "Improved Website Traffic by 40% Optimized website performance, resulting in a revenue increase of ₹70,000 from boot camp.",
      "Streamlined Development Workflows Delivered landing pages 5X faster by leveraging Git/GitHub and resolving critical bugs",
    ],
  },
  {
    JobTitle: "MERN Stack Developer & Project Manager",
    CompanyName: "Qoulomb - Content writing and marketing agency",
    WebsiteLink: "https://qoulomb.com/",
    Date: "Oct 2023 - Dec 2023",
    ListItems: [
      "Tech Stack: React.js, JavaScript, Bootstrap, MongoDB, Node.js, Express.js.",
      "Enhanced Online Presence by 20% and transformed Figma designs into a fully functional web application for The Blunt, improving their online presence and online attention.",
    ],
  },
];

const Work = () => {
  return (
    <div>
      <div id="experience" className="h-auto w-full pt-12 py-0 md:p-12 ">
        <motion.h1 className="font-extrabold text-2xl md:text-4xl leading-none ">
          WORK & EXPERIENCE
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, width: "0%" }}
          animate={{ opacity: 1, width: "10%" }}
          transition={{ delay: 1, duration: 0.8 }}
          id="radial-bar1"
          className="h-2 md:h-4 w-12 md:w-20 bg-[#08D9D6] rounded-full "
        ></motion.div>

        <div className="flex">
          <div className="">
            {experienceData.map((item, index) => (
              <ExperienceBox
                key={index}
                JobTitle={item.JobTitle}
                CompanyName={item.CompanyName}
                WebsiteLink={item.WebsiteLink}
                Date={item.Date}
                ListItems={item.ListItems}
              />
            ))}
          </div>
        </div>
        <div className="h-full mt-16" id="recent-pro">
          <h2 className="font-extrabold text-2xl md:text-4xl leading-none">
            RECENT PROJECT
          </h2>
          <div
            id="radial-bar1"
            className="h-2 md:h-4 w-12 md:w-20 bg-[#08D9D6] rounded-full "
            data-scroll
            data-scroll-speed="2"
          ></div>

          <div className="flex py-10 flex-wrap gap-7 md:px-6" id="rec-pro">
            <ProjectCard
              image={proGifpr}
              wlink="https://www.projectly.dev"
              title="Projectly - Learn programming by creating next level projects."
              desc="Nextjs, Typescript, nodemailer, Razorpay payment gateway, Next auth, GitHub authentication (OAuth), MongoDB, Mongoose, Appwrite, Tailwind Css, Framer motion, Node js, Express js, Obsedian, Figma. "
            />
            <ProjectCard
              image={proGif0}
              glink="https://github.com/devXlalit/React-ECommerce.git"
              wlink="https://ecomfrontend-drab.vercel.app/"
              title="Schuh - Full fleged shoes Ecommerce website."
              desc="React js, Javascript, Tailwind Css, Node js, Express js, Json webtoken, Cloudinary, MongoDb, Stripe, Razorpay."
              order="flex-row-reverse"
            />
            <ProjectCard
              image={proGif9}
              glink="https://github.com/devXlalit/Project_weblogs"
              wlink="https://weblogs-five.vercel.app/"
              title="Weblogs - Free and open source blogging website."
              desc="Nextjs , Next auth, Google authantication (OAuth), MongoDB, Mongoose, Tailwind Css, Framer motion, Node js, Express js, Obsedian, Figma.  "
            />
            <ProjectCard
              image={proGif1}
              glink="https://github.com/devXlalit/js-bootcamp-test.git"
              wlink="https://js-bootcamp-test.vercel.app/"
              title="Courses Landing page - Online Bootcamp landing page for (FCA)."
              desc="Vite + React Js, Razor pay payment gateway, Google form page link, Tailwind Css, Figma. "
              order="flex-row-reverse"
            />
            <ProjectCard
              image={proGif8}
              wlink="https://theblunt.media/"
              title="The Blunt - landing page for Youtube content creating company with 200k+ Subs."
              desc="Vite + React js ,Figma, Tailwind, React-Routers. "
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

const ProjectCard = ({ image, title, desc, glink, wlink, order }) => (
  <div
    className={`flex md:flex-nowrap flex-wrap justify-items-center items-center gap-10 p-4 ${order} `}
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
        Tech Stack: <span className="opacity-70">{desc}</span>
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
            className="flex text-sm justify-center hover:scale-105 hover:bg-[#EAEAEA] hover:text-[#252A34] duration-300 items-center gap-1 bg-[#252A34] text-[#EAEAEA] text-center  mt-6 py-2 px-4 rounded-full"
          >
            <RiLink size={20} />
            Visit
          </button>
        </a>
      </span>
    </div>
  </div>
);

export default Work;
