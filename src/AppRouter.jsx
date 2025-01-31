import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import ShortenUrlPage from "./component/ShortenUrlPage";
import { Toaster } from "react-hot-toast";
import Footer from "./component/Footer";
import LandingPage from "./component/LandingPage";
import AboutPage from "./component/AboutPage";
import RegisterPage from "./component/RegisterPage";
import LoginPage from "./component/LoginPage";
import DashboardLayout from "./component/Dashboard/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "./component/ErrorPage";
// import ErrorPage from "./components/ErrorPage";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/register"
          element={
            <PrivateRoute publicPage={true}>
              <RegisterPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PrivateRoute publicPage={true}>
              <LoginPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute publicPage={false}>
              <DashboardLayout />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;

export const SubDomainRouter = () => {
  return (
    <Routes>
      <Route path="/:url" element={<ShortenUrlPage />}></Route>
    </Routes>
  );
};
