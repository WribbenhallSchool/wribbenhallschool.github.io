import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { createTheme } from "@mui/material/styles";

import SettingsIcon from "@mui/icons-material/Settings"; //Accessibility Icon

import { defaultThemeParams, yellowOnBlackThemeParams } from "../theme";

const AccessibilitySettings = ({
	handleOpenAccessibilityMenu,
	anchorElAccessibility,
	handleCloseAccessibilityMenu,
	currentTheme,
	setTheme,
}) => {
	return (
		<Box sx={{ flexGrow: 0 }}>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					flexWrap: "wrap",
				}}
			>
				<Typography color='secondary'>
					<span style={{ paddingRight: "5px" }}>Accessiblity</span>
				</Typography>
				<Tooltip title='Open accessibility menu'>
					<IconButton onClick={handleOpenAccessibilityMenu} sx={{ p: 0 }}>
						<SettingsIcon color='secondary' />
					</IconButton>
				</Tooltip>
			</div>

			<Menu
				sx={{ mt: "45px" }}
				id='menu-appbar'
				anchorEl={anchorElAccessibility}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				keepMounted
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				open={Boolean(anchorElAccessibility)}
				onClose={handleCloseAccessibilityMenu}
			>
				<MenuItem disabled>
					<Typography textAlign='center'>Contrast Settings</Typography>
				</MenuItem>
				<Divider />
				<MenuItem
					onClick={() => {
						setTheme(defaultThemeParams);
					}}
				>
					<Typography textAlign='center'>Default</Typography>
				</MenuItem>
				<MenuItem
					onClick={() => {
						setTheme(yellowOnBlackThemeParams);
					}}
				>
					<Typography textAlign='center'>Yellow on Black</Typography>
				</MenuItem>
				<Divider />
				<MenuItem disabled>
					<Typography textAlign='center'>Font Settings</Typography>
				</MenuItem>
				<MenuItem
					onClick={() => {
						const tempTheme = { ...currentTheme };
						const font = {
							fontSize: 16,
						};
						tempTheme.typography = font;
						setTheme(tempTheme);
					}}
				>
					<Typography textAlign='center'>Medium</Typography>
				</MenuItem>
				<MenuItem
					onClick={() => {
						const tempTheme = { ...currentTheme };
						const font = {
							fontSize: 19,
						};
						tempTheme.typography = font;
						setTheme(tempTheme);
					}}
				>
					<Typography textAlign='center'>Large</Typography>
				</MenuItem>
			</Menu>
		</Box>
	);
};

export default AccessibilitySettings;
