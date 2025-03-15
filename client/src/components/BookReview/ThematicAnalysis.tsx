export default function ThematicAnalysis() {
  return (
    <section className="mb-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-[#5D4777] mb-4">Thematic Analysis</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Exploring how "Palace of Illusions" addresses gender equality through its core themes</p>
        </div>
        
        <div className="space-y-12">
          {/* Theme 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-[#5D4777] p-6">
              <h3 className="font-serif text-2xl font-bold text-white">Female Agency in Patriarchal Structures</h3>
            </div>
            <div className="p-6">
              <p className="mb-4">
                Throughout the novel, Draupadi continuously seeks agency within the confines of a society that views women primarily as possessions. From her unprecedented questioning of elders to her strategic influence in the royal court, she demonstrates how women can navigate oppressive systems.
              </p>
              
              <p className="mb-4">
                Divakaruni portrays how Draupadi's attempts at self-determination are both revolutionary and constrained—a tension that mirrors contemporary women's experiences in societies where formal equality may exist alongside persistent discriminatory norms.
              </p>
              
              <p className="mb-6">
                This theme connects directly to SDG 5.5, which aims to "ensure women's full and effective participation and equal opportunities for leadership at all levels of decision-making in political, economic and public life."
              </p>
              
              <div className="border-l-4 border-[#5D4777] pl-4 italic">
                "A problem becomes a problem only if you believe it to be so. And often others see you as you see yourself."
              </div>
            </div>
          </div>
          
          {/* Theme 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-[#3A7D7B] p-6">
              <h3 className="font-serif text-2xl font-bold text-white">Redefining Female Power</h3>
            </div>
            <div className="p-6">
              <p className="mb-4">
                The novel challenges traditional definitions of power by showcasing the strength in Draupadi's resilience, emotional intelligence, and strategic thinking. Rather than portraying power solely through physical strength or formal authority, Divakaruni illuminates the often-overlooked power of women's knowledge, relationships, and endurance.
              </p>
              
              <p className="mb-4">
                Through Draupadi's interactions with figures like Krishna and her navigation of complex relationships with her five husbands, the book explores alternative forms of influence that have historically been available to women despite institutional barriers.
              </p>
              
              <p className="mb-6">
                This connects to SDG target 5.b, which recognizes the importance of enhancing "the use of enabling technology... to promote the empowerment of women."
              </p>
              
              <div className="border-l-4 border-[#3A7D7B] pl-4 italic">
                "I'm a woman. I live by different rules than men. When I need power I'll go after it by indirect means."
              </div>
            </div>
          </div>
          
          {/* Theme 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-[#D4AF37] p-6">
              <h3 className="font-serif text-2xl font-bold text-gray-800">The Cost of Breaking Gender Norms</h3>
            </div>
            <div className="p-6">
              <p className="mb-4">
                Divakaruni unflinchingly portrays the consequences Draupadi faces for defying expectations. From societal judgment to internal conflict, the novel explores the multi-faceted challenges women encounter when they step outside prescribed roles.
              </p>
              
              <p className="mb-4">
                Particularly poignant is how Draupadi's assertiveness is often labeled as dangerous or the cause of conflict—echoing how outspoken women throughout history have been blamed for social disruption.
              </p>
              
              <p className="mb-6">
                This theme resonates with SDG target 5.1, which calls for an end to "all forms of discrimination against all women and girls everywhere," recognizing that social penalties for non-conformity are a form of discrimination.
              </p>
              
              <div className="border-l-4 border-[#D4AF37] pl-4 italic">
                "It's the nature of power. It can't abide a vacuum. If the powerful don't reach for it, the powerless will."
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
