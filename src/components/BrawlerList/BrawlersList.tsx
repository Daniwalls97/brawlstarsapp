import React from "react";
import { Link } from "react-router-dom";

import { Card } from "@nextui-org/react";
import { BrawlerCard } from "../BrawlerCard/BrawlerCard";
import { createUseStyles } from "react-jss";
import { stylesBrawlerList } from "./BrawlerList.jss";
import { useSelector } from "react-redux";

export interface IBrawlerList {
  list: IBrawler[];
  panelEvent: any;
  modalEvent: any;
}

export interface IBrawler {
  id: number;
  avatarId: number;
  name: string;
  hash: string;
  path: string;
  released: boolean;
  version: number;
  link: string;
  imageUrl: string;
  imageUrl2: string;
  imageUrl3: string;
  description: string;
  rarity: IRarity;
  starPowers: IGadget[];
  gadgets: IGadget[];
}

export interface IGadget {
  id: number;
  name: string;
  path: string;
  version: number;
  description: string;
  imageUrl: string;
  released: boolean;
}

export interface IRarity {
  id: number;
  name: string;
  color: string;
}

export const BrawlersList = (props: IBrawlerList) => {
  const classes = stylesBrawlerList();

  return (
    <div className={classes.container}>
      {props.list.map((brawler, index) => (
        <BrawlerCard
          brawler={brawler}
          event={props.panelEvent}
          eventModal={props.modalEvent}
          key={index}
        />
      ))}
    </div>
  );
};
