import * as React from "react";
import "../styles/Project.css";
import { Link } from "react-router-dom";
import {
	Card,
	CardActions,
	CardMedia,
	CardContent,
	Button,
	Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { data } from "../AllProjects";

function Div({ children }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<main ref={ref} className="framer-section">
			<section
				style={{
					transform: isInView ? "none" : "translateX(500px)",
					opacity: isInView ? 1 : 0,
					transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
				}}
			>
				{children}
			</section>
		</main>
	);
}

const Projects = () => {
	const { landingPageProjects } = data;

	return (
		<main className="flex flex-col gap-y-8">
			<header>
				<h1 className="text-3xl text-lightGrey font-bold">
					<span className="text-lightGreen text-xl mr-2">02.</span> My Projects
				</h1>
			</header>

			{/* Project Container Div*/}
			<section className="flex flex-col items-center justify-center text-deepGrey text-lg gap-y-12 font-medium">
				{landingPageProjects.map((item) => (
					<Div key={item.name}>
						<Card className="w-full mx-auto max-w-4xl">
							<CardMedia
								component="img"
								height="100"
								image={item.imgURL}
								alt={item.name}
							/>
							<CardContent className="bg-black">
								<Typography variant="header" component="div">
									<h2 className="flex flex-row gap-2 items-center justify-center flex-wrap text-xl text-lightGrey font-bold text-center">
										<span>{item.name}</span>
										<span
											className={
												item.featured
													? "block text-lightGreen text-xs font-medium"
													: "hidden"
											}
										>
											&#40;Featured Project&#41;
										</span>
									</h2>
								</Typography>

								<Typography variant="div" color="text.secondary">
									<p className="text-lightGreen text-center">
										{item.description}
									</p>

									<div className="flex flex-row items-center flex-wrap gap-2 justify-around mx-auto text-lightGrey text-xs w-full max-w-xs mt-3">
										{item.techUsed.map((tech, index) => (
											<span key={index}>{tech}</span>
										))}
									</div>
								</Typography>
							</CardContent>

							<CardActions className="flex items-center justify-center bg-black">
								{item.repoURL && (
									<a
										href={item.repoURL}
										target="_blank"
										rel="noopener noreferrer"
									>
										<Button size="large" title="GitHub">
											<FontAwesomeIcon icon={faGithub} className="text-lg" />
										</Button>
									</a>
								)}

								<a
									href={item.hostedURL}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Button size="large" title="External Link">
										<FontAwesomeIcon icon={faLink} className="text-lg" />
									</Button>
								</a>
							</CardActions>
						</Card>
					</Div>
				))}

				{/* More Project Button */}
				<Div>
					<div className="text-center">
						<Link to="/archive">
							<button
								className="border border-lightGreen py-2 px-3 rounded-md text-lightGreen"
								id="resume-btn"
							>
								View other projects
							</button>
						</Link>
					</div>
				</Div>
			</section>
		</main>
	);
};

export default Projects;
