import { colors } from "@material-ui/core";
import { Button } from "@nextui-org/react";
import React from "react";
import { Gadget } from "../../modal/GadgetItem";
import { ISkillsProps } from "../../modal/Skills";
import { stylesButtonMoreInfo } from "./ButtonMoreInfo.jss";

const OpenUrl = (pUrl: string) => {
  window.open(pUrl);
};

const ButtonMoreInfo = (props: ISkillsProps) => {
  const classes = stylesButtonMoreInfo();

  return (
    <div className={classes.buttonPosition}>
      {/* <button
        className={classes.button}
        onClick={() => OpenUrl(props.brawler.link)}
      >
        Más información
      </button> */}
      <Button
        auto
        ghost
        onClick={() => OpenUrl(props.brawler.link)}
        css={{
          maxWidth: "$12", // space[12]
          borderRadius: "$xs", // radii.xs
          border: "$space$1 solid black",
          background: colors.common.black, // colors.gray800
          color: "$gray100",
          height: "$16", // space[12]
          boxShadow: "$md", // shadows.md
          marginBottom: 12,
          fontSize: "20px",
          fontFamily: "BrawlStarsInGame",
          "&:hover": {
            background: "black",
            color: "#ffe65d",
            borderRadius: "$xs", // radii.xs
            border: "$space$1 solid #000",
          },
        }}
      >
        {" "}
        More information{" "}
      </Button>
    </div>
  );
};

export default ButtonMoreInfo;
