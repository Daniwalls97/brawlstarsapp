import { useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";
import { IBrawler } from "../components/BrawlerList/BrawlersList";
import { GetAction } from "./BrawlerActions";
import { BrawlerReducer } from "./BrawlerReducer";

const store = createStore(BrawlerReducer);

export default store;

// export const setStoredBrawler = (brawler: IBrawler) => {
//   const dispatcher = useDispatch();
//   dispatcher(GetAction("", brawler));
// };

// export const getStoredBrawler = (): IBrawler => {
//   const state = useSelector((state: any) => state);
//   return state.selectedBrawler;
// };
