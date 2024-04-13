import React from "react";
import "./hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faPlay  } from "@fortawesome/free-solid-svg-icons";
import { faClosedCaptioning  } from "@fortawesome/free-regular-svg-icons";
import { faExpand  } from "@fortawesome/free-solid-svg-icons";
import { faVolumeXmark  } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";

const hero = () => {
  return (
    <>
      <div className="main bg-mvp-darkblue pt-12 px-10 relative ">
        <div className="hero_main max-w-[77.5rem] mx-auto text-center">
          <div className="hero_banner">
            <div className="title text-[100px] text-white w-[90%] mx-auto leading-[90%]  max-[940px]:text-[46px]">
              The only AI customer service solution you need
            </div>
            <div className="discription w-[65%] mx-auto my-8 text-[24px] text-center text-mvp-text  max-[940px]:text-[24px]  max-[940px]:my-8  max-[940px]:w-full">
              <span className="tracking-[0.4px]">
                The only solution that combines an AI chatbot, help desk, and
                proactive support—so you can keep costs low, support teams
                happy, and customers satisfied.
              </span>
            </div>
            <div className="hero_btn flex justify-center items-center gap-3 mt-10  max-[940px]:flex-col">
              <button className="px-6 group/item bg-mvp-blue h-12 rounded-full flex justify-center items-center gap-2 font-bold hover:bg-[#004ad9] transition-all text-white  max-[940px]:w-full">
                Start free trial <FontAwesomeIcon icon={faArrowRight} className="relative group-hover/item:left-0.5"/>
              </button>
              <button className="px-6 group/item h-12 rounded-full flex justify-center items-center border-2 border-paper font-bold hover:shadow-[inset_0_0_0_1px] transition-all text-white gap-2  max-[940px]:w-full">
                View demo <FontAwesomeIcon icon={faArrowRight} className="relative group-hover/item:left-0.5"/>
              </button>
            </div>
          </div>

          <div className="hero_video mt-16">
            <div className="video_frame mx-auto z-[2] w-full h-[695px] bg-transparent cursor-pointer rounded-[1.6rem] overflow-hidden relative max-[1024px]:h-[550px]  max-[940px]:h-[400px] max-[940px]:">
              <div className="video_btn text-white px-6 font-bold gap-2">
                <button className="play_sound_btn flex items-center gap-2 px-6 h-12 rounded-full absolute top-8 left-8 hover:bg-[#223140] transition ease-in  max-[940px]:top-1/2 max-[940px]:left-1/2 max-[940px]:transform max-[940px]:-translate-x-1/2 max-[940px]:-translate-y-1/2">
                  <span className="text-[15px] tracking-wider">
                    Play with sound
                  </span>
                  <FontAwesomeIcon icon={faCirclePlay} />
                </button>

                <div className="seek_bar bg-[#041527d4] flex gap-6 justify-center items-center overflow-hidden absolute bottom-0 w-full h-[3rem] left-0 px-6">
                <FontAwesomeIcon icon={faPlay} />
                <span>1:32</span>
                <input type="range" name="" id="" />
                <FontAwesomeIcon icon={faClosedCaptioning} style={{fontSize:"28px"}}/>
                <FontAwesomeIcon icon={faVolumeXmark} />
                <FontAwesomeIcon icon={faExpand}  style={{fontSize:"20px"}}/>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div class="custom-shape-divider-bottom-1712929020">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default hero;
