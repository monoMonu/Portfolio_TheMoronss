import { BadgeCheck, MoveUpRight, SquareArrowOutUpRight } from "lucide-react";
import React from "react";

const PlatformPractices = () => {
  const sections = [
    {
      title: "Competitive Coding",
      links: [
        { name: "LeetCode", url: "https://leetcode.com" },
        { name: "CodeChef", url: "https://www.codechef.com" },
        { name: "HackerRank", url: "https://www.hackerrank.com" },
        { name: "Codeforces", url: "https://codeforces.com" },
      ],
    },
    {
      title: "Community Contributions",
      links: [
        { name: "Stack Overflow", url: "https://stackoverflow.com" },
        { name: "GDSC", url: "https://gdsc.community.dev" },
        { name: "daily.dev", url: "https://daily.dev" },
        { name: "Discord", url: "https://discord.com" },
      ],
    },
    {
      title: "Project Hosting",
      links: [
        { name: "GitHub", url: "https://github.com", extra: "48 forks 23 stars" },
        { name: "GitLab", url: "https://gitlab.com" },
      ],
    },
  ];

  return (
    <div className="bg-black text-white p-2.5 py-4 rounded-[10px] shadow-lg">
      
      <h2 className="text-[24px] font-bold flex items-center border-b border-gray-600 pb-2">
        Platform Practices
        <BadgeCheck className='text-[#22f] size-6 inline-block ml-2' />
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 pt-2">
        {sections.map((section, index) => (
          <div key={index} className={`p-3 ${index===2 ? ``: `border-r border-white`}`}>
            
            <h3 className="font-bold text-[18px] py-2">
              {section.title}
            </h3>
            
            <div className="space-y-2">
              {section.links.map((link, idx) => (
                <a
                  key={idx}
                  className="flex items-center justify-between border-[1px] text-[14px] font-bold rounded-[30px] border-white text-white hover:bg-[#1b1b1b99] hover:underline p-2.5 cursor-pointer "
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  
                  <span className="relative pl-3.5 ml-2">
                    <span className="w-1 h-1 bg-white absolute left-0 top-1/2 transform -translate-y-1/2 rounded-full"></span>
                    {link.name}
                  </span>

                  <div className="flex items-center space-x-2">
                    {link.extra && (
                      <span className="text-[10px] text-gray-400">{link.extra}</span>
                    )}
                    <SquareArrowOutUpRight size={16} className="text-white"/>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <button className="bg-[#FFCB47] font-bold text-[#1B1B1B] py-2.5 px-3 rounded-lg hover:bg-[#FFCB47]">
          Want to know More
          <SquareArrowOutUpRight size={16} className="inline-block ml-2 font-bold" />
        </button>
      </div>
    </div>
  );
};

export default PlatformPractices;
