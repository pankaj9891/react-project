import React from "react";
import "./testimonials.css";

const testimonials = (props) => {
  return (
    <>
      <div className="wrapper px-10 pb-[100px] max-md:px-5 max-md:pb-14">
        <div className="container text-center w-[77.5rem] max-md:w-full mx-auto flex flex-col justify-center items-center gap-10">
          <div className="social">
            <img src={props.social_img} alt="" />
          </div>
          <div className="quote w-[80%] max-md:w-full">
            <span className="text-[2.25rem] text-mvp-text-p leading-[150%] tracking-[0.4px] max-lg:text-[32px] max-md:text-[24px]" style={{color:props.textColor}}>{props.quote}<b>{props.boldQuote}</b></span>
          </div>
          <div className="avatar max-w-[30rem] max-md:flex max-md:flex-col max-md:gap-4 ">
            <div className="avatar_img w-[5.5rem]">
              <img src={props.avatar_img} alt="" />
            </div>
            <div className="avatar_detail text-left max-md:text-center">
              <div className="avatar_name">
                <span className="text-[1.5rem] font-bold max-md:text-[21px] text-mvp-darkblue" style={{color:props.textColor}}>{props.avatar_name}</span>
              </div>
              <div className="avatar_position">
                <span className="text-mvp-text-p text-[1.25rem] max-md:text-[18px] leading-[150%] tracking-[0.4px]" style={{color:props.textColor}}>{props.avatar_detail}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default testimonials;
