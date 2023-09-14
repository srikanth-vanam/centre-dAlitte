import classes from "./Hero.module.css";
import Button from "../UI/Button/Button";
const Hero = () => {
  return (
    <div className={classes.outer}>
      <div className={classes.img}>
        <div className={classes.heroText}>
          <h1>an NGO for Children</h1>
          <div>
            <Button className={classes.button}>donate</Button>
          </div>
        </div>
      </div>
      <div className={classes.container}>
        <div className={`${classes.card1} ${classes.card}`}>
          <h2>Education</h2>
          <p>
            lorem is the only way out of the box to switch to it when needed on
            the go for
          </p>
          <Button className={classes.btn1}>discover</Button>
        </div>
        <div className={`${classes.card2} ${classes.card}`}>
          <h2>Become a Volunteer</h2>
          <p>Your gift can help change any ones future life</p>
          <Button className={classes.btn2}>Join organization</Button>
        </div>
        <div className={`${classes.card3} ${classes.card}`}>
          <div className={classes.play}></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
