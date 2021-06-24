import React, { createContext, useEffect, useState } from "react";

export const WatchListContext = createContext();

export const WatchListContextProvider = (props) => {
  console.log(localStorage.getItem("watchList").split(","));
  const [watchList, setWatchList] = useState(
    localStorage.getItem("watchList").split(",") || [
      "bitcoin",
      "ethereum",
      "ripple",
      "litecoin",
      "dogecoin"
    ]
  );

  useEffect(() => {
    localStorage.setItem("watchList", watchList);
  }, [watchList]);

  const deleteCoin = (coin) => {
    setWatchList(
      watchList.filter((el) => {
        return el !== coin;
      })
    );
  };

  return (
    <WatchListContext.Provider value={{ watchList, deleteCoin }}>
      {props.children}
    </WatchListContext.Provider>
  );
};
