import { colors } from "@material-ui/core";
import React from "react";
import { createUseStyles } from "react-jss";

export const stylesButtonMoreInfo = createUseStyles({
  button: {
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    fontFamily: "BrawlStarsInGame",
    border: "none",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    padding: "15px 32px",
    margin: "20px",
    cursor: "pointer",
    "&:hover": {
      color: "#ffe65d",
    },
  },

  buttonPosition: {
    display: "flex",
    justifyContent: "end",
  },
});
