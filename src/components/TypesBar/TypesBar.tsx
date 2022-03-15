import React from "react";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { Text } from "@nextui-org/react";
import { OptionType } from "./OptionType";
import { IRarity } from "../BrawlerList/BrawlersList";

export const TypesBar = (props: any) => {
  //   const classes = stylesOptions();

  return (
    <ul
      style={{
        listStyleType: "none",
        margin: 0,
        paddingTop: 10,
        overflow: "hidden",
        backgroundColor: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        fontFamily: "BrawlStarsInGame",
        flexWrap: "wrap",
      }}
    >
      {/* <OptionType text="Recompensa De Trofeos" type="1"></OptionType>
      <OptionType text="Especial" type="2"></OptionType>
      <OptionType text="Superespecial" type="3"></OptionType>
      <OptionType text="Épico" type="4"></OptionType>
      <OptionType text="Mítico" type="5"></OptionType>
      <OptionType text="Cromático" type="7"></OptionType>
      <OptionType text="Legendario" type="6"></OptionType> */}

      {props.types.map((type: IRarity) => (
        <OptionType text={type.name} type={type.id.toString()}></OptionType>
      ))}
    </ul>
  );
};
