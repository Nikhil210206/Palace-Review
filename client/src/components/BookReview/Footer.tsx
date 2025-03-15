import { Twitter, Instagram, Facebook, BookOpen, ArrowUp, Mail, Github, Linkedin } from "lucide-react";
import { Link } from "wouter";

interface FooterProps {
  onNavigate: (section: string) => void;
  // This interface is kept for backward compatibility
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Literary Reflections</h3>
            <p className="text-gray-400 mb-4">Exploring literature through the lens of gender equality and sustainable development.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition" aria-label="Twitter">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition" aria-label="Facebook">
                <Facebook size={24} />
              </a>
            </div>
            
            <div className="mt-6">
              <h4 className="text-gray-300 font-medium mb-2">Join Our Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#D4AF37] w-full"
                />
                <button 
                  className="bg-[#D4AF37] text-gray-900 px-4 py-2 rounded-r-md hover:bg-[#D4AF37]/80 transition"
                  aria-label="Subscribe"
                >
                  <Mail size={20} />
                </button>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/book-overview" className="text-gray-400 hover:text-[#D4AF37] transition">Book Overview</Link></li>
              <li><Link href="/sdg-connection" className="text-gray-400 hover:text-[#D4AF37] transition">SDG 5 Connection</Link></li>
              <li><Link href="/thematic-analysis" className="text-gray-400 hover:text-[#D4AF37] transition">Thematic Analysis</Link></li>
              <li><Link href="/character-analysis" className="text-gray-400 hover:text-[#D4AF37] transition">Character Analysis</Link></li>
              <li><Link href="/quote-showcase" className="text-gray-400 hover:text-[#D4AF37] transition">Quote Showcase</Link></li>
              <li><Link href="/book-review" className="text-gray-400 hover:text-[#D4AF37] transition">Book Reviews</Link></li>
              <li><Link href="/conclusion" className="text-gray-400 hover:text-[#D4AF37] transition">Conclusion</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-[#D4AF37] transition">Contact</Link></li>
              <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-400 hover:text-[#D4AF37] transition flex items-center mt-4">
                <span>Back to Top</span>
                <ArrowUp size={16} className="ml-2" />
              </button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Related Resources</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.un.org/sustainabledevelopment/gender-equality/" 
                  className="text-gray-400 hover:text-[#D4AF37] transition flex items-center" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span className="w-5 inline-block mr-2">
                    <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                      <rect width="1000" height="1000" fill="#FF3A21"/>
                      <path d="M180.8 626.1c23.3-45.9 66.5-75.9 116.2-83.8 40.4-7.5 81.3 0 117.9 20.4 33.1 18.9 58.9 47.5 74.9 82H310.7c-3 0-5.4 2.4-5.4 5.4v14.6c0 3 2.4 5.4 5.4 5.4h524.3c1.1 27.4-3.3 55.5-13.4 81.8-23.3 45.9-66.5 75.9-116.2 83.8-40.4 7.5-81.3 0-117.9-20.4-33.1-18.9-58.9-47.5-74.9-82h179.1c3 0 5.4-2.4 5.4-5.4v-14.6c0-3-2.4-5.4-5.4-5.4H171.4c-1.1-27.4 3.3-55.5 13.4-81.8z" fill="#fff"/>
                      <path d="M164.7 354.4c0-36 14.6-68.5 38.1-92.1 23.5-23.5 56-38.1 92.1-38.1v130.2h-130.2zM294.9 354.4h130.2c0-36-14.6-68.5-38.1-92.1-23.5-23.5-56-38.1-92.1-38.1v130.2zM425.1 354.4v130.2c36 0 68.5-14.6 92.1-38.1 23.5-23.5 38.1-56 38.1-92.1H425.1zM294.9 354.4v130.2c-36 0-68.5-14.6-92.1-38.1-23.5-23.5-38.1-56-38.1-92.1h130.2zM686.3 250c-28.9 0-55.1 11.7-74.1 30.7-19 19-30.7 45.2-30.7 74.1s11.7 55.1 30.7 74.1c19 19 45.2 30.7 74.1 30.7s55.1-11.7 74.1-30.7c19-19 30.7-45.2 30.7-74.1s-11.7-55.1-30.7-74.1c-19-19-45.2-30.7-74.1-30.7z" fill="#fff"/>
                      <path d="M566.2 354.8c0-33.1 13.4-63.1 35.1-84.8 21.7-21.7 51.7-35.1 84.8-35.1s63.1 13.4 84.8 35.1c21.7 21.7 35.1 51.7 35.1 84.8s-13.4 63.1-35.1 84.8c-21.7 21.7-51.7 35.1-84.8 35.1s-63.1-13.4-84.8-35.1c-21.7-21.7-35.1-51.7-35.1-84.8z" fill="#FF3A21"/>
                    </svg>
                  </span>
                  <span>UN SDG 5: Gender Equality</span>
                </a>
              </li>
              <li><a href="https://www.chitradivakaruni.com/" className="text-gray-400 hover:text-[#D4AF37] transition flex items-center" target="_blank" rel="noopener noreferrer">
                <BookOpen size={16} className="mr-2" />
                <span>Author's Official Website</span>
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#D4AF37] transition">Mahabharata Study Resources</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#D4AF37] transition">Gender in Literature Reading List</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#D4AF37] transition">Indian Literature Recommendations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#D4AF37] transition">Women Writers Collection</a></li>
            </ul>
          </div>
        </div>
        
        {/* Additional Content */}
        <div className="border-t border-gray-800 pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="font-serif text-lg font-medium text-gray-300 mb-2">About This Project</h4>
              <p className="text-gray-400 text-sm">
                This literary analysis website was created to explore gender equality themes in "Palace of Illusions" and connect them with contemporary social development goals. The site serves as an educational resource for students, educators, and literary enthusiasts.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-gray-400 hover:text-[#D4AF37] transition" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-[#D4AF37] transition" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Literary Reflections. This website is created for educational purposes.</p>
        </div>
      </div>
    </footer>
  );
}
