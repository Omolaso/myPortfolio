import React from "react";
import "../styles/About.css";
import me from "../images/me.jpg";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { data } from "../AllProjects";

//FRAMER MOTION
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

const About = () => {
	const { skills } = data;

	return (
		<Div>
			<h1 className="text-3xl text-lightGrey font-bold mb-2">
				<span className="text-lightGreen text-xl mr-2">01.</span>About Me
			</h1>

			<div className="flex lg:flex-row flex-col items-center justify-between">
				<article className="text-left text-deepGrey text-lg mt-3 font-medium flex-1 px-4">
					<p>
						Hi again&#128075;, I am Tobi and I enjoy building items that live on
						the web.
					</p>

					<p className="my-2">
						Back in 2022, I grew interest for web development and decided to
						join{" "}
						<a
							className="stutern-link"
							href="https://www.stutern.com/"
							target="_blank"
							rel="noreferrer"
						>
							Stutern
						</a>
						.{" "}
					</p>

					<p className="my-2">
						Fast-forward to today, I&apos;ve had the priviledge of building
						software for a{" "}
						<a
							className="stutern-link"
							href="https://www.pathscape.app/"
							target="_blank"
							rel="noreferrer"
						>
							project management company
						</a>{" "}
						thereby working on their{" "}
						<a
							className="stutern-link"
							href="https://workspace.pathscape.app/"
							target="_blank"
							rel="noreferrer"
						>
							main software
						</a>{" "}
						. Additionally, I&apos;ve worked for an{" "}
						<a
							className="stutern-link"
							href="https://snappycx.com/"
							target="_blank"
							rel="noreferrer"
						>
							outsourcing company
						</a>{" "}
						as the sole frontend engineer, building their software from scratch.
						I&apos;ve also worked with a{" "}
						<a
							className="stutern-link"
							href="https://afreninc.com"
							target="_blank"
							rel="noreferrer"
						>
							freelancing agency
						</a>{" "}
						and a{" "}
						<a
							className="stutern-link"
							href="https://www.expressonline.ng/"
							target="_blank"
							rel="noreferrer"
						>
							start-up
						</a>
						.
					</p>

					<div className="skill-set">
						<p className="my-2">
							The few technologies I&apos;m proficient with include:
						</p>
						<div className="flex flex-row flex-wrap gap-2 items-start justify-between w-full max-w-sm text-base mx-auto md:mx-0">
							<ol className="list-none">
								{skills.slice(0, 3).map((skill) => (
									<li key={skill}>{skill}</li>
								))}
							</ol>
							<ol className="list-none">
								{skills.slice(3, 6).map((skill) => (
									<li key={skill}>{skill}</li>
								))}
							</ol>
							<ol className="list-none">
								{skills.slice(6, skills.length).map((skill) => (
									<li key={skill}>{skill}</li>
								))}
							</ol>
						</div>
					</div>
				</article>

				<section className="w-full max-w-sm mt-10 hover:opacity-90">
					<img src={me} alt="Me" className="rounded-xl w-4/5 mx-auto" />
				</section>
			</div>
		</Div>
	);
};

export default About;
