import { Star, ThumbsUp, ThumbsDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function BookReview() {
  const [showAllReviews, setShowAllReviews] = useState(false);
  
  const reviews = [
    {
      id: 1,
      name: "Sarah J.",
      date: "February 15, 2025",
      rating: 5,
      title: "A Masterful Feminist Retelling",
      review: "Divakaruni's decision to tell the Mahabharata from Draupadi's perspective completely transformed my understanding of this ancient epic. The lush prose and complex characterization created an immersive reading experience that stayed with me long after I finished the book. Particularly powerful was how the author balanced Draupadi's agency with the historical constraints she faced."
    },
    {
      id: 2,
      name: "Michael L.",
      date: "January 28, 2025",
      rating: 4,
      title: "Compelling Narrative with Rich Cultural Context",
      review: "As someone unfamiliar with the Mahabharata before reading this novel, I found Palace of Illusions to be both accessible and richly detailed. Divakaruni creates a world that feels authentically historical while speaking to contemporary concerns about gender and power. My only critique is that some of the supporting characters could have been more fully developed."
    },
    {
      id: 3,
      name: "Priya K.",
      date: "March 1, 2025",
      rating: 5,
      title: "A Necessary Reimagining",
      review: "Having grown up with the Mahabharata, reading Palace of Illusions was a revelation. Divakaruni honors the original epic while subtly challenging its patriarchal foundations. The exploration of Draupadi's inner life—her desires, frustrations, and wisdom—feels both true to the historical setting and profoundly relevant to women's experiences today."
    },
    {
      id: 4,
      name: "David T.",
      date: "February 8, 2025",
      rating: 4,
      title: "Poetic and Thought-Provoking",
      review: "The lyrical quality of Divakaruni's writing elevates this novel beyond typical historical fiction. Her ability to weave philosophical questions about destiny, gender, and power into a compelling narrative is impressive. While some of the mystical elements felt a bit forced, overall, the novel succeeds in bringing an ancient story into meaningful conversation with contemporary issues."
    },
    {
      id: 5,
      name: "Anika S.",
      date: "January 12, 2025",
      rating: 5,
      title: "Both Educational and Emotionally Powerful",
      review: "Palace of Illusions accomplishes the rare feat of being both intellectually stimulating and emotionally affecting. As a feminist retelling, it doesn't simply reverse gender dynamics but explores the nuanced ways women navigate and resist patriarchal systems. I particularly appreciated the exploration of Draupadi's relationships with other women in the story."
    }
  ];
  
  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 3);
  
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i}
        size={16} 
        className={i < rating ? "text-[#D4AF37] fill-[#D4AF37]" : "text-gray-300"}
      />
    ));
  };

  return (
    <section className="mb-20 pt-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-[#5D4777] mb-4">Reader Reviews</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">See what others are saying about "Palace of Illusions"</p>
        </div>
        
        {/* Overall Rating */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="font-serif text-2xl font-bold text-[#5D4777] mb-2">Overall Rating</h3>
              <div className="flex items-center justify-center md:justify-start mb-2">
                <div className="flex mr-2">
                  {renderStars(4.6)}
                </div>
                <span className="text-xl font-bold">4.6</span>
              </div>
              <p className="text-gray-600">Based on 128 reviews</p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <ThumbsUp size={24} className="text-[#3A7D7B] mr-2" />
                  <span className="text-xl font-bold">92%</span>
                </div>
                <p className="text-sm text-gray-600">Recommend this book</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <MessageCircle size={24} className="text-[#5D4777] mr-2" />
                  <span className="text-xl font-bold">84</span>
                </div>
                <p className="text-sm text-gray-600">Book club discussions</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Featured Reviews */}
        <div className="space-y-6">
          {displayedReviews.map(review => (
            <div key={review.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-bold text-lg text-[#5D4777] mb-1">{review.title}</h4>
                  <div className="flex items-center">
                    <div className="flex mr-2">
                      {renderStars(review.rating)}
                    </div>
                    <span className="text-sm text-gray-600">{review.rating}.0/5.0</span>
                  </div>
                </div>
                <div className="text-right text-sm text-gray-600">
                  <p>{review.name}</p>
                  <p>{review.date}</p>
                </div>
              </div>
              
              <p className="text-gray-700">{review.review}</p>
              
              <div className="flex items-center mt-4 text-sm text-gray-600">
                <button className="flex items-center mr-6 hover:text-[#5D4777]">
                  <ThumbsUp size={16} className="mr-1" />
                  <span>Helpful</span>
                </button>
                <button className="flex items-center hover:text-[#5D4777]">
                  <ThumbsDown size={16} className="mr-1" />
                  <span>Not helpful</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Show More Button */}
        {reviews.length > 3 && (
          <div className="text-center mt-8">
            <Button
              onClick={() => setShowAllReviews(!showAllReviews)}
              className="bg-[#5D4777] hover:bg-[#5D4777]/80"
            >
              {showAllReviews ? "Show Less Reviews" : "Show More Reviews"}
            </Button>
          </div>
        )}
        
        {/* Write a Review CTA */}
        <div className="bg-gradient-to-r from-[#5D4777]/10 to-[#3A7D7B]/10 rounded-lg p-8 mt-12">
          <div className="text-center">
            <h3 className="font-serif text-2xl font-bold text-[#5D4777] mb-4">Share Your Thoughts</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Have you read "Palace of Illusions"? Help other readers by sharing your perspective on this powerful retelling of the Mahabharata.
            </p>
            <Button className="bg-[#5D4777] hover:bg-[#5D4777]/80">
              Write a Review
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}