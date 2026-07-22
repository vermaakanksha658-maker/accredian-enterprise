import { useState } from "react";
import adplogo from "../assets/adp.svg";
import bayerlogo from "../assets/bayer.svg";
import rel from "../assets/rel.png";

function Testimonials() {
  const [page, setPage] = useState(0);

  const testimonials = [
    {
      id: 1,
      logo: adplogo,
      text: `"We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process."`,
    },
    {
      id: 2,
      logo: bayerlogo,
      text: `"Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way."`,
    },
    {
      id: 3,
      logo: rel,
      text: `"Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees."`,
    },
  ];

  const visibleTestimonials =
    page === 0
      ? testimonials.slice(0, 2)
      : testimonials.slice(1, 3);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-3xl font-bold text-[#111827]">
            Testimonials from{" "}
            <span className="text-[#1A73E8] font-bold">Our Partners</span>
          </h2>

          <p className="mt-4 text-lg md:text-xl text-gray-600">
            What{" "}
            <span className="text-[#1A73E8] font-medium">
              Our Clients
            </span>{" "}
            Are Saying
          </p>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {visibleTestimonials.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition duration-300"
            >
              <img
                src={item.logo}
                alt="Company Logo"
                className="h-10 object-contain mb-8"
              />

              <p className="text-gray-600 text-sm leading-6 font-medium mb-8">
                {item.text}
              </p>
            </div>
          ))}

        </div>

        {/* Pagination Dots */}

        <div className="flex justify-center gap-3 mt-10">

          <button
            onClick={() => setPage(0)}
            className={`w-3 h-3 rounded-full transition ${
              page === 0
                ? "bg-blue-600"
                : "bg-gray-300"
            }`}
          />

          <button
            onClick={() => setPage(1)}
            className={`w-3 h-3 rounded-full transition ${
              page === 1
                ? "bg-blue-600"
                : "bg-gray-300"
            }`}
          />

        </div>

      </div>
    </section>
  );
}

export default Testimonials;