import { Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Landing from "../pages/Landing";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Dashboard from "../../authPages/Dashboard";
import PublicRoutes from "./PublicRoutes";

const Routess = () => {
  return (
    <Route element={<MainLayout />}>
      <Route path="/" element={<Landing />} />
      {/* <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} /> */}
      <Route path="/signin" element={<PublicRoutes><Signin/></PublicRoutes>}/>
      <Route path="/signup" element={<PublicRoutes><Signup/></PublicRoutes>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Route>
    
  );
};

export default Routess;