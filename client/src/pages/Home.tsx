import HeroSection from "@/components/BookReview/HeroSection";
import BookOverview from "@/components/BookReview/BookOverview";
import SDGConnection from "@/components/BookReview/SDGConnection";
import ThematicAnalysis from "@/components/BookReview/ThematicAnalysis";
import CharacterAnalysis from "@/components/BookReview/CharacterAnalysis";
import QuoteShowcase from "@/components/BookReview/QuoteShowcase";
import ContactForm from "@/components/BookReview/ContactForm";
import Footer from "@/components/BookReview/Footer";
import { useRef } from "react";

export default function Home() {
  const overviewRef = useRef<HTMLDivElement>(null);
  const themesRef = useRef<HTMLDivElement>(null);
  const charactersRef = useRef<HTMLDivElement>(null);
  const quotesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const sdgRef = useRef<HTMLDivElement>(null);
  
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="font-sans bg-gradient-to-b from-[#FDF8E3] to-white text-gray-800 min-h-screen">
      <HeroSection 
        onExploreThemes={() => scrollToSection(themesRef)}
        onExploreSDG={() => scrollToSection(sdgRef)}
        onNavigate={(section) => {
          switch(section) {
            case 'overview':
              scrollToSection(overviewRef);
              break;
            case 'themes':
              scrollToSection(themesRef);
              break;
            case 'characters':
              scrollToSection(charactersRef);
              break;
            case 'quotes':
              scrollToSection(quotesRef);
              break;
            case 'contact':
              scrollToSection(contactRef);
              break;
            case 'sdg':
              scrollToSection(sdgRef);
              break;
          }
        }}
      />
      
      <main className="container mx-auto px-6 py-12">
        <div ref={overviewRef}>
          <BookOverview />
        </div>
        
        <div ref={sdgRef}>
          <SDGConnection />
        </div>
        
        <div ref={themesRef}>
          <ThematicAnalysis />
        </div>
        
        <div ref={charactersRef}>
          <CharacterAnalysis />
        </div>
        
        <div ref={quotesRef}>
          <QuoteShowcase />
        </div>
        
        <div ref={contactRef}>
          <ContactForm />
        </div>
      </main>
      
      <Footer 
        onNavigate={(section) => {
          switch(section) {
            case 'overview':
              scrollToSection(overviewRef);
              break;
            case 'themes':
              scrollToSection(themesRef);
              break;
            case 'characters':
              scrollToSection(charactersRef);
              break;
            case 'quotes':
              scrollToSection(quotesRef);
              break;
            case 'contact':
              scrollToSection(contactRef);
              break;
            case 'sdg':
              scrollToSection(sdgRef);
              break;
          }
        }}
      />
    </div>
  );
}
