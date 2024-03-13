import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { Stack, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { data } from "../AllProjects";
import { resumeDriveLink } from "../components/Navs";

const ExperiencePaper = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: "0.5rem 0",
	display: "flex",
	alignItems: "stretch",
	justifyContent: "stretch",
	width: "100%",
	maxWidth: "50rem",
	margin: "0 auto",
	minHeight: "18rem",
	backgroundColor: "transparent",
	transition: "all 1s",

	".paper-text-style": {
		transition: "all 1s",
	},
	".skills-btn": {
		transition: "all 1s",
	},

	"&: hover": {
		backgroundColor: "#112240",

		".paper-text-style": {
			color: "#48B8A5",
		},
		".skills-btn": {
			backgroundColor: "#48B8A5",
			color: "#112240",
		},
	},
}));

const MotionDiv = ({ children }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<section ref={ref} className="framer-section">
			<div
				style={{
					transform: isInView ? "none" : "translateX(-500px)",
					opacity: isInView ? 1 : 0,
					transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1)",
				}}
			>
				{children}
			</div>
		</section>
	);
};

const Experience = () => {
	const { experience } = data;

	return (
		<Stack
			direction="column"
			alignItems="stretch"
			spacing={5}
			width="100%"
			className="font-sans"
		>
			{experience.map((item) => (
				<MotionDiv key={item.url}>
					<ExperiencePaper square={false}>
						<a
							href={item.url}
							target="_blank"
							rel="opener"
							className="flex items-center justify-center w-full p-4"
						>
							<div className="flex flex-col md:flex-row items-start justify-start md:justify-around gap-3 text-left w-full max-w-full md:max-w-[80%] mx-0 md:mx-auto">
								<div className="flex-[0.3]">
									<span className="text-base font-medium text-deepGrey">
										{item.duration}
									</span>
								</div>

								<Stack
									direction="column"
									alignContent="flex-start"
									justifyContent="space-between"
									spacing={2}
									flex={1}
								>
									<span className="paper-text-style text-lg font-medium text-lightGrey">
										{item.position}
									</span>
									<span className="text-base font-normal text-lightGrey max-w-md">
										{item.about}
									</span>

									<Stack
										direction="row"
										alignItems="center"
										justifyContent="flex-start"
										flexWrap="wrap"
										className="gap-3 w-full"
									>
										{item.skills.map((skill) => (
											<button
												key={skill}
												type="button"
												disabled
												className="skills-btn bg-lightBlack text-lightGreen text-sm font-normal p-2 rounded-lg"
											>
												{skill}
											</button>
										))}
									</Stack>
								</Stack>
							</div>
						</a>
					</ExperiencePaper>
				</MotionDiv>
			))}

			<MotionDiv>
				<div className="flex items-center justify-center">
					<a
						href={resumeDriveLink}
						target="_blank"
						rel="noopener noreferrer"
						className="self-center"
					>
						<button
							type="button"
							id="resume-btn"
							className="border font-medium border-lightGreen py-3 px-10 rounded-md text-lightGreen hover:bg-opacity-80"
						>
							View Full Resume
						</button>
					</a>
				</div>
			</MotionDiv>
		</Stack>
	);
};

export default Experience;
