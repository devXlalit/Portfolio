import { RiChat1Line } from "@remixicon/react";
import React, { useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { FaCheckCircle } from "react-icons/fa";

import { motion } from "framer-motion";
const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [OpenBox, setOpenBox] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData(e.target);

    formData.append("access_key", import.meta.env.VITE_PUBLIC_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setLoading(false);
      setOpenBox(false);
      setIsHovered(false);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      {OpenBox ? (
        <form
          onSubmit={sendEmail}
          className="md:h-4/5 text-xl text-balance leading-loose flex flex-col z-40 md:rounded-2xl text-white p-10 absolute h-full w-full  md:bottom-10 md:right-10 right-0 bottom-0   bg-[#252A34] md:w-1/3 "
        >
          <RxCross2
            className="absolute right-7 top-7 hover:scale-110 duration-200 cursor-pointer"
            onClick={() => {
              setOpenBox(false);
            }}
          />
          <input
            type="hidden"
            name="access_key"
            value={import.meta.env.VITE_PUBLIC_ACCESS_KEY}
          />

          <label htmlFor="Email">Email</label>
          <input
            required={true}
            className="rounded-lg text-sm text-black p-3 px-3 outline-none font-[gilroy-medium]"
            id="Email"
            type="email"
            name="user_email"
            placeholder="Your email"
          />
          <label htmlFor="Name">Name</label>
          <input
            required={true}
            className="rounded-lg text-sm text-black p-3 px-3 outline-none font-[gilroy-medium]"
            type="text"
            name="user_name"
            placeholder="What's your name?"
          />
          <label htmlFor="Message">Message</label>
          <textarea
            style={{ resize: "none" }}
            required={true}
            className="rounded-lg text-sm text-black p-3 px-3 outline-none font-[gilroy-medium]"
            rows={10}
            name="message"
            id=""
            placeholder="Any feedback, suggestion or a message?"
          ></textarea>
          <button
            type="submit"
            value="Send"
            className={`outline-none hover:scale-95 hover:opacity-90 duration-200 shadow-xl flex  justify-center items-center gap-2 ${
              loading ? "bg-green-400" : "bg-white"
            } mt-4 text-[#252A34] rounded-lg`}
          >
            {loading ? (
              <span className="flex items-center gap-2 justify-center text-white ">
                SENT!! <FaCheckCircle className="mb-1" />{" "}
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                Send
                <IoSendSharp
                  className="flex items-center justify-center mb-1"
                  size={16}
                />{" "}
              </span>
            )}
          </button>
        </form>
      ) : (
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

          <RiChat1Line
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setOpenBox(true)}
            size={50}
            color="white"
            className="bg-[#252A34] p-3 rounded-full fixed bottom-10 right-10 hover:scale-105 duration-300 cursor-pointer drop-shadow-2xl "
          />
        </div>
      )}
    </>
  );
};

export default Contact;
