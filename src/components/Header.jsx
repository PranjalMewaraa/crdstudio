import gsap from "gsap";
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const upperRef = useRef(null);
  const lowerRef = useRef(null);
  const containerRef = useRef(null);
  const bgnavRef = useRef(null);

  const handleNavigation = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      // Animate hamburger to X (open state)
      gsap.to(upperRef.current, {
        rotation: 45,
        y: 6,
        transformOrigin: "center",
        duration: 0.3,
      });
      gsap.to(lowerRef.current, {
        rotation: -45,
        y: -6,
        transformOrigin: "center",
        duration: 0.3,
      });

      // Animate background appearing
      gsap.to(bgnavRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      // Animate X back to hamburger (close state)
      gsap.to(upperRef.current, { rotation: 0, y: 0, duration: 0.3 });
      gsap.to(lowerRef.current, { rotation: 0, y: 0, duration: 0.3 });

      // Animate background disappearing
      gsap.to(bgnavRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.3,
        ease: "power2.in",
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
          className="rounded-full border-black ham border-2 w-12 absolute top-0 right-0 z-50  h-12 flex flex-col justify-center gap-2 px-2 cursor-pointer"
        >
          <span
            ref={upperRef}
            id="upperd"
            className="w-full bg-black hamline h-[3px] origin-top-left"
          ></span>
          <span
            ref={lowerRef}
            id="lowerd"
            className="w-full bg-black hamline h-[3px]"
          ></span>
        </div>

        {/* Background Navigation */}
        <div
          ref={bgnavRef}
          className="absolute w-96 h-96 -right-2 -top-2 rounded-3xl z-0 bg-white bgnav px-8"
          style={{ opacity: 0, scale: 0.9 }} // Initial state (hidden)
        ></div>
      </div>
    </header>
  );
};

export default Header;
