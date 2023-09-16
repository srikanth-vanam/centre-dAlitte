import { NavLink } from "react-router-dom/cjs/react-router-dom";
import classes from "./Header.module.css";
import Button from "../UI/Button/Button";
const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <navbar className={classes.navbar}>
          <nav className={classes.nav}>
            <div className={classes.logo}>
              <img src={require('./centre-damitié-logo-min.png')} alt="Logo of Center dAmitie" />
            </div>
            <div>
              <ul className={classes.ul}>
                <li>
                  <a href="#about" className={classes.navlink}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#events" className={classes.navlink}>
                    Events
                  </a>
                </li>
                <li>
                  <NavLink to="/contact" className={classes.navlink}>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <Button className={classes.button}>donate</Button>
            </div>
          </nav>
        </navbar>
      </header>
    </>
  );
};

export default Header;
