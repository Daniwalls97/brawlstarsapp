import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { stylesNavbar } from "./Navbar.jss";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "@nextui-org/react";
import { IBrawler } from "../BrawlerList/BrawlersList";
import { GetAction } from "../../redux/BrawlerActions";

export const Container = styled.div`
  width: 100%;
  /* height: 70px; */
  background-color: #343434;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
`;

export const LogoContainer = styled.div`
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  font-family: sans-serif;
  color: white;

  p {
    font-size: 1.4rem;
    margin-left: 0.5rem;
  }
`;

interface IMenuProps {
  open: boolean;
}

export const Menu = styled.ul<IMenuProps>`
  list-style-type: none;
  margin: 0;
  padding: 0 20px;
  overflow: hidden;
  background-color: #333;
  display: flex;
  align-items: center;
  font-family: "BrawlStarsInGame";

  @media screen and (max-width: 960px) {
    position: absolute;
    top: 70px;
    left: ${(props) => (props.open ? "0" : "-100%")};
    /* left: 0; */
    width: 100%;
    height: 90vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
  }
`;

export const MenuItem = styled.li`
  height: 100%;
  display: inline;
  font-family: "BrawlStarsInGame";

  @media screen and (max-width: 960px) {
    display: flex;
    width: 100%;
    height: 70px;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

export const MenuItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0rem 1.5rem;
  height: 100%;
  color: white;
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  font-size: 20px;
  transition: 0.5s all ease;
  &:hover {
    color: #1fb500;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    font-size: xx-large;
  }
`;

interface ILinkProps {
  text: string;
  link: string;
}

export const MenuItemLinkRouter = (props: ILinkProps) => {
  const classes = stylesOptions();
  return (
    <Link to={props.link} className={classes.myLink}>
      {props.text}
    </Link>
  );
};

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    justify-content: end;
    cursor: pointer;
    padding: 20px;
    width: 100%;

    svg {
      fill: white;
      margin-right: 0.5rem;
    }
  }
`;

export const isBrawlerPage = (): boolean => {
  const url = window.location.href;
  return url.includes("/brawlers") ? true : false;
};

export const SearchBarNav = () => {
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
  );
};

export const stylesOptions = createUseStyles({
  myLink: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "0rem 1.5rem",
    height: "100%",
    color: "white",
    fontSize: "30px",
    fontWeight: "300",
    cursor: "pointer",
    transition: "0.5s all ease",

    "&:hover": {
      color: "#ffe65d",
    },

    " @media (max-width: 960px)": {
      width: "100%",
      fontSize: "xx-large",
    },
  },
});
