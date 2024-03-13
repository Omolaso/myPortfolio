import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ExperienceTabContext } from "../components/LandingPage";

// FRAMER MOTION
const container = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 1.5, //all children
			staggerChildren: 0.1, //each child
		},
	},
};

const item = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};
// FRAMER MOTION

const Home = () => {
	const { setValue } = useContext(ExperienceTabContext);

	const handleChangeExperienceTab = () => {
		setValue("2");
	};

	return (
		<motion.section
			variants={container}
			initial="hidden"
			animate="visible"
			className="w-full md:py-8"
		>
			<div className="flex flex-col items-start md:items-center gap-6 w-full">
				<motion.h3
					variants={item}
					className="home-h3 text-lg text-veryLightGrey text-left md:text-center font-medium"
				>
					Hi, my name is
				</motion.h3>
				<motion.h1
					variants={item}
					className="text-4xl md:text-7xl font-bold text-lightGrey text-left md:text-center"
				>
					Tobi Adesanya.
				</motion.h1>

				<div className="flex flex-col items-start md:items-center gap-2 w-full">
					<motion.h2
						variants={item}
						className="text-2xl md:text-4xl font-bold text-deepGrey text-left md:text-center"
					>
						Frontend Engineer
					</motion.h2>
					<motion.p
						variants={item}
						className="text-lg text-deepGrey font-medium text-left md:text-center"
					>
						I build pixel-perfect, engaging, and accessible digital experiences.
					</motion.p>
				</div>

				<motion.div variants={item}>
					<a href="#experience">
						<button
							id="resume-btn"
							onClick={() => handleChangeExperienceTab()}
							className="border font-medium border-lightGreen py-3 px-10 rounded-md text-lightGreen hover:bg-opacity-80"
						>
							Check out my projects
						</button>
					</a>
				</motion.div>
			</div>
		</motion.section>
	);
};

export default Home;
