import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import ServiceCard from "../components/ServiceCard";
import BackgroundLines from "../components/ui/BackgroundLines.jsx";
import { CompareDemo } from "../components/Compare.jsx";
import { CoverDemo } from "../components/Cover.jsx";
import ButtonWhite from "../components/ButtonWhite.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { p, span } from "framer-motion/client";
import ProjectCard from "../components/ProjectCard.jsx";
import Carousel from "../components/ui/Carousel.jsx";
import MarqueeStrip from "../components/Marquee.jsx";
import AnimatedTestimonialsComp from "../components/Testimonials.jsx";
import ServiceCardMob from "../components/ServiceCardMobile.jsx";
import service from "../libs/services.js";
const ex_idx = [1, 2, 4, 5, 6, 7, 8, 9];
const srvc = service;
const Home = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".leadtext", {
      y: 30,
      ease: "power4.out",
      delay: 1,
      duration: 1,
      opacity: 0,
    });
    gsap.from("#vdo", {
      delay: 1.5,
      width: 0,
    });
    gsap.from("#desctext", {
      y: 40,
      opacity: 0,
      delay: 1,
      duration: 1,
    });
    //services animation
    gsap.to(".star", {
      scrollTrigger: {
        trigger: ".card1",
        start: "center bottom",
        end: "center center",
        scrub: true,
      },
      y: 180,
      scale: 0.5,
      opacity: 0,
    });
    gsap.to(".starmob", {
      scrollTrigger: {
        trigger: ".starmob",
        start: "center center",
        end: "bottom top",
        scrub: true,
      },
      y: 180,
      scale: 0.5,
      opacity: 0,
    });
    gsap.from("#our", {
      scrollTrigger: {
        trigger: "#our",
        start: "top 90%",
      },
      y: 30,
      opacity: 0,

      duration: 0.5,
      stagger: 0.2,
    });
    gsap.from("#services", {
      scrollTrigger: {
        trigger: "#services",
        start: "top 90%",
      },
      y: 30,
      opacity: 0,

      duration: 0.5,
      stagger: 0.1,
    });
    gsap.to(".arrow", {
      scrollTrigger: {
        trigger: "#our",
        start: "top 90%",
        end: "bottom center",

        scrub: true,
      },
      rotate: 45,
    });
    const cards = gsap.utils.toArray(".card");
    cards.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "center center",
        end: "top -350px",
        pin: true,
        pinSpacing: false,
        scrub: 1,
      });

      // Apply the animation to the current card only if it's not the last one
      if (i < cards.length - 1) {
        gsap.to(panel, {
          scrollTrigger: {
            trigger: cards[i + 1], // Target the next card as the trigger
            start: "100px bottom",
            end: "top center",
            scrub: 1,
          },
          scale: 0.75,
          delay: 0.5,
          opacity: 0,
        });
      } else {
        // Special case for the last card
        gsap.to(panel, {
          scrollTrigger: {
            trigger: panel,
            start: "100px start",
            end: "top 100px",
            scrub: 1,
          },
          duration: 1,
          delay: 0.3,
          opacity: 0,
          scale: 0.75,
        });
      }
    });
    //after services
    gsap.from(".kink", {
      scrollTrigger: {
        trigger: ".kink",
        start: "top bottom",
        end: "top center",
        scrub: 1,
      },

      duration: 0.5,
      scale: 0.8,
      opacity: 0.5,
    });
    gsap.from(".kink", {
      scrollTrigger: {
        trigger: ".kink",
        start: "center center",
        end: "center top",
        scrub: 1,

        pin: true,
      },
      duration: 1,
    });
    gsap.from(["#ourx", "#workx"], {
      scrollTrigger: {
        trigger: "#black",
        start: "top 80%",
        end: "top top",
        scrub: 1,
      },
      y: 80,
      opacity: 0,
      stagger: 0.2,
    });
    gsap.from(["#coverup"], {
      scrollTrigger: {
        trigger: "#black",
        start: "top 80%",
        end: "top top",
        scrub: 1,
      },
      y: 80,
      opacity: 0,
      stagger: 0.2,
    });
    gsap.from("#ourp", {
      scrollTrigger: {
        trigger: "#ourp",
        start: "top 90%",
        end: "center center",
        scrub: true,
      },
      y: 80,
      opacity: 0,
      stagger: 1,
    });
    gsap.from("#partner", {
      scrollTrigger: {
        trigger: "#ourp",
        start: "top 90%",
        end: "center center",
        scrub: true,
      },
      y: 80,
      opacity: 0,
      stagger: 1,
      duration: 0.6,
    });
    gsap.from("#xtitle", {
      scrollTrigger: {
        trigger: "#xtitle",
        start: "top bottom",
        end: "top center",
        scrub: true,
      },
      scale: 1.5,
    });
    gsap.from("#xtitle2", {
      scrollTrigger: {
        trigger: "#xtitle2",
        start: "top bottom",
        end: "top center",
        scrub: true,
      },
      scale: 1.5,
    });
    gsap.from("#xtitle3", {
      scrollTrigger: {
        trigger: "#xtitle3",
        start: "top bottom",
        end: "top center",
        scrub: true,
      },
      scale: 1.5,
    });
    gsap.from(".leftpart1", {
      scrollTrigger: {
        trigger: ".leftpart1",
        start: "top bottom",
        end: "center center",

        scrub: true,
      },
      x: -400,
    });
    gsap.from(".progress1", {
      scrollTrigger: {
        trigger: ".progress1",
        start: "center bottom",
        end: "center center",

        scrub: true,
      },
      width: 0,
    });
    gsap.from(".leftpart2", {
      scrollTrigger: {
        trigger: ".leftpart2",
        start: "top bottom",
        end: "center center",

        scrub: true,
      },
      x: 400,
    });
    gsap.from(".progress2", {
      scrollTrigger: {
        trigger: ".progress2",
        start: "center bottom",
        end: "center center",

        scrub: true,
      },
      width: 0,
    });
    gsap.from(".leftpart3", {
      scrollTrigger: {
        trigger: ".leftpart3",
        start: "top bottom",
        end: "center center",

        scrub: true,
      },
      x: -400,
    });
    gsap.from(".progress3", {
      scrollTrigger: {
        trigger: ".progress3",
        start: "center bottom",
        end: "center center",
        scrub: true,
      },
      width: 0,
    });
    gsap.from(".leftpart4", {
      scrollTrigger: {
        trigger: ".leftpart4",
        start: "top bottom",
        end: "center center",

        scrub: true,
      },
      x: 400,
    });
    gsap.from(".progress4", {
      scrollTrigger: {
        trigger: ".progress4",
        start: "center bottom",
        end: "center center",

        scrub: true,
      },
      width: 0,
    });
    gsap.to(".getq", {
      scrollTrigger: {
        trigger: "#black",
        start: "top bottom",
        scrub: true,
      },
      boxShadow: "10px 6px 0px gold",
      duration: 0.5,
      ease: "bounce",
    });
    gsap.to("#cic", {
      rotate: 360,
      duration: 4, // Adjust duration as needed
      repeat: -1, // Infinite loop
      ease: "linear", // Ensures smooth constant speed
    });
    gsap.from("#cntct", {
      scrollTrigger: {
        trigger: "#black",
        start: "center center",
        scrub: true,
      },
      opacity: 0,
      display: "none",
    });
  });

  return (
    <main className="w-full min-h-screen h-full z-40 overflow-x-hidden overflow-y-scroll">
      {/*HERO*/}
      <section className="hero font-[head] min-h-[940px] md:px-8 text-[11vw] overflow-x-hidden flex flex-col justify-top pt-24">
        <div className=" leading-none font-[gotesk] flex flex-col gap-8 md:gap-2 ">
          <p className="leadtext pl-16 bg-[url('/tb.svg')] md:text-[11vw] text-[14vw] flex bg-no-repeat bg-left-top pt-16">
            {" "}
            we create{" "}
          </p>

          <span className="flex pl-5 md:pl-16 h-fit items-center">
            <span
              id="vdo"
              className="w-20 md:w-64 mr-4 h-20 md:h-36 bg-slate-400 rounded-full overflow-hidden"
            >
              <video
                src="https://kota-content.b-cdn.net/app/uploads/2023/10/Kota-loop.mp4"
                autoPlay
                muted
              ></video>
            </span>

            <p className="leadtext md:text-[11vw] text-[14vw]">solutions</p>
            <span className="leadtext hidden md:flex -translate-y-5">
              <img src="/c.svg" alt="" id="cic" />
            </span>
          </span>
          <div className="flex md:flex-row md:gap-2 gap-16 md:text-[11vw] text-[14vw] flex-col">
            <p className="leadtext pl-8">
              that <span className="shine">sticks</span>
            </p>

            <p
              id="desctext"
              className="text-base w-3/4 p-8 md:w-80 text-justify ml-4 font-mono"
            >
              we are a creative web design and branding agency based in Noida,
              India that crafts beautiful digital experiences for those who{" "}
              <span className="font-black">refuses to blend in.</span>
            </p>
          </div>
          {/* <div className="w-full justify-center flex">
            <button
              className="p-4 getq hover:p-5 translate-y-12 transition-all origin-center  w-fit  bg-gray-50 border border-black text-2xl rounded-full font-[gotesk]"
              style={{
                boxShadow: "10px 10px 0px black",
              }}
            >
              Get a Quote{" "}
              <span className="p-2 bg-yellow-300 rounded-full text-black px-3 ">
                in 2 mins
              </span>
            </button>
          </div> */}
        </div>
      </section>
      {/*SERVICES*/}
      <section className="w-full min-h-screen mb-96 px-2 md:px-8 items-center hidden md:flex flex-col">
        <div className="flex mb-20 w-full star items-center justify-between">
          <div className="font-[title]  pl-10 leading-none text-[10vw] ">
            <div className="flex ">
              {"WHAT ".split("").map((item) => {
                return <p id="our">{item}</p>;
              })}
            </div>
            <p className="flex">
              <span className="w-8 md:w-44"></span>
              {"WE DO".split("").map((item) => {
                return (
                  <p id="services" className={`${item === "D" ? "pl-6" : ""}`}>
                    {item}
                  </p>
                );
              })}
            </p>
          </div>
          <svg
            class="max-w-16 md:max-w-36 arrow h-full pr-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 111.42 110.66"
          >
            <polygon points="13.65 102.66 109.53 6.67 103.87 1.02 8 97 8 0 0 0 0 110.66 111.42 110.66 111.42 102.66 13.65 102.66"></polygon>
          </svg>
        </div>

        {srvc.map((item, idx) => {
          return <ServiceCard data={item} />;
        })}
      </section>
      <section className="w-full md:hidden min-h-screen mb-96 px-2 md:px-8 items-center flex flex-col">
        <div className="flex mb-20 w-full starmob items-center justify-between">
          <div className="font-[title]  pl-10 leading-none text-5xl md:text-[10vw] ">
            <div className="flex ">
              {"WHAT ".split("").map((item) => {
                return <p id="our">{item}</p>;
              })}
            </div>
            <p className="flex">
              <span className="w-8 md:w-44"></span>
              {"WE DO".split("").map((item) => {
                return (
                  <p id="services" className={`${item === "D" ? "pl-6" : ""}`}>
                    {item}
                  </p>
                );
              })}
            </p>
          </div>
          <svg
            class="w-16 md:max-w-36 arrow h-full pr-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 111.42 110.66"
          >
            <polygon points="13.65 102.66 109.53 6.67 103.87 1.02 8 97 8 0 0 0 0 110.66 111.42 110.66 111.42 102.66 13.65 102.66"></polygon>
          </svg>
        </div>

        {srvc.map((item, idx) => {
          return <ServiceCardMob data={item} />;
        })}
      </section>
      {/*SPECIAL*/}
      <section className="w-full min-h-screen px-2 md:px-8 items-center flex flex-col">
        <div className="w-full h-1/2 md:h-screen flex justify-center items-center">
          <div className="hidden md:block kink text-[9vw] text-center leading-none tracking-tighter">
            We develop your <br />
            <em className="underline underline-offset-8 shine">
              little world
            </em>{" "}
            keeping{" "}
            <em className=" underline underline-offset-8 shine">
              these <br />
              things{" "}
            </em>{" "}
            in <em className=" underline  underline-offset-8 shine"> mind</em>
          </div>
          <div className="md:hidden  text-[12vw] text-center leading-none tracking-tighter">
            We develop your <br />
            <em className="underline underline-offset-8 shine">
              little world
            </em>{" "}
            keeping{" "}
            <em className=" underline underline-offset-8 shine">
              these <br />
              things{" "}
            </em>{" "}
            in <em className=" underline  underline-offset-8 shine"> mind</em>
          </div>
        </div>
        <div className="w-11/12 mt-80">
          <div className="w-full border-b border-black md:border-gray-400 hover:border-black hover:text-black scale-95 hover:scale-100 transition-all ease-out text-black md:text-gray-400 flex md:gap-3 gap-6 justify-between items-end py-12">
            <p className="font-[body] text-2xl md:text-9xl">
              <span className="text-xl md:text-5xl">01/</span> <br />
              Beauty
            </p>
            <p className="text-justify text-base md:text-3xl w-80">
              Developing stunning one-of-a-kind digital design that catches
              people’s eyes and brings your brand to life online.
            </p>
          </div>
          <div className="w-full border-b border-black md:border-gray-400 hover:border-black hover:text-black scale-95 hover:scale-100 transition-all ease-out text-black md:text-gray-400 flex md:gap-3 gap-6 justify-between items-end py-12">
            <p className="font-[body] text-2xl md:text-9xl">
              <span className="text-xl md:text-5xl">02/</span> <br />
              Thought
            </p>
            <p className="text-justify text-base md:text-3xl w-80">
              As a web design agency, we love to deliver meaningful and
              intuitive user experiences that build trust with your target
              audience.
            </p>
          </div>
          <div className="w-full border-b border-black md:border-gray-400 hover:border-black hover:text-black scale-95 hover:scale-100 transition-all ease-out text-black md:text-gray-400 flex md:gap-3 gap-6 justify-between items-end py-12">
            <p className="font-[body] text-2xl md:text-9xl">
              <span className="text-xl md:text-5xl">03/</span> <br />
              Impact
            </p>
            <p className="text-justify text-base md:text-3xl w-80">
              Designing tailor made solutions that resonate with your customers
              and drives them to act.
            </p>
          </div>
        </div>
      </section>
      {/*WORK*/}
      <section
        id="black"
        className="w-full mt-28 bg-black min-h-screen pt-2 items-center flex flex-col"
      >
        <div className="overflow-hidden relative rotate border-t mb-8 border-b border-white bg-black w-full h-20 flex items-center">
          <MarqueeStrip DATA_LIST={DATA_LIST} />
        </div>
        <div className="flex flex-col mb-20 w-full text-white items-center justify-between">
          <div className="font-[title] flex md:pl-10 leading-none text-5xl md:text-[10vw] ">
            <div className="flex">
              {"OUR".split("").map((item) => {
                return <p id="ourx">{item}</p>;
              })}
            </div>
            <p className="flex work">
              <span className="w-8"></span>
              {"WORK".split("").map((item) => {
                return <p id="workx">{item}</p>;
              })}
            </p>
          </div>
          <span class="w-full md:w-1/2 h-full text-white md:pr-10" id="coverup">
            {/* <h6 className="text-5xl">
              Transforming small brands with stunning websites, without the big
              price tag.
            </h6> */}
            <CoverDemo />
          </span>
        </div>
        <div className="w-10/12">
          {/* <div className="grid grid-cols-2 gap-4">
            {ex_idx.map((item, idx) => {
              return (
                <div>
                  {idx % 2 !== 0 && <div className="w-full h-16"></div>}

                  <ProjectCard />
                </div>
              );
            })}
          </div> */}
          <Carousel />
        </div>
        <div className="w-full py-12 flex justify-center">
          <ButtonWhite text={"Check Our Work"} />
        </div>
        <section className="w-full overflow-x-hidden bg-black min-h-screen pt-8  items-center flex flex-col">
          <div className="flex md:mb-20 w-full md:mt-80 mt-20 items-center  flex-col justify-between">
            <div
              id="xtitle"
              className="font-[gotesk]  uppercase text-white w-full text-center leading-none text-5xl md:text-[7vw]"
            >
              Our 4 Step process to <br /> launch a project
            </div>
            <div className="w-full h-full my-36 px-16 text-white flex flex-col gap-16">
              {/*step-box*/}
              <article className="w-full h-fit flex md:flex-row flex-col text-end font-bold gap-4">
                <div className="leftpart1 flex md:w-1/2 text-4xl flex-col items-end  gap-4">
                  <p>01</p>
                  <p className="text-6xl font-black">
                    Discovery Call <br />& Planning
                  </p>
                  <p className="font-light text-3xl">
                    We start by understanding your needs and goals, then create
                    a clear plan to guide the project.
                  </p>
                  <div className="w-4/5 h-6 rounded-full flex justify-end items-end overflow-hidden bg-white border border-white">
                    <div className="h-full w-full bg-yellow-500 progress1"></div>
                  </div>
                </div>
                <div className="flex md:w-1/2 overflow-hidden justify-center rounded-full">
                  <img src="asking-question.svg" alt="" />
                </div>
              </article>
              <article className="w-full h-fit flex flex-col md:flex-row-reverse text-start font-bold gap-4">
                <div className="leftpart2 flex w-full md:w-1/2 text-4xl flex-col items-start  gap-4">
                  <p>02</p>
                  <p className="text-6xl font-black">
                    Design <br />& Development
                  </p>
                  <p className="font-light text-3xl">
                    We transform concepts into reality, designing your visuals
                    with precise execution.
                  </p>
                  <div className="w-4/5 h-6 rounded-full flex justify-start items-end overflow-hidden bg-white border border-white">
                    <div className="h-full w-full bg-yellow-500 progress2"></div>
                  </div>
                </div>
                <div className="flex w-full md:w-1/2 overflow-hidden  justify-center rounded-full">
                  <img src="advertising.svg" alt="" />
                </div>
              </article>
              <article className="w-full h-fit flex md:flex-row flex-col text-end font-bold gap-4">
                <div className="leftpart3 flex w-full md:w-1/2 text-4xl flex-col items-end  gap-4">
                  <p>03</p>
                  <p className="text-6xl font-black">
                    Q/A <br />& Testing
                  </p>
                  <p className="font-light text-3xl">
                    We get feedback from you, and implement necessary changes.
                  </p>
                  <div className="w-4/5 h-6 rounded-full flex justify-end items-end overflow-hidden bg-white border border-white">
                    <div className="h-full w-full bg-yellow-500 progress3"></div>
                  </div>
                </div>
                <div className="flex md:w-1/2 w-full overflow-hidden justify-center rounded-full">
                  <img src="done.svg" alt="" />
                </div>
              </article>
              <article className="w-full h-fit flex flex-col md:flex-row-reverse text-start font-bold gap-4">
                <div className="leftpart4 flex w-full md:w-1/2 text-4xl flex-col items-start  gap-4">
                  <p>04</p>
                  <p className="text-6xl font-black">
                    Launch <br />& Support
                  </p>
                  <p className="font-light text-3xl">
                    We start by understanding your needs and goals, then create
                    a clear plan to guide the project.
                  </p>
                  <div className="w-4/5 h-6 rounded-full flex justify-start items-end overflow-hidden bg-white border border-white">
                    <div className="h-full w-full bg-yellow-500 progress4"></div>
                  </div>
                </div>
                <div className="flex w-full md:w-1/2 overflow-hidden justify-center rounded-full">
                  <img src="trophy.svg" alt="" />
                </div>
              </article>
            </div>
            <div className="m-8">
              <div
                id="xtitle3"
                className="font-[gotesk] mt-10 h-fit uppercase text-white w-full text-center leading-none text-[11vw] md:text-[7vw]"
              >
                Our Happy Clients
              </div>
              <AnimatedTestimonialsComp />
            </div>
          </div>
        </section>
        <section id="black2" className=" w-full h-fit bg-black py-8">
          <div
            id="xtitle2"
            className="font-[gotesk]  uppercase text-white w-full text-center leading-none text-5xl md:text-[7vw]"
          >
            Let's have a Chat
          </div>
          <div className="w-full min-h-96 mb-20 md:px-16 md:p-14 p-6">
            <p className="font-light text-left md:text-justify text-white tracking-wider text-4xl md:text-6xl my-4 font-[body]">
              Hey Buddy, I am{" "}
              <span>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="your name"
                  className="w-96 focus:outline-none bg-transparent border-b border-white"
                />
                ,
              </span>
              <br />
              Let's grab a virtual coffee and chat things out
              <br />
              Reach me back at{" "}
              <span>
                {" "}
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="your email"
                  className="w-96 focus:outline-none bg-transparent border-b border-white"
                />
              </span>
              <br />
              Here’s what I’m thinking:
              <br />
              <input
                type="text"
                name="name"
                id="name"
                placeholder="your idea / project / problem"
                className="w-3/4 focus:outline-none bg-transparent border-b border-white"
              />
            </p>
            <div className="flex justify-center w-full">
              <button
                className="w-fit font-[gotesk] ml-auto px-6 py-3 text-4xl italic bg-white rounded-full"
                style={{
                  boxShadow: "10px 6px 0px gold",
                }}
              >
                Let's do it
              </button>
            </div>
          </div>
        </section>
      </section>

      <div className="w-full min-h-screen"></div>
    </main>
  );
};

export default Home;

const Lines = () => {
  return (
    <BackgroundLines className="text-[9vw] w-0 h-0 overflow-hidden text-center leading-none tracking-tighter">
      We develop your <br />
      <em className="underline underline-offset-8">little world</em> with{" "}
      <em className=" underline underline-offset-8">
        these <br />
        things in mind
      </em>
    </BackgroundLines>
  );
};
const DATA_LIST = [
  { text: "YOUR ONE STOP SOLUTION FOR ALL YOUR DIGITAL NEEDS" },
  { text: "WE DO 3D - DESIGN - DEVELOPMENT -DEPLOYEMENT " },
  { text: "WE PROVIDES BEAUTIFULLY CRAFTED DIGITAL SOLUTIONS" },
  { text: "WE ARE A TEAM OF EXPERTS IN DIGITAL SOLUTIONS" },
  { text: "WE PROVIDES BEAUTIFULLY CRAFTED DIGITAL SOLUTIONS" },
  { text: "GET THE POWER OF IIT , NIT, IIIT WORKFORCE FOR YOU BUSINESS" },
  { text: "WE REDUCE YOUR COST BY 50% AND INCREASE YOUR VALUE BY 100%" },
];
