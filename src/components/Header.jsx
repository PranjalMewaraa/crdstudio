import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const upperRef = useRef(null);
  const lowerRef = useRef(null);
  const containerRef = useRef(null);
  const bgnavRef = useRef(null);
  const menuItems = [
    { title: "Home", route: "/home" },
    { title: "Work", route: "/work" },
    { title: "About Us", route: "/about" },
    { title: "Contact", route: "/contact" },
    { title: "Pricings", route: "/pricing" },
  ];

  const handleNavigation = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      // Animate hamburger to X (open state)
      gsap.to(upperRef.current, {
        rotation: 45,
        y: 6,
        backgroundColor: "#fff",
        transformOrigin: "center",
        duration: 0.3,
      });
      gsap.to(lowerRef.current, {
        rotation: -45,
        y: -6,
        transformOrigin: "center",
        backgroundColor: "#fff",
        duration: 0.3,
      });

      // Animate background appearing from top-right corner
      gsap.fromTo(
        bgnavRef.current,
        {
          opacity: 0,
          scaleX: 0.3,
          scaleY: 0.3,
          transformOrigin: "100% 0%", // Expand from top-right
          clipPath: "circle(0% at 100% 0%)",
        },
        {
          opacity: 1,
          scaleX: 1,
          scaleY: 1,
          clipPath: "circle(150% at 100% 0%)", // Expands outward from top-right
          duration: 0.6,
          ease: "power4.out",
        }
      );
    } else {
      // Animate X back to hamburger (close state)
      gsap.to(upperRef.current, {
        rotation: 0,
        y: 0,
        duration: 0.3,
        backgroundColor: "#000",
      });
      gsap.to(lowerRef.current, {
        rotation: 0,
        y: 0,
        duration: 0.3,
        backgroundColor: "#000",
      });

      // Animate background disappearing to top-right corner
      gsap.to(bgnavRef.current, {
        opacity: 0,
        scaleX: 0.3,
        scaleY: 0.3,
        transformOrigin: "100% 0%", // Collapse towards top-right
        clipPath: "circle(0% at 100% 0%)",
        duration: 0.4,
        ease: "power4.in",
      });
    }
  };

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from("header", {
      y: -80,
      delay: 1.2,
      duration: 1,
      ease: "power4.in",
    });

    gsap.to(".hamline", {
      scrollTrigger: {
        trigger: "#black",
        start: "top top",
        end: "bottom 15%",
        // Change 'bottom 10%' to 'bottom top' for a cleaner transition
        toggleActions: "play reset resume reverse", // R// Reverse on exit
      },
      backgroundColor: "#fff",
    });

    gsap.to(".ham", {
      scrollTrigger: {
        trigger: "#black",
        start: "top 10%",
        end: "bottom 15%",

        toggleActions: "play reset resume reverse", // Reverse on exit// Ensures it reverts when exiting
      },
      borderColor: "#fff",
    });

    gsap.to("#logo", {
      scrollTrigger: {
        trigger: "#black",
        start: "top 10%",
        end: "bottom 10%",
        toggleActions: "play reset resume reverse", //
      },
      display: "none",
      opacity: 0,
    });

    gsap.to("#logow", {
      scrollTrigger: {
        trigger: "#black",
        start: "top 10%",
        end: "bottom 10%",
        toggleActions: "play reset resume reverse", //
      },
      opacity: 1,
      display: "flex",
    });
  });

  return (
    <header className="h-24 fixed px-8 md:px-6 w-screen md:w-full py-6 flex justify-between z-50 ">
      <div className="flex items-center gap-12 font-light">
        <div className="relative h-full">
          <img
            id="logo"
            src="/assets/crd.svg"
            alt=""
            className="h-full  z-10"
          />
          <img
            id="logow"
            src="/assets/crdwhite.svg"
            alt=""
            className="hidden h-full  z-20"
          />
        </div>
        <p id="logo" className="uppercase text-sm md:flex hidden">
          Beautifuly creating <br />
          <span className="flex">
            {" "}
            <span className="w-6 flex h-4"></span> digital experiences
          </span>
        </p>
      </div>
      <div className="relative">
        {/* Hamburger Menu */}
        <div
          onClick={handleNavigation}
          ref={containerRef}
          className="rounded border-black ham borde w-10 absolute top-0 right-0 z-50  h-10 flex flex-col justify-center gap-2 px-2 cursor-pointer"
        >
          <span
            ref={upperRef}
            id="upperd"
            className="w-full bg-black hamline h-[3px] origin-top-left"
          ></span>
          <span
            ref={lowerRef}
            id="lowerd"
            className="w-full bg-black hamline h-[3px] origin-bottom-left"
          ></span>
        </div>

        {/* Background Navigation */}
        <div
          ref={bgnavRef}
          className="absolute w-96 min-h-[700px] h-fit -right-2 -top-2 text-white z-0 bg-[#3750E5] bgnav px-8"
          style={{ opacity: 0, scale: 0.9 }} // Initial state (hidden)
        >
          <div className="my-24">
            <ul className="w-full h-fit flex flex-col font-light">
              {menuItems.map((item, idx) => {
                return (
                  <li
                    className={`py-4 w-full flex gap-8 hover:gap-6 transition-all ease-out duration-200 items-center  px-4 border-t border-slate-300 text-xl ${
                      idx === menuItems.length - 1 ? "border-b" : ""
                    }`}
                  >
                    <span className="font-[title] ">{idx + 1}</span>{" "}
                    <span id={item.title} className="text-3xl font-light">
                      {item.title}
                    </span>
                  </li>
                );
              })}
            </ul>
            <div className="flex w-full my-8 flex-col gap-2">
              <AnimatedButton2>Start a Project</AnimatedButton2>
              <div className="flex gap-2">
                <AnimatedButton2>Schedule a Call</AnimatedButton2>
                <AnimatedButton2>Design Profile</AnimatedButton2>
              </div>
            </div>
          </div>
          <p className="text-xs w-full py-2 text-center">CrudStudio | 2025</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
export function AnimatedButton() {
  const buttonRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const bg = bgRef.current;

    gsap.set(bg, { scaleX: 0, transformOrigin: "left" });

    button.addEventListener("mouseenter", () => {
      gsap.to(bg, { scaleX: 1, duration: 0.4, ease: "power2.out" });
    });

    button.addEventListener("mouseleave", () => {
      gsap.to(bg, { scaleX: 0, duration: 0.4, ease: "power2.out" });
    });
  }, []);

  return (
    <button
      ref={buttonRef}
      className="relative w-full border-white p-4 text-white border overflow-hidden"
    >
      <span
        ref={bgRef}
        className="absolute inset-0 bg-blend-difference opacity-50 bg-white"
      ></span>
      <span className="relative z-10 text-white">Start a Project</span>
    </button>
  );
}
export function AnimatedButton2({ children }) {
  const buttonRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const bg = bgRef.current;

    const tl = gsap.timeline({ paused: true });

    tl.to(bg, {
      x: "100%",
      duration: 0.5,
      ease: "power2.out",
    }).to(bg, {
      x: "-100%",
      duration: 0.5,
      ease: "power2.in",
    });

    button.addEventListener("mouseenter", () => tl.play(0));
  }, []);

  return (
    <div className="relative w-full inline-block overflow-hidden">
      <div
        ref={bgRef}
        className="absolute top-0  left-0 w-full h-full opacity-60 bg-white"
        style={{ transform: "translateX(-100%)" }}
      ></div>
      <button
        ref={buttonRef}
        className="relative w-full border-white p-4 border text-white z-10 overflow-hidden"
      >
        {children}
      </button>
    </div>
  );
}
