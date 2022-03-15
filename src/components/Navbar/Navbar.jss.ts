import React from "react";
import { createUseStyles } from "react-jss";

export const stylesNavbar = createUseStyles({
  optionsBar: {
    listStyleType: "none",
    margin: 0,
    padding: "0 20px",
    overflow: "hidden",
    backgroundColor: "#333",
    display: "flex",
    alignItems: "center",
  },

  searchBarContainer: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
  },

  searchBar: {
    fontSize: "40px",
    borderRadius: "0.5em",
    padding: "10px",
  },

  container: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    backgroundColor: "#333",
  },

  optionsContainer: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },

  searchContainer: {
    display: "flex",
    alignItems: "center",
    padding: 20,
    "@media (max-width: 759px)": {
      width: "100%",
    },
  },
});
