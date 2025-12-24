import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Vision } from "@/components/sections/vision";

import { Services } from "@/components/sections/services";
import { Projects } from "@/components/sections/projects";
import { FinalCTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Vision />
      <Services />
      <Projects />
      <FinalCTA />
      <Footer />
    </main>
  );
}
