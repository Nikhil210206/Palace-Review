import { Card, CardContent } from "@/components/ui/card";
import { Flame, Users, Star, Award, Crown } from "lucide-react";

export default function CharacterAnalysis() {
  return (
    <section id="characters" className="mb-20 pt-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-[#5D4777] mb-4">Character Analysis</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Examining character portrayals through a gender equality lens</p>
        </div>
        
        {/* Main Character */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 relative bg-gradient-to-br from-[#5D4777] to-[#3A7D7B] flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[#F0E6FF] flex items-center justify-center">
                  <Flame size={48} className="text-[#5D4777]" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">Draupadi (Panchaali)</h3>
                <p className="italic text-white/80">The Woman of Fire</p>
              </div>
            </div>
            <div className="md:w-2/3 p-6">
              <div className="mb-4">
                <span className="inline-block bg-[#F0E6FF] text-[#5D4777] px-3 py-1 rounded-full text-sm font-medium mr-2">Protagonist</span>
                <span className="inline-block bg-[#E0F2F1] text-[#3A7D7B] px-3 py-1 rounded-full text-sm font-medium">Born of Fire</span>
              </div>
              
              <p className="mb-4">
                Draupadi represents the complexity of female experience in a patriarchal world. Born from fire and prophesied for greatness, she embodies determination, intelligence, and resilience. The novel tracks her evolution from a sheltered princess to a woman who challenges kings and shapes kingdoms.
              </p>
              
              <p className="mb-4">
                From a gender equality perspective, Draupadi symbolizes the persistent struggle for female dignity and self-determination. Her polygamous marriage to five brothers portrays her objectification as property to be shared, while simultaneously showing her attempts to maintain agency within these constraints.
              </p>
              
              <p>
                Her character illustrates both the historical limitations placed on women and the ways women have always found to exercise power despite these limitations—making her story powerfully relevant to contemporary gender equality movements.
              </p>
              
              <div className="mt-6 space-y-2">
                <h4 className="font-serif font-bold text-[#5D4777]">Gender Equality Significance:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Challenges the silencing of women's voices in historical narratives</li>
                  <li>Illustrates female resilience in the face of objectification and violence</li>
                  <li>Shows how systemic gender inequality affects even the most privileged women</li>
                  <li>Explores how women's anger at injustice has historically been delegitimized</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Supporting Characters Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Character 1 */}
          <Card className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex items-center border-b border-gray-200 p-4">
              <div className="w-16 h-16 rounded-full bg-[#E0F2F1] flex items-center justify-center mr-4">
                <Star size={32} className="text-[#3A7D7B]" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#5D4777]">Krishna</h3>
                <p className="text-gray-600 italic">Divine Counselor</p>
              </div>
            </div>
            <CardContent className="p-4">
              <p className="mb-4">
                As Draupadi's advisor and friend, Krishna represents divine wisdom that transcends gender norms. His relationship with Draupadi is notable for its equality and mutual respect—a stark contrast to her other relationships with men.
              </p>
              
              <p>
                Krishna's character demonstrates how genuine allyship involves listening to women's experiences and supporting their agency without imposing solutions—an important model for gender equality work.
              </p>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <blockquote className="italic text-sm text-gray-600 border-l-4 border-[#3A7D7B] pl-3">
                  "I am the friend of all creatures. But you—you are special. I have known you for many lifetimes."
                </blockquote>
              </div>
            </CardContent>
          </Card>
          
          {/* Character 2 */}
          <Card className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex items-center border-b border-gray-200 p-4">
              <div className="w-16 h-16 rounded-full bg-[#F0E6FF] flex items-center justify-center mr-4">
                <Crown size={32} className="text-[#5D4777]" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#5D4777]">Kunti</h3>
                <p className="text-gray-600 italic">Mother of the Pandavas</p>
              </div>
            </div>
            <CardContent className="p-4">
              <p className="mb-4">
                Kunti represents an older generation of women who survived by navigating patriarchal systems rather than challenging them. Her complex relationship with Draupadi highlights intergenerational tensions within women's experiences.
              </p>
              
              <p>
                From a gender equality perspective, Kunti's character illuminates how women have sometimes perpetuated harmful norms to survive, and how achieving equality requires addressing internalized biases.
              </p>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <blockquote className="italic text-sm text-gray-600 border-l-4 border-[#5D4777] pl-3">
                  "A woman's strength must lie in her forbearance. That's how I survived."
                </blockquote>
              </div>
            </CardContent>
          </Card>
          
          {/* Character 3 */}
          <Card className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex items-center border-b border-gray-200 p-4">
              <div className="w-16 h-16 rounded-full bg-[#FFF8E0] flex items-center justify-center mr-4">
                <Award size={32} className="text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#5D4777]">Karna</h3>
                <p className="text-gray-600 italic">The Rejected Warrior</p>
              </div>
            </div>
            <CardContent className="p-4">
              <p className="mb-4">
                Karna's character and Draupadi's unexplored relationship with him represents unfulfilled potential and the limitations societal structures place on human connections based on status and gender.
              </p>
              
              <p>
                Their interaction highlights how gender norms intersect with other forms of social stratification, reflecting SDG 5's recognition that gender equality requires addressing multiple, intersecting inequalities.
              </p>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <blockquote className="italic text-sm text-gray-600 border-l-4 border-[#D4AF37] pl-3">
                  "Society's labels become our prison bars when we accept them without question."
                </blockquote>
              </div>
            </CardContent>
          </Card>
          
          {/* Character 4 */}
          <Card className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex items-center border-b border-gray-200 p-4">
              <div className="w-16 h-16 rounded-full bg-[#E0F2F1] flex items-center justify-center mr-4">
                <Users size={32} className="text-[#3A7D7B]" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#5D4777]">The Five Pandavas</h3>
                <p className="text-gray-600 italic">Draupadi's Husbands</p>
              </div>
            </div>
            <CardContent className="p-4">
              <p className="mb-4">
                The Pandava brothers represent different masculine archetypes and their varied treatment of Draupadi reveals the spectrum of male attitudes toward women—from respect to objectification.
              </p>
              
              <p>
                Their collective willingness to share her as a wife underscores how even honorable men in patriarchal systems can participate in women's commodification, highlighting SDG 5's focus on transforming harmful gender norms.
              </p>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <blockquote className="italic text-sm text-gray-600 border-l-4 border-[#3A7D7B] pl-3">
                  "The brothers each viewed her differently, yet none saw her entirely as her own person."
                </blockquote>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* New content: Additional characters */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="font-serif text-2xl font-bold text-[#5D4777] mb-6">Additional Character Insights</h3>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h4 className="font-serif text-xl font-bold text-[#3A7D7B] mb-4">Duryodhana & Dussasana</h4>
            <p className="mb-4">
              As antagonists, these characters embody toxic masculinity that views women as property and tools for humiliation. Their attempt to disrobe Draupadi in court represents a violent manifestation of patriarchal entitlement.
            </p>
            <p>
              From a gender equality perspective, these characters illustrate how violence against women has historically been used as a weapon to maintain male dominance and punish women who challenge established power structures.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="font-serif text-xl font-bold text-[#3A7D7B] mb-4">Subhadra and Hidimbi</h4>
            <p className="mb-4">
              These secondary female characters provide important contrasts to Draupadi's experience. Their different circumstances highlight how gender oppression operates across various social positions.
            </p>
            <p>
              Their inclusion in the narrative, though brief compared to Draupadi's central role, demonstrates the importance of intersectional approaches to gender equality that recognize diversity among women's experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
