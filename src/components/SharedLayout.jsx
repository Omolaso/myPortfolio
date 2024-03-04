import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/SharedLayout.css";
import Navs from "./Navs";
import Home from "../views/Home";
import About from "../views/About";
import Projects from "../views/Projects";
import Contact from "../views/Contact";
import Footer from "./Footer";
import WorksTabs from "./WorksTab";

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
		<main className="flex flex-col gap-8 min-h-screen bg-black relative w-full font-sans">
			<nav
				id="home"
				className="flex items-center justify-center w-full min-h-[10vh] md:py-4 px-8 md:px-12"
			>
				<Navs sidebar={sidebar} showSidebar={showSidebar} />
			</nav>

			<section className="flex items-center justify-center min-h-[90vh] px-8 md:px-12 w-full">
				<div
					className={
						sidebar
							? "blur-lg transition-[all] flex flex-col justify-between"
							: "flex flex-col justify-between"
					}
				>
					<div className="flex items-start justify-center md:min-h-[80vh] min-h-screen w-full">
						<Home />
					</div>

					<div
						id="about"
						className="flex items-center justify-start min-h-screen py-4 w-full"
					>
						<About />
					</div>

					<div id="experience" className="pt-12 min-h-screen w-full">
						<WorksTabs />
					</div>

					<div
						id="contact"
						className="flex items-center justify-center relative min-h-screen w-full"
					>
						<Contact />
					</div>
				</div>
			</section>

			<footer className="w-full absolute bottom-0 px-2">
				<Footer />
			</footer>

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
