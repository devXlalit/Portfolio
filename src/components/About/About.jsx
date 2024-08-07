import proFile from "../../assets/final_image-removebg-preview.png";
import resume from "../../assets/Pagare.Lalit.FullStackWeb.Dev.Resume.pdf";
import { RiDownloadLine } from "@remixicon/react";
import { motion, AnimatePresence } from "framer-motion";
const About = () => {
  return (
    <div className="">
      <div
        id="about"
        className="flex flex-wrap gap-12 h-auto w-full pt-12 py-0 md:p-12"
      >
        <motion.div className="w-8/12 ms-12 md:ms-0 md:w-1/5">
          <AnimatePresence>
            <motion.img
              src={proFile}
              initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              alt="Profile"
              className=" rounded-full drop-shadow-xl"
            />
          </AnimatePresence>
        </motion.div>
        <div id="heading-p" className="md:w-9/12 ">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{ delay: 1, duration: 0.5 }}
            className="font-extrabold text-center md:text-left text-3xl md:text-4xl leading-none "
          >
            ABOUT ME
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRqhbsVgWJztVjBfTZQfKcwKnwhsKzFkFqTrWcNxvMBZCWfbGJxXXlRNWfRhLHgtnJbVzKG"></a>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, width: "0%" }}
            animate={{
              opacity: 1,
              scale: 1,
              width: "10%",
            }}
            transition={{ delay: 1, duration: 0.5 }}
            id="radial-bar2"
            className="h-2  ms-14 md:ms-0 md:h-4 w-12 md:w-20 bg-[#FF2E63] rounded-full"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{ delay: 1, duration: 0.5 }}
            className="pt-6 pb-4 text-sm md:text-lg font-[gilroy-medium]"
          >
            <b>
              I'm a passionate Full Stack Web Developer who builds meaningful
              websites that users love to experience!
            </b>{" "}
            Currently, I'm a BCA student at Govt. Holkar Science College
            (Indore). Beyond academics, I'm actively pursuing my entrepreneurial
            spirit by building a coding academy with my college friends called
            Futuristic Coding Academy. Here, I empower students with the
            knowledge of "How to Code." In addition to teaching, I organize
            Hackathons and Bootcamps specifically designed for knowledge-hungry
            students who aspire to enter the tech industry but lack a clear
            roadmap. Through these events, I equip them with the skills and
            direction they need to thrive.
          </motion.p>
          <a href={resume} download="Pagare.lalit.dev.resume.pdf">
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
              id="btn-down"
              className="font-extrabold flex items-center gap-2 text-sm px-6 md:px-12 text-[#EAEAEA] bg-[#252A34] py-3 md:h-12 mt-8 rounded-full hover:bg-[#EAEAEA] hover:text-[#252A34] duration-300"
            >
              DOWNLOAD RESUME <RiDownloadLine size={20} />
            </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
