import React from "react";
import "./joinUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Curve from "../curve/curve";

const joinUs = () => {
  return (
    <>
    <Curve />
      <div className="joinUs_wrapper px-10 py-[6.25rem] relative max-md:py-14 max-md:px-5">
        <div className="text-center joinUs_container max-w-[70%] mx-auto flex flex-col justify-center items-center gap-10 max-md:max-w-full ">
          <div className="joinUs_heading">
            <span
              className="text-[4.75rem] max-md:text-[46px] leading-[100%]"
              style={{ fontFamily: '"VC Honey", Helvetica, Arial, sans-serif' }}
            >
              Join the future of customer service
            </span>
          </div>
          <div className="joinUs_btn flex justify-center items-center gap-[0.75rem] max-md:flex-col max-md:w-full">
            <button className="text-white px-6 group/item bg-mvp-blue h-12 rounded-full flex justify-center items-center gap-2 font-bold hover:bg-[#004ad9] transition-all max-md:w-full">
              Start free trial{" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                className="relative group-hover/item:left-0.5"
              />
            </button>
            <button className="px-6 group/item   h-12 rounded-full flex justify-center items-center border-2 border-mvp-blue font-bold hover:shadow-[inset_0_0_0_1px_] transition-all gap-2 text-mvp-blue max-md:w-full">
              {" "}
              <span>View demo</span>{" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                className="relative group-hover/item:left-0.5"
              />{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default joinUs;
