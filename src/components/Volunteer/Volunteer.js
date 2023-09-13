import Button from "../UI/Button/Button";
import classes from "./Volunteer.module.css";
const Volunteer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.overlay}></div>
      <div className={classes.content}>
        <div className={classes.left}>
          <h5>Join with Us</h5>
          <h2>Join with Humanity to Give Education For Poor Children</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            voluptatem exercitationem inventore laboriosam. Earum aliquid enim
            quaerat debitis natus nisi velit quos voluptates doloremque,
            perferendis dolorum iure quae distinctio nobis.
          </p>
          <div className={classes.img}>
            <img src={require("./volunteer2.jpg")} alt="" />
          </div>
          <Button>DONATE NOW</Button>
        </div>
        <div className={classes.right}>
          <h2>Become A Voulnteer</h2>
          <form>
            <input type="text" placeholder="FullName*" />
            <input type="email" placeholder="Email Address*" />
            <input type="text" placeholder="Phone Number*" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="4"
              placeholder="Message*"
            ></textarea>
            <Button>submit now</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
