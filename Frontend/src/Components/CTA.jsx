import { Headset, ArrowRight } from "lucide-react";
import EnquiryModal from "./Enquiry";
import { useState } from "react";

function CTASection() {
  const [open, setOpen] = useState(false);
  return (
    <>
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        <div className="relative overflow-hidden rounded-2xl bg-[#1A73E8] px-10 py-10">

          {/* Background Circles */}
          <div className="absolute -right-20 -bottom-28 w-[550px] h-[550px] rounded-full border-[70px] border-blue-400/20"></div>

          <div className="absolute -right-8 -bottom-16 w-[400px] h-[400px] rounded-full border-[60px] border-blue-300/20"></div>

          <div className="absolute right-16 -bottom-10 w-[260px] h-[260px] rounded-full border-[50px] border-blue-200/20"></div>

          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-10">

            {/* Left */}
            <div className="flex items-center gap-6">

              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                <Headset size={45} className="text-[#1A73E8]" />
              </div>

              <div>
                <h2 className="text-white text-3xl font-bold">
                  Want to Learn More About Our Training Solutions?
                </h2>

                <p className="text-blue-100 text-lg mt-1 font-medium">
                  Get Expert Guidance for Your Team's Success!
                </p>
              </div>

            </div>

            {/* Button */}

            <button onClick={() => setOpen(true)} className="bg-white text-[#1A73E8] px-10 py-3 rounded-xl font-bold text-xl flex items-center gap-3 hover:bg-gray-100 transition">
              Contact Us
              <ArrowRight size={22} />
            </button>

          </div>

        </div>

      </div>
    </section>
    <EnquiryModal
  open={open}
  setOpen={setOpen}
/></>
  );
}

export default CTASection;