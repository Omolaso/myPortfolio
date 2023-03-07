import React from "react";
import { Routes, Route } from "react-router-dom";
import Archive from "./Archive";
import SharedLayout from "./SharedLayout";

const LandingPage = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />} />
      <Route path="/archive" element={<Archive />} />
    </Routes>
  );
};

export default LandingPage;
