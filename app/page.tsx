import { Hero } from "@/components/sections/Hero";
import { CredibilityBar } from "@/components/sections/CredibilityBar";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Afa } from "@/components/sections/Afa";
import { BrainFitness } from "@/components/sections/BrainFitness";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { About } from "@/components/sections/About";
import { FAQ } from "@/components/sections/FAQ";
import { Urgency } from "@/components/sections/Urgency";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { Navbar } from "@/components/ui/Navbar";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { StickyCTA } from "@/components/ui/StickyCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden relative">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <CredibilityBar />
      <div id="problem"><Problem /></div>
      <div id="solution"><Solution /></div>
      <Afa />
      <BrainFitness />
      <div id="depoimentos"><Testimonials /></div>
      <Pricing />
      <div id="sobre"><About /></div>
      <div id="faq"><FAQ /></div>
      <Urgency />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
      <StickyCTA />
    </main>
  );
}
