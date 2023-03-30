import React from "react";
import { Routes, Route } from "react-router-dom";

import "./app.css";
import NavBar from "./NavBar/index";
import TabBar from "./TabBar/index";
import Schedule from "./Schedule";
import ProgramDetails from "./ProgramDetails";

const MainScreen = () => (
  <div className="app-container">
    <Schedule />
    <TabBar />
  </div>
);

const App = () => (
  <>
    <NavBar />
    <Routes>
      <Route index path="/" element={<MainScreen/>} />
      <Route path="program-details/:programId" element={<ProgramDetails/>} />
    </Routes>
  </>
);

export default App;
