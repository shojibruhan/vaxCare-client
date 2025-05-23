import React from "react";
import { Route, Routes } from "react-router";
import DoctorsList from "../components/doctor/DoctorsList";
import Vaccines from "../components/vaccine/Vaccines";
import DashboardLayout from "../layouts/DashboardLayout";
import MainLayout from "../layouts/MainLayout";
import ActivateAccount from "../pages/account/ActivateAccount";
import DoctorRegistration from "../pages/account/DoctorRegistration";
import PatientRegistration from "../pages/account/PatientRegistration";
import Profile from "../pages/account/Profile";
import Appointment from "../pages/Appointment";
import Booking from "../pages/Booking";
import Dashboard from "../pages/dashboard/Dashboard";
import Home from "../pages/home/Home";
import LogIn from "../pages/LogIn";
import PaymentSuccess from "../pages/payment/PaymentSuccess";
import VaccineDetails from "../pages/VaccineDetails";
import PrivateRoute from "./PrivateRoute";
const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="vaccines" element={<Vaccines />} />
        <Route path="vaccines/:vaccineId" element={<VaccineDetails />} />
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
            <DashboardLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="booking" element={<Booking />} />
        <Route path="my-appointment" element={<Appointment />} />
        <Route path="payment/success" element={<PaymentSuccess />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
