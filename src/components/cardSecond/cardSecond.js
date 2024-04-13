import React from 'react'
import "./cardSecond.css"

const cardSecond = (props) => {
  return (
    <>
       <div className="benefits mx-auto max-w-[77.5rem] max-md:grid-cols-[auto] max-md:mt-8">
        <div className="benefits_block pl-8 flex justify-start items-start gap-x-4 ">
            <img src={props.tickColor} alt="" />
            <span className="leading-[165%] tracking-[0.5px] text-mvp-text-p" style={{color:props.benefitColor}}>{props.benefit1}</span>
        </div>
        <div className="benefits_block flex justify-start items-start gap-x-4 max-md:pl-8">
            <img src={props.tickColor} alt="" />
            <span className="leading-[165%] tracking-[0.5px] text-mvp-text-p"  style={{color:props.benefitColor}}>{props.benefit2}</span>
        </div>
        <div className="benefits_block flex justify-start items-start gap-x-4 max-md:pl-8">
            <img src={props.tickColor} alt="" />
            <span className="leading-[165%] tracking-[0.5px] text-mvp-text-p"  style={{color:props.benefitColor}}>{props.benefit3}</span>
        </div>
      </div>

      <div className="card_container pt-16 px-10 pb-[100px]">
        <div className="card_container_inner max-w-[77.5rem] mx-auto flex gap-8 ">
            <div className="card overflow-hidden w-1/2" style={{background:props.bgColor,border:props.border}}>
                <div className="card_body p-8 flex flex-col gap-2 h-[9.5rem]">
                    <h3 className="text-[1.5rem] leading-[114%] font-bold text-mvp-darkblue" style={{color:props.textColor}}>{props.heading1}</h3>
                    <span className="text-[1rem] text-mvp-darkblue leading-[165%] tracking-[0.5px] " style={{color:props.textColor}}>{props.about1}</span>
                </div>
                <div className="card_image overflow-hidden">
                    <img src={props.img1} alt="" />
                </div>
            </div>
            <div className="card overflow-hidden w-1/2" style={{background:props.bgColor,border:props.border}}>
                <div className="card_body p-8 flex flex-col gap-2 h-[9.5rem]">
                <h3 className="text-[1.5rem] leading-[114%] font-bold text-mvp-darkblue" style={{color:props.textColor}}>{props.heading2}</h3>
                <span className="text-[1rem] text-mvp-darkblue leading-[165%] tracking-[0.5px] " style={{color:props.textColor}}>{props.about2}</span>
                </div>
                <div className="card_image overflow-hidden">
                    <img src={props.img2} alt=""/>
                </div>
            </div>
        </div>

        <div className="card_container_inner max-w-[77.5rem] mx-auto flex gap-8 mt-8 max-lg:flex-wrap max-lg:gap-6">
            <div className="s_card p-8 overflow-hidden w-1/4 max-lg:w-[48%] max-md:w-full" style={{background:props.bgColor,border:props.border}}>
                <div className="card_icon">
                    <div className="icon_box p-3 bg-mvp-icon-pink w-max rounded-lg" style={{background:props.iconBg}}>
                        <img src={props.icon1} alt="" />
                    </div>
                </div>
                <div className="card_body flex gap-y-2 flex-col">
                    <h3 className='text-[1.5rem] text-mvp-darkblue' style={{color:props.textColor}}>{props.title1}</h3>
                    <span className='text-mvp-slate text-[1rem] leading-[165%] tracking-[0.5px]' style={{color:props.textColor}}>{props.text1}</span>
                </div>
            </div>
            <div className="s_card p-8 overflow-hidden w-1/4 max-lg:w-[48%] max-md:w-full" style={{background:props.bgColor,border:props.border}}>
                <div className="card_icon">
                    <div className="icon_box p-3 bg-mvp-icon-pink w-max rounded-lg" style={{background:props.iconBg}}>
                        <img src={props.icon2} alt="" />
                    </div>
                </div>
                <div className="card_body flex gap-y-2 flex-col ">
                    <h3 className='text-[1.5rem] text-mvp-darkblue' style={{color:props.textColor}}>{props.title2}</h3>
                    <span className='text-mvp-slate text-[1rem] leading-[165%] tracking-[0.5px]' style={{color:props.textColor}}>{props.text2}</span>
                </div>
            </div>
            <div className="s_card p-8 overflow-hidden w-1/4 max-lg:w-[48%] max-md:w-full" style={{background:props.bgColor,border:props.border}}>
                <div className="card_icon">
                    <div className="icon_box p-3 bg-mvp-icon-pink w-max rounded-lg" style={{background:props.iconBg}}>
                        <img src={props.icon3} alt="" />
                    </div>
                </div>
                <div className="card_body flex gap-y-2 flex-col ">
                    <h3 className='text-[1.5rem] text-mvp-darkblue' style={{color:props.textColor}}>{props.title3}</h3>
                    <span className='text-mvp-slate text-[1rem] leading-[165%] tracking-[0.5px]' style={{color:props.textColor}}>{props.text3}</span>
                </div>
            </div>
            <div className="s_card p-8 overflow-hidden w-1/4 max-lg:w-[48%] max-md:w-full" style={{background:props.bgColor,border:props.border}}>
                <div className="card_icon">
                    <div className="icon_box p-3 bg-mvp-icon-pink w-max rounded-lg" style={{background:props.iconBg}}>
                        <img src={props.icon4} alt="" />
                    </div>
                </div>
                <div className="card_body flex gap-y-2 flex-col ">
                    <h3 className='text-[1.5rem] text-mvp-darkblue' style={{color:props.textColor}}>{props.title4}</h3>
                    <span className='text-mvp-slate text-[1rem] leading-[165%] tracking-[0.5px]' style={{color:props.textColor}}>{props.text4}</span>
                </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default cardSecond
