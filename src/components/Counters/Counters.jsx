import React from "react";

function Counters() {
  return (
    <>
      <div className="relative flex flex-wrap justify-around items-center text-white w-full h-auto mt-5 p-5 rounded-3xl bg-[#662D91]">
        {/* Counter 1 */}
        <div className="flex flex-col items-center m-4">
          <h3 className="text-3xl font-bold">25+</h3>
          <h3 className="text-lg font-medium">Collaborations</h3>
        </div>
        {/* Counter 2 */}
        <div className="flex flex-col items-center m-4">
          <h3 className="text-3xl font-bold">17+</h3>
          <h3 className="text-lg font-medium">Constructions</h3>
        </div>
        {/* Counter 3 */}
        <div className="flex flex-col items-center m-4">
          <h3 className="text-3xl font-bold">26+</h3>
          <h3 className="text-lg font-medium">Interior Decors</h3>
        </div>
        {/* Counter 4 */}
        <div className="flex flex-col items-center m-4">
          <h3 className="text-3xl font-bold">53+</h3>
          <h3 className="text-lg font-medium">Designs & Plans</h3>
        </div>
        {/* Counter 5 */}
        <div className="flex w-32 flex-col items-center m-4">
          <h3 className="text-3xl font-bold">8+</h3>
          <h3 className="text-lg font-medium">Cities</h3>
        </div>
        {/* Counter 6 */}
        <div className="flex flex-col items-center m-4">
          <h3 className="text-3xl font-bold">4</h3>
          <h3 className="text-lg font-medium">Office Spaces</h3>
        </div>
      </div>
    </>
  );
}

export default Counters;
