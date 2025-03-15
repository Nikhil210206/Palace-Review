import { useState } from "react";
import { MenuIcon, X } from "lucide-react";

interface HeroSectionProps {
  onExploreThemes: () => void;
  onExploreSDG: () => void;
  onNavigate: (section: string) => void;
}

export default function HeroSection({ 
  onExploreThemes, 
  onExploreSDG, 
  onNavigate 
}: HeroSectionProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#5D4777]/90 to-[#3A7D7B]/90 opacity-80 z-0"></div>
      <div 
        className="bg-[url('https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80')] bg-cover bg-center absolute inset-0 z-[-1]"
        aria-hidden="true"
      ></div>
      
      <div className="container mx-auto px-6 relative z-10 text-white">
        <nav className="flex justify-between items-center mb-12">
          <div className="text-xl font-serif italic">Literary Reflections</div>
          <ul className={`md:flex space-y-4 md:space-y-0 md:space-x-8 ${
            mobileMenuOpen 
              ? "flex flex-col absolute top-16 right-6 bg-[#5D4777] p-4 rounded-md shadow-lg z-50" 
              : "hidden"
          }`}>
            <li><button onClick={() => onNavigate('overview')} className="hover:text-[#D4AF37] transition">Overview</button></li>
            <li><button onClick={() => onNavigate('themes')} className="hover:text-[#D4AF37] transition">Themes</button></li>
            <li><button onClick={() => onNavigate('characters')} className="hover:text-[#D4AF37] transition">Characters</button></li>
            <li><button onClick={() => onNavigate('quotes')} className="hover:text-[#D4AF37] transition">Quotes</button></li>
            <li><button onClick={() => onNavigate('contact')} className="hover:text-[#D4AF37] transition">Contact</button></li>
          </ul>
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </nav>
        
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Palace of Illusions</h1>
          <h2 className="text-xl md:text-2xl font-serif italic mb-6">By Chitra Banerjee Divakaruni</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8">A literary exploration of destiny, power, and gender equality through the eyes of Draupadi</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onExploreThemes}
              className="bg-[#D4AF37] text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-white transition"
            >
              Explore Themes
            </button>
            <button 
              onClick={onExploreSDG}
              className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-[#5D4777] transition"
            >
              Gender Equality & SDG 5
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
