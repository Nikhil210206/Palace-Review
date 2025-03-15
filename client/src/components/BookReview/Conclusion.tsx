import { Award } from "lucide-react";

export default function Conclusion() {
  return (
    <section className="mb-20 pt-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-[#5D4777] mb-4">Conclusion</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Reflecting on the enduring impact of "Palace of Illusions" in the gender equality conversation</p>
        </div>
        
        <div className="bg-gradient-to-r from-[#F0E6FF] to-[#E0F2F1] rounded-lg p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/4 flex justify-center">
              <div className="w-32 h-32 rounded-full bg-white/50 flex items-center justify-center">
                <Award size={64} className="text-[#5D4777]" />
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="font-serif text-2xl font-bold text-[#5D4777] mb-4">Literary Achievement & Societal Impact</h3>
              <p className="mb-4">
                Chitra Banerjee Divakaruni's "Palace of Illusions" stands as a landmark work that bridges ancient mythology with contemporary gender discourse. By reimagining the Mahabharata from Draupadi's perspective, the novel accomplishes what many literary works aspire to but few achieve: it transforms how we understand both the past and the present.
              </p>
              <p>
                The novel's enduring significance lies in its demonstration that feminist retellings are not merely academic exercises or political statements, but powerful narrative tools that recover lost perspectives and expand our collective understanding of human experience.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-serif text-xl font-bold text-[#5D4777] mb-4">Educational Value</h3>
            <p className="mb-4">
              As an educational resource, "Palace of Illusions" offers students and educators a rich text through which to explore the intersections of gender, power, history, and narrative perspective. The novel's accessibility makes complex discussions about gender equality approachable through the familiarity of storytelling.
            </p>
            <p>
              By examining how Draupadi navigates the constraints of her society while maintaining her sense of self, readers gain insights into how individuals throughout history have resisted and negotiated oppressive structures—a lesson that remains profoundly relevant today.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-serif text-xl font-bold text-[#5D4777] mb-4">Connection to Modern Movements</h3>
            <p className="mb-4">
              The themes explored in "Palace of Illusions" resonate strongly with contemporary gender equality movements that emphasize the importance of women's voices, agency, and leadership. Draupadi's struggle for dignity and self-determination mirrors ongoing efforts to challenge restrictive gender norms worldwide.
            </p>
            <p>
              The novel's perspective aligns with SDG 5's holistic approach to gender equality, recognizing that achieving meaningful progress requires addressing cultural narratives and social norms alongside formal policies and legal protections.
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="font-serif text-xl font-bold text-[#5D4777] mb-4 text-center">Final Thoughts</h3>
          <div className="max-w-3xl mx-auto">
            <p className="mb-4 text-center">
              "Palace of Illusions" reminds us that the stories we tell—and who gets to tell them—shape our understanding of history, culture, and possibility. By centering Draupadi's voice, Divakaruni does more than retell an ancient epic; she demonstrates how reimagining narratives can contribute to reimagining more equitable futures.
            </p>
            <div className="border-l-4 border-[#5D4777] pl-4 my-6">
              <p className="italic text-gray-700">
                "Perhaps the greatest magic of all is the power to endure... She who endures conquers in the end."
              </p>
            </div>
            <p className="text-center">
              As we continue working toward gender equality in all aspects of society, works like "Palace of Illusions" provide both inspiration and a framework for understanding the depth and complexity of the challenge—and the transformative potential of meeting it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}