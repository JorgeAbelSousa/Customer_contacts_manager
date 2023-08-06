import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/index";
import RegisterPage from "./pages/RegisterPage";
import DashBoardPage from "./pages/DashboardPage";

const Router = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/dash" element={<DashBoardPage />} />
  </Routes>
);

export default Router;
