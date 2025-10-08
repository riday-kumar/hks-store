import React from "react";
import { useParams } from "react-router";
import useDataFetch from "../../Hooks/useDataFetch";
import SingleApp from "../SingleApp/SingleApp";
import DynamicError from "../Error/DynamicError";
import Loading from "../../Components/Loading/Loading";

const AppDetails = () => {
  const [application, loading] = useDataFetch([]);
  const getId = useParams();

  const filteredData = application.filter((app) => app.id === Number(getId.id));
  //   console.log(filteredData);

  if (loading) {
    return <Loading></Loading>;
  }

  if (filteredData.length === 0) {
    return <DynamicError></DynamicError>;
  }

  return (
    <div className="w-11/12 mx-auto">
      {filteredData.map((singleApplication) => (
        <SingleApp
          key={singleApplication.id}
          singleApplication={singleApplication}
        />
      ))}
    </div>
  );
};

export default AppDetails;
