import React from "react";
import { createUseStyles } from "react-jss";
import { IGadget } from "../BrawlerList/BrawlersList";

export interface IGadgetProps {
  gadget: IGadget;
}

export const Gadget = (props: IGadgetProps) => {
  const classes = gadgetItemStyles();

  return (
    <div className={classes.container}>
      {props.gadget && (
        <img className={classes.img} src={props.gadget.imageUrl}></img>
      )}
      <div className={classes.text}>
        {props.gadget && <h2 className={classes.title}>{props.gadget.name}</h2>}
        {props.gadget && (
          <p
            className={classes.parragrapgh}
            dangerouslySetInnerHTML={{ __html: props.gadget.description }}
          ></p>
        )}
      </div>
    </div>
  );
};

const gadgetItemStyles = createUseStyles({
  container: {
    paddingLeft: "20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    fontFamily: "BrawlStarsInGame",
    fontSize: "25px",
    "@media (max-width: 400px)": {
      fontSize: "20px",
    },
  },
  img: {
    height: "70px",
    minHeight: "70px",
    maxHeight: "70px",
    width: "70px",
    minWidth: "70px",
  },
  parragrapgh: {
    fontSize: "20px",
    "@media (max-width: 400px)": {
      fontSize: "15px",
    },
  },
  text: {
    padding: "10px",
    marginLeft: "10px",
  },
});
