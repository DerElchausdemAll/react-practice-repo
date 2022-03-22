import React from "react";
import { useEffect } from "react";
import useStore from "./useStore";
import "../style.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const DarkModeZustand = () => {
	const toggleDarkMode = useStore(state => state.toggleDarkMode);
	const darkMode = useStore(state => state.darkMode);

	useEffect(() => {
		if (darkMode) {
			document.querySelector("body").classList.add("dark");
		} else {
			document.querySelector("body").classList.remove("dark");
		}
	}, [darkMode]);

	return (
		<Box sx={{ display: "flex", justifyContent: "center" }}>
			<Button variant="contained" onClick={toggleDarkMode}>
				{!darkMode ? "Dark Mode" : "Normal Mode"}
			</Button>
		</Box>
	);
};

export default DarkModeZustand;
