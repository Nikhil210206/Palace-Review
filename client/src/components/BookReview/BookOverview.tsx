import { Card } from "@/components/ui/card";
import { Calendar, BookOpen } from "lucide-react";

export default function BookOverview() {
  return (
    <section className="mb-20">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/3">
          <div className="relative aspect-[2/3] shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Palace of Illusions Book Cover" 
              className="rounded-md object-cover h-full w-full" 
            />
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
          
          <div className="flex items-center text-sm text-gray-600">
            <div className="flex items-center mr-6">
              <Calendar className="mr-2 text-[#5D4777]" size={16} />
              <span>Published: 2008</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="mr-2 text-[#5D4777]" size={16} />
              <span>360 pages</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
