import { useState } from "react";
import axios from "axios";
import { X } from "lucide-react";
import enquiryImg from "../assets/business-v2.webp";

const EnquiryModal = ({ open, setOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    domain: "",
    candidates: "",
    mode: "",
    location: "",
  });

  if (!open) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "http://localhost:8000/api/enquiry/create",
      formData
    );

    alert(response.data.message);

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      domain: "",
      candidates: "",
      mode: "",
      location: "",
    });

    setOpen(false);
  } catch (error) {
    console.log(error);

    alert(
      error.response?.data?.message || "Something went wrong!"
    );
  }
};

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl overflow-hidden max-w-5xl w-full h-[680px] grid md:grid-cols-2 relative">

        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4"
        >
          <X size={28} />
        </button>

        {/* Left Image */}
        <img
          src={enquiryImg}
          alt="Enquiry"
          className="hidden md:block w-full h-full object-cover"
        />

        {/* Right Form */}
        <div className="p-8 overflow-y-auto">
          <h2 className="text-4xl font-bold mb-8">
            Enquire Now
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-b outline-none py-2"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b outline-none py-2"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="+91"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border-b outline-none py-2"
              required
            />

            <input
              type="text"
              name="company"
              placeholder="Enter Company Name"
              value={formData.company}
              onChange={handleChange}
              className="w-full border-b outline-none py-2"
              required
            />

            <select
              name="domain"
              value={formData.domain}
              onChange={handleChange}
              className="w-full border-b outline-none py-2"
              required
            >
              <option value="">Select Domain</option>
              <option>Product Management</option>
              <option>CFO</option>
              <option>Data Science</option>
              <option>Artificial Intelligence</option>
              <option>Human Resources</option>
              <option>Strategy and Leadership</option>
              <option>General Management</option>
              <option>Business Management</option>
              <option>Digital Enterprise</option>
              <option>Finance</option>
              <option>Project Management</option>
              <option>Senior Management</option>
            </select>

            <input
              type="number"
              name="candidates"
              placeholder="Enter No. of Candidates"
              value={formData.candidates}
              onChange={handleChange}
              className="w-full border-b outline-none py-2"
              required
            />

            <select
              name="mode"
              value={formData.mode}
              onChange={handleChange}
              className="w-full border-b outline-none py-2"
              required
            >
              <option value="">Select Mode of Delivery</option>
              <option>Online</option>
              <option>Offline</option>
              <option>Hybrid</option>
            </select>

            <input
              type="text"
              name="location"
              placeholder="Eg: Gurgaon, Delhi, India"
              value={formData.location}
              onChange={handleChange}
              className="w-full border-b outline-none py-2"
              required
            />

            <button
              type="submit"
              className="w-full bg-[#1A73E8] hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Submit
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquiryModal;