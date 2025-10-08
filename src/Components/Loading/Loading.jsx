import Lottie from "lottie-react";
import React from "react";
import loadingOne from "../../assets/loadingOne.json";

const Loading = () => {
  return (
    <div className="col-span-4 flex justify-center items-center">
      <Lottie animationData={loadingOne}></Lottie>
    </div>
  );
};

export default Loading;
