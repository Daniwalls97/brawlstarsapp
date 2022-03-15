import React from "react";
import { createUseStyles } from "react-jss";
import { useDispatch, useSelector } from "react-redux";
import { GetAction } from "../../redux/BrawlerActions";
import store from "../../redux/BrawlerStore";
// import { setStoredBrawler } from "../../redux/BrawlerStore";
import { IBrawler } from "../BrawlerList/BrawlersList";
import { stylesBrawlerCard } from "./BrawlerCard.jss";

interface IBrawlerCard {
  brawler: IBrawler;
  event: any;
  eventModal: any;
}

export const OptionColor = (type: string) => {
  switch (type) {
    case "1":
      return "linear-gradient(to right, #b9eaff 10%, #b9eaff 100%)";
    case "2":
      return "linear-gradient(to right, #68fd58 10%, #68fd58 100%)";
    case "3":
      return "linear-gradient(to right, #5ab3ff 10%, #5ab3ff 100%)";
    case "4":
      return "linear-gradient(to right, #d850ff 10%, #d850ff 100%)";
    case "5":
      return "linear-gradient(to right, #fe5e72 10%, #fe5e72 100%)";
    case "6":
      return "linear-gradient(to right, #fff11e 0%, #fff11e 100%)";
    case "7":
      return "linear-gradient(to right, #D850FF 10%, #FE5E72 47%, #F88F25 71%, #FFF11E 100%)";
  }
};

export const BrawlerCard = (props: IBrawlerCard) => {
  const classes = stylesBrawlerCard();
  // const state = useSelector((state: any) => state);

  // // const dispatcher = useDispatch();
  // // dispatcher(
  // //   GetAction("", props.brawler, state.brawlersList, state.filteredBrawlers)
  // // );

  return (
    <div
      key={props.brawler.id}
      className={classes.container}
      style={{
        background: OptionColor(props.brawler.rarity.id.toString()),
      }}
    >
      <img
        src={props.brawler.imageUrl}
        className={classes.imgBrawl}
        onClick={() => props.eventModal(props.brawler)}
      />
      <div className={classes.card}>
        <h4>
          <b
            className={classes.titleCard}
            onClick={() => props.event(props.brawler)}
          >
            {props.brawler.name}
          </b>
        </h4>
      </div>
    </div>
  );
};
