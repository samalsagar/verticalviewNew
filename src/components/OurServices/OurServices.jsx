import React from "react";
import "./OurServices.css";
import Engineer from "../../assets/Engineer.jpeg";

function OurServices() {
  return (
    <>
      <div className="relative main w-full h-auto mt-5 rounded-3xl bg-white">
        <div className="flex flex-col md:flex-row justify-between items-center pt-5 md:pt-10">
          {/* Text Section */}
          <div className="md:w-1/2 sm:ml-0 md:ml-20 text-center md:text-center">
            <div>
                <div className="p-3  border-black font-semibold rounded-xl box mb-5 w-72 ">Easy Documentation</div>
                <div className="p-3  border-black font-semibold rounded-xl box mb-5 w-72 ">Execution by Expertise</div>
                <div className="p-3  border-black font-semibold rounded-xl box mb-5 w-72 ">In Time Delivery</div>
                <div className="p-3  border-black font-semibold rounded-xl box mb-5 w-72 ">After Sales Service</div>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-5 md:mt-0 md:w-3/5">
            <img
              src={Engineer}
              alt="Engineer"
              className="w-full rounded-lg object-scale-down max-h-[300px] md:max-h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default OurServices;
