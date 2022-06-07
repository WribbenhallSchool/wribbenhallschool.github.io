import * as React from "react";

import Container from "@mui/material/Container";

import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SchoolSection from "./SchoolSection";

export default function Album() {
	return (
		<main>
			<Container maxWidth='lg'>
				<HeroSection />
				<AboutSection />
				<SchoolSection />
			</Container>
		</main>
	);
}
