import React from "react";
import { Route, Routes } from "react-router";
import DoctorsList from "../components/doctor/DoctorsList";
import Vaccines from "../components/vaccine/Vaccines";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import LogIn from "../pages/LogIn";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="vaccine" element={<Vaccines />} />
        <Route path="doctors" element={<DoctorsList />} />
        <Route path="login" element={<LogIn />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
