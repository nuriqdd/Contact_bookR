import React from "react";
import { BrowserRouter } from "react-router-dom";
import AddContact from "./Components/AddContact/AddContact";
import "./Components/AddContact/AddContact.css";
import ContextProvider from "./Components/context/ContextProvider";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import MainRoutes from "./Components/MainRoutes";

const App = () => {
  return (
    <ContextProvider>
      <Header />
      <MainRoutes />
    </ContextProvider>
  );
};

export default App;
