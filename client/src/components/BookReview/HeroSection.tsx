import { useState, useEffect } from "react";
import { Link } from "wouter";
import { MenuIcon, X, Book, Users, Quote, MessageSquare, BarChart2, HomeIcon, Star, Award } from "lucide-react";

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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Fixed Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#5D4777] shadow-md py-2" 
          : "bg-transparent py-4"
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="text-xl font-serif italic text-white">Literary Reflections</div>
            
            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-8">
              <li><Link href="/book-overview" className="text-white hover:text-[#D4AF37] transition">Overview</Link></li>
              <li><Link href="/sdg-connection" className="text-white hover:text-[#D4AF37] transition">SDG 5</Link></li>
              <li><Link href="/thematic-analysis" className="text-white hover:text-[#D4AF37] transition">Themes</Link></li>
              <li><Link href="/character-analysis" className="text-white hover:text-[#D4AF37] transition">Characters</Link></li>
              <li><Link href="/quote-showcase" className="text-white hover:text-[#D4AF37] transition">Quotes</Link></li>
              <li><Link href="/book-review" className="text-white hover:text-[#D4AF37] transition">Reviews</Link></li>
              <li><Link href="/conclusion" className="text-white hover:text-[#D4AF37] transition">Conclusion</Link></li>
              <li><Link href="/contact" className="text-white hover:text-[#D4AF37] transition">Contact</Link></li>
            </ul>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Navigation Menu */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
        mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`} onClick={() => setMobileMenuOpen(false)}>
        <div 
          className={`fixed top-0 right-0 h-full w-64 bg-[#5D4777] transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-end p-4">
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="text-white"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="p-4 border-b border-[#D4AF37]/30">
            <h2 className="text-white font-serif text-lg">Palace of Illusions</h2>
            <p className="text-white/70 text-sm">Literary Analysis</p>
          </div>
          
          <ul className="px-4 py-2">
            <li className="mb-4">
              <Link 
                href="/book-overview" 
                className="flex items-center text-white hover:text-[#D4AF37] transition w-full py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Book className="mr-3" size={20} />
                <span>Book Overview</span>
              </Link>
            </li>
            <li className="mb-4">
              <Link 
                href="/sdg-connection" 
                className="flex items-center text-white hover:text-[#D4AF37] transition w-full py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <BarChart2 className="mr-3" size={20} />
                <span>SDG 5 Connection</span>
              </Link>
            </li>
            <li className="mb-4">
              <Link 
                href="/thematic-analysis" 
                className="flex items-center text-white hover:text-[#D4AF37] transition w-full py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <HomeIcon className="mr-3" size={20} />
                <span>Thematic Analysis</span>
              </Link>
            </li>
            <li className="mb-4">
              <Link 
                href="/character-analysis" 
                className="flex items-center text-white hover:text-[#D4AF37] transition w-full py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Users className="mr-3" size={20} />
                <span>Character Analysis</span>
              </Link>
            </li>
            <li className="mb-4">
              <Link 
                href="/quote-showcase" 
                className="flex items-center text-white hover:text-[#D4AF37] transition w-full py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Quote className="mr-3" size={20} />
                <span>Quote Showcase</span>
              </Link>
            </li>
            <li className="mb-4">
              <Link 
                href="/book-review" 
                className="flex items-center text-white hover:text-[#D4AF37] transition w-full py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Star className="mr-3" size={20} />
                <span>Book Reviews</span>
              </Link>
            </li>
            <li className="mb-4">
              <Link 
                href="/conclusion" 
                className="flex items-center text-white hover:text-[#D4AF37] transition w-full py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Award className="mr-3" size={20} />
                <span>Conclusion</span>
              </Link>
            </li>
            <li className="mb-4">
              <Link 
                href="/contact" 
                className="flex items-center text-white hover:text-[#D4AF37] transition w-full py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <MessageSquare className="mr-3" size={20} />
                <span>Contact Form</span>
              </Link>
            </li>
          </ul>
          
          <div className="p-4 mt-4 bg-[#D4AF37]/10">
            <p className="text-white/70 text-sm mb-2">Explore Sections</p>
            <div className="flex flex-wrap gap-2">
              <Link 
                href="/book-overview"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-white/10 hover:bg-white/20 text-white text-xs px-2 py-1 rounded"
              >
                Overview
              </Link>
              <Link 
                href="/thematic-analysis"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-white/10 hover:bg-white/20 text-white text-xs px-2 py-1 rounded"
              >
                Themes
              </Link>
              <Link 
                href="/book-review"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-white/10 hover:bg-white/20 text-white text-xs px-2 py-1 rounded"
              >
                Reviews
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hero Section */}
      <header className="relative pt-28 pb-20 md:pt-32 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#5D4777]/90 to-[#3A7D7B]/90 opacity-80 z-0"></div>
        <div 
          className="bg-[url('https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80')] bg-cover bg-center absolute inset-0 z-[-1]"
          aria-hidden="true"
        ></div>
        
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Palace of Illusions</h1>
            <h2 className="text-xl md:text-2xl font-serif italic mb-6">By Chitra Banerjee Divakaruni</h2>
            <p className="text-lg md:text-xl opacity-90 mb-8">A literary exploration of destiny, power, and gender equality through the eyes of Draupadi</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/thematic-analysis"
                className="bg-[#D4AF37] text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-white transition text-center"
              >
                Explore Themes
              </Link>
              <Link 
                href="/sdg-connection"
                className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-[#5D4777] transition text-center"
              >
                Gender Equality & SDG 5
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
