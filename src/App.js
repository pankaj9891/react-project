import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Logo_carousel from "./components/logo-carousel/logo_carousel";
import ContentLayout from "./components/contentLayout/contentLayout";
import Card from "./components/cards/card";
import Testimonials from "./components/testimonials/testimonials";
import CardSecond from "./components/cardSecond/cardSecond";
import JoinUs from "./components/joinUs/joinUs";
import Footer from "./components/footer/footer";

function App() {

  const contentData = [
    {
      title: "HELLO DESK",
      heading: "Get more done faster with our AI-enhanced workspace",
      subheading: "Maximize productivity with one central workspace that connects your inbox, tickets, and help center. ",
      info_link: "Learn more about our help desk",
      titleColor: "linear-gradient(94deg, rgb(202, 240, 248) 0%, rgb(135, 220, 237) 100%)",
      bg:"linear-gradient(rgba(202, 240, 248, 0) 0%, rgba(202, 240, 248, 0.65) 52%, rgba(202, 240, 248, 0) 100%)"
    },
    {
      title: "AI CHATBOT",
      heading: "Resolve 50% of customer questions. Instantly.",
      subheading: "Fin, our breakthrough AI chatbot, uses the most sophisticated AI technology to deliver safe, accurate answers that resolve customer questions and reduce your team’s ticket volume instantly.",
      info_link: "Learn more about Fin",
      titleColor: "linear-gradient(94deg, rgb(196, 224, 253) 0%, rgb(94, 173, 255) 100%)",
      bg:"linear-gradient(rgba(196, 224, 254, 0) 0%, rgba(196, 224, 254, 0.65) 52%, rgba(196, 224, 254, 0) 100%)"
    },
    {
      title: "PROACTIVE SUPPORT",
      heading: "Give customers the support they need, before they need it",
      subheading: "Onboard, educate, and notify your customers with in-context, automated messages—cutting support volume and keeping customers happy.",
      info_link: "Learn more about proactive support",
      titleColor: "linear-gradient(94deg, rgb(255, 241, 217) -20%, rgb(251, 212, 130) 100%)",
      bg:"linear-gradient(rgba(255, 241, 217, 0) 0%, rgba(255, 241, 217, 0.65) 52%, rgba(255, 241, 217, 0) 100%)"
    },
    {
      title: "MESSENGER AND OMNICHANNEL",
      heading: "Deliver conversational support where it works best for your customers",
      subheading: "Our messenger supports customers when it's most effective—the moment they need help in your product. And with email, SMS, and more, they can also pick whatever channel works best.",
      info_link: "Learn more about messenger and omnichanne ",
      titleColor: "linear-gradient(94deg, rgb(250, 227, 218) -20%, rgb(236, 144, 105) 100%)",
      bg:"linear-gradient(rgba(250, 227, 218, 0) 0%, rgba(250, 227, 218, 0.65) 52%, rgba(250, 227, 218, 0) 100%)"
    },
    {
      title: "PLATFORM",
      heading: "A single, powerful, easy-to-use platform",
      subheading: "Get all your automation, conversations, tickets, customer data, and reporting working together seamlessly. Maximize team performance by connecting all your other tools to our platform.",
      info_link: "Learn more about intercom platform ",
      titleColor: "linear-gradient(92deg, rgb(196, 224, 253) 0%, rgb(135, 220, 237) 25%, rgb(251, 212, 130) 70%, rgb(236, 144, 105) 100%)",
      fontColor:"#ffffff",
      subheadingColor:"#d3d5d8",
      bg:"#041527",
      linkColor:"#ffffff"
    },
  ];

  const cardData = [
    {
      benefit1: "AI-enhanced",
      benefit2: "Omnichannel",
      benefit3: "Designed for efficiency",
      heading1: "Maximize productivity with the fastest shared inbox",
      heading2: "Better tickets for your team and your customers",
      heading3: "Help your customers help themselves",
      about1: "Our shared inbox is AI-enhanced and designed for speed and efficiency—so your team can work smarter and collaborate faster.",
      about2: "Resolve complex issues quickly with tickets optimized for team collaboration and real-time customer updates.",
      about3: "Connect your help center across the whole platform—so your customers can find the most accurate answers when and where they need them.",
      img1:"https://web.archive.org/web/20240401165926im_/https://www.intercom.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2F3FTxMGNF5ZpGo9jXOuOOkw%2F9cb9494f992ff41aa259f247ce2ad280%2FInbox_AI_assist.png&w=1440&q=100",
      img2:"https://web.archive.org/web/20240401165926im_/https://www.intercom.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2F2xY69NMSGQdEpJb1343QKP%2F87634129f7425e86055b53176d619aee%2FInbox_Ticketing_tabm.png&w=1440&q=100",
      img3:"https://web.archive.org/web/20240401165926im_/https://www.intercom.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2F5vo0SmYlCZBwR2tFrr689D%2F56490a8b72d1b44293e582967081107b%2FHelp_Desk_help-center.png&w=1440&q=100",
      bgColor: "linear-gradient(180deg, #EFFBFE 0%, #CAF0F8 100%)",
      tickColor:"https://shrturl.app/lAThvq"
    },
    {
      benefit1: "Dramatically reduce your support volume",
      benefit2: "Provides safe, trustworthy answers",
      benefit3: "Solve issues anywhere, any time, in any language (coming soon)",
      heading1: "An AI chatbot you can trust",
      heading2: "Seamless human handoff",
      heading3: "Connect it all with Workflows ",
      about1: "Built-in safeguards ensure Fin answers questions based solely on your support content. No misleading answers. No off-topic conversations.",
      about2: "Fin can triage complex problems and pass them to your human support teams without interruption—so your customers get the best possible experience.",
      about3: "Easily build powerful, no-code automations for your customers and your teammates with Fin, other bots, triggers, conditions, and rules—all in one place.",
      img1:"https://web.archive.org/web/20240401165926im_/https://www.intercom.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2F4zZZHWCbVtxbXAMdVjq8D2%2F5e68796d4c007812d01e93039aa0fab9%2FHomepage-Automation-Fin-mobile.png&w=1440&q=100",
      img2:"https://web.archive.org/web/20240401165926im_/https://www.intercom.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2F7hzMzDgt69ds2GqynppQlm%2F3760a9b02a628706044ba20b2e064697%2FHomepage-Automation-handoff.png&w=1440&q=100",
      img3:"https://web.archive.org/web/20240401165926im_/https://www.intercom.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2FyDE4vctuSSzBrTnTSHsfQ%2Ffe6fc60f86460aca9257974e2e5e226a%2FHomepage-Automation-Workflows-mobile.png&w=1440&q=100",
      bgColor: "linear-gradient(180deg, #F3F9FF 0%, #C4E0FD 100%)",
      tickColor: "https://shrturl.app/YvplYY"
    },
    {
      benefit1: "Reduce inbound volume",
      benefit2: "Increase CSAT",
      benefit3: "No engineering resources needed",
      heading1: "Product tours",
      heading2: "Outbound messages",
      heading3: "Series",
      about1: "Keep new users inside your product—and out of your inbox—using automated, interactive onboarding.",
      about2: "Keep support volume low by letting customers know when issues arise with the largest selection of message types.",
      about3: "Create cohesive targeted message sequences across channels with a no-code visual builder.",
      img1:"https://shrturl.app/bJ7F0n",
      img2:"https://shrturl.app/6-ctf4",
      img3:"https://shrturl.app/aiBDIq",
      bgColor: "linear-gradient(180deg, #FFFBF3 0%, #FFF1D9 100%)",
      tickColor: "https://shrturl.app/H8YGbQ"
    },
  ];

  const testimonialData = [
    {
      social_img: "https://web.archive.org/web/20240401174020im_/https://images.ctfassets.net/xny2w179f4ki/2xUzzQQsF8l9BTt6WbOc08/32d50a786b2de379139719fe1e946098/Wolt.svg",
      quote: "The thing I noticed most about the inbox is the speed. In a test, we saw a ",
      boldQuote:"15% increase in the number of conversations handled.",
      avatar_img: "https://shrturl.app/Jj7eTn",
      avatar_name: "Pelle Blarke",
      avatar_detail: "International Strategy and Operations Manager, Wolt"
    },
    {
      social_img: "https://shrturl.app/DVmwgZ",
      quote: "Within six days, Fin is successfully resolving 42% of conversations.  ",
      boldQuote:"It’s truly surpassed my expectations.",
      avatar_img: "https://shrturl.app/c39YTn",
      avatar_name: "Dane Burgess",
      avatar_detail: "Customer Support Director, Linktree"
    },
    {
      social_img: "https://shrturl.app/p9C8o5",
      quote: "Self-service and proactive support have helped us reduce inbound conversation volume by 20% over the past two years,",
      boldQuote:"even as our user base has continued to grow.",
      avatar_img: "https://shrturl.app/_418t_",
      avatar_name: "Christian Parker",
      avatar_detail: "Director of Managed Services, TrueCommerce"
    },
    {
      social_img: "https://shrturl.app/HYQZGM",
      quote: "Intercom powers our customer communications, delivering conversions, customer engagement, and personalized support",
      boldQuote:" The messenger is the heart of this strategy.",
      avatar_img: "https://shrturl.app/V3Iuvo",
      avatar_name: "Geronimo Chala",
      avatar_detail: "Chief Consumer Officer, Rebag"
    },
    {
      social_img: "https://shrturl.app/dUs7PE",
      quote: "We have almost all of our support channels integrated into one system, making it easy for us to manage our support, as well as ",
      boldQuote:" take a data-driven approach to continuously improving our service.",
      avatar_img: "https://shrturl.app/fHd54W",
      avatar_name: "Oda Skuggedal Wilhelmsen",
      avatar_detail: "ordic Customer Service Manager, Godtlevert",
      textColor:"#d3d5d8"
    },
  ];

  const cardSecondData = [
    {
      benefit1:"Deliver support at the exact right moment",
      benefit2:"Give your customers more flexibility and control over support channels",
      benefit3:"A seamless, beautiful customer experience ",
      tickColor:"https://shrturl.app/qih230",
      heading1:"Customizable messenger",
      heading2:"Configurable experiences",
      about1:"It's your messenger—so have it match your brand with infinite design options.",
      about2:"Show and hide different content, features—even entire spaces—to create bespoke messenger experiences.",
      bgColor:"linear-gradient(180deg, #FEF6F3 0%, #FAE3DA 100%)",
      img1:"https://shrturl.app/cJDx0c  ",
      img2:"https://shrturl.app/SbQE8v",
      icon1:"https://shrturl.app/dhcuzf",
      icon2:"https://shrturl.app/Li-tDA",
      icon3:"https://shrturl.app/mqojkI",
      icon4:"https://shrturl.app/R6A40v",
      title1:"Mobile",
      title2:"Omnichannel messaging",
      title3:"Phone",
      title4:"Switch",
      text1:"Bring the messenger to your mobile app with powerful iOS and Android SDKs.",
      text2:"Support customers using their preferred channel—whether that’s email, SMS, social, or more.",
      text3:"Centralize your phone support with Intercom Phone.",
      text4:"Reduce phone wait times by letting customers switch to messaging mid-call.",
    },
    {
      benefit1:"Maximize team performance with actinable insights",
      benefit2:"Stop switching between tools and speed up workflow",
      benefit3:"See all your data in one place ",
      tickColor:"https://shrturl.app/dlzM_h",
      heading1:"Reporting",
      heading2:"Customer data",
      about1:"Understand and improve performance of your both and team with flexible and customizable reports",
      about2:"View,segment, and filter all your customer data-- and model it however works beast for your business.",
      bgColor:"#223140",
      img1:"https://shrturl.app/s_SQ6R",
      img2:"https://shrturl.app/VS0V98",
      icon1:"https://shrturl.app/ldmkH5",
      icon2:"https://shrturl.app/003GOJ",
      icon3:"https://shrturl.app/ub0csc",
      icon4:"https://shrturl.app/sn2Nmn",
      title1:"Behavioral data",
      title2:"Custom Actions",
      title3:"Apps and integrations",
      title4:"APIs and webhooks",
      text1:"Craft the best customer support experiences using a complete picture of past actions.",
      text2:"Power bots and workflows with live customer data stored in other tools—no engineering resources required.",
      text3:"Get all your tools working as one—and add more to existing workflows—with 300+ apps.",
      text4:"Configure Intercom to work best for you with our easy-to-use APIs and webhooks.",
      benefitColor:"#ffffff",
      textColor:"#ffffff",
      bodyBg:"#041527",
      border:"0",
      iconBg:"#3f4c5a"
    }
  ]

  
  return (
    <>
      <Navbar />
      <Hero />
      <Logo_carousel />
      <ContentLayout {...contentData[0]}/>
      <Card {...cardData[0]}/>
      <Testimonials {...testimonialData[0]}/>
      <ContentLayout {...contentData[1]}/>
      <Card {...cardData[1]}/>
      <Testimonials {...testimonialData[1]}/>
      <ContentLayout {...contentData[2]}/>
      <Card {...cardData[2]}/>
      <Testimonials {...testimonialData[2]}/>
      <ContentLayout {...contentData[3]}/>
      <CardSecond {...cardSecondData[0]}/>
      <Testimonials {...testimonialData[3]}/>
      <ContentLayout {...contentData[4]}/>
      <div style={{background:"#041527", paddingTop:"1px"}}>
      <CardSecond {...cardSecondData[1]}/>
      <Testimonials {...testimonialData[4]}/>
      </div>
      <JoinUs />
      <Footer />
    </>
  );
}

export default App;
