import React from "react";
import Banner from "../../Components/Banner/Banner";
import States from "../../Components/States/States";
import TrendingApps from "../../Components/TrendingApps/TrendingApps";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <States></States>
      <TrendingApps></TrendingApps>
    </div>
  );
};

export default Home;
