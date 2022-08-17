import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>
      <div className="container-app">
        <Nav />
        <Footer />
      </div>
    </>
  );
};

export default App;
