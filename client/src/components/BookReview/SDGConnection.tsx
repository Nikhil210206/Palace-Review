import { Card, CardContent } from "@/components/ui/card";

export default function SDGConnection() {
  return (
    <section className="mb-20 py-12 bg-gradient-to-r from-[#E0F2F1] to-[#F0E6FF] rounded-lg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" className="w-full h-full">
                <rect width="1000" height="1000" fill="#FF3A21"/>
                <path d="M180.8 626.1c23.3-45.9 66.5-75.9 116.2-83.8 40.4-7.5 81.3 0 117.9 20.4 33.1 18.9 58.9 47.5 74.9 82H310.7c-3 0-5.4 2.4-5.4 5.4v14.6c0 3 2.4 5.4 5.4 5.4h524.3c1.1 27.4-3.3 55.5-13.4 81.8-23.3 45.9-66.5 75.9-116.2 83.8-40.4 7.5-81.3 0-117.9-20.4-33.1-18.9-58.9-47.5-74.9-82h179.1c3 0 5.4-2.4 5.4-5.4v-14.6c0-3-2.4-5.4-5.4-5.4H171.4c-1.1-27.4 3.3-55.5 13.4-81.8z" fill="#fff"/>
                <path d="M164.7 354.4c0-36 14.6-68.5 38.1-92.1 23.5-23.5 56-38.1 92.1-38.1v130.2h-130.2zM294.9 354.4h130.2c0-36-14.6-68.5-38.1-92.1-23.5-23.5-56-38.1-92.1-38.1v130.2zM425.1 354.4v130.2c36 0 68.5-14.6 92.1-38.1 23.5-23.5 38.1-56 38.1-92.1H425.1zM294.9 354.4v130.2c-36 0-68.5-14.6-92.1-38.1-23.5-23.5-38.1-56-38.1-92.1h130.2zM686.3 250c-28.9 0-55.1 11.7-74.1 30.7-19 19-30.7 45.2-30.7 74.1s11.7 55.1 30.7 74.1c19 19 45.2 30.7 74.1 30.7s55.1-11.7 74.1-30.7c19-19 30.7-45.2 30.7-74.1s-11.7-55.1-30.7-74.1c-19-19-45.2-30.7-74.1-30.7z" fill="#fff"/>
                <path d="M566.2 354.8c0-33.1 13.4-63.1 35.1-84.8 21.7-21.7 51.7-35.1 84.8-35.1s63.1 13.4 84.8 35.1c21.7 21.7 35.1 51.7 35.1 84.8s-13.4 63.1-35.1 84.8c-21.7 21.7-51.7 35.1-84.8 35.1s-63.1-13.4-84.8-35.1c-21.7-21.7-35.1-51.7-35.1-84.8z" fill="#FF3A21"/>
              </svg>
            </div>
            
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#5D4777] mb-2">Connection to Gender Equality (SDG 5)</h2>
              <p className="text-lg text-gray-700">Examining how this ancient narrative reimagined provides powerful insights into contemporary gender equality challenges</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white rounded-lg p-6 shadow-md">
              <CardContent className="p-0 pt-2">
                <h3 className="font-serif text-xl font-bold text-[#3A7D7B] mb-3">Literary Perspective</h3>
                <p className="mb-3">
                  Divakaruni's retelling gives voice to a female character traditionally portrayed as a catalyst for conflict rather than a complex individual. By centering Draupadi's narrative, the author challenges the historical silencing of women's perspectives.
                </p>
                <p>
                  The novel demonstrates how literature can reclaim women's stories and challenge patriarchal interpretations of history and mythology, aligning with SDG 5's goal to ensure women's full participation in leadership and decision-making.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white rounded-lg p-6 shadow-md">
              <CardContent className="p-0 pt-2">
                <h3 className="font-serif text-xl font-bold text-[#3A7D7B] mb-3">Modern Relevance</h3>
                <p className="mb-3">
                  Draupadi's struggles with autonomy, consent, and recognition reflect ongoing challenges women face globally. Her objectification as property in marriage parallels modern concerns about gender-based discrimination.
                </p>
                <p>
                  The novel's exploration of how societal structures limit women's choices resonates with SDG 5's targets to eliminate harmful practices and discrimination against women and girls everywhere.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white rounded-lg p-6 shadow-md">
              <CardContent className="p-0 pt-2">
                <h3 className="font-serif text-xl font-bold text-[#3A7D7B] mb-3">Power Dynamics</h3>
                <p className="mb-3">
                  The book examines how Draupadi navigates systems of power not designed for her benefit, using intelligence and determination to achieve agency despite constraints.
                </p>
                <p>
                  This mirrors SDG 5's emphasis on reforms to give women equal rights to economic resources and access to ownership and control over property.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white rounded-lg p-6 shadow-md">
              <CardContent className="p-0 pt-2">
                <h3 className="font-serif text-xl font-bold text-[#3A7D7B] mb-3">Cultural Transformation</h3>
                <p className="mb-3">
                  By reimagining an iconic cultural text through a feminist lens, the novel demonstrates the importance of cultural transformation in achieving gender equality.
                </p>
                <p>
                  This approach aligns with SDG 5's recognition that changing social norms and cultural practices is essential for achieving substantive equality.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
