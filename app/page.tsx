"use client";

import LandingSlide from "@/components/slides/LandingSlide";
import ExperienceSection from "@/components/slides/ExperienceSection";
import HobbiesSlide from "@/components/slides/HobbiesSlide";
import ContactSlide from "@/components/slides/ContactSlide";
import SlideIndicator from "@/components/ui/SlideIndicator";

const SECTION_IDS = ["landing", "experience", "hobbies", "contact"];

export default function Home() {
  return (
    <main>
      <LandingSlide />
      <ExperienceSection />
      <HobbiesSlide />
      <ContactSlide />
      <SlideIndicator
        totalSlides={SECTION_IDS.length}
        sectionIds={SECTION_IDS}
      />
    </main>
  );
}
