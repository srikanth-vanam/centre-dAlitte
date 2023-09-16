import Button from "../UI/Button/Button";
import classes from "./Contact.module.css";
const Contact = () => {
  return (
    <div className={classes.container}>
      <div className={classes.bg1}></div>
      <div className={classes.bg2}></div>
      <div className={classes.content}>
        <div className={classes.left}>
          <div className={classes.top}>
            <h5 className={classes.h5}>contact us</h5>
            <h3>You are about to help who are in need, lend them your hand</h3>
            <p className="mb-4 w-75">
              Send us a message and we'll get your questions answered as soon as
              possible
            </p>
            <div className={classes.buttons}>
              <Button className={classes.button}>Find an agent</Button>
              <Button className={classes.number}>
                818 929 3844
                <div className={classes.icon}>
                  <i class="fa-solid fa-phone" style={{ color: "white" }}></i>
                </div>
              </Button>
            </div>
          </div>
          <div className={classes.bottom}>
            <div>
              <h5>General inquiries</h5>
              <p>
                Reach us at <a href="#">info@centredamitie.com</a>
                <br />
                and we will get back to you asap
              </p>
            </div>
            <div>
              <h5>Want to volunteer?</h5>
              <p>
                visit our home page or send us an
                <br />
                email at <a href="#">volunteer@centredamitie.com</a>
              </p>
            </div>
            <div className={classes.follow}>
              <h5>Follow us </h5>
              <div className={classes.logos}>
                <i class="fa-brands fa-square-instagram"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-square-x-twitter"></i>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.right}>
          <form>
            <input type="text" placeholder="First Name*" />
            <input type="text" placeholder="Last Name*" />
            <input type="text" placeholder="Email address*" />
            <input type="text" placeholder="Phone number*" />
            <input type="text" placeholder="Best time to contact you?" />
            <input
              type="text"
              placeholder="What's your preferred method of contact?"
            />
            <textarea
              cols="30"
              rows="7"
              placeholder="Do you have any additional information?"
            ></textarea>
            <Button>Submit your message</Button>
            <p>
              check out our <a href="#">Privacy Policy</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
