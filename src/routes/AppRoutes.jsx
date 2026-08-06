import { Routes } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import Dashboard from "../../authPages/Dashboard";

const AppRoutes = () => {
  return (
    <Routes>
      {PublicRoutes()}
    </Routes>
  );
};

export default AppRoutes;