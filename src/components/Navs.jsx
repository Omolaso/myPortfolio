import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SideBar from "./Sidebar";
import { motion } from "framer-motion";
import Logo from "../images/logo.png";
import { ExperienceTabContext } from "./LandingPage";

// FRAMER MOTION
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5, //all children
      staggerChildren: 0.2, //each child
    },
  },
};

const item = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const headerItem = {
  hidden: { y: 0, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
// FRAMER MOTION

export const resumeDriveLink = encodeURI(
  "https://drive.google.com/file/d/1ehrQP0-v32fdHx1iWcNkEq_E4DwafLnx/view?usp=sharing"
);

export const navLinkArray = [
  { name: "About Me", path: "#about", function: false },
  { name: "Places I've worked", path: "#experience", function: true },
  { name: "Contact Me", path: "#contact", function: false },
];

const Navs = ({ sidebar, showSidebar }) => {
  const { setValue } = useContext(ExperienceTabContext);

  const handleChangeExperienceTab = () => {
    setValue("1");
  };

  return (
    <div className="w-full">
      <header className="flex items-center justify-between w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="hidden md:block cursor-pointer"
        >
          <motion.a href="/" variants={headerItem} className="">
            <img
              src={Logo}
              alt="logo"
              className="border-2 border-veryLightGrey rounded-[50%] w-[40px]"
            />
          </motion.a>
        </motion.div>

        <nav className="block md:hidden w-full">
          <SideBar sidebar={sidebar} showSidebar={showSidebar} />
        </nav>

        <motion.ul
          variants={container}
          initial="hidden"
          animate="visible"
          className="hidden md:flex items-center justify-between flex-auto max-w-lg text-lightGrey text-sm font-medium"
        >
          {navLinkArray.map((link) =>
            link.function ? (
              <motion.li key={link.path} variants={item}>
                <a
                  href={link.path}
                  onClick={() => handleChangeExperienceTab()}
                  className="hover:text-lightGreen hover:transition ease-in-out"
                >
                  {link.name}
                </a>
              </motion.li>
            ) : (
              <motion.li key={link.path} variants={item}>
                <a
                  href={link.path}
                  className="hover:text-lightGreen hover:transition ease-in-out"
                >
                  {link.name}
                </a>
              </motion.li>
            )
          )}

          <motion.li variants={item}>
            <a href={resumeDriveLink} target="_blank" rel="noopener noreferrer">
              <button
                id="resume-btn"
                className="border border-lightGreen py-2 px-3 rounded-md text-lightGreen hover:bg-opacity-80"
              >
                Resume
              </button>
            </a>
          </motion.li>
        </motion.ul>
      </header>
    </div>
  );
};

export default Navs;
