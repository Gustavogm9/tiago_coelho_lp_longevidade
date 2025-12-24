import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { About } from "@/components/sections/About";
import { FAQ } from "@/components/sections/FAQ";
import { Urgency } from "@/components/sections/Urgency";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { Navbar } from "@/components/ui/Navbar";

import { Transformation } from "@/components/sections/Transformation";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden relative">
      <Navbar />
      <Hero />
      <div id="problem"><Problem /></div>
      <div id="solution"><Solution /></div>
      <Transformation />
      <HowItWorks />
      <div id="depoimentos"><Testimonials /></div>
      <Pricing />
      <div id="sobre"><About /></div>
      <div id="faq"><FAQ /></div>
      <Urgency />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
