import React from "react";
import { Link } from "react-router-dom";
import { stylesOptions } from "./Options.jss";

// import Logo from "../assets/logo.png";

export const OptionLogo = () => {
  const classes = stylesOptions();

  return (
    <li className={classes.myLi}>
      <img
        src="https://vignette.wikia.nocookie.net/brawlstars/images/c/c9/Logo.png/revision/latest?cb=20170621183337"
        width="60px"
        style={{
          margin: "20px 0px 20px 20px",
        }}
      />
    </li>
  );
};
