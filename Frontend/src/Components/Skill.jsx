import {
  MonitorCheck,
  MonitorX,
  GraduationCap,
  BriefcaseBusiness,
} from "lucide-react";
import human from "../assets/imagehuman.png";

const features = [
  {
    id: 1,
    icon: <MonitorCheck size={50} />,
    title: "Tech Professionals",
    desc: "Enhance expertise, embrace tech, drive innovation.",
  },
  {
    id: 2,
    icon: <MonitorX size={50} />,
    title: "Non-Tech Professionals",
    desc: "Adapt digitally, collaborate in tech environments.",
  },
  {
    id: 3,
    icon: <GraduationCap size={50} />,
    title: "Emerging Professionals",
    desc: "Develop powerful skills for rapid career growth.",
  },
  {
    id: 4,
    icon: <BriefcaseBusiness size={50} />,
    title: "Senior Professionals",
    desc: "Strengthen leadership, enhance strategic decisions.",
  },
];

function SkillEnhancement() {
  return (
    <section id="works"className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="bg-[#1A73E8] rounded-2xl overflow-hidden shadow-lg">

          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Left Side */}
            <div className="relative flex flex-col justify-between pl-12">

              <div className="pt-12">
                <p className="text-white text-xl mb-2">
                  Who Should Join?
                </p>

                <h2 className="text-white text-4xl font-bold leading-tight">
                  Strategic Skill Enhancement
                </h2>
              </div>

              <img
                src={human}
                alt="Students"
                className="w-80 mt-10 object-contain"
              />

            </div>

            {/* Right Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-12 mb-12">

              {features.map((item) => (
                <div key={item.id} className="text-white">

                  <div className="mb-4">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-5 text-blue-100">
                    {item.desc}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default SkillEnhancement;