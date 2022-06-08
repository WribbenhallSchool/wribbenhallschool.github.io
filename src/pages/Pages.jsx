// Page Components
import Home from "./home";
import Gallery from "./gallery";
import Policies from "./policies";
import Calendar from "./calendar";
import Contact from "./contact";

// Mobile Nav Menu Icons
import HomeIcon from "@mui/icons-material/Home"; // Home
import ArticleIcon from "@mui/icons-material/Article"; // Policies
import PhotoIcon from "@mui/icons-material/Photo"; // Our Gallery
import EmailIcon from "@mui/icons-material/Email"; // Contact Us
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"; // Calendar

const Pages = {
	Home: {
		route: "/",
		element: <Home />,
		icon: <HomeIcon fontSize='small' />,
	},
	Contact: {
		route: "/contact",
		element: <Contact />,
		icon: <EmailIcon fontSize='small' />,
	},
	Gallery: {
		route: "/gallery",
		element: <Gallery />,
		icon: <PhotoIcon fontSize='small' />,
	},
	Policies: {
		route: "/policies",
		element: <Policies />,
		icon: <ArticleIcon fontSize='small' />,
	},
	Calendar: {
		route: "/calendar",
		element: <Calendar />,
		icon: <CalendarMonthIcon fontSize='small' />,
	},
};

export default Pages;
