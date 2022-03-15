import React from "react";
import { createUseStyles } from "react-jss";

const Contact = () => {
  const classes = stylesContact();

  return (
    <div className={classes.container}>
      <h1>Daniel Paredes Sánchez</h1>
      <h2>Santa Cruz de Tenerife (2022)</h2>
      <h2>@daniwalls7</h2>
      <h3 className={classes.description}>
        This application is made as a learning method for React technology, in
        which different external elements have been used, such as the API of
        https://brawlapi.com/ and external images for displaying them as
        backgrounds or page covers.
      </h3>
    </div>
  );
};

export default Contact;

const stylesContact = createUseStyles({
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    backgroundColor: "#000",
    color: "#ffe65d",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: "50px",
    boxSizing: "border-box",
    letterSpacing: 2,
    fontFamily: "Sans-serif",
  },

  description: {
    textAlign: "justify",
    width: "50%",
    color: "white",
  },
});
