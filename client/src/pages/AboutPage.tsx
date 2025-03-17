import React from "react";

const teamMembers = [
  { name: "ABDUL HAMEED USMANI", id: "RA2411003011534" },
  { name: "VAISHNAVI JAGTAP", id: "RA2411003011544" },
  { name: "GUMMUDU VENKATA PRUDHVI KRISHNA", id: "RA2411003011554" },
  { name: "KARUR NIKHIL", id: "RA2411003011564" },
  { name: "NIKHIL BALAMURUGAN", id: "RA2411003011574" },
  { name: "VEDANSH AGRAWAL", id: "RA2411003011594" },
  { name: "TELLAREDDY ADITHYA VARDHAN", id: "RA2411003011604" },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8">Meet Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition-transform"
          >
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-sm text-gray-400">{member.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
