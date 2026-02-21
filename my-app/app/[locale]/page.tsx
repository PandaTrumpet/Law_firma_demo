
import { ContactFormSection } from "../components/contact-form-section";
import { CRMSection } from "../components/crm-section";
import { DigitalSystemSection } from "../components/DigitalSystemSection";

import { FinalCTASection } from "../components/final-cta-section";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { HeroSection } from "../components/hero-section";
import { PricingCalculatorSection } from "../components/pricing-calculator-section";
import { ProcessSection } from "../components/process-section";
import { RiskAwarenessSection } from "../components/risk-awareness-section";
import { ServicesSection } from "../components/services-section";
import { TestimonialsSection } from "../components/testimonials-section";
import { WhatsAppButton } from "../components/whatsapp-button";


export default function Home() {
  return (
    <div className="min-h-screen  overflow-x-hidden">
      <Header />
      <main>
        <WhatsAppButton />
        <HeroSection />

        <RiskAwarenessSection />
        <ServicesSection />
        <PricingCalculatorSection />
        <DigitalSystemSection />
        <ProcessSection />

        <CRMSection />
        <TestimonialsSection />
        <ContactFormSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
