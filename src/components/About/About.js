import classes from "./About.module.css";
import Button from "../UI/Button/Button";
const About = () => {
  return (
    <>
      <h5 className={classes.aboutText}>About Us</h5>
      <div id="about" className={classes.aboutContainer}>
        <div className={classes.about}>
          <h3>Help People,</h3>
          <h3>Our Main Goals</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            ratione consequuntur nemo, illo pariatur, eos laboriosam, dicta
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            ratione consequuntur nemo, illo pariatur, eos laboriosam, dicta
          </p>
          <Button>More about</Button>
        </div>
        <div className={classes.donate}>
          <div className={classes.col}>
            <div className={classes.donateCol}>
              <div className={classes.item}>
                <div className={classes.donateIcon}>
                  <i class="fa-solid fa-circle-check"></i>
                </div>
                <p>Food Donation</p>
              </div>
              <div className={classes.item}>
                <div className={classes.donateIcon}>
                  <i class="fa-solid fa-circle-check"></i>
                </div>
                <p>Money Donation</p>
              </div>
              <div className={classes.item}>
                <div className={classes.donateIcon}>
                  <i class="fa-solid fa-circle-check"></i>
                </div>
                <p>Dress Donation</p>
              </div>
            </div>
            <div className={classes.donateCol}>
              <div className={classes.item}>
                <div className={classes.donateIcon}>
                  <i class="fa-solid fa-circle-check"></i>
                </div>
                <p>Water Supply</p>
              </div>
              <div className={classes.item}>
                <div className={classes.donateIcon}>
                  <i class="fa-solid fa-circle-check"></i>
                </div>
                <p>Education Donation</p>
              </div>
              <div className={classes.item}>
                <div className={classes.donateIcon}>
                  <i class="fa-solid fa-circle-check"></i>
                </div>
                <p>Toys Donation</p>
              </div>
            </div>
          </div>
          <h4>Total Donation</h4>
          <div className={classes.progressBar}>
            <div className={classes.redBar} style={{ width: "80%" }}></div>
          </div>
          <div className={classes.money}>
            <h6>Collection-$8M</h6>
            <h6>Goal-$10M</h6>
          </div>
          <Button>donate now</Button>
        </div>
      </div>
    </>
  );
};

export default About;
