import React, { useRef } from "react";
import { useInView } from "framer-motion";

const Div = ({ children }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<main ref={ref} className="framer-section">
			<section
				style={{
					transform: isInView ? "none" : "translateX(-500px)",
					opacity: isInView ? 1 : 0,
					transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1)",
				}}
			>
				{children}
			</section>
		</main>
	);
};

const Experience = () => {
	return (
		<Div>
			<span className=" text-lightGrey">Experience</span>
		</Div>
	);
};

export default Experience;
