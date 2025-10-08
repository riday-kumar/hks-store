import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router";
import "./Root.css";

const Root = () => {
  return (
    <div className="site-font flex flex-col min-h-screen">
      <Navbar></Navbar>
      <div className="bg-[#f5f5f5] flex-1">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Root;
