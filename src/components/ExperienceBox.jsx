import React from "react";
import { RiLink } from "@remixicon/react";
import { motion, useReducedMotion } from "framer-motion";

const ExperienceBox = ({
  JobTitle,
  CompanyName,
  WebsiteLink,
  Date,
  Summary,
  ListItems,
  Tech,
  isLast,
  index = 0,
}) => {
  const reduceMotion = useReducedMotion();
  const isCurrent = typeof Date === "string" && /present/i.test(Date);

  return (
    <motion.div
      data-scroll-direction="right"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.32) }}
      className={`group relative pl-7 md:pl-12 ${
        isLast ? "pb-0" : "pb-10 md:pb-14"
      }`}
    >
      {/* Timeline spine */}
      <span
        aria-hidden="true"
        className={`absolute left-[6px] md:left-[9px] top-3 w-[2px] bg-gradient-to-b from-[#08D9D6]/60 to-content/10 ${
          isLast ? "hidden" : "bottom-0"
        }`}
      />
      {/* Timeline node */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-2 flex h-[14px] w-[14px] md:h-5 md:w-5 items-center justify-center"
      >
        {isCurrent && !reduceMotion && (
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#08D9D6] opacity-60 animate-ping" />
        )}
        <span className="relative h-[14px] w-[14px] md:h-5 md:w-5 rounded-full bg-[#08D9D6] ring-4 ring-surface shadow-[0_0_0_1px_rgba(8,217,214,0.4)]" />
      </span>

      <div className="rounded-2xl transition-all duration-300 md:p-5 md:-ml-1 md:group-hover:bg-content/[0.03] md:group-hover:shadow-[0_8px_30px_-12px_rgba(37,42,52,0.18)]">
        {/* Header */}
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <b className="font-[gilroy-regular] text-lg md:text-3xl leading-tight">
            {JobTitle}
          </b>
          <span
            className={`shrink-0 rounded-full px-3 py-1 text-xs md:text-sm font-[gilroy-medium] tracking-wide ${
              isCurrent
                ? "bg-[#08D9D6]/15 text-[#0a9d9a] dark:text-[#08D9D6]"
                : "bg-content/[0.06] text-content/70"
            }`}
          >
            {Date}
          </span>
        </div>

        <a
          href={WebsiteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit"
        >
          <p className="text-sm md:text-xl flex gap-1 items-center hover:underline duration-200 decoration-[#339af0] font-[gilroy-medium]">
            <RiLink size={18} className="mb-1" color="#339af0" /> {CompanyName}
          </p>
        </a>

        {Summary && (
          <p className="mt-2 text-sm md:text-lg font-[gilroy-medium] text-content/75 leading-relaxed">
            {Summary}
          </p>
        )}

        {/* Contributions */}
        <ul className="mt-4 space-y-3">
          {ListItems.map((item, i) => {
            const lead = typeof item === "object" ? item.k : null;
            const body = typeof item === "object" ? item.v : item;
            return (
              <li
                key={i}
                className="flex gap-3 text-sm md:text-lg font-[gilroy-medium] leading-relaxed"
              >
                <span
                  aria-hidden="true"
                  className="mt-[7px] md:mt-[10px] h-2 w-2 shrink-0 rotate-45 rounded-[2px] bg-[#08D9D6]"
                />
                <span className="text-content/80">
                  {lead && (
                    <span className="font-[gilroy-regular] text-content">
                      {lead}:{" "}
                    </span>
                  )}
                  {body}
                </span>
              </li>
            );
          })}
        </ul>

        {/* Tech stack */}
        {Tech && Tech.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {Tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-content/10 bg-content/[0.03] px-3 py-1 text-xs md:text-sm font-[gilroy-medium] text-content/70"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ExperienceBox;
