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
      <Container maxWidth="lg">
        <HeroSection />
        <div style={{ maxWidth: "600px", margin: "auto", padding: "40px" }}>
          <p>
            "Pupils thrive in a secure, encouraging and respectful
            environment..."
            <em style={{ fontSize: "14px" }}> and achieve </em> "...rapid
            improvement in academic performance and in their personal and social
            skills."{" "}
            <em style={{ fontSize: "14px" }}>
              Independent School Inspectorate 2004
            </em>
          </p>
        </div>
        <SchoolSection />
        <AboutSection setTargetModalOpen={setTargetModalOpen} />
        <DetailsSection />
        <StaffSection />
      </Container>

      {/* Modals */}
      <TargetProfileModal
        isOpen={targetModalOpen}
        setOpen={setTargetModalOpen}
      />
    </main>
  );
}
