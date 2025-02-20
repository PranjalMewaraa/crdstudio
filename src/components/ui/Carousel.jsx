import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import navigation styles
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { ThreeDCardDemo } from "../Card";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import icons for buttons

const Carousel = () => {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const images = [
    "https://firebasestorage.googleapis.com/v0/b/crudstudio-6fb0f.appspot.com/o/images%2F-NwLDgR6zAn23Tl-mTff%2FFrame%203.png?alt=media&token=92109220-aa49-41ad-bd2b-48a5fb3cfd18",
    "https://firebasestorage.googleapis.com/v0/b/crudstudio-6fb0f.appspot.com/o/images%2F-NwJwX8Eg0UZy6esrp4I%2FDribbble%20shot%20-%201.png?alt=media&token=2b544c32-4820-4526-a200-b700bac1a04b",
    "https://firebasestorage.googleapis.com/v0/b/crudstudio-6fb0f.appspot.com/o/images%2F-NwJpQjNZB9iRvbz2Mtz%2Fthumbnail?alt=media&token=aee4500e-f6ce-41c9-9f2d-32b341ade8e3",
    "https://cdn.dribbble.com/userupload/16588317/file/original-557d802b4e65b7ff516e3d31c8ecbc34.png?format=webp&resize=640x480&vertical=center",
    "https://firebasestorage.googleapis.com/v0/b/crudstudio-6fb0f.appspot.com/o/images%2F-NwJwX8Eg0UZy6esrp4I%2FDribbble%20shot%20-%201.png?alt=media&token=2b544c32-4820-4526-a200-b700bac1a04b",
    "https://firebasestorage.googleapis.com/v0/b/crudstudio-6fb0f.appspot.com/o/images%2F-NwLDgR6zAn23Tl-mTff%2FFrame%203.png?alt=media&token=92109220-aa49-41ad-bd2b-48a5fb3cfd18",
    "https://firebasestorage.googleapis.com/v0/b/crudstudio-6fb0f.appspot.com/o/images%2F-NwKWnWn_ddKMuSW3OM9%2FFrame%203.png?alt=media&token=af3fa1fa-6d4d-4fcf-9942-c7bfebae7831",
    "https://cdn.dribbble.com/userupload/16588231/file/original-e2e6f0741e5bdd6d476a82f66f031493.png?format=webp&resize=640x480&vertical=center",
    "https://firebasestorage.googleapis.com/v0/b/crudstudio-6fb0f.appspot.com/o/images%2F-NwJYP1hXcrePoubpCfI%2Fthumbnail?alt=media&token=fefcf140-151a-4d11-a2d5-f2ff78399478",
    "https://cdn.dribbble.com/userupload/16588308/file/original-040022daf600356ccb0bc767398b6cbe.png?format=webp&resize=640x480&vertical=center",
    "https://cdn.dribbble.com/userupload/24462903/file/original-73421f2186304e62be0bf1fd29aab64d.jpeg?resize=1504x856&vertical=center",
  ];

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
        className="absolute -left-2 z-10 bg-gray-50 text-gray-800 p-2 rounded-full shadow-md hover:bg-gray-300 hidden md:block"
      >
        <ChevronLeft size={24} />
      </button>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={Math.floor(images.length / 2)}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        allowTouchMove={true} // Ensures touch gestures work
        touchEventsTarget="wrapper" // Forces touch gestures to be active
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <ThreeDCardDemo img={img} alt={`Slide ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Next Button */}
      <button
        ref={nextRef}
        className="absolute -right-2 z-20 bg-gray-50 text-gray-800 p-2 rounded-full shadow-md hover:bg-gray-300 hidden md:block"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default Carousel;
