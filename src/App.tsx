import React from "react";
import "./App.css";
import "./index.css";
import { Main } from "./pages/main/index";
import Game from "./pages/game";
import Router from "./router/router";

function App() {
  return (
    <div className="App w-screen h-screen text-3xl text-center">
      <Router />
    </div>
  );
}

export default App;
