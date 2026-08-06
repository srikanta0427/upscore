import { Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Landing from "../pages/Landing";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Dashboard from "../../authPages/Dashboard";

const PublicRoutes = () => {
  return (
    <Route element={<MainLayout />}>
      <Route path="/" element={<Landing />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Route>
    
  );
};

export default PublicRoutes;