import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function ThreeDCardDemo2({ data }) {
  const [hovered, setHovered] = useState(false);

  return (
    <CardContainer className="inter-var">
      <CardBody
        className="bg-gray-50 relative group/card transition-transform duration-300 ease-out dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border"
        style={{
          willChange: "transform, box-shadow",
          transform: hovered ? "scale(1.1)" : "scale(1)",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <CardItem
          translateZ={hovered ? 50 : 0}
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {data.name}
        </CardItem>
        <CardItem
          as="p"
          translateZ={hovered ? 60 : 0}
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {data.desc}
        </CardItem>
        <CardItem translateZ={hovered ? 70 : 0} className="w-full mt-4">
          <img
            src={data.img}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl transition-transform duration-300 ease-out"
            alt={data.img}
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={hovered ? 40 : 0}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white transition-opacity duration-300"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={hovered ? 40 : 0}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold transition-transform duration-300 ease-out"
          >
            {data.btnText}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
