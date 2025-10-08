import React from "react";

const Banner = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="pt-20 text-center space-y-7">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-16  md:leading-20">
          We Build <br /> <span className="text-[#632EE3]">Productive</span>{" "}
          Apps
        </h1>
        <p className="text-[20px] text-justify md:text-center text-[#627382] w-11/12 lg:w-1/2 mx-auto">
          At HKS Store we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            className="btn btn-lg shadow bg-[#f5f5f5] text-[20px] font-semibold"
            href="https://play.google.com/store/games"
          >
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/?size=100&id=L1ws9zn2uD01&format=png&color=000000"
              alt=""
            />
            Play Store
          </a>
          <a
            className="btn btn-lg shadow bg-[#f5f5f5] text-[20px] font-semibold"
            href="https://www.apple.com/app-store/"
          >
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/?size=100&id=fKXXelWgP1B6&format=png&color=000000"
              alt=""
            />
            App Store
          </a>
        </div>
        <div className="flex justify-center">
          <img src="https://i.ibb.co.com/JR7CFLVN/hero.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
