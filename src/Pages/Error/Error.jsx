import React from "react";
import Lottie from "lottie-react";
import errorCat from "../../assets/errorCat.json";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
const Error = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="w-11/12 mx-auto flex justify-center items-center">
        <Lottie animationData={errorCat}></Lottie>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Error;
