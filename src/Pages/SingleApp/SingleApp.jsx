import React, { useEffect, useState } from "react";
import BarChart from "../../Components/Chart/BarChart";
import { getStoredData, installNewApp } from "../../Uitility/saveToDb";
import { toast } from "react-toastify";

const SingleApp = ({ singleApplication }) => {
  const [isDisable, setIsDisable] = useState(false);
  const [initialDisable, setInitialDisable] = useState(false);

  useEffect(() => {
    const getInstalledAppsId = getStoredData();
    if (getInstalledAppsId.includes(singleApplication.id)) {
      setIsDisable(true);
    }
  }, [singleApplication]);

  const notify = () =>
    toast(`Yahoo 🎉 ${singleApplication.title} Installed Successfully`);

  const handleInstall = (appId) => {
    installNewApp(appId);
    setInitialDisable(true);
  };

  const {
    image,
    title,
    companyName,
    id,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = singleApplication;
  return (
    <div className="py-10 space-y-10">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="max-md:mx-auto">
          <img className="h-80 w-80 shadow-lg rounded-lg" src={image} alt="" />
        </div>
        <div className="space-y-5 flex-1 max-md:text-center">
          <div>
            <h1 className="text-3xl font-bold pb-2">{title}</h1>
            <p className="text-[20px] ">
              Developed by :{" "}
              <span className="font-bold text-violet-700">{companyName}</span>
            </p>
          </div>
          <hr className="text-gray-300" />
          <div className="flex max-md:justify-center items-center gap-10">
            <div className=" flex flex-col items-center gap-2">
              <img
                className="h-10 w-10"
                src="https://i.ibb.co.com/mVLTKGyS/icon-downloads.png"
                alt=""
              />
              <p className="text-[16px] text-[#001931]">Downloads</p>
              <h3 className="text-[40px] font-bold">{downloads}</h3>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                className="h-10 w-10"
                src="https://i.ibb.co.com/kszXSg2j/icon-ratings.png"
                alt=""
              />
              <p className="text-[16px] text-[#001931]">Average Ratings</p>
              <h3 className="text-[40px] font-bold">{ratingAvg}</h3>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                className="h-10 w-10"
                src="https://img.icons8.com/?size=100&id=wbdaZ6Dm6bFk&format=png&color=000000"
                alt=""
              />
              <p className="text-[16px] text-[#001931]">Total Reviews</p>
              <h3 className="text-[40px] font-bold">{reviews}</h3>
            </div>
          </div>
          <div>
            {isDisable || initialDisable ? (
              <button className="btn btn-md btn-success text-white">
                Installed (<span>{size} MB</span>)
              </button>
            ) : (
              <button
                onClick={() => {
                  handleInstall(id);
                  notify();
                }}
                className="btn btn-md btn-success text-white"
              >
                Install Now (<span>{size} MB</span>)
              </button>
            )}
          </div>
        </div>
      </div>
      <hr className="text-gray-300" />
      <div>
        <BarChart data={ratings}></BarChart>
      </div>
      <hr className="text-gray-300" />
      <div>
        <p className="text-2xl font-semibold pb-3">Description</p>
        <p className="text-[20px] text-justify text-[#627382]">{description}</p>
      </div>
    </div>
  );
};

export default SingleApp;
