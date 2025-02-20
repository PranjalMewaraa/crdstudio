import React from "react";
import Button from "./Button";

const ServiceCardMob = ({ data }) => {
  return (
    <article
      id={`card`}
      className={` w-full md:w-[95%] mb-8 md:mb-24 bg-white h-full rounded-lg md:rounded-[60px] p-8 relative md:p-16 flex gap-8 card${data.id}`}
    >
      <div className="w-full md:w-1/2 h-fit md:h-full flex flex-col z-50  justify-evenly gap-4 md:gap-8">
        <p className="text-3xl md:text-[6rem] stroke-black stroke-2 leading-none font-[body]">
          {data.name}
        </p>
        <div className="flex w-full flex-wrap gap-1 md:gap-4 items-center">
          {data.tool.map((item) => {
            return <Tag tag={item} />;
          })}
        </div>
        <p className="text-2xl font-[title]">{data.desc}</p>
        <Button btnText={data.btnText} />
      </div>
      <div className="w-20 hidden md:flex md:w-1/2 max-h-[30rem] h-fit rounded-tr-[150px] overflow-hidden">
        <video
          src="https://kota-content.b-cdn.net/app/uploads/2024/02/homepage.mp4"
          autoPlay
          muted
        ></video>
      </div>
    </article>
  );
};
const Tag = (props) => {
  return (
    <div className=" px-2 md:px-4 border border-black py-2 text-sm md:text-base md:py-3 bg-transparent hover:bg-black text-black hover:text-white text-nowrap rounded-full">
      {props.tag}
    </div>
  );
};

export default ServiceCardMob;
