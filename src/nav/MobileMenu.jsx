import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";

import { Link } from "react-router-dom";

const MobileMenu = ({
	handleOpenMobileMenu,
	handleCloseMobileMenu,
	anchorElNav,
	pages,
}) => {
	return (
		<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
			<IconButton
				size='large'
				aria-label='account of current user'
				aria-controls='menu-appbar'
				aria-haspopup='true'
				onClick={handleOpenMobileMenu}
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
				onClose={handleCloseMobileMenu}
				sx={{
					display: {
						xs: "block",
						md: "none",
					},
				}}
			>
				{Object.entries(pages).map((page, i) => (
					<MenuItem
						component={Link}
						to={page[1].route}
						onClick={handleCloseMobileMenu}
						key={i}
					>
						<ListItemIcon>{page[1].icon}</ListItemIcon>
						{page[0]}
					</MenuItem>
				))}
			</Menu>
		</Box>
	);
};

export default MobileMenu;
