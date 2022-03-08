import React, { useEffect } from "react";

const Dashboard = () => {
  const dataFetch = async () => {
    try {
      const response = await fetch("/api/v1");
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    dataFetch();
  }, []);

  return <div>Dashboard</div>;
};

export default Dashboard;
