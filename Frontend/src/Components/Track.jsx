const stats = [
  {
    number: "10K+",
    text: "Professionals Trained For Exceptional Career Success",
  },
  {
    number: "200+",
    text: "Sessions Delivered With Unmatched Learning Excellence",
  },
  {
    number: "5K+",
    text: "Active Learners Engaged In Dynamic Courses",
  },
];

const TrackRecord = () => {
  return (
    <section id="stats" className="bg-white py-20 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h3 className="text-2xl mx-1 sm:text-4xl font-bold text-gray-900 leading-tight">
            Our <span className="text-[#1A73E8]">Track Record</span>
          </h3>

          <p className="text-sm sm:text-lg text-gray-700 mt-3 m-auto mx-1">
            The Numbers Behind{" "}
            <span className="text-[#1A73E8] font-medium">
              Our Success
            </span>
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 px-10">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center py-6 gap-3
              ${
                index !== stats.length - 1
                  ? "md:border-r border-gray-300"
                  : ""
              }`}
            >
              {/* Number Badge */}
<div className="bg-blue-100 text-[#1A73E8] text-2xl font-bold px-4 py-1 rounded-full">                {item.number}
              </div>

              {/* Text */}
<p className="text-base leading-7 font-medium text-gray-700 max-w-[300px]">                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;