import React from "react";
import { createUseStyles } from "react-jss";

export const stylesBrawlerList = createUseStyles({
  container: {
    fontFamily: "BrawlStarsExtraBlack",
    display: "flex",
    flexWrap: "wrap",
    gap: 40,
    overflow: "auto",
    justifyContent: "center",
    padding: {
      top: 20,
      bottom: 120,
      left: 20,
      right: 20,
    },
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
});
