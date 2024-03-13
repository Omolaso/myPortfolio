import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";
import Logo from "../images/logo.png";
import { resumeDriveLink, navLinkArray } from "./Navs";
import { ExperienceTabContext } from "./LandingPage";

const SideBar = ({ sidebar, showSidebar }) => {
	const { setValue } = useContext(ExperienceTabContext);

	const handleSidebar = () => {
		showSidebar(!sidebar);
	};

	const removeSidebar = () => {
		showSidebar(false);
	};

	const handleChangeExperienceTab = () => {
		setValue("1");
	};

	window.addEventListener("resize", removeSidebar);
	window.addEventListener("scroll", removeSidebar);

	return (
		<>
			<header className="flex items-center justify-center w-full">
				<div className="flex items-center justify-between min-h-[10vh] w-full">
					<Link to="/">
						<img
							src={Logo}
							alt="logo"
							className="border-2 border-veryLightGrey rounded-[50%] w-[40px]"
						/>
					</Link>
					<div
						className={sidebar ? "hamburger-div" : "hamburger-div-hover"}
						onClick={handleSidebar}
					>
						<span className="hamburger-span"></span>
						<span className="hamburger-span"></span>
						<span className="hamburger-span"></span>
					</div>
				</div>
			</header>

			<div
				className={sidebar ? "sidebar-active" : "side-bar"}
				onClick={removeSidebar}
			>
				<ul className="flex flex-col items-center justify-between h-[50vh] px-8 mb-8 text-lightGrey text-2xl transition-all">
					{navLinkArray.map((link) =>
						link.function ? (
							<li key={link.path}>
								<a
									href={link.path}
									onClick={() => handleChangeExperienceTab()}
									className="hover:text-lightGreen hover:transition ease-in-out"
								>
									{link.name}
								</a>
							</li>
						) : (
							<li key={link.path}>
								<a
									href={link.path}
									className="hover:text-lightGreen hover:transition ease-in-out"
								>
									{link.name}
								</a>
							</li>
						)
					)}

					<li className="mt-3">
						<a href={resumeDriveLink} target="_blank" rel="noopener noreferrer">
							<button
								id="resume-btn"
								className="border border-lightGreen py-4 px-8 rounded-md text-lightGreen"
							>
								Resume
							</button>
						</a>
					</li>
				</ul>
			</div>
		</>
	);
};

export default SideBar;
