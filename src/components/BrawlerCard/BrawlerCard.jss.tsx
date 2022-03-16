import React from "react";
import { createUseStyles } from "react-jss";

export const stylesBrawlerCard = createUseStyles({
  container: {
    fontFamily: "BrawlStarsInGame",
    padding: "10px",
    borderRadius: "5%",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.1)",
      backgroundColor: "#ffdf00",
    },
    height: "fit-content",
    flex: "0 0 10%",
    minWidth: 120,
    "@media (min-width: 1000px)": {
      minWidth: "200px",
    },
    "@media (min-width: 2000px)": {
      maxWidth: "200px",
    },
    // boxShadow: 4px 3px 8px 1px #969696;
    // -webkit-box-shadow: 4px 3px 8px 1px #969696;
  },

  imgBrawl: {
    borderRadius: "5%",
    width: "100%",
  },

  titleCard: {
    fontFamily: "BrawlStarsExtraBlack",
    fontSize: "30px",
    textAlign: "center",
  },

  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      transform: "scale(1.5)",
    },
  },
});
