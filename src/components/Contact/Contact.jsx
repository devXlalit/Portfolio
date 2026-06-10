import { RiChat1Line } from "@remixicon/react";
import React, { useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { FaCheckCircle } from "react-icons/fa";

import { motion } from "framer-motion";
import { useContact } from "../../context/ContactContext";
const Contact = () => {
  const { isOpen, openContact, closeContact } = useContact();
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const formData = new FormData(e.target);

    formData.append("access_key", import.meta.env.VITE_PUBLIC_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        closeContact();
        setIsHovered(false);
      } else {
        console.log("Error", data);
        setError("Couldn't send your message. Please try again.");
      }
    } catch (err) {
      console.log("Error", err);
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => closeContact()}
          className="fixed inset-0 z-40 flex items-end justify-center bg-black/40 backdrop-blur-sm md:items-end md:justify-end md:p-6"
        >
          <motion.form
            onSubmit={sendEmail}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="relative flex max-h-[92vh] w-full flex-col gap-4 overflow-y-auto rounded-t-3xl border border-white/10 bg-gradient-to-br from-[#2c313c] via-[#252A34] to-[#1d2128] p-6 text-[#EAEAEA] shadow-[0px_24px_60px_-24px_rgba(0,0,0,0.6)] md:w-[26rem] md:rounded-3xl md:p-8 font-[gilroy-medium]"
          >
            {/* Header */}
            <div className="pr-10">
              <span className="inline-flex items-center gap-2 text-xs font-[gilroy-medium] uppercase tracking-[0.18em] text-[#08D9D6]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#08D9D6]" />
                Get in touch
              </span>
              <h3 className="mt-2 text-2xl md:text-3xl leading-tight font-[gilroy-heavy]">
                Let&apos;s talk
              </h3>
              <p className="mt-1 text-sm text-[#EAEAEA]/60">
                Tell me about your project — I&apos;ll get back to you soon.
              </p>
            </div>

            <button
              type="button"
              aria-label="Close"
              onClick={() => closeContact()}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-[#EAEAEA]/70 transition hover:bg-white/10 hover:text-[#EAEAEA]"
            >
              <RxCross2 size={18} />
            </button>

            <input
              type="hidden"
              name="access_key"
              value={import.meta.env.VITE_PUBLIC_ACCESS_KEY}
            />

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="Email"
                className="text-xs uppercase tracking-wide text-[#EAEAEA]/55"
              >
                Email
              </label>
              <input
                required
                id="Email"
                type="email"
                name="user_email"
                placeholder="you@example.com"
                className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-[#EAEAEA] placeholder-[#EAEAEA]/35 outline-none transition focus:border-[#08D9D6]/60 focus:ring-2 focus:ring-[#08D9D6]/20"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="Name"
                className="text-xs uppercase tracking-wide text-[#EAEAEA]/55"
              >
                Name
              </label>
              <input
                required
                id="Name"
                type="text"
                name="user_name"
                placeholder="What's your name?"
                className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-[#EAEAEA] placeholder-[#EAEAEA]/35 outline-none transition focus:border-[#08D9D6]/60 focus:ring-2 focus:ring-[#08D9D6]/20"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="Message"
                className="text-xs uppercase tracking-wide text-[#EAEAEA]/55"
              >
                Message
              </label>
              <textarea
                required
                id="Message"
                name="message"
                rows={5}
                placeholder="Any feedback, suggestion or a message?"
                style={{ resize: "none" }}
                className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-[#EAEAEA] placeholder-[#EAEAEA]/35 outline-none transition focus:border-[#08D9D6]/60 focus:ring-2 focus:ring-[#08D9D6]/20"
              />
            </div>

            {error && (
              <p className="text-sm text-[#FF2E63]" role="alert">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-1 flex items-center justify-center gap-2 rounded-full bg-[#08D9D6] py-3 text-sm font-[gilroy-regular] text-[#252A34] outline-none transition hover:scale-[1.02] hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  Sending… <FaCheckCircle size={16} className="mb-0.5" />
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Send message
                  <IoSendSharp size={16} className="mb-0.5" />
                </span>
              )}
            </button>
          </motion.form>
        </motion.div>
      ) : (
        <div className="fixed bottom-10 right-10 z-30 flex items-center gap-3">
          {isHovered && (
            <motion.span
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => openContact()}
              className="hidden whitespace-nowrap rounded-full border border-content/10 bg-surface px-4 py-2 font-[gilroy-medium] text-content shadow-lg md:block cursor-pointer"
            >
              Let&apos;s talk!
            </motion.span>
          )}

          <button
            type="button"
            aria-label="Open contact form"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => openContact()}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-content text-page drop-shadow-2xl transition-transform duration-300 hover:scale-105"
          >
            <RiChat1Line size={26} />
          </button>
        </div>
      )}
    </>
  );
};

export default Contact;
