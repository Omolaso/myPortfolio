import React, { useState, useEffect } from "react";
import "../styles/SharedLayout.css";
import Navs from "./Navs";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const SharedLayout = () => {
  const [sidebar, showSidebar] = useState(false);
  const [scrollUpBtn, setScrollUpBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.documentElement.scrollTop > 50 ||
        document.body.scrollTop > 50
      ) {
        setScrollUpBtn(true);
      } else {
        setScrollUpBtn(false);
      }
    });
  }, [scrollUpBtn]);

  function scrollBackUp() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  return (
    <main className="flex flex-col gap-y-6 md:gap-y-8 min-h-screen bg-black relative">
      <section
        id="home"
        className="flex items-center justify-center w-full min-h-[10vh] md:py-4 px-8 md:px-12"
      >
        <Navs sidebar={sidebar} showSidebar={showSidebar} />
      </section>

      <section className="flex items-center justify-center min-h-[90vh] px-8 md:px-12">
        <div
          className={
            sidebar
              ? "blur-lg transition-[all] flex flex-col justify-between"
              : "flex flex-col justify-between"
          }
        >
          <div className="flex items-start justify-start min-h-screen">
            <Home />
          </div>

          <div
            id="about"
            className="flex items-center justify-start min-h-screen py-4"
          >
            <About />
          </div>

          <div id="projects" className="pt-12 min-h-screen">
            <Projects />
          </div>

          <div
            id="contact"
            className="flex items-center justify-center relative min-h-screen"
          >
            <Contact />
          </div>
        </div>
      </section>

      <section className="w-full absolute bottom-0 px-2">
        <Footer />
      </section>

      <div
        className={
          scrollUpBtn
            ? "fixed right-4 top-[85%] duration-300 ease-in-out z-50"
            : "fixed right-[-100%] top-[85%] duration-300 ease-in-out"
        }
      >
        <button
          title="Back Up"
          type="button"
          onClick={() => scrollBackUp()}
          className="p-2 md:p-4 rounded-md md:rounded-xl focus:outline-0 bg-black"
        >
          <FontAwesomeIcon
            icon={faChevronUp}
            className="scroll-up text-[20px] md:text-[32px] text-deepGrey"
          />
        </button>
      </div>
    </main>
  );
};

export default SharedLayout;
