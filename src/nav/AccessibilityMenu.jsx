import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

import SettingsIcon from "@mui/icons-material/Settings";

import {
	defaultThemeParams,
	yellowOnBlackThemeParams,
	blackOnCreamThemeParams,
} from "../themes";

const AccessibilitySettings = ({
	handleOpenAccessibilityMenu,
	anchorElAccessibility,
	handleCloseAccessibilityMenu,
	currentTheme,
	setTheme,
}) => {
	return (
		<Box sx={{ flexGrow: 0 }}>
			<Tooltip title='Open accessibility menu'>
				<IconButton onClick={handleOpenAccessibilityMenu} sx={{ p: 0 }}>
					<SettingsIcon color='secondary' />
				</IconButton>
			</Tooltip>

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
						// If the font size has been changed
						if (currentTheme.typography) {
							const tempTheme = { ...defaultThemeParams };
							tempTheme.typography = currentTheme.typography;
							setTheme(tempTheme);
						} else {
							setTheme(defaultThemeParams);
						}
					}}
				>
					<Typography textAlign='center'>Default</Typography>
				</MenuItem>
				<MenuItem
					onClick={() => {
						// If the font size has been changed
						if (currentTheme.typography) {
							const tempTheme = { ...yellowOnBlackThemeParams };
							tempTheme.typography = currentTheme.typography;
							setTheme(tempTheme);
						} else {
							setTheme(yellowOnBlackThemeParams);
						}
					}}
				>
					<Typography textAlign='center'>Yellow on Black</Typography>
				</MenuItem>
				<MenuItem
					onClick={() => {
						// If the font size has been changed
						if (currentTheme.typography) {
							const tempTheme = { ...blackOnCreamThemeParams };
							tempTheme.typography = currentTheme.typography;
							setTheme(tempTheme);
						} else {
							setTheme(blackOnCreamThemeParams);
						}
					}}
				>
					<Typography textAlign='center'>Black on Cream</Typography>
				</MenuItem>
				<Divider />
				<MenuItem disabled>
					<Typography textAlign='center'>Font Settings</Typography>
				</MenuItem>
				<MenuItem
					onClick={() => {
						const tempTheme = { ...currentTheme };
						const font = {
							fontSize: 14,
						};
						tempTheme.typography = font;
						setTheme(tempTheme);
					}}
				>
					<Typography textAlign='center'>Default</Typography>
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
							fontSize: 18,
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
