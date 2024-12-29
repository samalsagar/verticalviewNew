import React from "react";
import Map from "../../assets/Map.jpeg";
import "./Details.css";

function Details() {
  return (
    <>
      <div className="relative main w-full h-auto mt-5 rounded-3xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 sm:ml-0  text-center md:text-center">
            <img
              src={Map}
              alt="Map"
              className="w-full rounded-lg object-scale-down max-h-[300px] md:max-h-auto"
            />
          </div>
          <div className="line"></div>
          <div className="flex flex-col mt-5 md:mt-0 md:w-3/5 text-left space-y-2">
            <h3 className="text-xl font-bold text-gray-800">
              Patia, Bhubaneswar
            </h3>
            <h5 className="text-sm text-gray-600">
              This is an amazing infrastructure, with proper ventilation,
              all-direction breeze flow, natural light & managed space.
            </h5>
            <h4 className="text-base font-medium text-gray-700">
              3BHK Residential Space
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
export default Details;
