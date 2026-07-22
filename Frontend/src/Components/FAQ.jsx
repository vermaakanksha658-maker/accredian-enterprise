import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import EnquiryModal from "./Enquiry";

function FAQ() {
    const [open, setOpen] = useState(false);

  const faqData = {
    course: [
      {
        question:
          "What types of corporate training programs does Accredian offer?",
        answer:
          "Accredian offers customized corporate training programs in AI, Data Science, Cloud Computing, Leadership, Product Management, Digital Marketing, Cybersecurity, and many more domains.",
      },
      {
        question: "What domain specializations are available?",
        answer:
          "We provide specialized training across Technology, Healthcare, Finance, Retail, Manufacturing, Analytics, Product, and Leadership domains.",
      },
    ],

    delivery: [
      {
        question: "Can the courses be customized for specific industries or teams?",
        answer:
"Absolutely! Our programs are fully customizable, including content, format, timing, and industry-specific focus, to align with your organization’s goals."      },
      {
        question: " Who are the instructors for these programs ?",
        answer:
          "Our courses are delivered by industry leaders, experienced mentors, and domain experts with real-world insights.",
      },
      {
        question: "What formats are the programs delivered in?",
        answer:
          "Programs can be delivered in various formats, including online, offline, hybrid, and on-demand, based on your team's preferences and requirements.",
      }
    ],

    miscellaneous: [
      {
        question: "What is the ideal team size for corporate training?",
        answer:
"Our programs are flexible and can cater to teams of any size, from small groups to large organizational cohorts."


      },
      {
        question: "How do we get started with Accredian?",
        answer:
          "Get started with Accredian by contacting us or requesting a quote on our website. Our team will guide you through the process—from skill gap analysis to a custom program tailored to your needs.",
      },
    ],
  };

  const [activeCategory, setActiveCategory] = useState("course");
  const [openQuestion, setOpenQuestion] = useState(null);

  const questions = faqData[activeCategory];

  const handleCategory = (category) => {
    setActiveCategory(category);
    setOpenQuestion(null);
  };

  const toggleQuestion = (index) => {
    if (openQuestion === index) {
      setOpenQuestion(null);
    } else {
      setOpenQuestion(index);
    }
  };

  return (
    <>
    <section id="faqs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="mb-16">
          <h2 className="text-4xl md:text-4xl font-bold ">
            Frequently Asked{" "}
            <span className="text-blue-600">Questions</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">

          {/* Left Side */}

          <div className="space-y-5 px-8">

            <button
              onClick={() => handleCategory("course")}
              className={`w-full max-w-[300px] py-5 rounded-xl border text-lg font-semibold transition
              ${
                activeCategory === "course"
                  ? "bg-white text-[#1A73E8] shadow-lg"
                  : "bg-white text-gray-700"
              }`}
            >
              About the Course
            </button>

            <button
              onClick={() => handleCategory("delivery")}
              className={`w-full max-w-[300px] py-5 rounded-xl border text-lg font-semibold transition
              ${
                activeCategory === "delivery"
                  ? "bg-white text-[#1A73E8] shadow-lg"
                  : "bg-white text-gray-700"
              }`}
            >
              About the Delivery
            </button>

            <button
              onClick={() => handleCategory("miscellaneous")}
              className={`w-full max-w-[300px] py-5 rounded-xl border text-lg font-semibold transition
              ${
                activeCategory === "miscellaneous"
                  ? "bg-white text-[#1A73E8] shadow-lg"
                  : "bg-white text-gray-700"
              }`}
            >
              Miscellaneous
            </button>

          </div>

          {/* Right Side */}

          <div className="lg:col-span-2">

            {questions.map((item, index) => (
              <div
                key={index}
                className="border-b py-6"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full flex justify-between items-center"
                >
                  <h3 className={`text-left text-lg md:text-lg font-semibold transition-colors duration-300 ${
    openQuestion === index ? "text-[#1A73E8]" : "text-black"}`}>
                    {item.question}
                  </h3>

                  {openQuestion === index ? (
                    <ChevronUp size={24} className="text-[#1A73E8]"/>
                  ) : (
                    <ChevronDown size={24} className="text-gray-700"/>
                  )}
                </button>

                {openQuestion === index && (
                  <div className="mt-5">
                    <p className="text-gray-600 text-sm leading-5 font-medium">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}

          </div>
        </div>

        {/* Button */}

        <div className="flex justify-center mt-16">
          <button   onClick={() => setOpen(true)}
 className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-3 rounded-lg font-semibold">
            Enquire Now
          </button>
        </div>

      </div>
    </section>
    <EnquiryModal
  open={open}
  setOpen={setOpen}
/>
</>
  );
}

export default FAQ;