import React from "react";
import { Routes, Route } from "react-router-dom";
import AddContact from "./AddContact/AddContact";
import ShowContact from "./ShowContact/ShowContact";
import Home from "./Home/Home";
import ContactDetails from "./ContactDetails/ContactDetails";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddContact />} />
      <Route path="/contactlist" element={<ShowContact />} />
      <Route path="/contactList/:id" element={<ShowContact />} />
      <Route path="/contactDetails/:id" element={<ContactDetails />} />
    </Routes>
  );
};

export default MainRoutes;
