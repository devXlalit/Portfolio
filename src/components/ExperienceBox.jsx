import React from "react";
import { RiLink } from "@remixicon/react";

const ExperienceBox = ({
  JobTitle,
  CompanyName,
  WebsiteLink,
  Date,
  ListItems,
}) => {
  return (
    <div data-scroll-direction="right" className="py-6 ">
      <b className="font-[gilroy-regular] text-lg md:text-3xl">{JobTitle}</b>
      <a href={WebsiteLink} target="_blank">
        <p className="text-sm md:text-xl  flex gap-1 items-center hover:underline duration-200 decoration-[#339af0] font-[gilroy-medium]">
          <RiLink size={18} className="mb-1" color="#339af0" /> {CompanyName}
        </p>
        <span className="text-sm font-[gilroy-regular]">{Date}</span>
      </a>
      <ul className="md:text-lg font-[gilroy-medium]  text-sm tracking-wide p-2 list-outside list-disc">
        {ListItems.map((item, index) => (
          <li key={index} className="mb-3 text-justify leading-6">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceBox;
