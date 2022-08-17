import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Stats from "./Pages/Stats/Stats";

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="stats" element={<Stats />}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
};

export default App;
