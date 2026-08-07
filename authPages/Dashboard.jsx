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

  return <div className="bg-[#0d0d0d] h-100 w-full">
    <h1 className="text-white">Dashboard</h1>
  </div>;
};

export default Dashboard;
