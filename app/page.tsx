import type { Metadata } from "next";
import Hero from "@/components/hero";
import Problem from "@/components/problem";
import Services from "@/components/services";
import About from "@/components/about";
import Plan from "@/components/plan";
import Projects from "@/components/projects";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
// import SideTreeChop from "@/components/SideTreeChop"; // Commented out - tree animation removed but keeping code for future use

export const metadata: Metadata = {
  title: "TIMBERMEN TREE SERVICES | Professional Tree Care Services",
  description:
    "Expert arborist services including tree removal, pruning, planting, and emergency services with certified professionals.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* <SideTreeChop /> Tree animation commented out - keeping code for potential future use */}
      <Navbar />
      <Hero />
      <Problem />
      <Services />
      <About />
      <Plan />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
