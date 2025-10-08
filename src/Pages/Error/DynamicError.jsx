import React from "react";
import Lottie from "lottie-react";
import errorwithbear from "../../assets/errorwithbear.json";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const DynamicError = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto py-10 flex justify-center items-center">
        <Lottie animationData={errorwithbear}></Lottie>
      </div>
    </div>
  );
};

export default DynamicError;
