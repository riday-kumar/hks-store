import React from "react";
import { Link } from "react-router";

const DynamicError = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto py-10 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-red-500">App Not Found</h1>
        <br />
        <Link to="/" className="btn btn-info">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default DynamicError;
