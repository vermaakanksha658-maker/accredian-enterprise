import { useState } from "react";
import logo from "../assets/logo.png"

function Header() {
  const [active, setActive] = useState("Home");

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "Stats", link: "#stats" },
    { name: "Clients", link: "#clients" },
    { name: "Accredian Edge", link: "#edge" },
    { name: "CAT", link: "#cat" },
    { name: "How It Works", link: "#works" },
    { name: "FAQs", link: "#faqs" },
    { name: "Testimonials", link: "#testimonials" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md py-6 px-6 md:px-14">
      <div className="max-w-[85rem] mx-auto flex justify-between items-center">

        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="h-7 w-auto md:h-10 cursor-pointer"
        />

        {/* Navbar */}
        <ul className="hidden md:flex justify-end items-center flex-1 space-x-8">

          {navLinks.map((item) => (
            <li key={item.name}>
              <a
  href={item.link}
  onClick={() => setActive(item.name)}
  className={`relative pb-2 text-[16px] font-semibold transition-all duration-300 ${
    active === item.name
      ? "text-[#1A73E8]"
      : "text-black hover:text-[#1A73E8]"
  }`}
>
  {item.name}

  <span
    className={`absolute left-0 -bottom-1 h-[3px] bg-[#1A73E8] rounded-full transition-all duration-300 ${
      active === item.name ? "w-full" : "w-0"
    }`}
  ></span>
</a>
            </li>
          ))}

        </ul>

      </div>
    </header>
  );
}

export default Header;