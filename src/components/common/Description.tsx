import React from "react";
import { Interface } from "readline";
import { stylesModal } from "../modal/Modal.jss";

interface IDescriptionProps {
  text: string;
  view: string;
}

const Description = (props: IDescriptionProps) => {
  const classes = stylesModal();

  return (
    <div className={props.view === "modal" ? classes.body : classes.pannelBody}>
      {props.text}
    </div>
  );
};

export default Description;
