import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowUp } from "lucide-react";
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

export default function Home() {
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
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const playAudio = () => {
    const audio = document.getElementById('audioPlayer') as HTMLAudioElement;
    audio.play();
  };

  return (
    <div className="font-sans bg-gradient-to-b from-[#FDF8E3] to-white text-gray-800 min-h-screen">
      <HeroSection 
        onExploreThemes={() => {}}
        onExploreSDG={() => {}}
        onNavigate={() => {}}
      />
      
      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 lg:gap-12">
          {/* Featured Sections */}
          <section className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="p-8 flex flex-col justify-center">
                <h2 className="text-2xl font-serif font-bold text-[#5D4777] mb-4">Book Overview</h2>
                <p className="text-gray-700 mb-6">
                  Explore the foundation of Chitra Banerjee Divakaruni's reimagining of the Mahabharata 
                  through the eyes of Draupadi, offering a unique female perspective on this ancient epic.
                </p>
                <Link 
                  href="/book-overview"
                  className="bg-[#5D4777] text-white px-4 py-2 rounded-md font-medium hover:bg-[#4A3C5F] transition inline-block w-max"
                >
                  Discover More
                </Link>
              </div>
              <div className="bg-[#F0EBF8] p-8 flex flex-col justify-center">
                <h2 className="text-2xl font-serif font-bold text-[#5D4777] mb-4">Thematic Analysis</h2>
                <p className="text-gray-700 mb-6">
                  Dive into the key themes of gender, power, and destiny that permeate the narrative, 
                  challenging traditional interpretations and revealing new layers of meaning.
                </p>
                <Link 
                  href="/thematic-analysis"
                  className="bg-[#5D4777] text-white px-4 py-2 rounded-md font-medium hover:bg-[#4A3C5F] transition inline-block w-max"
                >
                  Explore Themes
                </Link>
              </div>
            </div>
          </section>
          
          {/* SDG and Character Analysis */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="bg-[#3A7D7B]/10 rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-serif font-bold text-[#3A7D7B] mb-4">SDG 5: Gender Equality</h2>
              <p className="text-gray-700 mb-6">
                Understand how Draupadi's narrative connects to contemporary gender equality issues 
                and the United Nations' Sustainable Development Goal 5.
              </p>
              <Link 
                href="/sdg-connection"
                className="bg-[#3A7D7B] text-white px-4 py-2 rounded-md font-medium hover:bg-[#2E6361] transition inline-block w-max"
              >
                Explore Connection
              </Link>
            </section>
            
            <section className="bg-[#D4AF37]/10 rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-serif font-bold text-[#A38829] mb-4">Character Analysis</h2>
              <p className="text-gray-700 mb-6">
                Meet the complex characters of the novel and understand their motivations, relationships, 
                and significance in Draupadi's journey.
              </p>
              <Link 
                href="/character-analysis"
                className="bg-[#D4AF37] text-gray-900 px-4 py-2 rounded-md font-medium hover:bg-[#BF9F30] transition inline-block w-max"
              >
                Meet Characters
              </Link>
            </section>
          </div>
          
          {/* Additional Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <section className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-serif font-bold text-[#5D4777] mb-3">Memorable Quotes</h2>
              <p className="text-gray-700 mb-5">
                Discover powerful quotes that capture the essence of the novel and Draupadi's perspective.
              </p>
              <Link 
                href="/quote-showcase"
                className="text-[#5D4777] font-medium hover:underline transition"
              >
                View Quotes →
              </Link>
            </section>
            
            <section className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-serif font-bold text-[#5D4777] mb-3">Book Reviews</h2>
              <p className="text-gray-700 mb-5">
                Read critical reviews and diverse perspectives on the literary impact of "Palace of Illusions".
              </p>
              <Link 
                href="/book-review"
                className="text-[#5D4777] font-medium hover:underline transition"
              >
                Read Reviews →
              </Link>
            </section>
            
            <section className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-serif font-bold text-[#5D4777] mb-3">Conclusion</h2>
              <p className="text-gray-700 mb-5">
                Explore the final thoughts on the novel's significance in literature and gender discourse.
              </p>
              <Link 
                href="/conclusion"
                className="text-[#5D4777] font-medium hover:underline transition"
              >
                Read Conclusion →
              </Link>
            </section>
          </div>
          
          {/* Contact Form Section */}
          <section className="bg-[#5D4777]/10 rounded-xl shadow-sm p-8 mt-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-serif font-bold text-[#5D4777] mb-4">Share Your Thoughts</h2>
              <p className="text-gray-700 mb-6">
                Have insights about "Palace of Illusions" or feedback on our analysis? 
                We'd love to hear your perspective.
              </p>
              <Link 
                href="/contact"
                className="bg-[#5D4777] text-white px-6 py-3 rounded-md font-medium hover:bg-[#4A3C5F] transition inline-block"
              >
                Contact Us
              </Link>
            </div>
          </section>
        </div>
      </div>
      
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
      
      <Footer onNavigate={scrollToTop} />

      {/* Audio Player and Button */}
      <button onClick={playAudio} className="fixed bottom-6 left-6 bg-[#5D4777] text-white p-3 rounded-full shadow-lg">
        Play MP3
      </button>
      <audio id="audioPlayer" src="/audio/yourfile.mp3"></audio>
    </div>
  );
}