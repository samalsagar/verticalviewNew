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
              className="w-full rounded-lg object-scale-down max-h-96 text-left"
            />
          </div>
          <div className="line"></div>
          <div className="flex flex-col md:mt-0 md:w-3/5 text-left ms-14">
            <div className="">
              <h3 className="text-4xl font-bold text-gray-800">
                Patia, Bhubaneswar
              </h3>
            </div>
            <div className="middle mt-10">
              <h5 className=" text-gray-600 text-2xl">
                This is an amazing infrastructure, with proper ventilation,<br />
                all-direction breeze flow, natural light & managed space.
              </h5>
            </div>

            <div className="mt-10">
              <h4 className=" text-gray-700 text-2xl">
                3BHK Residential Space
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Details;
