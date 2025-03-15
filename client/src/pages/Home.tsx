import HeroSection from "@/components/BookReview/HeroSection";
import BookOverview from "@/components/BookReview/BookOverview";
import SDGConnection from "@/components/BookReview/SDGConnection";
import ThematicAnalysis from "@/components/BookReview/ThematicAnalysis";
import CharacterAnalysis from "@/components/BookReview/CharacterAnalysis";
import QuoteShowcase from "@/components/BookReview/QuoteShowcase";
import ContactForm from "@/components/BookReview/ContactForm";
import BookReview from "@/components/BookReview/BookReview";
import Conclusion from "@/components/BookReview/Conclusion";
import Footer from "@/components/BookReview/Footer";
import { useRef, useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function Home() {
  const overviewRef = useRef<HTMLDivElement>(null);
  const themesRef = useRef<HTMLDivElement>(null);
  const charactersRef = useRef<HTMLDivElement>(null);
  const quotesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const sdgRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const conclusionRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavigation = (section: string) => {
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
      case 'reviews':
        scrollToSection(reviewsRef);
        break;
      case 'conclusion':
        scrollToSection(conclusionRef);
        break;
      case 'contact':
        scrollToSection(contactRef);
        break;
      case 'sdg':
        scrollToSection(sdgRef);
        break;
      case 'top':
        scrollToTop();
        break;
    }
  };

  return (
    <div className="font-sans bg-gradient-to-b from-[#FDF8E3] to-white text-gray-800 min-h-screen" ref={topRef}>
      <HeroSection 
        onExploreThemes={() => scrollToSection(themesRef)}
        onExploreSDG={() => scrollToSection(sdgRef)}
        onNavigate={handleNavigation}
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
        
        <div ref={reviewsRef}>
          <BookReview />
        </div>
        
        <div ref={conclusionRef}>
          <Conclusion />
        </div>
        
        <div ref={contactRef}>
          <ContactForm />
        </div>
      </main>
      
      {/* Back to Top Button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 bg-[#5D4777] text-white p-3 rounded-full shadow-lg transition-all duration-300 ${
          showBackToTop ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp size={24} />
      </button>
      
      <Footer onNavigate={handleNavigation} />
    </div>
  );
}
