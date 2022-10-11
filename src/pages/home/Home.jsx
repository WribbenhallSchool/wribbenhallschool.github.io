import React, { useState } from "react";

import Container from "@mui/material/Container";

import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SchoolSection from "./sections/SchoolSection";
import DetailsSection from "./sections/DetailsSection";
import StaffSection from "./sections/StaffSection";

import TargetProfileModal from "./modals/TargetProfileModal";

export default function Album() {
	// Modal Logic
	const [targetModalOpen, setTargetModalOpen] = useState(false);

	return (
		<main>
			<Container maxWidth='lg'>
				<HeroSection />
				<SchoolSection />
				<AboutSection setTargetModalOpen={setTargetModalOpen} />
				<DetailsSection />
				<StaffSection />
			</Container>

			{/* Modals */}
			<TargetProfileModal isOpen={targetModalOpen} setOpen={setTargetModalOpen} />
		</main>
	);
}
