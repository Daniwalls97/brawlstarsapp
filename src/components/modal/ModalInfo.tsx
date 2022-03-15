import React from "react";
// import { Modal } from "@fluentui/react";
import Header from "./header";
import Skills from "./Skills";
import Description from "../common/Description";
import { stylesModal } from "./Modal.jss";
import ButtonMoreInfo from "../common/ButtonMoreInfo/ButtonMoreInfo";
import { Modal } from "@nextui-org/react";
import useWindowSize from "../common/UseWindowSize";

export interface IModalProps {
  brawler: any;
  event: any;
  open: boolean;
}

export const ModalInfo = (props: IModalProps) => {
  const classes = stylesModal();
  const { width } = useWindowSize();

  return (
    <Modal
      closeButton
      blur
      aria-labelledby={props.brawler.name}
      open={props.open}
      onClose={() => props.event()}
      aria-describedby="modal-description"
      width={window.innerWidth <= 750 ? "90%" : "60%"}
      className={classes.container}
    >
      <Modal.Header>
        <Header brawler={props.brawler} event={props.event} styles={classes} />
      </Modal.Header>
      <Modal.Body>
        <Description text={props.brawler.description} view="modal" />
        <Skills brawler={props.brawler} styles={classes} />
        <ButtonMoreInfo brawler={props.brawler} styles={classes} />
      </Modal.Body>
    </Modal>
  );
};
