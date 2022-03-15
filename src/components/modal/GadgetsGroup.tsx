import React from "react";
import { IGadget } from "../BrawlerList/BrawlersList";
import { Gadget } from "./GadgetItem";

export interface IGadgetsProps {
  list: IGadget[];
  title: string;
  styles: any;
}

const GadgetsList = (list: IGadget[]) => {
  return list.map((item, index) => {
    return <Gadget gadget={item} key={index} />;
  });
};

const GadgetsGroup = (props: IGadgetsProps) => {
  return (
    <div className={props.styles.gadgetColumn}>
      {props.list != undefined && props.list.length >= 1 && (
        <>
          <h2 className={props.styles.subTitle}>{props.title}</h2>
          {GadgetsList(props.list)}
        </>
      )}
    </div>
  );
};

export default GadgetsGroup;
