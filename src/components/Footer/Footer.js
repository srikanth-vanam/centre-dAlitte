import Button from "../UI/Button/Button";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <div className={classes.left}>
          <h5>Subscribe</h5>
          <h2>Newsletter</h2>
          <p>
            Sign Up Our Monthly Newsletter to get The latest news, events,
            Volunteer Opportunities
          </p>
          <div className={classes.form}>
            <input type="text" placeholder="Enter Your Email Address" />
            <Button>send</Button>
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.overlay}></div>
          <div className={classes.content}>
            <h5>Recent Blog</h5>
            <h2>Take Look At Recent Blog</h2>
            <h2>Posts</h2>
            <Button>see our blogs</Button>
          </div>
        </div>
      </div>
      <div className={classes.bottom}>
        <div className={classes.bottomContent}>
          <div className={classes.btmLeft}>
            <div className={classes.logo}>
              <img src={require("./logo-min.png")} alt="centre-damitie-logo" />
              <h3 style={{ color: "white" }}>Center d'Amitie</h3>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
              id aliquam atque vel placeat distinctio veritatis ducimus aut
              dolorum accusamus?
            </p>
            <div className={classes.icons}>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-x-twitter"></i>
              <i class="fa-brands fa-whatsapp"></i>
            </div>
          </div>
          <div className={classes.btmRight}>
            <div className={classes.list}>
              <h4>Get Involved</h4>
              <ul>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#volunteer">Volunteer</a>
                </li>
                <li>
                  <a href="#team">Team</a>
                </li>
                <li>
                  <a href="#causes">Causes</a>
                </li>
              </ul>
            </div>
            <div className={classes.list}>
              <h4>Utility Page</h4>
              <ul>
                <li>Licenses</li>
                <li>Passport</li>
                <li>Style Guide</li>
                <li>404 Page</li>
              </ul>
            </div>
            <div className={classes.list}>
              <h4>Contact</h4>
              <p>95 App Street Avenue Colorado NEW 96208 canada</p>
              <div>
                <p>help need@humanity.com 222 888 0000</p>
              </div>
            </div>
          </div>
        </div>
        <p className={classes.footerText}>
          Copyright <i class="fa-regular fa-copyright"></i> Center dAmitie |
          Designed by Srikanth . Powered By React
        </p>
      </div>
    </div>
  );
};

export default Footer;
