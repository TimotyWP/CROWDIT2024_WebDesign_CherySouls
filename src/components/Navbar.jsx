import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { close, logo, menu } from "../assets";
import { navLinks } from '../constants';

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (id, title) => {
    setActive(title);
    if (location.pathname === "/") {
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollToId: id } });
    }
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar pl-8">
      <img src={logo} alt="" className="w-[124px] h-[32px]" />

      <ul className='list-none sm:flex hidden justify-end items-center flex-1 pr-20 '>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"} ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
            onClick={() => handleNavClick(nav.id, nav.title)}
          >
            {nav.title}
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img 
          src={toggle ? close : menu}
          alt="menu"
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${!toggle ? "hidden" : "flex"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"} ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}
                onClick={() => {
                  setToggle(false);
                  handleNavClick(nav.id, nav.title);
                }}
              >
                {nav.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
