import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import MobileMenu from "./MobileMenu";
import AccessibilityMenu from "./AccessibilityMenu";

const TopNav = ({ currentTheme, setTheme }) => {
	const [anchorElNav, setAnchorElNav] = useState(null);
	const [anchorElAccessibility, setAnchorElAccessibility] = useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenAccessibilityMenu = (event) => {
		setAnchorElAccessibility(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseAccessibilityMenu = () => {
		setAnchorElAccessibility(null);
	};

	return (
		<AppBar position='sticky'>
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
							color: "text.navTitle",
							textDecoration: "none",
						}}
					>
						Wribbenhal School
					</Typography>

					{/* Mobile Menu */}
					<MobileMenu
						anchorElNav={anchorElNav}
						handleOpenNavMenu={handleOpenNavMenu}
						handleCloseNavMenu={handleCloseNavMenu}
					/>

					{/* Mobile Title */}
					<Typography
						variant='h5'
						noWrap
						component='a'
						href=''
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							color: "text.navTitle",
							textDecoration: "none",
						}}
					>
						Wribbenhall School
					</Typography>

					{/* Desktop Nav Links */}
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						<Button
							onClick={handleCloseNavMenu}
							sx={{ my: 2, color: "text.secondary", display: "block" }}
						>
							Home
						</Button>
						<Button
							onClick={handleCloseNavMenu}
							sx={{ my: 2, color: "text.secondary", display: "block" }}
						>
							Our Policies
						</Button>
						<Button
							onClick={handleCloseNavMenu}
							sx={{ my: 2, color: "text.secondary", display: "block" }}
						>
							Our Gallery
						</Button>
						<Button
							onClick={handleCloseNavMenu}
							sx={{ my: 2, color: "text.secondary", display: "block" }}
						>
							Contact Us
						</Button>
					</Box>

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
export default TopNav;
