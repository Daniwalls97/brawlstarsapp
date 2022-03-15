import React from "react";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { Text } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { GetAction } from "../../redux/BrawlerActions";
import { IBrawler } from "../BrawlerList/BrawlersList";

interface ITitleProps {
  text: string;
  type: string;
}

export const OptionColor = (type: string) => {
  switch (type) {
    case "-1":
      return "45deg, #fff -20%, #fff 50%";
    case "1":
      return "45deg, #b9eaff -20%, #b9eaff 50%";
    case "2":
      return "45deg, #68fd58 -20%, #68fd58 50%";
    case "3":
      return "45deg, #5ab3ff -20%, #5ab3ff 50%";
    case "4":
      return "45deg, #d850ff -20%, #d850ff 50%";
    case "5":
      return "45deg, #fe5e72 -20%, #fe5e72 50%";
    case "6":
      return "45deg, #fff11e -20%, #fff11e 50%";
    case "7":
      return "45deg, #D850FF 10%, #FE5E72 47%, #F88F25 71%, #FFF11E 100%";
  }
};

export const OptionType = (props: ITitleProps) => {
  //   const classes = stylesOptions();
  const state = useSelector((state: any) => state);
  const dispatcher = useDispatch();

  const filterByType = (type: string) => {
    const brawlerType = type;
    const filteredBrawlers = state.brawlersList.filter(
      (brawler: IBrawler) => brawler.rarity.id.toString() === brawlerType
    );

    if (type === "-1")
      dispatcher(
        GetAction(
          "filteredbrawlers",
          state.selectedBrawler,
          state.brawlersList,
          state.brawlersList
        )
      );
    else
      dispatcher(
        GetAction(
          "filteredbrawlers",
          state.selectedBrawler,
          state.brawlersList,
          filteredBrawlers
        )
      );
  };

  return (
    <li onClick={() => filterByType(props.type)}>
      <Text
        h1
        size={30}
        css={{
          textGradient: OptionColor(props.type),
          padding: 5,
          "&:hover": {
            transform: "scale(1.2)",
            backgroundColor: "#ffdf00",
          },
          //   color: OptionColor(props.type),
        }}
        weight="bold"
        style={{
          cursor: "pointer",
        }}
      >
        {props.text}
      </Text>
    </li>
  );
};
