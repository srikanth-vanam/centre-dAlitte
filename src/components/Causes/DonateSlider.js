import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import DonateCard from "./DonateCard/DonateCard";
import { useMemo } from "react";
function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        border: "2px solid black",
        borderRadius: "50px",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
      onClick={onClick}
    />
  );
}
const DonateSlider = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const donateItems = useMemo(
    () => [
      {
        id: "one",
        price: "10000",
        src: require("./images/jpeg-optimizer_child1.jpg"),
      },
      {
        id: "two",
        price: "18000",
        src: require("./images/jpeg-optimizer_child2.jpg"),
      },
      {
        id: "three",
        price: "8000",
        src: require("./images/jpeg-optimizer_child3.jpg"),
      },
      {
        id: "four",
        price: "9000",
        src: require("./images/jpeg-optimizer_child4.jpg"),
      },
    ],
    []
  );
  return (
    <>
      <div className="mt-5">
        <Slider {...settings}>
          {donateItems.map((item) => (
            <DonateCard price={item.price} src={item.src} key={item.id} />
          ))}
          {/* <DonateCard price={"18000"} src={require("./child2-min.jpg")} key={"two"} />
            <DonateCard price={"8000"} src={require("./child3-min.jpg")} key={"three"} />
            <DonateCard price={"9000"} src={require("./child4-min.jpg")} key={"four"} /> */}
        </Slider>
      </div>
    </>
  );
};

export default DonateSlider;
