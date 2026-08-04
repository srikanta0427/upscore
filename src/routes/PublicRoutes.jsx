import { Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Landing from "../pages/Landing";

const PublicRoutes = () => {
  return (
    <Route element={<MainLayout />}>
      <Route path="/" element={<Landing />} />
    </Route>
  );
};

export default PublicRoutes;