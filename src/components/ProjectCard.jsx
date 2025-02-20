import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const ProjectCard = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;

    // GSAP Scroll Trigger for Parallax
    gsap.to(image, {
      y: 100, // Adjust the vertical movement
      ease: "none",
      scrollTrigger: {
        trigger: image,
        start: "top bottom", // Animation starts when the image enters the viewport
        end: "bottom top", // Animation ends when the image leaves the viewport
        scrub: true, // Smooth scrolling effect
      },
    });
  }, []);
  return (
    <div className="w-full h-[700px] bg-red-300 relative overflow-hidden group">
      <img
        ref={imageRef}
        src="https://imgs.search.brave.com/ZiA5Qh_GYUgaXdNF0S4tjSZdeKhXcmJnI0VUt4giRI8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9zaWxob3VldHRl/LW9mLWEtZ3V5LXdp/dGgtYS1jYXAtYXQt/cmVkLXNreS1zdW5z/ZXQtZnJlZS1pbWFn/ZS5qcGVnP2g9ODAw/JnF1YWxpdHk9ODA"
        alt=""
        className="absolute scale-125 z-0 w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <p className="font-black text-5xl w-full px-10 bottom-28 font-[mson] absolute z-10 text-white transition-transform duration-700 ease-out group-hover:-translate-y-5">
        Happy meal _
      </p>
      <p className="text-lg text-white w-full px-10 bottom-24 absolute z-10 opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100">
        A delightful experience awaits with every bite.
      </p>
      <div className=" duration-700 absolute bottom-8 mx-10 group-hover:opacity-100 px-4 opacity-0 py-3 transition-all  hover:gap-8 ease-in hover:scale-105 gap-4 border-2 w-fit flex items-center border-white text-white rounded-full">
        See Here{" "}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 17.1 15.17"
            className="w-4 -rotate-45"
          >
            <path
              d="m17.1,7.58s-.01-.04-.01-.06c.01-.22-.06-.45-.24-.61L9.23.19c-.31-.27-.78-.24-1.06.07-.27.31-.24.78.07,1.06l6.26,5.52H.75c-.41,0-.75.34-.75.75s.34.75.75.75h13.74l-6.26,5.52c-.31.27-.34.75-.07,1.06.15.17.35.25.56.25.18,0,.35-.06.5-.19l7.62-6.72c.18-.16.25-.39.24-.61,0-.02.01-.04.01-.06Z"
              fill="currentColor"
            ></path>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
