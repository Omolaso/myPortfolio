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

			<main className="flex lg:flex-row flex-col items-center justify-between">
				<article className="text-left text-deepGrey text-lg mt-3 font-medium flex-1 px-4">
					<p>
						Hi again&#128075;, I am Tobi and I enjoy building items that live on
						the web.
					</p>

					<p className="my-2">
						My interest in web development grew in early 2022 due to inspiration
						from friends and my desire to attain a technical skill.
					</p>

					<p className="my-2 leading-snug">
						Prior to this, I was a Navigator. <br />
					</p>

					<p className="my-2">
						Fast-forward to today, I&apos;ve had the priviledge to learn my web
						development skills from{" "}
						<a
							className="stutern-link"
							href="https://www.stutern.com/"
							target="_blank"
							rel="noreferrer"
						>
							Stutern
						</a>{" "}
						and I&apos;ve had a few projects since then.
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
			</main>
		</Div>
	);
};

export default About;
