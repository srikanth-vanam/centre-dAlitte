import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Card from "./Card/Card";
import { useMemo } from "react";

const Slider = () => {
  const testimonials = useMemo(
    () => [
      {
        src: require("./images/jpeg-optimizer_test1.jpg"),
        h3: "Hana Clitor",
        h5: "Managing Director",
      },
      {
        src: require("./images/jpeg-optimizer_test3.jpg"),
        h3: "James Ragnar",
        h5: "Managing Director",
      },
      {
        src: require("./images/jpeg-optimizer_test2.jpg"),
        h3: "Lisa Jakson",
        h5: "Managing Director",
      },
    ],
    []
  );
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      //   scrollbar={{ draggable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
    >
      {testimonials.map((proof) => (
        <SwiperSlide>
          <Card item={proof} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
