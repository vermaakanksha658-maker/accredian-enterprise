import { BarChart3, Monitor, MonitorPlay } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: <BarChart3 size={30} />,
    title: "Skill Gap Analysis",
    description:<>
      "Assess team skill gaps and <br/>developmental needs.",</>
  },
  {
    id: 2,
    icon: <Monitor size={30} />,
    title: "Customized Training Plan",
    description:<>
      "Create a tailored roadmap addressing <br/>organizational goals.",</>
  },
  {
    id: 3,
    icon: <MonitorPlay size={30} />,
    title: "Flexible Program Delivery",
    description:<>
      "Deliver adaptable programs aligned<br/> with industry and organizational<br/> needs.",</>
  },
];

function DeliverResults() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-bold text-[#111827]">
            How We{" "}
            <span className="text-[#1A73E8]">
              Deliver Results
            </span>{" "}
            That Matter?
          </h2>

          <p className="mt-4 text-lg md:text-xl text-gray-600">
            A Structured Three-Step Approach to{" "}
            <span className="text-[#1A73E8] font-medium">
              Skill Development
            </span>
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-[300px_300px_300px] justify-center gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative max-w-[300px] bg-[#F3F8FF] border border-[#1A73E8] rounded-2xl shadow-md p-5 text-center hover:shadow-xl transition"
            >
              {/* Step Number */}
              <div className="absolute top-4 left-4 w-9 h-9 rounded-full border-2 border-[#1A73E8] bg-white flex items-center justify-center font-bold text-[#1A73E8]">
                {step.id}
              </div>

              {/* Left Accent */}
              <div className="absolute left-0 top-16 h-32 w-2 bg-[#1A73E8] rounded-r-full"></div>

              {/* Right Accent */}
              <div className="absolute right-0 top-16 h-32 w-2 bg-[#1A73E8] rounded-l-full"></div>

              {/* Icon */}
              <div className="w-15 h-15 rounded-full bg-[#1A73E8] text-white flex items-center justify-center mx-auto shadow-lg">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="mt-3 text-xl font-bold text-gray-900">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm font-medium text-gray-600 leading-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DeliverResults;