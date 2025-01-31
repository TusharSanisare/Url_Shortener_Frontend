import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { getApps } from "./utils/helper";

const App = () => {
  const CurrentApps = getApps();
  return (
    <>
      <Router>
        <CurrentApps />
      </Router>
    </>
  );
};

export default App;
