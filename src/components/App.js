import React from "react";
import { Routes, Route } from "react-router-dom";

import "./app.css";
import NavBar from "./NavBarComponent/index";
import TabBar from "./TabBarComponent/index";
import Schedule from "./ScheduleComponent";
import ProgramDetails from "./ProgramDetailsComponent";

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
