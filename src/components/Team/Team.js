import Button from "../UI/Button/Button";
import classes from "./Team.module.css";
const Team = () => {
  return (
    <div id="team" className={classes.container}>
      <div className={classes.content}>
        <h5 className={classes.h5}>The Team</h5>
        <h3>Meet Our Volunteers</h3>
        <div className={classes.main}>
          <div className={classes.card}>
            <img
              src={require("./images/team1-min.jpg")}
              alt="team1"
            />
            <h5>James camaroon</h5>
            <div className={classes.icon}>
              <i class="fa-brands fa-square-instagram"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-square-x-twitter"></i>
              <i class="fa-brands fa-square-whatsapp"></i>
            </div>
          </div>
          <div className={classes.card}>
            <img
              src={require("./images/team2-min.jpg")}
              alt="team2"
            />
            <h5>Rose Darson</h5>
            <div className={classes.icon}>
              <i class="fa-brands fa-square-instagram"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-square-x-twitter"></i>
              <i class="fa-brands fa-square-whatsapp"></i>
            </div>
          </div>
          <div className={classes.card}>
            <img
              src={require("./images/team3-min.jpg")}
              alt="team3"
            />
            <h5>Alan walker</h5>
            <div className={classes.icon}>
              <i class="fa-brands fa-square-instagram"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-square-x-twitter"></i>
              <i class="fa-brands fa-square-whatsapp"></i>
            </div>
          </div>
          <div className={`${classes.card} ${classes.lastCard}`}>
            <div className={classes.i}>
              <i class="fa-solid fa-hand-holding-heart"></i>
            </div>
            <h3>Become a Volunteer</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              temporibus.
            </p>
            <Button>join us today</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
