import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faTwitter,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return (
		<div className="flex items-center justify-center relative py-4 w-full">
			<div className="flex w-full max-w-xs mx-auto items-center justify-around">
				<a
					href="https://www.github.com/omolaso"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon
						icon={faGithub}
						title="GitHub"
						className="text-xl text-lightGrey hover:text-lightGreen"
					/>
				</a>

				<a
					href="https://www.twitter.com/omolasofrancis"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon
						icon={faTwitter}
						title="Twitter"
						className="text-xl text-lightGrey hover:text-lightGreen"
					/>
				</a>

				<a
					href="https://linkedin.com/in/adesanyaoluwatobiloba/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon
						id="linkedin"
						title="LinkedIn"
						icon={faLinkedin}
						className="text-xl text-lightGrey hover:text-lightGreen"
					/>
				</a>
			</div>

			<div className="w-full text-center mt-4 max-w-xs mx-auto">
				<a
					href="https://www.github.com/omolaso/myPortfolio"
					target="_blank"
					rel="noopener noreferrer"
					className="text-sm text-lightGrey hover:text-lightGreen"
				>
					Built by Tobi Adesanya
				</a>
			</div>
		</div>
	);
};

export default Footer;
