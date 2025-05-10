import React from "react";
import { Route, Routes } from "react-router";
import DoctorsList from "../components/doctor/DoctorsList";
import Vaccines from "../components/vaccine/Vaccines";
import MainLayout from "../layouts/MainLayout";
import ActivateAccount from "../pages/account/ActivateAccount";
import DoctorRegistration from "../pages/account/DoctorRegistration";
import PatientRegistration from "../pages/account/PatientRegistration";
import Dashboard from "../pages/dashboard/Dashboard";
import Home from "../pages/home/Home";
import LogIn from "../pages/LogIn";
import PrivateRoute from "./PrivateRoute";
const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="vaccine" element={<Vaccines />} />
        <Route path="doctors" element={<DoctorsList />} />
        <Route path="login" element={<LogIn />} />
        <Route path="register/doctor" element={<DoctorRegistration />} />
        <Route path="register/patient" element={<PatientRegistration />} />
        <Route path="activate/:uid/:token" element={<ActivateAccount />} />
      </Route>
      <Route
        path="dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
