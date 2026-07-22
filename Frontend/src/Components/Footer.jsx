import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import { useState } from "react";
import EnquiryModal from "./Enquiry";

function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <footer className="bg-white pt-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">

          {/* Logo + Social Icons */}
          <div>
            <img
              src={logo}
              alt="Accredian"
              className="w-44"
            />

            <div className="flex items-center gap-5 mt-2 text-2xl text-gray-700">
              <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
              <FaLinkedinIn className="hover:text-blue-600 cursor-pointer" />
              <FaTwitter className="hover:text-blue-600 cursor-pointer" />
              <FaInstagram className="hover:text-pink-600 cursor-pointer" />
              <FaYoutube className="hover:text-red-600 cursor-pointer" />
            </div>
          </div>

          {/* Button */}
          <div className="text-center lg:text-right">
            <button onClick={() => setOpen(true)} className="bg-[#1A73E8] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Enquire Now
            </button>

            <p className="mt-2 text-gray-600 font-medium">
              Speak with our Advisor
            </p>
          </div>
        </div>

        <hr className="my-5 border-gray-300" />

        {/* Footer Links */}
        <div className="grid md:grid-cols-2 gap-10">

          <div>
            <h3 className="text-2xl font-bold mb-5">
              Accredian
            </h3>

            <ul className="space-y-2 text-gray-600 font-medium">
              <li className="hover:text-blue-600 cursor-pointer">About</li>
              <li className="hover:text-blue-600 cursor-pointer">Blog</li>
              <li className="hover:text-blue-600 cursor-pointer">
                Why Accredian
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-5">
              Contact Us
            </h3>

            <p >
              Email :
              <span className="text-[#1A73E8] ml-2">
                enterprise@accredian.com
              </span>
            </p>

            <p className="mt-4 text-gray-600 leading-5 font-medium">
              Office Address: 4th Floor, 250, Phase IV,
              Udyog Vihar, Sector 18,<br/>
              Gurugram, Haryana
            </p>
          </div>
        </div>

        <hr className="my-5 border-gray-300" />

        <p className="text-center text-gray-600 pb-6 font-medium">
          © 2026 Accredian A Brand of FullStack Education Pvt. Ltd.
          All Rights Reserved
        </p>

      </div>
    </footer>
    <EnquiryModal
  open={open}
  setOpen={setOpen}
/></>
  );
}

export default Footer;