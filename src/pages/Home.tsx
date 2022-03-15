import { url } from "inspector";
import React from "react";
import { createUseStyles } from "react-jss";

const Home = () => {
  const classes = stylesHome();

  return <div className={classes.cover} />;
};

export default Home;

const stylesHome = createUseStyles({
  cover: {
    backgroundImage: "url(https://i.redd.it/24xw5mxdocc21.png)",
    width: "100%",
    height: "100vh",
    fontFamily: "BrawlStarsExtraBlack",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    color: "white",
  },
});
