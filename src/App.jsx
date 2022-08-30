import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GamePlay from "./components/GamePlay/GamePlay";
import Home from "./components/Home/Home";
import Stats from "./Pages/Stats/Stats";

//starting point of the app
//<Home> holds the main structure
//<Outlet> component in <Home> is replaced by <Gameplay> or <Stats> component, depending on the Route you are on

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<GamePlay />} />
            <Route path="stats" element={<Stats />}/>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </>
  );
};

export default App;
