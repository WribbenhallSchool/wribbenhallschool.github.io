import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import AccessibilityMenu from "./AccessibilityMenu";

const Nav = ({ currentTheme, setTheme, pages }) => {
	// Mobile menu open/close logic
	const [anchorElNav, setAnchorElNav] = useState(null);
	const handleOpenMobileMenu = (event) => setAnchorElNav(event.currentTarget);
	const handleCloseMobileMenu = () => setAnchorElNav(null);

	// Accessiblity menu open/close logic
	const [anchorElAccessibility, setAnchorElAccessibility] = useState(null);
	const handleOpenAccessibilityMenu = (event) =>
		setAnchorElAccessibility(event.currentTarget);
	const handleCloseAccessibilityMenu = () => setAnchorElAccessibility(null);

	return (
		<AppBar position='sticky' sx={{ bgcolor: "background.secondary" }}>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					{/* Desktop Title */}
					<Typography
						variant='h6'
						noWrap
						component='a'
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							color: "text.navActive",
							textDecoration: "none",
						}}
					>
						Wribbenhal School
					</Typography>

					{/* Mobile Menu */}
					<MobileMenu
						anchorElNav={anchorElNav}
						handleOpenMobileMenu={handleOpenMobileMenu}
						handleCloseMobileMenu={handleCloseMobileMenu}
						pages={pages}
					/>

					{/* Mobile Title */}
					<Typography
						variant='h5'
						noWrap
						component='a'
						href='https://wribbenhallschool.co.uk/'
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							color: "text.navActive",
							textDecoration: "none",
						}}
					>
						Wribbenhall School
					</Typography>

					{/* Desktop Nav Links */}
					<DesktopMenu pages={pages} />

					<AccessibilityMenu
						handleOpenAccessibilityMenu={handleOpenAccessibilityMenu}
						anchorElAccessibility={anchorElAccessibility}
						handleCloseAccessibilityMenu={handleCloseAccessibilityMenu}
						currentTheme={currentTheme}
						setTheme={setTheme}
					/>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Nav;
