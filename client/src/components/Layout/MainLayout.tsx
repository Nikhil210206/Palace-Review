import { ReactNode } from "react";
import { Link } from "wouter";
import { MenuIcon, X, Book, Users, Quote, MessageSquare, BarChart2, HomeIcon, Star, Award } from "lucide-react";
import { useState, useEffect } from "react";
import Footer from "@/components/BookReview/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
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
          ? "bg-[#5D4777] shadow-md py-2" 
          : "bg-[#5D4777] py-4"
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-serif italic text-white">
              Literary Reflections
            </Link>
            
            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-8">
              <li><Link href="/" className="text-white hover:text-[#D4AF37] transition">Home</Link></li>
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
                href="/" 
                className="flex items-center text-white hover:text-[#D4AF37] transition w-full py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <HomeIcon className="mr-3" size={20} />
                <span>Home</span>
              </Link>
            </li>
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