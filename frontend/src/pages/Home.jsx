import { NavBar} from "@/components/NavBar";
import {AboutSection} from "@/components/AboutSection";
import {SkillsSection} from "@/components/SkillsSection";
import {ProjectsSection} from "@/components/ProjectsSection"
import { ContactSection } from "../components/ContactSection";

import { WaveCanvas } from "@/components/WaveEmbed";
import Heatmap from "../components/Heatmap";
import { HeroSection } from "../components/HeroSection";

import { ExperienceSection } from "../components/ExperienceSection";
import ResumeSection from "../components/ResumeSection";
import { FooterSection } from "../components/FooterSection";

export const Home = () => {
    return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            <WaveCanvas />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10">
            
            <NavBar />
            <main>
                <HeroSection />
                <AboutSection />
                <Heatmap />
                <SkillsSection />
                <ProjectsSection />
                <ExperienceSection />
                <ResumeSection />
                <ContactSection />
            </main>
            <FooterSection />
        </div>
    </div>
    );
};

export default Home;