import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import FeatureStack from "@/components/sections/FeatureStack"; // Using the FeatureCard component
import Pricing from "@/components/sections/Pricing";
import Trainers from "@/components/sections/Trainers";
import Gallery from "@/components/sections/Gallery";
import Location from "@/components/sections/Location";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-[#050505]">
      <Navbar />
      <Hero />
      <FeatureStack />
      <Trainers />
      <Gallery />
      <Pricing />
      <CTA />
      <Location />
      <Footer />
    </main>
  );
}
