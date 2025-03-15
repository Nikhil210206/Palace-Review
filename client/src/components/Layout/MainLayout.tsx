import { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { MenuIcon, X, Book, Users, Quote, MessageSquare, BarChart2, HomeIcon, Star, Award } from "lucide-react";
import { useState, useEffect } from "react";
import Footer from "@/components/BookReview/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

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
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="font-sans bg-gradient-to-b from-[#FDF8E3] to-white text-gray-800 min-h-screen">
      {/* Fixed Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-deep-indigo shadow-md py-2" 
          : "bg-deep-indigo py-4"
      }`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-serif italic text-white">
              Literary Reflections
            </Link>
            
            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-6">
              <li><Link href="/" className="text-white hover:text-weathered-gold transition">Home</Link></li>
              <li><Link href="/book-overview" className="text-white hover:text-weathered-gold transition">Overview</Link></li>
              <li><Link href="/sdg-connection" className="text-white hover:text-weathered-gold transition">SDG 5</Link></li>
              <li><Link href="/thematic-analysis" className="text-white hover:text-weathered-gold transition">Themes</Link></li>
              <li><Link href="/character-analysis" className="text-white hover:text-weathered-gold transition">Characters</Link></li>
              <li><Link href="/quote-showcase" className="text-white hover:text-weathered-gold transition">Quotes</Link></li>
              <li><Link href="/book-review" className="text-white hover:text-weathered-gold transition">Reviews</Link></li>
              <li><Link href="/conclusion" className="text-white hover:text-weathered-gold transition">Conclusion</Link></li>
              <li><Link href="/contact" className="text-white hover:text-weathered-gold transition">Contact</Link></li>
            </ul>
            
            {/* Mobile Menu Button - Always Visible */}
            <button 
              className="md:hidden text-white hover:text-weathered-gold focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Navigation Menu - Overlay */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
        mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`} onClick={() => setMobileMenuOpen(false)}>
      </div>

      {/* Mobile Navigation Menu - Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full z-50 overflow-y-auto transform transition-transform duration-300 ease-in-out shadow-xl
          ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}
          w-full xs:w-4/5 sm:w-3/4 md:w-2/3 lg:w-1/3 xl:w-1/4
          bg-gradient-to-b from-deep-indigo to-deep-indigo/90`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Navigation Header with Close Button */}
        <div className="flex justify-between items-center p-4 border-b border-weathered-gold/30">
          <div>
            <h2 className="text-white font-serif text-lg">Palace of Illusions</h2>
            <p className="text-silver-gray/90 text-sm">Literary Analysis</p>
          </div>
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="text-white hover:text-weathered-gold transition rounded-full p-1 hover:bg-white/10"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Navigation Menu */}
        <div className="py-4">
          <ul className="px-4 space-y-2">
            <li>
              <Link 
                href="/" 
                className="flex items-center text-white hover:text-weathered-gold hover:bg-white/5 transition w-full py-3 px-3 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                <HomeIcon className="mr-3" size={20} />
                <span className="font-medium">Home</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/book-overview" 
                className="flex items-center text-white hover:text-weathered-gold hover:bg-white/5 transition w-full py-3 px-3 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Book className="mr-3" size={20} />
                <span className="font-medium">Book Overview</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/sdg-connection" 
                className="flex items-center text-white hover:text-weathered-gold hover:bg-white/5 transition w-full py-3 px-3 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                <BarChart2 className="mr-3" size={20} />
                <span className="font-medium">SDG 5 Connection</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/thematic-analysis" 
                className="flex items-center text-white hover:text-weathered-gold hover:bg-white/5 transition w-full py-3 px-3 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                <HomeIcon className="mr-3" size={20} />
                <span className="font-medium">Thematic Analysis</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/character-analysis" 
                className="flex items-center text-white hover:text-weathered-gold hover:bg-white/5 transition w-full py-3 px-3 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Users className="mr-3" size={20} />
                <span className="font-medium">Character Analysis</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/quote-showcase" 
                className="flex items-center text-white hover:text-weathered-gold hover:bg-white/5 transition w-full py-3 px-3 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Quote className="mr-3" size={20} />
                <span className="font-medium">Quote Showcase</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/book-review" 
                className="flex items-center text-white hover:text-weathered-gold hover:bg-white/5 transition w-full py-3 px-3 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Star className="mr-3" size={20} />
                <span className="font-medium">Book Reviews</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/conclusion" 
                className="flex items-center text-white hover:text-weathered-gold hover:bg-white/5 transition w-full py-3 px-3 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Award className="mr-3" size={20} />
                <span className="font-medium">Conclusion</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="flex items-center text-white hover:text-weathered-gold hover:bg-white/5 transition w-full py-3 px-3 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                <MessageSquare className="mr-3" size={20} />
                <span className="font-medium">Contact Form</span>
              </Link>
            </li>
          </ul>
        </div>
        
        {/* Quick Links Section */}
        <div className="px-4 py-4 mt-2 mx-4 bg-white/5 rounded-lg">
          <p className="text-white/80 text-sm font-medium mb-3">Quick Navigation</p>
          <div className="flex flex-wrap gap-2">
            <Link 
              href="/book-overview"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-dusky-rose/90 hover:bg-dusky-rose text-white text-xs px-3 py-2 rounded-md"
            >
              Overview
            </Link>
            <Link 
              href="/thematic-analysis"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-burnt-umber/90 hover:bg-burnt-umber text-white text-xs px-3 py-2 rounded-md"
            >
              Themes
            </Link>
            <Link 
              href="/sdg-connection"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-weathered-gold/90 hover:bg-weathered-gold text-deep-indigo text-xs px-3 py-2 rounded-md"
            >
              SDG 5
            </Link>
            <Link 
              href="/book-review"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-silver-gray/80 hover:bg-silver-gray text-deep-indigo text-xs px-3 py-2 rounded-md"
            >
              Reviews
            </Link>
          </div>
        </div>
      </div>
      
      {/* Page Content */}
      <div className="pt-28 pb-20">
        <main className="container mx-auto px-6 py-12">
          {children}
        </main>
      </div>
      
      {/* Footer */}
      <Footer onNavigate={scrollToTop} />
    </div>
  );
}