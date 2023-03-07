import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";

function Div({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(0px)",
          opacity: isInView ? 1 : 0,
          transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

const Contact = () => {
  return (
    <Div>
      <header>
        <h1 className="text-xl text-center text-lightGreen font-bold mb-2">
          <span className="text-lightGreen text-xl mr-2">03.</span> Will like to
          say hello?
        </h1>
      </header>

      <main className="text-center">
        <h2 className="text-5xl md:text-7xl mt-6 font-bold text-lightGrey">
          Get In Touch
        </h2>

        <a href="mailto:tobifrancisadesanya@gmail.com">
          <button
            className="border border-lightGreen py-4 px-5 font-medium rounded-md text-lightGreen mt-16"
            id="resume-btn"
          >
            Say Hello
          </button>
        </a>
      </main>
    </Div>
  );
};

export default Contact;
