import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import navigation styles
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { ThreeDCardDemo } from "../Card";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import icons for buttons
import imageGallery from "../../libs/projects";
import { ThreeDCardDemo2 } from "../Card2";

const Carousel = () => {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (swiperRef.current) {
        swiperRef.current.params.navigation.prevEl = prevRef.current;
        swiperRef.current.params.navigation.nextEl = nextRef.current;
        swiperRef.current.navigation.init();
        swiperRef.current.navigation.update();
      }
    }, 100);
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full">
      {/* Previous Button */}
      <button
        ref={prevRef}
        className="absolute -left-2 z-50 bg-gray-50 text-gray-800 p-2 rounded-full shadow-md hover:bg-gray-300 hidden md:block"
      >
        <ChevronLeft size={24} />
      </button>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={Math.floor(imageGallery.length / 2)}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        allowTouchMove={true}
        touchEventsTarget="wrapper"
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Track active index
      >
        {imageGallery.map((img, index) => (
          <SwiperSlide key={index}>
            {index === activeIndex ? (
              <ThreeDCardDemo data={img} alt={`Slide ${index}`} />
            ) : (
              <ThreeDCardDemo2 data={img} alt={`Slide ${index}`} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Next Button */}
      <button
        ref={nextRef}
        className="absolute -right-2 z-50 bg-gray-50 text-gray-800 p-2 rounded-full shadow-md hover:bg-gray-300 hidden md:block"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default Carousel;
