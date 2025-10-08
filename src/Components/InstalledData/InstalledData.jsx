import React from "react";

const InstalledData = ({ handleUninstall, appInfo }) => {
  const { image, id, title, downloads, ratingAvg, size } = appInfo;
  return (
    <div className="bg-white flex flex-col md:flex-row max-md:gap-4 justify-between items-center p-5 md:p-3 rounded-lg">
      <div className="flex items-center gap-5">
        <img className="h-20 w-20 rounded-lg" src={image} alt="app-image" />
        <div className="space-y-2">
          <p className="text-[20px] font-medium capitalize">{title}</p>
          <div className="flex items-center gap-5">
            <div className="text-green-500 flex items-center gap-2">
              <img
                className="h-4 w-4"
                src="https://i.ibb.co.com/mVLTKGyS/icon-downloads.png"
                alt=""
              />
              <p>{downloads}</p>
            </div>
            <div className="text-orange-500 flex items-center gap-2">
              <img
                className="h-4 w-4"
                src="https://i.ibb.co.com/kszXSg2j/icon-ratings.png"
                alt=""
              />
              <p>{ratingAvg}</p>
            </div>
            <div>
              <p>{size} MB</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={() => handleUninstall(id)}
          className="btn btn-success text-white"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstalledData;
