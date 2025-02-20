import React, { useEffect, useRef } from "react";
import Home from "./page/Home";
import Header from "./components/Header";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Layout = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);
  //   useGSAP(() => {
  //     gsap.from("#layout", {
  //       width: "100vw",
  //       height: "100vh",
  //       scale: 0.8,
  //       delay: 1,
  //       overflow: "hidden",
  //     });
  //     gsap.to("#loader", {
  //       delay: 1,
  //       opacity: 0,
  //       height: 0,
  //     });
  //   });

  return (
    <>
      <div className="hidden md:flex cursor pointer-events-none fixed z-50 transition ease-in-out duration-500 bg-center bg-cover">
        <img src="/cursor.svg" alt="" width={80} />
      </div>
      <div
        ref={containerRef}
        data-scroll-container
        id="layout"
        className="max-w-screen-2xl w-full flex flex-col relative h-full z-10 bg-cover bg-no-repeat"
      >
        <div
          className="w-full h-screen bg-cover bg-no-repeat z-0 fixed"
          style={{ backgroundImage: "url(/xs.svg)" }}
        >
          <footer
            id="cntct"
            className="md:w-full w-screen flex flex-col gap-4 h-screen p-4 md:px-16 pt-28"
          >
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-between tracking-wide font-[title] ">
              <div className="flex flex-col max-w-96 gap-4 ">
                <p className="text-2xl">
                  We are your digital design partner in crafting digital
                  products to impact the future, today.
                </p>
                <p className="text-xl">Contact</p>
                <p className="font-light text-base">+91 971 758 3895</p>
                <p className="font-light text-base">hello@crudstudio.com</p>
              </div>
              <div className="flex md:w-1/2 w-full justify-evenly ">
                <div className="flex text-lg flex-col gap-4">
                  <p>Pages</p>
                  <div className="flex text-sm flex-col gap-4 font-light">
                    <p>Home</p>
                    <p>About</p>
                    <p>Services</p>
                    <p>Portfolio</p>
                    <p>Contact</p>
                  </div>
                </div>
                <div className="flex text-lg flex-col gap-4">
                  <p>Services</p>
                  <div className="flex text-sm flex-col gap-4 font-light">
                    <p>Branding</p>
                    <p>UI/UX</p>
                    <p>Web Dev.</p>
                    <p>App Dev.</p>
                    <p>Support</p>
                    <p>Ecomm. Dev.</p>
                  </div>
                </div>
                <div className="flex text-lg flex-col gap-4">
                  <p>Miscs.</p>
                  <div className="flex text-sm flex-col gap-4 font-light">
                    <p>Contact</p>
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Pricings</p>
                  </div>
                </div>
                <div className="flex text-lg flex-col gap-4">
                  <p>Social Media.</p>
                  <div className="flex text-sm flex-col gap-4 font-light">
                    <p>Dribble</p>
                    <p>LinkedIn</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="w-full text-[13vw] font-black text-center">
                CRUD <span className="text-orange-500">STUDIO</span>
              </div>
              <p className="w-full text-center md:-translate-y-8 italic text-xs md:text-3xl">
                Copyright @Crud Studio 2025. All Right Reserved
              </p>
            </div>
          </footer>
        </div>
        <Header />

        <Home />

        <div className="w-full bottom-0 pb-10 fixed flex justify-center items-end z-50">
          <button
            className="p-4 getq hover:p-5 transition-all origin-center  w-fit  bg-gray-50 border border-black text-2xl rounded-full font-[gotesk]"
            style={{
              boxShadow: "10px 10px 0px black",
            }}
          >
            Get a Quote{" "}
            <span className="p-2 bg-yellow-300 rounded-full text-black px-3 ">
              in 2 mins
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Layout;
