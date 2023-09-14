import Button from "../UI/Button/Button";
import classes from "./Projects.module.css";
const FeaturedProjects = () => {
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <h5>What we did</h5>
        <h3>Featured Projects</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          maiores accusantium facere similique saepe est officiis doloribus
          fugiat tempore molestiae!
        </p>
        <Button>more project</Button>
      </div>
      <div className={classes.card1}></div>
      <div className={classes.card2}></div>
      <div className={classes.card3}></div>
    </div>
  );
};

export default FeaturedProjects;
