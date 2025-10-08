import React from "react";
import TrendingApp from "../TendingApp/TrendingApp";
import useDataFetch from "../../Hooks/useDataFetch";
import Loading from "../Loading/Loading";
import { Link } from "react-router";

const TrendingApps = () => {
  const [ourApps, loading] = useDataFetch([]);
  // console.log(ourApps);
  return (
    <div className="py-20 w-11/12 mx-auto">
      <div className="space-y-3">
        <h2 className="text-4xl md:text-5xl font-bold text-center leading-12 capitalize">
          Trending Apps
        </h2>
        <p className="text-[20px] text-[#627382] text-center">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {loading === true ? (
          <Loading></Loading>
        ) : (
          ourApps
            .slice(0, 8)
            .map((app) => <TrendingApp key={app.id} app={app}></TrendingApp>)
        )}
      </div>
      <div className="flex justify-center mt-10">
        <Link
          className="btn btn-sm lg:btn-lg bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white border-[#632EE3]"
          to="/all-apps"
        >
          Show ALL
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
