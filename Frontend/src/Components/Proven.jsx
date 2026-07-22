import React from "react"; 
import rel from "../assets/rel.png";
import hcl from "../assets/hcl.png";
import ibmlogo from "../assets/ibm.png";
import criflogo from "../assets/crif.png";  
import adplogo from "../assets/adp.svg";
import bayerlogo from "../assets/bayer.svg";
const companies = [
  {
    id: 1,
    name: "Reliance",
    logo: rel,
  },
  {
    id: 2,
    name: "HCL",
    logo: hcl,
  },
  {
    id: 3,
    name: "IBM",
    logo: ibmlogo,
  },
  {
    id: 4,
    name: "CRIF",
    logo: criflogo,
  },
  {
    id: 5,
    name: "ADP",
    logo: adplogo,
  },
  {
    id: 6,
    name: "Bayer",
    logo: bayerlogo,
  },
];

function ProvenPartnerships() {
  return (
    <section id="clients" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#0F172A]">
            Our Proven{" "}
            <span className="text-[#1A73E8]">Partnerships</span>
          </h2>

          <p className="text-sm sm:text-lg text-gray-700 mt-3 m-auto mx-1">
            Successful Collaborations With the{" "}
            <span className="text-[#1A73E8]">
              Industry's Best
            </span>
          </p>
        </div>

        {/* Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mt-20">
          {companies.map((company) => (
            <div
              key={company.id}
              className="flex justify-center items-center"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-20 w-30 object-contain hover:scale-105 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProvenPartnerships;