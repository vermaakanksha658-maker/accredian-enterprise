import React from "react";
import acredian from "../assets/accredian-edge-usp-v3.svg";

const Acredian = () => {
  return (
    <section id="edge" className="bg-white py-20 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h3 className="text-2xl mx-1 sm:text-4xl font-bold text-gray-900 leading-tight">
            The <span className="text-[#1A73E8]">Accredian Edge</span>
          </h3>

          <p className="text-sm sm:text-lg text-gray-700 mt-3 m-auto mx-1">
            Key Aspects of{" "}
            <span className="text-[#1A73E8] font-medium">
              Our Strategic Training
            </span>
          </p>
        </div>
<div className="w-full flex justify-center mt-16">
    <img src={acredian} alt="acredian" className="w-[100%]  h-auto rounded-lg" />
</div>
        
      
      </div>
    </section>
  );
};

export default Acredian;