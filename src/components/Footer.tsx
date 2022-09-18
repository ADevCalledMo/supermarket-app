import React from "react";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className={classes.footer__flex}>
        <div className={classes.footer__column}>
          <h3>Supermarket</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta,
            veritatis.
          </p>
        </div>
        <div className={classes.footer__column}></div>
        <div className={classes.footer__column}>
          <h3>Title</h3>
        </div>
        <div className={classes.footer__column}>
          <h3>Title</h3>
        </div>
        <div className={classes.footer__column}>
          <h3>Title</h3>
        </div>
        <div className={classes.footer__column}>
          <h3>Title</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
