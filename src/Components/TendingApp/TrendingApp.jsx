import React from "react";
import { Link } from "react-router";

const TrendingApp = ({ app }) => {
  const { image, id, title, downloads, ratingAvg } = app;
  return (
    <Link to={`/app-detail/${id}`}>
      <div className="p-4 bg-white rounded-lg space-y-5">
        <img className="mx-auto rounded-lg bg-[#f5f5f5]" src={image} alt="" />
        <h4 className="text-[20px] font-medium capitalize">{title}</h4>
        <div className="flex justify-between items-center">
          <div className="flex justify-around items-center h-8 w-20 rounded bg-[#f1f5e8] text-green-500">
            <img
              className="h-4 w-4"
              src="https://i.ibb.co.com/mVLTKGyS/icon-downloads.png"
              alt="download sign"
            />
            <p className="text-[16px] font-medium">{downloads}</p>
          </div>
          <div className="flex justify-around items-center h-8 w-20 rounded bg-[#fff0e1] text-[#FF8811]">
            <img
              className="h-4 w-4"
              src="https://i.ibb.co.com/kszXSg2j/icon-ratings.png"
              alt=""
            />
            <p className="text-[16px] font-medium">{ratingAvg}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TrendingApp;
