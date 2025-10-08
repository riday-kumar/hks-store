import React, { useEffect, useState } from "react";
import InstalledData from "../../Components/InstalledData/InstalledData";
import useDataFetch from "../../Hooks/useDataFetch";
import { getStoredData } from "../../Uitility/saveToDb";
import removeData from "../../Uitility/removeFromDb";
import Loading from "../../Components/Loading/Loading";

const Installed = () => {
  const [sort, setSort] = useState("");
  const [installedList, setInstalledList] = useState([]);
  const [appData, loading] = useDataFetch([]);

  const handleUninstall = (x) => {
    // console.log(x);
    removeData(x);
    const getOldInstalledData = getStoredData();

    const matchingId = appData.filter((app) =>
      getOldInstalledData.includes(app.id)
    );
    console.log(matchingId);

    setInstalledList(matchingId);
    setSort("");
  };

  useEffect(() => {
    const getInstalledData = getStoredData();
    // console.log(getInstalledData);

    const matchedInstalledData = appData.filter((app) =>
      getInstalledData.includes(app.id)
    );
    setInstalledList(matchedInstalledData);
  }, [appData]);

  const handleSort = (sortType) => {
    setSort(sortType);

    const getValue = (downloadStr) => {
      const number = parseFloat(downloadStr);
      const getUnit = downloadStr.slice(-1);
      if (getUnit === "M") {
        return number * 1000000;
      } else if (getUnit === "B") {
        return number * 1000000000;
      } else {
        return number * 1000;
      }
    };

    if (sortType === "htl") {
      const highToLow = [...installedList].sort(
        (a, b) => getValue(b.downloads) - getValue(a.downloads)
      );
      setInstalledList(highToLow);
    }

    if (sortType === "lth") {
      const lowToHigh = [...installedList].sort(
        (a, b) => getValue(a.downloads) - getValue(b.downloads)
      );
      setInstalledList(lowToHigh);
    }
  };

  return (
    <div className="py-20 w-11/12 mx-auto space-y-5">
      <div className="space-y-3">
        <h2 className="text-4xl md:text-5xl font-bold text-center leading-12 capitalize">
          Your Installed Apps
        </h2>
        <p className="text-[20px] text-[#627382] text-center">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex flex-col md:flex-row max-md:gap-5 justify-between items-center">
        <div>
          <p className="text-2xl font-semibold">
            <span>({installedList.length})</span> Apps Found
          </p>
        </div>
        <div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">
              Downloads
              {sort === "htl"
                ? " (High-Low)"
                : sort === "lth"
                ? " (Low-High)"
                : ""}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a onClick={() => handleSort("htl")}>High to Low</a>
              </li>
              <li>
                <a onClick={() => handleSort("lth")}>Low to High</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="space-y-5">
        {loading ? (
          <Loading></Loading>
        ) : (
          installedList.map((appInfo) => (
            <InstalledData
              handleUninstall={handleUninstall}
              key={appInfo.id}
              appInfo={appInfo}
            ></InstalledData>
          ))
        )}
      </div>
    </div>
  );
};

export default Installed;
