import React, { useState } from "react";

import Container from "@mui/material/Container";

import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SchoolSection from "./SchoolSection";

import ResourcesModal from "./modals/ResourcesModal";
import SpacesModal from "./modals/SpacesModal";
import AnimalsModal from "./modals/AnimalsModal";

export default function Album() {
	const [resourcesModalOpen, setResourcesModalOpen] = useState(false);
	const [spacesModalOpen, setSpacesModalOpen] = useState(false);
	const [animalsModalOpen, setAnimalsModalOpen] = useState(false);

	return (
		<main>
			<Container maxWidth='lg'>
				<HeroSection />
				<SchoolSection
					setResourcesModalOpen={setResourcesModalOpen}
					setSpacesModalOpen={setSpacesModalOpen}
					setAnimalsModalOpen={setAnimalsModalOpen}
				/>
				<AboutSection />
			</Container>
			<ResourcesModal isOpen={resourcesModalOpen} setOpen={setResourcesModalOpen} />
			<SpacesModal isOpen={spacesModalOpen} setOpen={setSpacesModalOpen} />
			<AnimalsModal isOpen={animalsModalOpen} setOpen={setAnimalsModalOpen} />
		</main>
	);
}
