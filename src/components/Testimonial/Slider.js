import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Card from "./Card/Card";

const Slider = () => {
  const testimonials = [
    {
      src: require("./proof3-min.jpg"),
      h3: "Jhans Clitor",
      h5: "Managing Director",
    },
    {
      src: require("./proof4-min.jpg"),
      h3: "James Ragnar",
      h5: "Managing Director",
    },
    {
      src: require("./proof2-min.jpg"),
      h3: "Lisa Jakson",
      h5: "Managing Director",
    },
  ];
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
