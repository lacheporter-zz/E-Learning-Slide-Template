import React from "react";
import { AppProvider } from "./context/AppContext";
import { Route } from "react-router-dom";
import Overview from "./Pages/Overview";

import "./Styles/global.css";

function App() {
  return (
    <AppProvider>
      <Route path="/">
        <Overview />
      </Route>
    </AppProvider>
  );
}
export default App;
