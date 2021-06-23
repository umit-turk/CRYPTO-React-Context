import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CoinDetailPage from "./pages/CoinDetailPage";
import CoinSummaryPage from "./pages/CoinSummaryPage";
import Header from "./components/Header";
import { WatchListContextProvider } from "./components/context/watchListContext";
import "./App.css";
const App = () => {
  return (
    <div>
      <WatchListContextProvider>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={CoinSummaryPage} />
        </BrowserRouter>
      </WatchListContextProvider>
    </div>
  );
};

export default App;
