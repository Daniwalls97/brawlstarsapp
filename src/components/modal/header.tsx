import { IconButton, IIconProps } from "@fluentui/react";
import React from "react";

interface IHeaderProps {
  brawler: any;
  event: any;
  styles: any;
}

export const cancelIcon: IIconProps = { iconName: "Cancel" };

const Header = (props: IHeaderProps) => {
  return (
    <div className={props.styles.header}>
      <img
        className={props.styles.imgProfile}
        src={props.brawler.imageUrl3}
      ></img>
      <h1 className={props.styles.title}>{props.brawler.name}</h1>
      {/* <IconButton
        className={props.styles.iconButton}
        iconProps={cancelIcon}
        ariaLabel="Close popup modal"
        onClick={() => props.event()}
      /> */}
    </div>
  );
};

export default Header;
