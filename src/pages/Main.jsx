import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Main.css";
import Schedule from "./Schedule";
import Trend from "./Trend";
import Blog from "./Blog";
import Upload from "./Upload";
import UploadPage from "./UploadPage";
const Main = () => {
  return (
    <main>
      <Schedule />
      <Trend />
      <Blog />
      <Upload />
    </main>
  );
};

export default Main;
