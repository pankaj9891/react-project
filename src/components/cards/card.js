import React from "react";
import "./card.css";

const card = (props) => {
  return (
    <>
      <div className="benefits mx-auto max-w-[77.5rem] max-md:grid-cols-[auto] max-md:mt-8">
        <div className="benefits_block pl-8 flex justify-start items-start gap-x-4">
            <img src={props.tickColor} alt="" />
            <span className="leading-[165%] tracking-[0.5px] text-mvp-text-p">{props.benefit1}</span>
        </div>
        <div className="benefits_block flex justify-start items-start gap-x-4 max-md:pl-8">
            <img src={props.tickColor} alt="" />
            <span className="leading-[165%] tracking-[0.5px] text-mvp-text-p">{props.benefit2}</span>
        </div>
        <div className="benefits_block flex justify-start items-start gap-x-4 max-md:pl-8">
            <img src={props.tickColor} alt="" />
            <span className="leading-[165%] tracking-[0.5px] text-mvp-text-p">{props.benefit3}</span>
        </div>
      </div>
      <div className="card_container pt-16 px-10 pb-[100px]">
        <div className="card_container_inner max-w-[77.5rem] mx-auto flex gap-8 max-md:flex-col">
            <div className="card overflow-hidden w-1/3 max-md:w-[75%] max-md:mx-auto" style={{background:props.bgColor}}>
                <div className="card_body p-8 flex flex-col gap-2 h-[14.75rem]">
                    <h3 className="text-[1.5rem] leading-[114%] font-bold text-mvp-darkblue">{props.heading1}</h3>
                    <span className="text-[1rem] text-mvp-darkblue leading-[165%] tracking-[0.5px] ">{props.about1}</span>
                </div>
                <div className="card_image h-[260px] overflow-hidden">
                    <img src={props.img1} alt="" />
                </div>
            </div>
            <div className="card overflow-hidden w-1/3 max-md:w-[75%] max-md:mx-auto" style={{background:props.bgColor}}>
                <div className="card_body p-8 flex flex-col gap-2 h-[14.75rem]">
                <h3 className="text-[1.5rem] leading-[114%] font-bold text-mvp-darkblue">{props.heading2}</h3>
                <span className="text-[1rem] text-mvp-darkblue leading-[165%] tracking-[0.5px] ">{props.about2}</span>
                </div>
                <div className="card_image h-[260px] overflow-hidden">
                    <img src={props.img2} alt=""/>
                </div>
            </div>
            <div className="card overflow-hidden w-1/3 max-md:w-[75%] max-md:mx-auto" style={{background:props.bgColor}}  >
                <div className="card_body p-8 flex flex-col gap-2 h-[14.75rem]">
                <h3 className="text-[1.5rem] leading-[114%] font-bold text-mvp-darkblue">{props.heading3}</h3>
                <span className="text-[1rem] text-mvp-darkblue leading-[165%] tracking-[0.5px] ">{props.about3}</span>
                </div>
                <div className="card_image h-[260px] overflow-hidden">
                    <img src={props.img3} alt="" />
                </div>
            </div>
            
        </div>
      </div>
    </>
  );
};

export default card;
