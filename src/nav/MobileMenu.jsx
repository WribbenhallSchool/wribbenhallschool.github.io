import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";

import { Link } from "react-router-dom";

// Mobile Nav Menu Icons
import HomeIcon from "@mui/icons-material/Home"; // Home
import ArticleIcon from "@mui/icons-material/Article"; // Policies
import PhotoIcon from "@mui/icons-material/Photo"; // Our Gallery
import EmailIcon from "@mui/icons-material/Email"; // Contact Us

const MobileMenu = ({ handleOpenNavMenu, handleCloseNavMenu, anchorElNav }) => {
	return (
		<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
			<IconButton
				size='large'
				aria-label='account of current user'
				aria-controls='menu-appbar'
				aria-haspopup='true'
				onClick={handleOpenNavMenu}
				color='secondary'
			>
				<MenuIcon />
			</IconButton>
			<Menu
				id='menu-appbar'
				anchorEl={anchorElNav}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
				keepMounted
				transformOrigin={{
					vertical: "top",
					horizontal: "left",
				}}
				open={Boolean(anchorElNav)}
				onClose={handleCloseNavMenu}
				sx={{
					display: {
						xs: "block",
						md: "none",
					},
				}}
			>
				<MenuItem component={Link} to='/' onClick={handleCloseNavMenu}>
					<ListItemIcon>
						<HomeIcon fontSize='small' />
					</ListItemIcon>
					Home
				</MenuItem>
				<MenuItem component={Link} to='/policies' onClick={handleCloseNavMenu}>
					<ListItemIcon>
						<ArticleIcon fontSize='small' />
					</ListItemIcon>
					Our Policies
				</MenuItem>
				<MenuItem component={Link} to='/gallery' onClick={handleCloseNavMenu}>
					<ListItemIcon>
						<PhotoIcon fontSize='small' />
					</ListItemIcon>
					Our Gallery
				</MenuItem>
				<MenuItem component={Link} to='/contact' onClick={handleCloseNavMenu}>
					<ListItemIcon>
						<EmailIcon fontSize='small' />
					</ListItemIcon>
					Contact Us
				</MenuItem>
			</Menu>
		</Box>
	);
};

export default MobileMenu;
