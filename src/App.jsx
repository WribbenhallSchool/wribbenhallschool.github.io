import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

import { defaultThemeParams } from "./theme";

import TopNav from "./nav/TopNav";

import Home from "./pages/home/Home";
import Gallery from "./pages/gallery/Gallery";
import Policies from "./pages/policies/Policies";
import Calendar from "./pages/calendar/Calendar";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/NotFound";

function App() {
	const [createdTheme, setCreatedTheme] = useState(createTheme(defaultThemeParams));
	const [currentThemeParams, setCurrentThemeParams] = useState(defaultThemeParams);

	console.log(createdTheme);

	const setTheme = (themeParams) => {
		console.log(themeParams);
		setCurrentThemeParams(themeParams);
		setCreatedTheme(createTheme(themeParams));
	};

	return (
		<ThemeProvider theme={createdTheme}>
			<CssBaseline />
			<Router>
				<TopNav currentTheme={currentThemeParams} setTheme={setTheme} />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/gallery' element={<Gallery />} />
					<Route path='/policies' element={<Policies />} />
					<Route path='/calendar' element={<Calendar />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Router>
		</ThemeProvider>
	);
}

export default App;
