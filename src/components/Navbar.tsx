import React from "react";
import translate, { changeLanguage } from "../translate";
import classes from "./Navbar.module.scss";

type NavbarProps = {
  language: string;
  handleLangChange: Function;
};

const Navbar = ({ language, handleLangChange }: NavbarProps) => {
  return (
    <>
      <header className={classes.Navbar}>
        <div className={classes.Navbar__content}>
          <h2 className={classes.Navbar__content__logo}>
            {translate("Supermarket")}
          </h2>

          <div className={classes.header__content__nav}>
            <ul>
              <li>
                <a href="/">{translate("Home")}</a>
              </li>
              <li>
                <a href="/">{translate("About")}</a>
              </li>
            </ul>
          </div>
          <div>
            <button
              onClick={() => {
                handleLangChange("English");
                changeLanguage("English");
              }}
              disabled={language === "English"}
            >
              <span aria-label="en-flag" role="img">
                🇬🇧
              </span>
              English
            </button>
            <button
              onClick={() => {
                handleLangChange("Japanese");
                changeLanguage("Japanese");
              }}
              disabled={language === "Japanese"}
            >
              <span aria-label="jp-flag" role="img">
                🇯🇵
              </span>
              日本語
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
