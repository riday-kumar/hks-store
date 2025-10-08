import React, { useEffect, useState } from "react";
import useDataFetch from "../../Hooks/useDataFetch";
import Loading from "../../Components/Loading/Loading";
import TrendingApp from "../../Components/TendingApp/TrendingApp";
import { Link } from "react-router";

const Applications = () => {
  const [allApps, loading] = useDataFetch([]);
  const [foundApp, setFoundApp] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);

  const typeData = searchData.trim().toLowerCase();

  useEffect(() => {
    if (searchData.length === 0) {
      setFoundApp(allApps);
    } else {
      setSearchLoading(true);

      const timer = setTimeout(() => {
        const makeLower = allApps.filter((oneApp) =>
          oneApp.title.trim().toLowerCase().includes(typeData)
        );
        setFoundApp(makeLower);
        setSearchLoading(false);
      }, 500);
    }
  }, [searchData, allApps]);

  return (
    <div className="py-20 w-11/12 mx-auto space-y-5">
      <div className="space-y-3">
        <h2 className="text-4xl md:text-5xl font-bold text-center leading-12 capitalize">
          Our All Applications
        </h2>
        <p className="text-[20px] text-[#627382] text-center">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex flex-col md:flex-row max-md:gap-5 justify-between items-center">
        <div>
          <p className="text-2xl font-semibold">
            <span>({foundApp.length})</span> Apps Found
          </p>
        </div>
        <div>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              onChange={(e) => setSearchData(e.target.value)}
              value={searchData}
              type="search"
              placeholder="Search App"
            />
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {loading ? (
          <Loading></Loading>
        ) : foundApp.length === 0 ? (
          <div className="col-span-4 text-center space-y-5">
            <p className="text-5xl font-bold text-violet-800 text-center col-span-4">
              No Apps Found
            </p>
            <button
              to="/all-apps"
              onClick={() => setSearchData("")}
              className="btn btn-primary"
            >
              Show All Apps
            </button>
          </div>
        ) : searchLoading ? (
          <Loading></Loading>
        ) : (
          foundApp.map((app) => (
            <TrendingApp key={app.id} app={app}></TrendingApp>
          ))
        )}
      </div>
    </div>
  );
};

export default Applications;
