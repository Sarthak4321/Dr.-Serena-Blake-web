import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FAQSection from "@/components/FAQSection";
import SessionFees from "@/components/SessionFees";
import ContactForm from "@/components/ContactForm";




export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f1ea]">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <FAQSection />
      <SessionFees />
      <ContactForm />
      
      
    </main>
  );
}
