import Button from "../UI/Button/Button";
import classes from "./Events.module.css";
const Events = () => {
  return (
    <div id="events" className={classes.container}>
      <div className={classes.content}>
        <h5 className={classes.h5}>Our Events</h5>
        <div className={classes.firstDiv}>
          <h3>Join Upcoming Events and Webinars</h3>
          <Button>more events</Button>
        </div>
        <div className={classes.secondDiv}>
          <div className={classes.left}>
            <img
              src={require("./events-min.jpg")}
              alt="children-showing-victory"
            />
            <div className={classes.leftDate}>
              <h1>30</h1>
              <p>July</p>
            </div>
            <div className="d-flex justify-content-between mb-0">
              <p className="d-flex mb-0">
                Organized by : <p style={{ color: "#f03405" }}> Natasha</p>
              </p>
              <p>
                <i class="fa-regular fa-clock" style={{ color: "#f03405" }}></i>{" "}
                10:00 AM - 10:00 PM, EVERYDAY
              </p>
            </div>
            <hr className="mt-0" />
            <div>
              <h5>Education for Poor Children</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Veniam, ipsum.
              </p>
            </div>
            <div className={classes.leftBtm}>
              <div>
                <i
                  class="fa-solid fa-location-dot"
                  style={{ color: "#f51d05" }}
                ></i>
              </div>
              <p>Dark Sport, San Francisco, CA 9452</p>
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.event}>
              <div className={classes.eventLeft}>
                <div className={classes.date}>
                  <h1>30</h1>
                  <p>July</p>
                </div>
              </div>
              <div className={classes.eventRight}>
                <div className="d-flex pt-3">
                  <p>Organized by : </p>
                  <p style={{ color: "#f03405" }}>David Jones </p>
                </div>
                <div>
                  <h5>Education for Poor Children</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse obcaecati facere
                  </p>
                </div>
              </div>
            </div>
            <hr />

            <div className={classes.event}>
              <div className={classes.eventLeft}>
                <div className={classes.date}>
                  <h1>30</h1>
                  <p>July</p>
                </div>
              </div>
              <div className={classes.eventRight}>
                <div className="d-flex pt-3">
                  <p>Organized by : </p>
                  <p style={{ color: "#f03405" }}>Jake Gibson</p>
                </div>
                <div>
                  <h5>Healthy Food for Growing</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse obcaecati facere
                  </p>
                </div>
              </div>
            </div>
            <hr />

            <div className={classes.event}>
              <div className={classes.eventLeft}>
                <div className={classes.date}>
                  <h1>30</h1>
                  <p>July</p>
                </div>
              </div>
              <div className={classes.eventRight}>
                <div className="d-flex pt-3">
                  <p>Organized by : </p>
                  <p style={{ color: "#f03405" }}>David Jones</p>
                </div>
                <div>
                  <h5>New Clothes Coming</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse obcaecati facere
                  </p>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
