import { Lightbulb, MonitorCog, Cog } from "lucide-react";
import catImage from "../assets/catV2.svg";

function CATFramework() {
  return (
    <section id="cat" className="py-20 bg-[#F8FBFF]">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0F172A]">
            The <span className="text-[#1A73E8]">CAT Framework</span>
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Our Proven Approach to{" "}
            <span className="text-[#1A73E8]">
              Learning Excellence
            </span>
          </p>
        </div>

        {/* Cards */}
        <div className="w-full flex justify-center mt-16">
          <img src={catImage} alt="Concept" className="mx-auto w-[90%] sm:w-[70%] h-auto rounded-lg" />

          {/* Card 1 */}
          {/* <div className="relative border-[8px] border-blue-600 rounded-full h-80 w-80 mx-auto flex flex-col items-center justify-center text-center">

            <Lightbulb className="text-[#1A73E8]" size={55} />

            <h3 className="text-4xl font-bold mt-6">
              Concept
            </h3>

            <p className="mt-4 text-sm text-gray-700 px-8">
              Foundational knowledge <br/>for deep subject<br/> understanding.
            </p>
          </div> */}

          {/* Card 2 */}
          {/* <div className="relative border-[8px] border-blue-600 rounded-full h-80 w-80 mx-auto flex flex-col items-center justify-center text-center">

            <MonitorCog className="text-[#1A73E8]" size={55} />

            <h3 className="text-4xl font-bold mt-6">
              Application
            </h3>

            <p className="mt-4 text-sm text-gray-700 px-8">
              Practical implementation <br/> through real-world <br/>scenarios.
            </p>
          </div> */}

          {/* Card 3 */}
          {/* <div className="relative border-[8px] border-blue-600 rounded-full h-80 w-80 mx-auto flex flex-col items-center justify-center text-center">

            <Cog className="text-[#1A73E8]" size={55} />

            <h3 className="text-4xl font-bold mt-6">
              Tools
            </h3>

            <p className="mt-4 text-sm text-gray-700 px-8">
              Resources and <br/>techniques for effective <br/> skill mastery.
            </p>
          </div> */}

        </div>

      </div>
    </section>
  );
}

export default CATFramework;