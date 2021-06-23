import React, { createContext, useState } from "react";

export const WatchListContext = createContext();

export const WatchListContextProvider = (props) => {
  const [watchList, setWatchList] = useState(["bitcoin", "etherum", "ripple"]);

  return (
    <WatchListContext.Provider value={{ watchList }}>
      {props.children}
    </WatchListContext.Provider>
  );
};
