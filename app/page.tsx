import type { Metadata } from "next";
import Hero from "@/components/hero";
import Services from "@/components/services";
import About from "@/components/about";
import Projects from "@/components/projects";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import SideTreeChop from "@/components/SideTreeChop"; // ⬅️ add this line

export const metadata: Metadata = {
  title: "TIMBERMEN TREE SERVICES | Professional Tree Care Services",
  description:
    "Expert arborist services including tree removal, pruning, planting, and emergency services with certified professionals.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <SideTreeChop /> {/* ⬅️ add this here, so it's always present but doesn't disrupt layout */}
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
