import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Archive from "./Archive";
import SharedLayout from "./SharedLayout";

export const ExperienceTabContext = createContext(null);

const LandingPage = () => {
	const [value, setValue] = useState("1");

	const experienceContextState = {
		value: value,
		setValue: setValue,
	};

	return (
		<ExperienceTabContext.Provider value={experienceContextState}>
			<Routes>
				<Route path="/" element={<SharedLayout />} />
				<Route path="/archive" element={<Archive />} />
			</Routes>
		</ExperienceTabContext.Provider>
	);
};

export default LandingPage;
