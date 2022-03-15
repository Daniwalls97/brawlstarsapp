import React from "react";
import { Gadget } from "./GadgetItem";
import GadgetsGroup from "./GadgetsGroup";

export interface ISkillsProps {
  brawler: any;
  styles: any;
}

const Skills = (props: ISkillsProps) => {
  return (
    <div className={props.styles.gadgetsGroup}>
      <GadgetsGroup
        list={props.brawler.starPowers}
        title="Star Powers: "
        styles={props.styles}
      />
      <GadgetsGroup
        list={props.brawler.gadgets}
        title="Gadgets: "
        styles={props.styles}
      />
    </div>
  );
};

export default Skills;
