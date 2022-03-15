import { Panel } from "@fluentui/react";
import { Text } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { GetRequest } from "../api/GetRequest";
import {
  BrawlersList,
  IBrawler,
  IBrawlerList,
  IRarity,
} from "../components/BrawlerList/BrawlersList";
import { ModalInfo } from "../components/modal/ModalInfo";
import { PanelDescription } from "../components/Panel/PanelDescription";
import { TypesBar } from "../components/TypesBar/TypesBar";
import { GetAction } from "../redux/BrawlerActions";

const Brawlers = () => {
  const classes = stylesBrawlers();
  const [isOpen, setPanel] = useState(false);
  const [isModalOpen, setModal] = useState(false);
  const state = useSelector((state: any) => state);
  const [loading, setLoading] = useState(true);
  const [request, setRequestData] = useState<IBrawlerList>();
  const [filteredList, setFilteredList] = useState([]);
  const [rarities, setRarities] = useState<IRarity[]>([
    {
      id: -1,
      name: "All",
      color: "#fff",
    },
  ]);
  // const [selectedBrawler, setSelectedBrawler] = useState();
  const dispatcher = useDispatch();

  const GetRequestValue = () => {
    GetRequest().then((data: any) => {
      if (data) {
        setRequestData(data);
        setLoading(false);
        GetRarities(data.list);
        dispatcher(GetAction("", data.list[0], data.list, data.list));
      }
    });
  };
  const GetRarities = (list: IBrawler[]) => {
    list.forEach((brawler) => {
      const searchedRarities = rarities.filter(
        (rarity: IRarity) => rarity.id === brawler.rarity.id
      );

      if (searchedRarities.length === 0) {
        rarities.push(brawler.rarity);
      }
    });

    const raritiesOrdered = rarities.sort((a: IRarity, b: IRarity) => {
      return a.id - b.id;
    });

    setRarities(rarities);
  };
  useEffect(() => {
    GetRequestValue();
  }, []);
  useEffect(() => {
    if (state.filteredBrawlersList) {
      // Ordeno por tipo de brawler en función de la rareza
      const listOrdered = state.filteredBrawlersList.sort(
        (a: IBrawler, b: IBrawler) => {
          return a.rarity.id - b.rarity.id;
        }
      );

      setFilteredList(listOrdered);
    }
  }, [state]);
  const ShowPanel = (brawler: any) => {
    setPanel(true);
    dispatcher(
      GetAction(
        "@brawler/all",
        brawler,
        state.brawlersList,
        state.filteredBrawlers
      )
    );
  };
  const ShowModal = (brawler: any) => {
    setModal(true);
    dispatcher(
      GetAction(
        "@brawler/all",
        brawler,
        state.brawlersList,
        state.filteredBrawlers
      )
    );
  };

  return (
    <div>
      {rarities !== undefined && <TypesBar types={rarities} />}
      <div className={classes.container}>
        <ClipLoader color={"#e61919"} loading={loading} size={100} />

        {filteredList.length > 0 && (
          <BrawlersList
            list={filteredList}
            panelEvent={ShowPanel}
            modalEvent={ShowModal}
          />
        )}

        {state.selectedBrawler && (
          <ModalInfo
            brawler={state.selectedBrawler}
            event={setModal}
            open={isModalOpen}
          />
        )}

        {state.selectedBrawler && (
          <PanelDescription
            brawler={state.selectedBrawler}
            event={setPanel}
            open={isOpen}
          />
        )}
      </div>
    </div>
  );
};

export default Brawlers;

const stylesBrawlers = createUseStyles({
  container: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
    fontFamily: "BrawlStarsInGame",
    backgroundImage:
      "url(https://i.pinimg.com/originals/f4/c8/9d/f4c89d530907281f174bc34279f50b70.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    height: "100vh",
    backgroundSize: "cover",
    boxSizing: "border-box",
    paddingBottom: 120,
    // overflow: "hidden",
  },
});
