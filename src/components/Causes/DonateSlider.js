import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import DonateCard from "./DonateCard/DonateCard";
function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "orange" }}
      onClick={onClick}
    />
  );
}
const DonateSlider = () => {
  var settings = {
    dots: false,
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
  const donateItems = [
    {
      id: "one",
      price: "10000",
      src: require("./child1-min.jpg"),
    },
    {
      id: "two",
      price: "18000",
      src: require("./child2-min.jpg"),
    },
    {
      id: "three",
      price: "8000",
      src: require("./child3-min.jpg"),
    },
    {
      id: "four",
      price: "9000",
      src: require("./child4-min.jpg"),
    },
    // {
    //   id: "oneone",
    //   price: "10000",
    //   src: require("./child1.jpg"),
    // },
    // {
    //   id: "twotwo",
    //   price: "18000",
    //   src: require("./child2.jpg"),
    // },
    // {
    //   id: "threethree",
    //   price: "8000",
    //   src: require("./child3.jpg"),
    // },
    // {
    //   id: "fourfour",
    //   price: "9000",
    //   src: require("./child4.jpg"),
    // },
  ];
  return (
    <>
      <div className="mt-5">
        <Slider {...settings}>
            {donateItems.map((item)=>(
                <DonateCard price={item.price} src={item.src} key={item.id}/>
            ))}
        </Slider>
      </div>
    </>
  );
};

export default DonateSlider;
