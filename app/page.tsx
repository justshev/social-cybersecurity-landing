import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ResearchOverview } from "@/components/research-overview";
import { FrameworkSection } from "@/components/framework-section";
import { CybercrimeCategories } from "@/components/cybercrime-categories";
import { ImplementationModel } from "@/components/implementation-model";
import { ResearchFindings } from "@/components/research-findings";
import { Footer } from "@/components/footer";
import { ModelPages } from "@/components/model";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background cyber-grid floating-elements geometric-lines scan-lines relative">
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <ModelPages />
        <FrameworkSection />
        <CybercrimeCategories />
        <ImplementationModel />
        <ResearchFindings />
      </main>
      <Footer />
    </div>
  );
}
