import React from "react";
import { createUseStyles } from "react-jss";

const BrawlStats = () => {
  const classes = stylesBrawlStats();

  return (
    <iframe
      className={classes.myFullIFrame}
      src="https://brawlstats.com/events"
    ></iframe>
  );
};

export default BrawlStats;

const stylesBrawlStats = createUseStyles({
  myFullIFrame: {
    height: "100vh",
    width: "100%",
  },
});
