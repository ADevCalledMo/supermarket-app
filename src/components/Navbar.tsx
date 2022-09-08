import React from "react";
import translate, { changeLanguage } from "../translate";

type NavbarProps = {
  language: string;
  handleLangChange: Function;
};

const Navbar = ({ language, handleLangChange }: NavbarProps) => {
  return (
    <>
      <div>
        <h1>{translate("Supermarket")}</h1>
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
    </>
  );
};

export default Navbar;
