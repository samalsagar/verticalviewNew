import React from "react";
import './Counters.css'
function Counters() {
  return (
    <>
      <div className="relative flex flex-wrap justify-around items-center text-white w-full h-auto mt-5 p-1 rounded-3xl bg-[#662D91]">
        {/* Counter 1 */}
        <div className="flex flex-col items-center m-4">
          <h3 className="text-3xl font-bold text-shadow">25+</h3>
          <h3 className="text-lg font-medium text-shadow">Collaborations</h3>
        </div>
        {/* Counter 2 */}
        <div className="flex flex-col items-center m-4">
          <h3 className="text-3xl font-bold text-shadow">17+</h3>
          <h3 className="text-lg font-medium text-shadow">Constructions</h3>
        </div>
        {/* Counter 3 */}
        <div className="flex flex-col items-center m-4">
          <h3 className="text-3xl font-bold text-shadow">26+</h3>
          <h3 className="text-lg font-medium text-shadow">Interior Decors</h3>
        </div>
        {/* Counter 4 */}
        <div className="flex flex-col items-center m-4">
          <h3 className="text-3xl font-bold text-shadow">53+</h3>
          <h3 className="text-lg font-medium text-shadow">Designs & Plans</h3>
        </div>
        {/* Counter 5 */}
        <div className="flex w-32 flex-col items-center m-4">
          <h3 className="text-3xl font-bold text-shadow">8+</h3>
          <h3 className="text-lg font-medium text-shadow">Cities</h3>
        </div>
        {/* Counter 6 */}
        <div className="flex flex-col items-center m-4">
          <h3 className="text-3xl font-bold text-shadow">4+</h3>
          <h3 className="text-lg font-medium text-shadow">Office Spaces</h3>
        </div>
      </div>
    </>
  );
}

export default Counters;
