import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./component/LandingPage";
import AboutPage from "./component/AboutPage";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import RegisterPage from "./component/RegisterPage";
import { Toaster } from "react-hot-toast";
import LoginPage from "./component/LoginPage";
import DashboardLayout from "./component/Dashboard/DashboardLayout";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Toaster position="top-center" />
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/dashboard" element={<DashboardLayout />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
