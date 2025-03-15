import { Card, CardContent } from "@/components/ui/card";

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
            <div className="md:w-1/3 relative">
              <div className="aspect-square h-full">
                <img 
                  src="https://images.unsplash.com/photo-1583147610149-78ac5cb5a303?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Artistic representation of Draupadi" 
                  className="object-cover h-full w-full" 
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#5D4777]/90 to-transparent p-4 text-white">
                <h3 className="font-serif text-2xl font-bold">Draupadi (Panchaali)</h3>
                <p className="italic">The Woman of Fire</p>
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
            <div className="flex items-center border-b border-gray-200">
              <div className="w-24 h-24 rounded-full overflow-hidden m-4 border-2 border-[#3A7D7B]">
                <img 
                  src="https://images.unsplash.com/photo-1590955559496-50316bd28ff7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Artistic representation of Krishna" 
                  className="object-cover h-full w-full" 
                />
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
            </CardContent>
          </Card>
          
          {/* Character 2 */}
          <Card className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex items-center border-b border-gray-200">
              <div className="w-24 h-24 rounded-full overflow-hidden m-4 border-2 border-[#5D4777]">
                <img 
                  src="https://images.unsplash.com/photo-1590086783191-a0694c7d1e6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Artistic representation of Kunti" 
                  className="object-cover h-full w-full" 
                />
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
            </CardContent>
          </Card>
          
          {/* Character 3 */}
          <Card className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex items-center border-b border-gray-200">
              <div className="w-24 h-24 rounded-full overflow-hidden m-4 border-2 border-[#D4AF37]">
                <img 
                  src="https://images.unsplash.com/photo-1563170423-18f482d8e5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Artistic representation of Karna" 
                  className="object-cover h-full w-full" 
                />
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
            </CardContent>
          </Card>
          
          {/* Character 4 */}
          <Card className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex items-center border-b border-gray-200">
              <div className="w-24 h-24 rounded-full overflow-hidden m-4 border-2 border-[#3A7D7B]">
                <img 
                  src="https://images.unsplash.com/photo-1566755270271-a43b83079029?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Artistic representation of the Pandava Brothers" 
                  className="object-cover h-full w-full" 
                />
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
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
