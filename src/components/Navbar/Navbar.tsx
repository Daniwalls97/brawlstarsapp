import { Input } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";
import { GetRequest } from "../../api/GetRequest";
import Brawlers from "../../pages/Brawlers";
import { GetAction } from "../../redux/BrawlerActions";
import { IBrawler, IBrawlerList } from "../BrawlerList/BrawlersList";
import { OptionList } from "../Options/OptionList";
import { OptionLogo } from "../Options/OptionsLogo";
import { stylesNavbar } from "./Navbar.jss";

export const isBrawlerPage = (): boolean => {
  const url = window.location.href;
  return url.includes("/brawlers") ? true : false;
};

export const Navbar = () => {
  const classes = stylesNavbar();
  const state = useSelector((state: any) => state);
  const [isBrawler, setPage] = useState(false);
  const dispatcher = useDispatch();

  const filter = (event: any, brawlersList: IBrawler[]) => {
    const searchBrawler = event.target.value;
    const filteredBrawlers = brawlersList.filter((brawler) =>
      brawler.name.toLowerCase().includes(searchBrawler.toLowerCase())
    );

    dispatcher(
      GetAction(
        "filteredbrawlers",
        state.selectedBrawler,
        state.brawlersList,
        filteredBrawlers
      )
    );
  };

  useEffect(() => {
    setPage(isBrawlerPage());
  }, [window.location.href]);

  return (
    <>
      <nav>
        {/* <ul className={classes.optionsBar}> */}
        <div className={classes.container}>
          <div className={classes.optionsContainer}>
            <OptionLogo />
            <OptionList text="Home" link="/" />
            <OptionList text="Brawlers" link="/brawlers" />
            <OptionList text="Blog" link="/blog" />
            <OptionList text="About" link="/about" />
          </div>
          <div className={classes.searchContainer}>
            {isBrawler ? (
              <div className={classes.searchBarContainer}>
                <Input
                  clearable
                  placeholder="Search brawler..."
                  onChange={(text) => filter(text, state.brawlersList)}
                  css={{
                    fontFamily: "BrawlStarsInGame",
                    width: "100%",
                  }}
                />
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        {/* </ul> */}
        <Outlet />
      </nav>
    </>
  );
};

export default Navbar;
