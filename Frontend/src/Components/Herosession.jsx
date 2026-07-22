import heroImage from "../assets/hero.png";
import { CheckCircle } from "lucide-react";
import corporateHero from "../assets/corporate-big-hero-v4.webp";
import { useState } from "react"; 
import EnquiryModal from "./Enquiry";

const Hero = () => {
    const [open, setOpen] = useState(false);

  return (
    <>
    <section id="home" className="py-10 px-5 md:px-6 lg:px-10">

      <div className="max-w-7xl mx-auto bg-[#F8FBFF] border border-gray-200 rounded-[30px] shadow-xl my-4 mt-20 sm:px-4 mb-10 md:mb-0">
        <div className="rounded-lg md:rounded-3xl bg-blue-50 flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-between gap-4 sm:gap-4 md:gap-8 lg:gap-12 shadow-card overflow-visible">

          {/* Left Side */}
          <div className="px-8 md:px-14 py-12 gap-6">
           <h1
  className="text-[34px] md:text-[48px] lg:text-[64px]
  font-semibold
  leading-[1.05]
  tracking-[-2px]
  max-w-[720px]"
>
  <span className="whitespace-nowrap">
    Next-Gen <span className="text-[#1A73E8]">Expertise</span>
  </span>
  <br />
  For Your <span className=" text-[#1A73E8]">Enterprise</span>
</h1>

            <p className="mt-10 font-medium md:font-medium text-sm sm:text-lg lg:text-xl text-paleBlack max-w-full p-2 sm:p-0 w-full sm:max-w-[350px] text-center sm:text-start font-circular" >
              Cultivate high-performance
              <br/> teams through expert learning.
            </p>

            <div className="flex flex-wrap gap-6 mt-8 text-gray-900">

              <div className="flex items-center gap-2">
                
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check w-6 h-6  text-green-600"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                <span>Tailored Solutions</span>
              </div>

              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check w-6 h-6  text-green-600"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                <span>Industry Insights</span>
              </div>

              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check w-6 h-6  text-green-600"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                <span>Expert Guidance</span>
              </div>

            </div>

            <button         onClick={() => setOpen(true)}
 className="mt-10 bg-[#1A73E8] hover:bg-[#1A73E8] text-white px-8 py-2 rounded-xl text-lg font-semibold transition">
              Enquire Now
            </button>

          </div>

          {/* Right Side */}

          <div className="flex justify-center lg:justify-end">
            <img
              src={corporateHero}
              alt="Hero"
              className="w-full max-w-xl object-contain"
            />
          </div>

        </div>

      </div>
    </section>
    <EnquiryModal
  open={open}
  setOpen={setOpen}
/>
</>
  );
};

export default Hero;