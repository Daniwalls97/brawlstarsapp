import { Panel } from "@fluentui/react";
import { Divider } from "@nextui-org/react";
import React from "react";
import { createUseStyles } from "react-jss";
import ButtonMoreInfo from "../common/ButtonMoreInfo/ButtonMoreInfo";
import Description from "../common/Description";
import { stylesPanelDescription } from "./PanelDescription.jss";
import PanelSeparator from "./PanelSeparator";

interface IPanelProps {
  brawler: any;
  event: any;
  open: boolean;
}

export const PanelDescription = (props: IPanelProps) => {
  const classes = stylesPanelDescription();

  return (
    <Panel
      headerText={props.brawler.name}
      isOpen={props.open}
      onDismiss={() => props.event(false)}
      // You MUST provide this prop! Otherwise screen readers will just say "button" with no label.
      closeButtonAriaLabel="Close"
      styles={{
        main: {
          backgroundColor: "#ffe65d",
        },
        headerText: {
          fontFamily: "BrawlStarsExtraBlack",
          fontSize: "30px",
        },
      }}
    >
      <img className={classes.img} src={props.brawler.imageUrl3}></img>
      <PanelSeparator />
      <Description text={props.brawler.description} view="panel" />
      <PanelSeparator />
      <ButtonMoreInfo brawler={props.brawler} styles={classes} />
    </Panel>
  );
};
