import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from ".";
import { routes } from "./routes";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={routes.root} element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Main;
