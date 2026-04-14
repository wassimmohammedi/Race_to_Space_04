import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/sections/AboutSection";
import ActivitiesSection from "@/sections/ActivitiesSection";
import TimelineSection from "@/sections/TimelineSection";
import CTASection from "@/sections/CTASection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Race to Space – 4th Edition | Quanta Club",
  description:
    "Join Quanta Club's flagship annual event. Compete, learn, and build the future in space and technology.",
};

export default function HomePage() {
  return (
    <main className="bg-[#04060f] text-white overflow-x-hidden">
      <Navbar />
      <HeroSlider />
      <AboutSection />
      <ActivitiesSection />
      <TimelineSection />
      <CTASection />
      <Footer />
    </main>
  );
}
