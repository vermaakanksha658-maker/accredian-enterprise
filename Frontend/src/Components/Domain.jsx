import {
  Lightbulb,
  Brain,
  Users,
    ChartColumnIncreasing,

  Settings,
  Globe,
  CreditCard,
} from "lucide-react";

const expertise = [
  {
    id: 1,
    title: "Product & Innovation Hub",
    icon: <Lightbulb size={52} className="text-blue-600 mt-2" />,
  },
  {
    id: 2,
    title: "Gen-AI Mastery",
    icon: <Brain size={52} className="text-blue-600 mt-2" />,
  },
  {
    id: 3,
    title: "Leadership Elevation",
    icon: <Users size={52} className="text-blue-600 mt-2" />,
  },
  {
    id: 4,
    title: "Tech & Data Insights",
    icon: <  ChartColumnIncreasing size={52} className="text-blue-600 mt-2" />,
  },
  {
    id: 5,
    title: "Operations Excellence",
    icon: <Settings size={52} className="text-blue-600 mt-2" />,
  },
  {
    id: 6,
    title: "Digital Enterprise",
    icon: <Globe size={52} className="text-blue-600 mt-2" />,
  },
  {
    id: 7,
    title: "Fintech Innovation Lab",
    icon: <CreditCard size={52} className="text-blue-600 mt-2" />,
  },
];

function DomainExpertise() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0F172A]">
            Our{" "}
            <span className="text-[#1A73E8]">
              Domain Expertise
            </span>
          </h2>

          <p className="text-sm sm:text-lg text-gray-700 mt-3 m-auto mx-1">
            <span className="text-[#1A73E8]">
              Specialized Programs
            </span>{" "}
            Designed to Fuel Innovation
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">

          {expertise.slice(0, 6).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center"
            >
              {item.icon}

              <h3 className="mt-6 text-xl mb-2 font-semibold text-center text-[#0F172A]">
                {item.title}
              </h3>
            </div>
          ))}

        </div>

        {/* Last Card */}
        <div className="flex justify-center mt-8">
          <div className="w-full sm:w-[380px] bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center">
            {expertise[6].icon}

            <h3 className="mt-6 text-xl font-semibold text-center text-[#0F172A]">
              {expertise[6].title}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DomainExpertise;