import React from "react";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";

const courses = [
  {
    id: 1,
    title: "Program Specific",
    image:
      image1,
    description:
       <>
      Certificate, Executive, Post <br />
      Graduate Certificate
    </>
  },
  {
    id: 2,
    title: "Industry Specific",
    image:
      image2,
    description:
      "IT, Healthcare, Retail, Finance, Education, Manufacturing",
  },
  {
    id: 3,
    title: "Topic Specific",
    image:
      image3,
    description:
      "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
  },
  {
    id: 4,
    title: "Level Specific",
    image:
      image4,
    description:
      "Senior Leadership, Mid-Career Professionals, Freshers",
  },
];

function CourseSegmentation() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-bold text-[#0F172A]">
            Tailored{" "}
            <span className="text-[#1A73E8]">
              Course Segmentation
            </span>
          </h2>

          <p className="mt-4 text-lg md:text-lg text-gray-600">
            Explore{" "}
            <span className="text-[#1A73E8] font-medium">
              Custom-fit Courses
            </span>{" "}
            Designed to Address Every Professional Focus
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-[#1A73E8]">
                  {course.title}
                </h3>

                <p className="mt-2 text-sm leading-4 text-gray-700">
                  {course.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CourseSegmentation;