import React from "react";
import { createUseStyles } from "react-jss";

export const stylesOptions = createUseStyles({
  option: {
    color: "white",
    textAlign: "center",
    textDecoration: "none",
    padding: "14px 16px",
    fontFamily: "BrawlStarsInGame",
    fontSize: "30px",
    "&:hover": {
      // transform: "scale(1.5)",
      color: "#ffe65d",
    },
  },

  myLi: {
    display: "inline",
  },
});
