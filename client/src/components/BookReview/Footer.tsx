interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Literary Reflections</h3>
            <p className="text-gray-400 mb-4">Exploring literature through the lens of gender equality and sustainable development.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate('overview')} className="text-gray-400 hover:text-[#D4AF37] transition">Book Overview</button></li>
              <li><button onClick={() => onNavigate('sdg')} className="text-gray-400 hover:text-[#D4AF37] transition">SDG 5 Connection</button></li>
              <li><button onClick={() => onNavigate('themes')} className="text-gray-400 hover:text-[#D4AF37] transition">Thematic Analysis</button></li>
              <li><button onClick={() => onNavigate('characters')} className="text-gray-400 hover:text-[#D4AF37] transition">Character Analysis</button></li>
              <li><button onClick={() => onNavigate('quotes')} className="text-gray-400 hover:text-[#D4AF37] transition">Quote Showcase</button></li>
              <li><button onClick={() => onNavigate('contact')} className="text-gray-400 hover:text-[#D4AF37] transition">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Related Resources</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.un.org/sustainabledevelopment/gender-equality/" 
                  className="text-gray-400 hover:text-[#D4AF37] transition" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  UN SDG 5: Gender Equality
                </a>
              </li>
              <li><a href="#" className="text-gray-400 hover:text-[#D4AF37] transition">Author's Official Website</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#D4AF37] transition">Mahabharata Study Resources</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#D4AF37] transition">Gender in Literature Reading List</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Literary Reflections. This website is created for educational purposes.</p>
        </div>
      </div>
    </footer>
  );
}
