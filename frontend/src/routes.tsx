import { Route, Routes } from "react-router-dom";
import { DashProvider } from "./contexts/DashContext/DashContext";
import DashBoardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage/index";
import RegisterPage from "./pages/RegisterPage";

const Router = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route
      path="/dash"
      element={
        <DashProvider>
          <DashBoardPage />
        </DashProvider>
      }
    />
  </Routes>
);

export default Router;
