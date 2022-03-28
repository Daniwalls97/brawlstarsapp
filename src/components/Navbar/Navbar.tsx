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
import {
  Container,
  MenuItem,
  MenuItemLinkRouter,
  Wrapper,
  Menu,
  MobileIcon,
  LogoContainer,
  SearchBarNav,
} from "./Navbar.elements";
import { IconContext } from "react-icons/lib";
import { stylesNavbar } from "./Navbar.jss";
import { FaBars, FaSearch, FaSearchPlus, FaSearchMinus } from "react-icons/fa";

export const isBrawlerPage = (): boolean => {
  const url = window.location.href;
  return url.includes("/brawlers") ? true : false;
};

export const Navbar = () => {
  const classes = stylesNavbar();

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <>
      <nav>
        <Container>
          <Wrapper>
            <IconContext.Provider
              value={{
                style: {
                  fontSize: "2em",
                },
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <MobileIcon
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                  style={{ width: "6em" }}
                >
                  <FaBars />
                </MobileIcon>

                <MobileIcon
                  onClick={() => setShowMobileSearch(!showMobileSearch)}
                >
                  {showMobileSearch && <FaSearchMinus />}
                  {!showMobileSearch && <FaSearchPlus />}
                </MobileIcon>
              </div>

              <Menu open={showMobileMenu}>
                <div className={classes.optionsContainer}>
                  <MenuItem>
                    <img
                      src="https://vignette.wikia.nocookie.net/brawlstars/images/c/c9/Logo.png/revision/latest?cb=20170621183337"
                      width="60px"
                      style={{ marginTop: 15 }}
                    />
                  </MenuItem>
                  <MenuItem onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    <MenuItemLinkRouter text="Home" link="/" />
                  </MenuItem>
                  <MenuItem onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    <MenuItemLinkRouter text="Brawlers" link="/brawlers" />
                  </MenuItem>
                  <MenuItem onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    <MenuItemLinkRouter text="Blog" link="/blog" />
                  </MenuItem>
                  <MenuItem onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    <MenuItemLinkRouter text="About" link="/about" />
                  </MenuItem>
                </div>
              </Menu>
              {showMobileSearch && (
                <div className={classes.searchBarMobile}>
                  <SearchBarNav />
                </div>
              )}
              <div className={classes.searchBarNoMobile}>
                <SearchBarNav />
              </div>
            </IconContext.Provider>
          </Wrapper>
        </Container>
        <Outlet />
      </nav>
    </>
  );
};

export default Navbar;
