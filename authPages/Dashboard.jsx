import React, { useEffect } from "react";
import axios from "axios";
const Dashboard = () => {
  useEffect(() => {
  const fetchUser = async () => {
    try {
      const response = await axios.get("http://localhost:8080/dashboard",{
        withCredentials:true
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchUser();
}, []);
  // callForUser();

  return <div className="text-red-500">Dashboard</div>;
};

export default Dashboard;
