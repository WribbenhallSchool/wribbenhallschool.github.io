import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

import { defaultThemeParams } from "./themes";

import Nav from "./nav";
import Footer from "./Footer";
import Pages from "./pages/Pages";
import NotFound from "./pages/NotFound";

function App() {
	const [createdTheme, setCreatedTheme] = useState(createTheme(defaultThemeParams));
	const [currentThemeParams, setCurrentThemeParams] = useState(defaultThemeParams);

	const setTheme = (themeParams) => {
		setCurrentThemeParams(themeParams);
		setCreatedTheme(createTheme(themeParams));
	};

	return (
		<ThemeProvider theme={createdTheme}>
			<CssBaseline />
			<Router>
				<Nav
					currentTheme={currentThemeParams}
					setTheme={setTheme}
					pages={Pages}
				/>
				<Routes>
					{/* Each of the defined pages within the Pages object */}
					{Object.entries(Pages).map((page, i) => (
						<Route key={i} path={page[1].route} element={page[1].element} />
					))}
					<Route path='*' element={<NotFound />} />
				</Routes>
				<Footer />
			</Router>
		</ThemeProvider>
	);
}

export default App;
