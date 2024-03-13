import React, { useContext } from "react";
import { Box, Tab } from "@mui/material";
import { TabList, TabPanel, TabContext } from "@mui/lab";
import Projects from "../views/Projects";
import Experience from "../views/Experience";
import { ExperienceTabContext } from "./LandingPage";

const tabStyle = {
	fontWeight: 700,
	color: "#48B8A5",
};

const tabPanelStyle = { paddingLeft: 0, paddingRight: 0 };

const WorksTabs = () => {
	const { value, setValue } = useContext(ExperienceTabContext);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className="flex flex-col gap-3 w-full">
			<header>
				<h1 className="text-2xl md:text-3xl text-lightGrey font-bold">
					<span className="text-lightGreen text-xl mr-2">02.</span>Projects &
					Experience
				</h1>
			</header>

			<Box>
				<TabContext value={value}>
					<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
						<TabList
							onChange={handleChange}
							aria-label="Works Tab"
							variant="fullWidth"
							centered
						>
							<Tab label="Places I've Worked" value="1" sx={tabStyle} />
							<Tab label="Personal Projects" value="2" sx={tabStyle} />
						</TabList>
					</Box>

					<TabPanel value="1" sx={tabPanelStyle}>
						<Experience />
					</TabPanel>

					<TabPanel value="2" sx={tabPanelStyle}>
						<Projects />
					</TabPanel>
				</TabContext>
			</Box>
		</div>
	);
};

export default WorksTabs;
