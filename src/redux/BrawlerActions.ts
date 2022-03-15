import { Switch } from "@nextui-org/react";
import React from "react";
import { IBrawler } from "../components/BrawlerList/BrawlersList";

const actionShowAll = {
  type: "@brawler/all",
};

const actionShowGadgets = {
  type: "@brawler/gadgets",
};

const actionShowStarPowers = {
  type: "@brawler/starpowers",
};

const actionShowAllBrawlers = {
  type: "@brawler/allbrawlers",
};

const actionShowFilteredBrawlers = {
  type: "@brawler/filteredbrawlers",
};

const actionIsBrawlersPage = {
  type: "@brawler/isbrawlerspage",
};

const getType = (opt: string) => {
  switch (opt) {
    case "gadgets":
      return actionShowGadgets;
    case "starpowers":
      return actionShowStarPowers;
    case "all":
      return actionShowAll;
    case "allbrawlers":
      return actionShowAllBrawlers;
    case "filteredbrawlers":
      return actionShowFilteredBrawlers;
    case "isbrawlerspage":
      return actionIsBrawlersPage;
    default:
      return actionShowAll;
  }
};

export const GetAction = (
  opt: any,
  item: IBrawler,
  items: IBrawler[],
  filteredItems: IBrawler[]
) => {
  return {
    type: getType(opt),
    brawler: item,
    brawlers: items,
    filteredBrawlersList: filteredItems,
  };
};
