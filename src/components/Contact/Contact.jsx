import { RiChat1Line, RiMessage2Fill, RiMessageLine } from "@remixicon/react";
import React, { useState } from "react";

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      {isHovered && (
        <span className="bg-[#EAEAEA] hidden md:block p-3 rounded-full fixed bottom-10 right-24 hover:scale-105 duration-300 cursor-pointer font-[gilroy-medium] ">
          Let's talk!
        </span>
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
    </div>
  );
};

export default Contact;
