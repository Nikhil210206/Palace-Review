import { Card } from "@/components/ui/card";
import { Calendar, BookOpen, Star, Award, User, BookMarked, Globe } from "lucide-react";

export default function BookOverview() {
  return (
    <section className="mb-20 pt-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-12">
          <div className="md:w-1/3">
            <div className="relative aspect-[2/3] shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#5D4777] to-[#3A7D7B] rounded-md"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                <h3 className="font-serif text-3xl font-bold text-center mb-4">Palace of Illusions</h3>
                <div className="w-16 h-1 bg-[#D4AF37] mb-4"></div>
                <p className="font-serif italic text-center mb-8">A novel by Chitra Banerjee Divakaruni</p>
                <BookMarked size={64} className="text-[#D4AF37] opacity-80" />
              </div>
              <div className="absolute inset-0 border-2 border-[#D4AF37] opacity-50 rounded-md"></div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="inline-block mb-4">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#5D4777] relative inline-block">
                Book Overview
                <div className="h-1 w-full bg-[#D4AF37] mt-1 absolute bottom-0 left-0"></div>
              </h2>
            </div>
            
            <p className="mb-4 text-lg">
              Chitra Banerjee Divakaruni reimagines the ancient Indian epic Mahabharata through the eyes of its leading female character, Draupadi (Panchaali). Born from fire and destined for an extraordinary life, Panchaali's narrative offers a fresh perspective on this classic tale.
            </p>
            
            <p className="mb-4 text-lg">
              As a bold and determined woman in a patriarchal society, Panchaali navigates the complexities of being a daughter, wife to five husbands, and a catalyst in a devastating war. Her journey illuminates the constraints placed on women and her continuous struggle for agency and identity.
            </p>
            
            <p className="mb-6 text-lg">
              Through this feminist retelling, Divakaruni challenges traditional narratives and explores timeless themes of destiny, power, love, and gender roles that resonate strongly with contemporary discussions of gender equality.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-[#F0E6FF] text-[#5D4777] px-3 py-1 rounded-full text-sm font-medium">Feminist Retelling</span>
              <span className="bg-[#E0F2F1] text-[#3A7D7B] px-3 py-1 rounded-full text-sm font-medium">Historical Fiction</span>
              <span className="bg-[#F0E6FF] text-[#5D4777] px-3 py-1 rounded-full text-sm font-medium">Mythology</span>
              <span className="bg-[#E0F2F1] text-[#3A7D7B] px-3 py-1 rounded-full text-sm font-medium">Gender Roles</span>
            </div>
            
            <div className="flex flex-wrap items-center text-sm text-gray-600 mb-4">
              <div className="flex items-center mr-6 mb-2">
                <Calendar className="mr-2 text-[#5D4777]" size={16} />
                <span>Published: 2008</span>
              </div>
              <div className="flex items-center mr-6 mb-2">
                <BookOpen className="mr-2 text-[#5D4777]" size={16} />
                <span>360 pages</span>
              </div>
              <div className="flex items-center mr-6 mb-2">
                <Globe className="mr-2 text-[#5D4777]" size={16} />
                <span>Setting: Ancient India</span>
              </div>
              <div className="flex items-center mb-2">
                <Star className="mr-2 text-[#5D4777]" size={16} />
                <span>Rating: 4.5/5</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Author Information */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/4 flex justify-center">
              <div className="w-32 h-32 rounded-full bg-[#F0E6FF] flex items-center justify-center">
                <User size={64} className="text-[#5D4777]" />
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="font-serif text-2xl font-bold text-[#5D4777] mb-3">About the Author</h3>
              <p className="mb-4">
                Chitra Banerjee Divakaruni is an award-winning author, poet, and professor of creative writing. Born in India and now based in the United States, her work often explores the immigrant experience, female empowerment, and the rich cultural heritage of India.
              </p>
              <p>
                Her ability to weave traditional stories with contemporary feminist perspectives has made her a significant voice in discussions about gender and cultural identity. Through works like "The Palace of Illusions," Divakaruni demonstrates how revisiting classic narratives through overlooked female perspectives can transform our understanding of both literature and history.
              </p>
            </div>
          </div>
        </div>
        
        {/* Critical Reception */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="font-serif text-2xl font-bold text-[#5D4777] mb-6">Critical Reception</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-[#5D4777] pl-4">
              <p className="italic mb-3">
                "Divakaruni's Palace of Illusions is not simply a retelling of the Mahabharata, but a re-envisioning of the world's longest epic through the eyes of a courageous protagonist who transforms her destiny."
              </p>
              <p className="text-sm text-gray-600">— The New York Times</p>
            </div>
            
            <div className="border-l-4 border-[#3A7D7B] pl-4">
              <p className="italic mb-3">
                "A radiant entrée into an ancient mythology virtually unknown to Western readers... Divakaruni's impulse to flesh out the women's stories makes sense to modern readers, and her prose is transcendent."
              </p>
              <p className="text-sm text-gray-600">— Publishers Weekly</p>
            </div>
          </div>
        </div>
        
        {/* Literary Significance */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="font-serif text-2xl font-bold text-[#5D4777] mb-6">Literary Significance</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#F0E6FF]/30 p-5 rounded-md">
              <div className="flex justify-center mb-4">
                <Award className="text-[#5D4777]" size={32} />
              </div>
              <h4 className="font-serif text-lg font-bold text-center text-[#5D4777] mb-2">Feminist Perspective</h4>
              <p className="text-sm text-center">
                By centering Draupadi's voice, the novel challenges traditional patriarchal interpretations of the Mahabharata, offering readers a fresh lens through which to view this foundational text.
              </p>
            </div>
            
            <div className="bg-[#E0F2F1]/30 p-5 rounded-md">
              <div className="flex justify-center mb-4">
                <Award className="text-[#3A7D7B]" size={32} />
              </div>
              <h4 className="font-serif text-lg font-bold text-center text-[#5D4777] mb-2">Cultural Bridge</h4>
              <p className="text-sm text-center">
                The novel serves as an accessible entry point to Indian mythology for Western readers while offering a provocative reinterpretation for those already familiar with the epic.
              </p>
            </div>
            
            <div className="bg-[#FFF8E0] p-5 rounded-md">
              <div className="flex justify-center mb-4">
                <Award className="text-[#D4AF37]" size={32} />
              </div>
              <h4 className="font-serif text-lg font-bold text-center text-[#5D4777] mb-2">Literary Innovation</h4>
              <p className="text-sm text-center">
                Divakaruni's work exemplifies how revisionist mythology can create powerful commentary on contemporary social issues through historical reframing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
