import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

const Navbar = () => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [showbar, setShowbar] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };
  const handleClick = () => {
    setClicked(!clicked);
  };
  const handleBar = () => {
    setShowbar(!showbar);
  };

  return (
    <div className="sticky top-[-2.75rem] navbar z-50 max-lg:top-0 ">
      <header className="px-10 pt-2 pb-4">
        <div className="header_navigation flex flex-col w-full max-w-[77.5rem] mx-auto gap-5">
          <nav className="text-white signup_nav  max-lg:hidden">
            <ul className="flex justify-end gap-6 text-base tracking-[0.01875rem]">
              <li>
                <a href="/" className="font-semibold text-[15px]">
                  Contact Sales
                </a>
              </li>
              <li>
                <a href="/" className="font-semibold text-[15px]">
                  Sign In
                </a>
              </li>
            </ul>
          </nav>
          <nav className="main_nav text-white flex gap-10 max-[1076px]:gap-6">
            <a href="/">
              <span></span>
              <svg
                width="157"
                height="36"
                viewBox="0 0 997 228"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                data-testid="intercom-isologo"
                class="jsx-1296992372 intercom-isologo"
              >
                <path
                  d="M343.101 78.9354C343.101 74.1788 339.432 70.2761 334.296 70.2761C329.16 70.2761 325.491 74.1788 325.491 78.9354V149.185C325.491 153.942 329.16 157.845 334.296 157.845C339.554 157.845 343.101 153.942 343.101 149.185V78.9354Z"
                  fill="currentColor"
                  class="jsx-1296992372"
                ></path>
                <path
                  d="M429.808 70.2761C424.672 70.2761 421.125 74.1788 421.125 78.9354V108.938L421.614 135.77L410.975 110.645L397.034 82.1064C392.754 73.2031 387.863 70.2761 380.892 70.2761C370.62 70.2761 366.095 76.74 366.095 86.0091V149.185C366.095 153.942 369.641 157.845 374.778 157.845C379.914 157.845 383.46 153.942 383.46 149.185L383.338 119.549L382.971 89.1801L394.344 116.987L408.407 146.014C412.81 155.283 417.457 157.967 424.549 157.967C433.721 157.967 438.49 152.356 438.49 141.99V78.9354C438.49 74.1788 434.944 70.2761 429.808 70.2761Z"
                  fill="currentColor"
                  class="jsx-1296992372"
                ></path>
                <path
                  d="M503.419 88.2044L523.352 88.6923C527.999 88.8142 531.668 85.2774 531.668 80.155C531.668 75.0326 527.999 71.4957 523.352 71.4957L465.631 71.3737C461.107 71.3737 457.316 74.9106 457.316 80.033C457.316 85.1554 461.107 88.6923 465.631 88.5703L485.687 88.2044V149.185C485.687 153.942 489.355 157.845 494.492 157.845C499.75 157.845 503.419 153.942 503.419 149.185V88.2044Z"
                  fill="currentColor"
                  class="jsx-1296992372"
                ></path>
                <path
                  d="M562.512 156.747H605.435C609.96 156.747 613.629 153.332 613.629 148.575C613.629 143.697 609.96 140.282 605.435 140.282L568.137 140.404V120.036H600.421C604.824 120.036 608.37 116.743 608.37 112.231C608.37 107.596 604.824 104.303 600.421 104.303L568.137 104.547V87.7166H605.435C609.96 87.7166 613.629 84.3017 613.629 79.4232C613.629 74.5447 609.96 71.2518 605.435 71.2518L562.634 71.3737C554.807 71.3737 550.405 75.7643 550.405 83.5699V144.551C550.405 152.356 554.807 156.747 562.512 156.747Z"
                  fill="currentColor"
                  class="jsx-1296992372"
                ></path>
                <path
                  d="M683.543 121.988C695.16 118.939 702.009 109.914 702.009 97.9614C702.009 84.6676 693.326 71.3737 672.537 71.3737H645.633C637.807 71.3737 633.404 75.7643 633.404 83.5699V149.185C633.404 153.942 637.073 157.845 642.454 157.845C647.712 157.845 651.503 153.942 651.503 149.185L651.381 126.256H666.178L681.219 153.332C683.665 157.479 688.801 159.186 693.571 156.747C698.34 154.186 699.685 149.063 697.117 144.917L683.543 121.988ZM651.381 87.5946H672.659C679.874 87.5946 684.399 92.1072 684.399 98.8151C684.399 105.401 680.119 110.28 672.904 110.28H651.381V87.5946Z"
                  fill="currentColor"
                  class="jsx-1296992372"
                ></path>
                <path
                  d="M756.021 158.332C773.876 158.332 785.371 150.283 789.284 137.233C791.363 129.793 786.961 124.427 780.357 124.427C776.321 124.427 773.631 126.5 772.041 131.013C769.596 137.843 763.603 142.112 755.043 142.112C741.469 142.112 735.599 132.964 735.599 113.938C735.599 95.2782 741.591 86.375 755.043 86.375C763.481 86.375 768.373 89.9119 771.43 98.0833C773.142 102.718 775.955 104.791 780.112 104.791C786.471 104.791 791.118 99.6688 789.162 92.5951C785.249 78.2036 773.876 70.1541 755.532 70.1541C730.341 70.1541 717.5 85.5213 717.5 113.938C717.5 142.599 730.341 158.332 756.021 158.332Z"
                  fill="currentColor"
                  class="jsx-1296992372"
                ></path>
                <path
                  d="M842.964 158.089C868.89 158.089 881.73 142.233 881.73 113.938C881.73 85.3993 868.523 69.6663 842.964 69.6663C817.284 69.6663 804.443 85.6432 804.321 113.938C804.321 142.355 817.406 158.089 842.964 158.089ZM842.964 141.746C828.534 141.746 822.298 132.599 822.298 113.938C822.298 95.0343 828.657 85.8872 842.842 85.8872C857.15 85.8872 863.876 95.0343 863.754 113.938C863.754 132.72 857.395 141.746 842.964 141.746Z"
                  fill="currentColor"
                  class="jsx-1296992372"
                ></path>
                <path
                  d="M995.57 85.5213C995.57 75.8863 989.578 70.1541 980.284 70.1541C972.702 70.1541 966.955 74.3008 964.142 83.8138L954.726 114.426L948.489 136.501L942.497 114.426L932.469 83.8138C929.656 74.9106 924.765 70.1541 916.204 70.1541C906.788 70.1541 900.918 75.7643 900.918 85.5213V149.185C900.918 153.942 904.342 157.845 909.356 157.845C914.37 157.845 917.794 153.942 917.794 149.185L917.672 118.451L916.816 85.5213L926.477 119.183L936.749 148.941C938.95 155.527 943.108 157.723 948.489 157.723C953.503 157.723 957.538 155.893 959.617 149.185L969.4 119.183L979.795 85.2774L978.817 118.451V149.185C978.817 153.942 982.363 157.845 987.255 157.845C992.268 157.845 995.693 153.942 995.693 149.185L995.57 85.5213Z"
                  fill="currentColor"
                  class="jsx-1296992372"
                ></path>
                <path
                  d="M197.946 125.463C197.946 127.496 197.145 129.445 195.719 130.882C194.293 132.319 192.359 133.127 190.342 133.127C188.325 133.127 186.391 132.319 184.965 130.882C183.539 129.445 182.738 127.496 182.738 125.463V57.0003C182.738 54.9679 183.539 53.0187 184.965 51.5816C186.391 50.1444 188.325 49.337 190.342 49.337C192.359 49.337 194.293 50.1444 195.719 51.5816C197.145 53.0187 197.946 54.9679 197.946 57.0003V125.463ZM195.306 172.9C194.301 173.913 166.023 197.663 114.18 197.663C62.3372 197.663 34.2477 174.04 33.0538 173.026C32.3014 172.387 31.6816 171.604 31.23 170.723C30.7784 169.841 30.5038 168.879 30.4221 167.89C30.3404 166.902 30.453 165.907 30.7537 164.962C31.0543 164.018 31.537 163.142 32.174 162.386V162.386C33.4864 160.856 35.3459 159.911 37.3471 159.756C39.3483 159.602 41.3288 160.252 42.8568 161.563C43.2967 161.88 68.5583 182.526 114.117 182.526C159.676 182.526 185.126 161.753 185.378 161.563C186.923 160.263 188.91 159.622 190.916 159.776C192.923 159.93 194.791 160.866 196.123 162.386C197.405 163.894 198.045 165.851 197.904 167.831C197.763 169.811 196.852 171.656 195.369 172.963L195.306 172.9ZM30.3517 57.0003C30.4653 54.9615 31.3752 53.0508 32.8824 51.6861C34.3896 50.3213 36.3716 49.6134 38.3952 49.717C40.2711 49.8244 42.0412 50.628 43.364 51.9729C44.6869 53.3178 45.4688 55.1088 45.5589 57.0003V125.337C45.5589 127.369 44.7578 129.318 43.3319 130.755C41.9059 132.193 39.9719 133 37.9553 133C35.9387 133 34.0047 132.193 32.5787 130.755C31.1528 129.318 30.3517 127.369 30.3517 125.337V57.0003ZM68.4955 41.8004C68.6091 39.7615 69.519 37.8509 71.0262 36.4862C72.5334 35.1214 74.5154 34.4135 76.539 34.5171C78.4149 34.6245 80.185 35.4281 81.5078 36.773C82.8307 38.1179 83.6126 39.9088 83.7027 41.8004V143.133C83.7027 145.166 82.9016 147.115 81.4757 148.552C80.0497 149.989 78.1157 150.796 76.0991 150.796C74.0825 150.796 72.1485 149.989 70.7225 148.552C69.2966 147.115 68.4955 145.166 68.4955 143.133V41.8004ZM106.828 38.0004C106.828 35.968 107.629 34.0188 109.055 32.5817C110.481 31.1445 112.415 30.3371 114.431 30.3371C116.448 30.3371 118.382 31.1445 119.808 32.5817C121.234 34.0188 122.035 35.968 122.035 38.0004V148.2C122.035 150.232 121.234 152.181 119.808 153.619C118.382 155.056 116.448 155.863 114.431 155.863C112.415 155.863 110.481 155.056 109.055 153.619C107.629 152.181 106.828 150.232 106.828 148.2V38.0004ZM144.532 41.8004C144.532 39.768 145.333 37.8188 146.759 36.3816C148.185 34.9445 150.119 34.1371 152.135 34.1371C154.152 34.1371 156.086 34.9445 157.512 36.3816C158.938 37.8188 159.739 39.768 159.739 41.8004V143.133C159.739 145.166 158.938 147.115 157.512 148.552C156.086 149.989 154.152 150.796 152.135 150.796C150.119 150.796 148.185 149.989 146.759 148.552C145.333 147.115 144.532 145.166 144.532 143.133V41.8004ZM200.019 0.00063243H28.5921C24.8568 -0.024391 21.1533 0.693392 17.6937 2.11288C14.234 3.53237 11.0861 5.6257 8.43022 8.27299C5.77436 10.9203 3.66268 14.0695 2.2161 17.5405C0.769518 21.0114 0.0164457 24.7358 0 28.5005L0 199.5C0.0164457 203.264 0.769518 206.989 2.2161 210.46C3.66268 213.93 5.77436 217.08 8.43022 219.727C11.0861 222.374 14.234 224.468 17.6937 225.887C21.1533 227.307 24.8568 228.024 28.5921 227.999H200.019C203.749 228.024 207.448 227.309 210.903 225.893C214.359 224.478 217.504 222.39 220.159 219.749C222.814 217.109 224.927 213.967 226.377 210.503C227.828 207.04 228.587 203.322 228.611 199.563V199.563V28.5005C228.595 24.7412 227.844 21.022 226.401 17.5552C224.959 14.0884 222.853 10.942 220.203 8.29549C217.554 5.64903 214.414 3.55438 210.961 2.13115C207.509 0.707912 203.812 -0.0160384 200.082 0.00063243V0.00063243"
                  fill="currentColor"
                  class="jsx-1296992372"
                ></path>
              </svg>
            </a>
            <div className="main_nav_menu flex justify-between w-full max-lg:justify-end">
            <button className="min-[1024px]:hidden" onClick={(e)=>{handleClick(e);handleBar(e)}}>
              <div><FontAwesomeIcon icon={showbar?faXmark:faBars} />
              </div>
            </button>
              <div className="nav_menu_main">
                <ul className={`flex gap-4 items-baseline max-[1076px]:gap-2 max-lg:flex-col max-lg:absolute max-lg:top-[4.5rem] max-lg:h-[100vh] max-lg:w-[250px] max-lg:items-center max-lg:rounded max-lg:bg-mvp-darkblue ${clicked?"max-lg:right-[0]":"max-lg:right-[-250px]"} transition-all`}>
                  <li>
                    <button
                      className="text-base gap-1 p-2 font-semibold max-lg:px-6 max-lg:py-4"
                      onMouseEnter={handleHover}
                      onMouseLeave={handleHover}
                    >
                      Products{" "}
                      <FontAwesomeIcon width={10} icon={faChevronDown} />
                    </button>

                    <div
                      className={`product_navigation flex max-lg:hidden ${
                        hovered ? "show" : ""
                      }`}
                    >
                      <ul className="submenu">
                        <li>
                          <a href="/">
                            <img src="https://shrturl.app/ldmkH5" alt="" />
                            <span className="sub_title">Help Desk</span>
                            <span className="sub_detail">
                              Boost productivity with a workspace that connects
                              your inbox, tickets and help center
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <img src="https://shrturl.app/ldmkH5" alt="" />
                            <span className="sub_title">Help Desk</span>
                            <span className="sub_detail">
                              Boost productivity with a workspace that connects
                              your inbox, tickets and help center
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <img src="https://shrturl.app/ldmkH5" alt="" />
                            <span className="sub_title">Help Desk</span>
                            <span className="sub_detail">
                              Boost productivity with a workspace that connects
                              your inbox, tickets and help center
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <img src="https://shrturl.app/ldmkH5" alt="" />
                            <span className="sub_title">Help Desk</span>
                            <span className="sub_detail">
                              Boost productivity with a workspace that connects
                              your inbox, tickets and help center
                            </span>
                          </a>
                        </li>
                      </ul>
                      <div className="divider"></div>
                      <aside>
                        <div>
                          <span>MORE PRODUCTS</span>
                          <ul className="gap-0">
                            <li>
                              <a href="/">Messenger</a>
                            </li>
                            <li>
                              <a href="/">Apps and Integrations</a>
                            </li>
                            <li>
                              <a href="/">Phone</a>
                            </li>
                          </ul>
                        </div>
                      </aside>
                    </div>
                  </li>
                  <li>
                    <button className="text-base gap-1 p-2 font-semibold max-lg:px-6 max-lg:py-4">
                      Reasouces{" "}
                      <FontAwesomeIcon width={10} icon={faChevronDown} />
                    </button>
                  </li>
                  <li>
                    <a href="/" className="text-base gap-1 p-2 font-semibold max-lg:px-6 max-lg:py-4">
                      Customers
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-base gap-1 p-2 font-semibold max-lg:px-6 max-lg:py-4">
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
              <div className={`flex gap-4 ml-auto max-lg:flex-col max-lg:absolute max-lg:top-[21rem] max-lg:gap-6 ${clicked?"max-lg:right-[2.25rem]":"max-lg:right-[-250px]"} transition-all`}>
                <a
                  href="/"
                  className="group/item px-6 bg-mvp-blue h-12 rounded-full flex justify-center items-center gap-2 font-bold hover:bg-[#004ad9] transition-all"
                >
                  <span>Start free trial</span>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="relative group-hover/item:left-0.5"
                  />
                </a>
                <a
                  href="/"
                  className="px-6 h-12 rounded-full flex justify-center items-center border-2 border-paper font-bold hover:shadow-[inset_0_0_0_1px] transition-all"
                >
                  <span>View demo</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
