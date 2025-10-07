import React from "react";

const States = () => {
  return (
    <div className="py-20 bg-gradient-to-r from-[#632ee3] to-[#9f62f2] min-h-52">
      <div className="w-11/12 mx-auto text-white space-y-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center leading-12 capitalize">
          Trusted by Millions, Built for You
        </h2>
        <div className="flex flex-col md:flex-row justify-around items-center gap-10 md:gap-0">
          <div className="text-center space-y-2.5">
            <p className="text-[16px]">Total Downloads</p>
            <h1 className="text-6xl font-bold">29.6M</h1>
            <p className="text-[16px]">21% more than last month</p>
          </div>
          <div className="text-center space-y-2.5">
            <p className="text-[16px]">Total Reviews</p>
            <h1 className="text-6xl font-bold">906K</h1>
            <p className="text-[16px]">46% more than last month</p>
          </div>
          <div className="text-center space-y-2.5">
            <p className="text-[16px]">Active Apps</p>
            <h1 className="text-6xl font-bold">132+</h1>
            <p className="text-[16px]">31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default States;
