import React from "react";

const initialState: any = {
  selectedBrawler: null,
  brawlersList: [],
  filteredBrawlersList: [],
};

export const isBrawlerPage = (): boolean => {
  const url = window.location.href;
  return url.includes("/brawlers") ? true : false;
};

export const BrawlerReducer = (state = initialState, action: any) => {
  // state.brawlersList = action.brawlers;
  // state.isBrawlerPage = isBrawlerPage();
  // state.filteredBrawlersList = action.filteredBrawlersList;
  // state.selectedBrawler = action.brawler;

  switch (action.type) {
    case "@brawler/all":
      return {
        ...state,
        selectedBrawler: action.brawler,
      };
    case "@brawler/allbrawlers":
      return {
        ...state,
        brawlersList: action.brawlers,
      };
    case "@brawler/filteredbrawlers":
      return {
        ...state,
        filteredBrawlersList: action.filteredBrawlersList,
      };
    case "@brawler/isbrawlerspage":
      return {
        ...state,
        isBrawlerPage: isBrawlerPage(),
      };
    default:
      return {
        ...state,
        brawlersList: action.brawlers,
        isBrawlerPage: isBrawlerPage(),
        filteredBrawlersList: action.filteredBrawlersList,
        selectedBrawler: action.brawler,
      };
  }
};
