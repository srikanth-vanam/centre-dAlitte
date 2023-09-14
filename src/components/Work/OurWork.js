import classes from "./Ourwork.module.css";
const OurWork = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.content}>
          <h5>What we do</h5>
          <h3>We do it for People in Need</h3>
          <div className={classes.main}>
            <div className={classes.row}>
              <div className={classes.card}>
                <div className={classes.icon}>
                  <i class="fa-solid fa-pills" style={{ color: "#d1640a" }}></i>
                </div>
                <h4>Medicine Help</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Velit perspiciatis hic quidem ducimus sit praesentium.
                </p>
              </div>
              <div className={classes.card}>
                <div className={classes.icon}>
                  <i
                    class="fa-solid fa-hand-holding-droplet"
                    style={{ color: "#e62f0f" }}
                  ></i>
                </div>
                <h4>Water Delivery</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Velit perspiciatis hic quidem ducimus sit praesentium.
                </p>
              </div>
              <div className={classes.card}>
                <div className={classes.icon}>
                  <i
                    class="fa-solid fa-hands-holding-child"
                    style={{ color: "#ee6820" }}
                  ></i>
                </div>
                <h4>We Care About</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Velit perspiciatis hic quidem ducimus sit praesentium.
                </p>
              </div>
            </div>
            <div className={classes.row}>
              <div className={classes.card}>
                <div className={classes.icon}>
                  <i
                    class="fa-solid fa-bowl-food"
                    style={{ color: "#d32b0d" }}
                  ></i>
                </div>
                <h4>food Delivery</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Velit perspiciatis hic quidem ducimus sit praesentium.
                </p>
              </div>
              <div className={classes.card}>
                <div className={classes.icon}>
                  <i class="fa-solid fa-globe" style={{ color: "#d32b0d" }}></i>
                </div>
                <h4>Spread The World</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Velit perspiciatis hic quidem ducimus sit praesentium.
                </p>
              </div>
              <div className={classes.card}>
                <div className={classes.icon}>
                  <i
                    class="fa-solid fa-laptop-file"
                    style={{ color: "#d32b0d" }}
                  ></i>
                </div>
                <h4>Learn Education</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Velit perspiciatis hic quidem ducimus sit praesentium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurWork;
