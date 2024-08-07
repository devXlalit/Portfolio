import { RiChat1Line } from "@remixicon/react";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      {isHovered && (
        <motion.span
          initial={{ opacity: 0, scale: 0.3, x: 65 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{ duration: 0.1 }}
          className="bg-[#EAEAEA] hidden md:block p-3 rounded-full fixed bottom-10 right-24 hover:scale-105 duration-300 cursor-pointer font-[gilroy-medium] "
        >
          Let's talk!
        </motion.span>
      )}
      <a
        href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZdBjgWbxBbZDTrCXpcFTGNvMNhSDRqWtfsjNBkTVKqzcQvjRjtRGSBhzJgpgbwxXgwvBq"
        target="__blank"
      >
        <RiChat1Line
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          size={50}
          color="white"
          className="bg-[#252A34] p-3 rounded-full fixed bottom-10 right-10 hover:scale-105 duration-300 cursor-pointer drop-shadow-2xl "
        />
      </a>
      {/* <Tooltipx icon={<RiChat1Line />} title="Let's chat" />  */}
      {/* <span className="bg-[#EAEAEA] hidden md:block rounded-full fixed bottom-10 right-24 hover:scale-105 duration-300 cursor-pointer font-[gilroy-medium] ">
        <RiChat1Line
          size={50}
          color="white"
          className="bg-[#252A34] p-3 rounded-full fixed bottom-10 right-10 hover:scale-105 duration-300 cursor-pointer drop-shadow-2xl "
        />
      </span> */}
    </div>
  );
};

export default Contact;
