import Slider from "./Slider";
import classes from "./Testi.module.css";
const Testimonial = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h5 className={classes.h5}>Testimonial</h5>
        <h3>What People Say About Us</h3>
        <div className={classes.slider}>
          <Slider />
        </div>
        <div className={classes.results}>
          <div className={classes.result}>
            <h1>200k</h1>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className={classes.result}>
            <h1>99k</h1>
            <p>Lorem, ipsum dolor sit amet consectetur </p>
          </div>
          <div className={classes.result}>
            <h1>20k</h1>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className={classes.result}>
            <h1>10.7k</h1>
            <p>Lorem ipsum dolor sit amet consectetur..</p>
          </div>
        </div>
        <hr className="mb-4" />
        <div className={classes.icon}>
          <i class="fa-solid fa-landmark" style={{ color: "#f22f0d" }}></i>
          <i
            class="fa-solid fa-earth-americas"
            style={{ color: "#f22f0d" }}
          ></i>
          <i class="fa-solid fa-shop" style={{ color: "#f22f0d" }}></i>
          <i class="fa-solid fa-business-time" style={{ color: "#f22f0d" }}></i>
          <i class="fa-solid fa-users" style={{ color: "#f22f0d" }}></i>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
