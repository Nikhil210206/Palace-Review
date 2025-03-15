import { Book, Calendar, User, Award } from "lucide-react";

export default function BookOverview() {
  return (
    <section className="mb-20 pt-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-[#5D4777] mb-4">Book Overview</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">A feminist retelling of the Mahabharata epic from Draupadi's perspective</p>
        </div>
        
        {/* Book Details Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
              <div className="w-52 h-72 bg-gradient-to-br from-[#5D4777] to-[#3A7D7B] rounded-md flex items-center justify-center">
                <div className="w-48 h-68 border-2 border-white/30 rounded flex items-center justify-center">
                  <Book size={64} className="text-white" />
                  <span className="sr-only">Palace of Illusions Cover</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 md:pl-8">
              <h3 className="font-serif text-2xl font-bold text-[#5D4777] mb-3">Palace of Illusions</h3>
              <p className="text-lg font-serif italic text-gray-700 mb-4">By Chitra Banerjee Divakaruni</p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Calendar size={20} className="text-[#5D4777] mr-3" />
                  <span><span className="font-medium">Published:</span> February 12, 2008 (Doubleday)</span>
                </div>
                
                <div className="flex items-center">
                  <User size={20} className="text-[#5D4777] mr-3" />
                  <span><span className="font-medium">Point of View:</span> First person (Draupadi/Panchaali)</span>
                </div>
                
                <div className="flex items-center">
                  <Award size={20} className="text-[#5D4777] mr-3" />
                  <span><span className="font-medium">Accolades:</span> American Book Award, Light of India Award</span>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">
                "Palace of Illusions" gives voice to Panchaali, the fire-born heroine of the Mahabharata, as she narrates the ancient Indian epic from her perspective—chronicling her magical birth, unwanted marriage to five royal brothers, and the dangerous path of a woman in a society that views her as property.
              </p>
              
              <div className="flex space-x-4">
                <a 
                  href="https://www.penguinrandomhouse.com/books/89490/the-palace-of-illusions-by-chitra-banerjee-divakaruni/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#5D4777] hover:bg-[#5D4777]/80 text-white px-4 py-2 rounded transition"
                >
                  Publisher's Site
                </a>
                <a 
                  href="https://www.goodreads.com/book/show/1774836.The_Palace_of_Illusions" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-[#5D4777] text-[#5D4777] hover:bg-[#5D4777]/10 px-4 py-2 rounded transition"
                >
                  Goodreads
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Author Information */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl font-bold text-[#5D4777] mb-6 text-center">About the Author</h3>
          
          <div className="bg-gradient-to-r from-[#F0E6FF] to-[#E0F2F1] rounded-lg p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-md">
                  <svg 
                    viewBox="0 0 24 24" 
                    width="64" 
                    height="64" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="text-[#5D4777]"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
              </div>
              
              <div className="md:w-3/4">
                <h4 className="font-serif text-xl font-bold text-[#5D4777] mb-2">Chitra Banerjee Divakaruni</h4>
                <p className="mb-4">
                  Born in Kolkata, India, Chitra Banerjee Divakaruni is an award-winning author, poet, and professor. Her work spans multiple genres, including realistic fiction, historical fiction, magical realism, and fantasy.
                </p>
                <p className="mb-4">
                  Divakaruni's writing consistently explores the immigrant experience, the complexities of the South Asian diaspora, and the unique challenges faced by women across cultures. Her novels are known for their lyrical prose and the depth with which they portray female protagonists.
                </p>
                <p>
                  In addition to "Palace of Illusions," her notable works include "Sister of My Heart," "The Mistress of Spices," "One Amazing Thing," and "The Forest of Enchantments"—another feminist retelling, this time of the Ramayana from Sita's perspective.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Synopsis Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h3 className="font-serif text-2xl font-bold text-[#5D4777] mb-4 text-center">Synopsis</h3>
          
          <p className="mb-4">
            Born from fire, Draupadi—also known as Panchaali—is destined to change the course of history. Growing up as the beloved and cherished daughter of King Drupad, she develops an unusual education for a princess, learning statecraft, weaponry, and political strategy alongside her twin brother Dhristadyumna.
          </p>
          
          <p className="mb-4">
            Her life takes a dramatic turn when she is married to all five of the Pandava brothers—a uniquely complex marriage that becomes the center of her complicated relationships throughout the epic. Draupadi develops a particularly deep affection for Karna, her husbands' sworn enemy, adding layers of emotional complexity to her narrative.
          </p>
          
          <p className="mb-4">
            As the Pandavas' shared wife, Draupadi experiences both power and helplessness. She becomes queen when her husbands gain their kingdom, only to be gambled away by Yudhishthir in a fateful game of dice, leading to her infamous public humiliation and a vow of vengeance that helps precipitate the devastating Kurukshetra War.
          </p>
          
          <p>
            Throughout her journey, Draupadi navigates a world dominated by men and divine prophecies, struggling to maintain her sense of self and dignity in a society that views her primarily as a possession. Her story becomes a powerful lens through which to examine themes of gender, power, destiny, and the possibility of creating one's own path in a world governed by seemingly immutable traditions.
          </p>
        </div>
        
        {/* Historical Context */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-serif text-xl font-bold text-[#5D4777] mb-4">Historical Context</h3>
            <p className="mb-4">
              The Mahabharata is one of the world's longest epic poems and a cornerstone of Hindu mythology and Indian literature. Composed between 400 BCE and 400 CE, it contains approximately 100,000 verses divided into 18 books.
            </p>
            <p>
              While traditionally attributed to the sage Vyasa, the epic evolved through oral tradition with multiple authors contributing over centuries. The story centers on the Kurukshetra War between the Pandavas and Kauravas, but encompasses philosophical discussions including the Bhagavad Gita.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-serif text-xl font-bold text-[#5D4777] mb-4">Literary Significance</h3>
            <p className="mb-4">
              "Palace of Illusions" belongs to a growing tradition of feminist retellings that recenter traditionally male-dominated narratives around female characters, revealing new dimensions of familiar stories.
            </p>
            <p>
              By choosing Draupadi as narrator, Divakaruni illuminates aspects of the Mahabharata that traditional tellings often minimize: the domestic sphere, women's experiences of war and politics, and the emotional complexities of characters often portrayed as primarily symbolic or functional to the main plot.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}