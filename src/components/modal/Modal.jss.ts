import React from "react";
import {
  getTheme,
  FontWeights,
  IIconProps,
  IButtonStyles,
} from "@fluentui/react";
import { createUseStyles } from "react-jss";

const theme = getTheme();

export const stylesModal = createUseStyles({
  title: {
    fontFamily: "BrawlStarsExtraBlack",
    fontSize: "50px",
    margin: "0px",
  },
  subTitle: {
    fontFamily: "BrawlStarsInGame",
    fontSize: "30px",
    marginLeft: "20px",
    padding: "0px",
  },

  iconButton: {
    color: theme.palette.neutralPrimary,
    marginLeft: "auto",
    marginTop: "4px",
    marginRight: "2px",
    alignSelf: "start",
  },

  imgProfile: {
    height: "50px",
    minHeight: "50px",
    maxHeight: "50px",
    marginRight: "20px",
  },

  gadgetsGroup: {
    display: "flex",
    flexDirection: "row",
    "@media (max-width: 850px)": {
      flexDirection: "column",
    },
  },

  gadgetColumn: {
    width: "50%",
    "@media (max-width: 850px)": {
      width: "100%",
    },
  },

  container: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "stretch",
    backgroundColor: "#fff4bb",
    // width: "60%",
  },
  header: {
    flex: "1 1 auto",
    // borderTop: `4px solid #000`,
    color: theme.palette.neutralPrimary,
    display: "flex",
    alignItems: "center",
    fontWeight: FontWeights.semibold,
    padding: "12px 12px 14px 24px",
  },

  body: {
    flex: "4 4 auto",
    padding: "0 24px 24px 24px",
    overflowY: "hidden",
    selectors: {
      p: { margin: "14px 0" },
      "p:first-child": { marginTop: 0 },
      "p:last-child": { marginBottom: 0 },
    },
    fontSize: 20,
    "@media (max-width: 400px)": {
      fontSize: "15px",
    },
  },

  pannelBody: {
    fontSize: 20,
    textAlign: "justify",
    textjustify: "inter-word",
    "@media (max-width: 400px)": {
      fontSize: "15px",
    },
  },
});
