import React from "react";
import "./contentLayout.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const contentLayout = (props) => {
  return (
    <>
      <div className="content_wrapper text-center px-10 pt-[6.25rem]" style={{background:props.bg}}>
        <div
          className="heading_title text-[24px] px-4 rounded-[2rem] inline-block font-bold tracking-[0.25rem]"
          style={{ background: props.titleColor}}
        >
          {props.title}
        </div>
        <div className="heading mt-6 text-[4.75rem] text-mvp-heading max-[1024px]:text-[60px] max-md:text-[48px]">
        <h2 className="font-normal w-[70%] max-md:w-full max-lg:w-[85%] leading-[100%] mx-auto" style={{color: props.fontColor}}>
            {props.heading}
          </h2>
        </div>
        <div className="heading_subheading text-mvp-text-p mt-8 mx-auto w-1/2 max-md:w-full max-lg:w-[85%]">
          <span className="text-[1.5rem] tracking-[0.4px] leading-[1.65] max-md:text-[22px]" style={{color: props.subheadingColor}}>
            {props.subheading}
          </span>
        </div>
        <div className="more_info_link mt-10 text-mvp-blue text-[15px] font-bold">
          <a href="/"  style={{color: props.linkColor}} className=" group/item ">
            {props.info_link} <FontAwesomeIcon icon={faArrowRight} className="relative group-hover/item:left-1"/>
          </a>
        </div>
      </div>
    </>
  );
};

export default contentLayout;
