import React from "react";
import { Compare } from "../components/ui/compare";

export function CompareDemo() {
  return (
    <div className="p-4 mb-36 flex flex-col items-center rounded-3xl  px-4">
      <div
        id="xtitle23"
        className="font-[gotesk] mb-16  uppercase text-white w-full text-center leading-none text-5xl md:text-[7vw]"
      >
        We Redesign Experiences <span className="italic">That</span> Redefine
        Success.
      </div>
      <Compare
        firstImage="/Frame.png"
        secondImage="https://cdn.dribbble.com/userupload/12191388/file/original-45fa754b6d75fb23d0108014ae68a420.png?resize=1200x3155&vertical=center"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className=" w-3/5 mb-4 h-[600px]"
        slideMode="hover"
      />
      <div className="w-3/5 italic text-sm text-white flex justify-between">
        <p>Actual Design</p>
        <p>Our Design</p>
      </div>
    </div>
  );
}
