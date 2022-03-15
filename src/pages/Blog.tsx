import React from "react";
import { createUseStyles } from "react-jss";
import { useDispatch, useSelector } from "react-redux";
import { GetAction } from "../redux/BrawlerActions";

const Blogs = () => {
  const classes = stylesBlogs();
  // const dispatcher = useDispatch();
  // const state = useSelector((state: any) => state);

  // dispatcher(
  //   GetAction(
  //     "isbrawlerspage",
  //     state.selectedBrawler,
  //     state.brawlersList,
  //     state.filteredBrawlers
  //   )
  // );

  return (
    <iframe
      className={classes.fullIFrame}
      src="https://blog.brawlstars.com/"
    ></iframe>
  );
};

export default Blogs;

const stylesBlogs = createUseStyles({
  fullIFrame: {
    height: "100vh",
    width: "100%",
    boxSizing: "border-box",
  },
});
