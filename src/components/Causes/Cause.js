import classes from "./Cause.module.css";
import Button from "../UI/Button/Button";
import DonateSlider from "./DonateSlider";
const Cause = () => {
  return (
    <>
      <div id="causes"  className={classes.bg}>
        <div className={classes.bgbody}>
          <h5>Our Causes</h5>
          <div className={classes.top}>
            <h3>You can help lots of people by donate something.</h3>
            <Button>more causes</Button>
          </div>
        </div>
        <div className={classes.slider}>
          <DonateSlider />
        </div>
      </div>
    </>
  );
};

export default Cause;
