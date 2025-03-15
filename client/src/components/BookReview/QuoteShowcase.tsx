import { Card, CardContent } from "@/components/ui/card";

export default function QuoteShowcase() {
  return (
    <section className="mb-20 pt-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-[#5D4777] mb-4">Quote Showcase</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Powerful passages from the novel that illuminate gender equality themes</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Quote 1 */}
          <div className="bg-[#F0E6FF] rounded-lg p-8 relative">
            <span className="text-6xl leading-none absolute top-6 left-4 text-[#5D4777]/15" aria-hidden="true">"</span>
            <blockquote className="text-[#5D4777] text-lg italic mb-6 relative z-10 pl-4">
              A woman is not a touch but a response to it, not a hunger but food for someone else's need.
            </blockquote>
            <div className="text-right">
              <p className="font-serif font-bold text-[#5D4777]">Draupadi</p>
              <p className="text-sm text-gray-600">Chapter 12</p>
            </div>
            <span className="text-6xl leading-none absolute bottom-0 right-4 text-[#5D4777]/15" aria-hidden="true">"</span>
            
            <div className="mt-4 pt-4 border-t border-[#5D4777]/30">
              <h4 className="font-serif font-bold text-[#5D4777] mb-2">Gender Equality Insight:</h4>
              <p className="text-sm">
                This passage highlights the objectification of women as vessels for male desire rather than autonomous beings with their own needs—a fundamental issue that gender equality movements continue to address.
              </p>
            </div>
          </div>
          
          {/* Quote 2 */}
          <div className="bg-[#E0F2F1] rounded-lg p-8 relative">
            <span className="text-6xl leading-none absolute top-6 left-4 text-[#3A7D7B]/15" aria-hidden="true">"</span>
            <blockquote className="text-[#3A7D7B] text-lg italic mb-6 relative z-10 pl-4">
              I too have failed her, I who swore to protect her honor. What kind of men are we, to treat a woman so?
            </blockquote>
            <div className="text-right">
              <p className="font-serif font-bold text-[#3A7D7B]">Yudhishthira</p>
              <p className="text-sm text-gray-600">Chapter 19</p>
            </div>
            <span className="text-6xl leading-none absolute bottom-0 right-4 text-[#3A7D7B]/15" aria-hidden="true">"</span>
            
            <div className="mt-4 pt-4 border-t border-[#3A7D7B]/30">
              <h4 className="font-serif font-bold text-[#3A7D7B] mb-2">Gender Equality Insight:</h4>
              <p className="text-sm">
                This moment of male self-reflection illustrates how achieving gender equality requires men to recognize their complicity in systems that harm women and take responsibility for change.
              </p>
            </div>
          </div>
          
          {/* Quote 3 */}
          <div className="bg-[#D4AF37]/20 rounded-lg p-8 relative">
            <span className="text-6xl leading-none absolute top-6 left-4 text-[#D4AF37]/30" aria-hidden="true">"</span>
            <blockquote className="text-gray-800 text-lg italic mb-6 relative z-10 pl-4">
              The more I dwelt on it, the more it seemed to me that a woman's life was a legacy of loss.
            </blockquote>
            <div className="text-right">
              <p className="font-serif font-bold text-gray-800">Draupadi</p>
              <p className="text-sm text-gray-600">Chapter 23</p>
            </div>
            <span className="text-6xl leading-none absolute bottom-0 right-4 text-[#D4AF37]/30" aria-hidden="true">"</span>
            
            <div className="mt-4 pt-4 border-t border-[#D4AF37]/50">
              <h4 className="font-serif font-bold text-gray-800 mb-2">Gender Equality Insight:</h4>
              <p className="text-sm">
                This poignant observation connects to SDG 5's recognition that women globally continue to face disproportionate losses in opportunities, autonomy, and recognition due to gender discrimination.
              </p>
            </div>
          </div>
          
          {/* Quote 4 */}
          <div className="bg-gradient-to-br from-[#5D4777]/10 to-[#3A7D7B]/10 rounded-lg p-8 relative">
            <span className="text-6xl leading-none absolute top-6 left-4 text-gray-400/30" aria-hidden="true">"</span>
            <blockquote className="text-gray-800 text-lg italic mb-6 relative z-10 pl-4">
              They'd take away my dignity and then blame me for it. That's what men do.
            </blockquote>
            <div className="text-right">
              <p className="font-serif font-bold text-gray-800">Draupadi</p>
              <p className="text-sm text-gray-600">Chapter 17</p>
            </div>
            <span className="text-6xl leading-none absolute bottom-0 right-4 text-gray-400/30" aria-hidden="true">"</span>
            
            <div className="mt-4 pt-4 border-t border-gray-300">
              <h4 className="font-serif font-bold text-gray-800 mb-2">Gender Equality Insight:</h4>
              <p className="text-sm">
                This quote speaks directly to victim-blaming narratives that persist today, connecting to SDG 5's call to eliminate all forms of violence against women and harmful practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
