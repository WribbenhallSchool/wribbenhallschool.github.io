import { useLocation } from "react-router-dom";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const DesktopMenu = ({ pages }) => {
	let location = useLocation();

	return (
		<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
			{Object.entries(pages).map((page, i) => (
				<Button
					component={Link}
					to={page[1].route}
					sx={{
						my: 2,
						color:
							location.pathname === page[1].route
								? "text.navActive"
								: "text.secondary",
						display: "block",
					}}
					key={i}
				>
					{page[0]}
				</Button>
			))}
		</Box>
	);
};

export default DesktopMenu;
