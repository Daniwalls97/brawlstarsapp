import React from "react";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { stylesOptions } from "./Options.jss";

interface ITitleProps {
  text: string;
  link: string;
}

export const OptionList = (props: ITitleProps) => {
  const classes = stylesOptions();

  return (
    // <li className={classes.myLi}>
    <Link to={props.link} className={classes.option}>
      {props.text}
    </Link>
    //</li>
  );
};
