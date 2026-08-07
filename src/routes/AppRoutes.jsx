import { Routes } from "react-router-dom";
import Routess from "./Routess";
import Dashboard from "../../authPages/Dashboard";

const AppRoutes = () => {
  return (
    <Routes>
      {Routess()}
    </Routes>
  );
};

export default AppRoutes;