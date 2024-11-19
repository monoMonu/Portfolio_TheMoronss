import { ChevronDown, ChevronUp, CheckCircle, Calendar } from 'lucide-react'
import { useState } from 'react'

export default function Component() {
  const [isExpanded, setIsExpanded] = useState(false)

  const awards = [
    {
      title: "Technical Competitions",
      date: "Sept 2024 - Oct 2024",
      description: "Highlight wins or top placements in coding competitions (e.g., hackathons, CodeChef, LeetCode contests) and mention the skills or technologies showcased.",
      skills: ["NodeJS", "MongoDB", "ExpressJS", "Mongoose", "HTML", "CSS", "JavaScript"],
      hasReport: true
    },
    {
      title: "Academic Honors",
      date: "Sept 2024 - Oct 2024",
      description: "Include relevant scholarships, dean's list recognitions, or any other academic distinctions related to computer science or software engineering.",
      skills: ["NodeJS", "MongoDB", "ExpressJS", "Mongoose", "HTML", "CSS", "JavaScript"],
      hasReport: true
    },
    {
      title: "Open Source Contributions",
      date: "Nov 2024 - Dec 2024",
      description: "Recognized for significant contributions to popular open-source projects, improving documentation and implementing new features.",
      skills: ["Git", "GitHub", "React", "TypeScript", "Documentation"],
      hasReport: false
    },
    {
      title: "Industry Certifications",
      date: "Jan 2025 - Feb 2025",
      description: "Obtained advanced certifications in cloud technologies and machine learning, demonstrating expertise in cutting-edge industry tools.",
      skills: ["AWS", "Google Cloud", "TensorFlow", "Docker", "Kubernetes"],
      hasReport: true
    },
    {
      title: "Research Publications",
      date: "Mar 2025 - Apr 2025",
      description: "Co-authored a paper on novel machine learning algorithms, published in a peer-reviewed journal, showcasing academic research capabilities.",
      skills: ["Machine Learning", "Data Analysis", "Scientific Writing", "Python", "R"],
      hasReport: true
    }
  ]

  const visibleAwards = isExpanded ? awards : awards.slice(0, 2)

  return (
    <div className="p-6 space-y-6 w-full bg-white border-2 border-gray-300 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-900">Honors & Awards</h2>
      
      <hr />
      
      <div className="space-y-8">
        {visibleAwards.map((award, index) => (
          <div key={index} className="space-y-4 pb-8 border-b border-gray-200 last:border-0">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-semibold">{award.title}</h3>
                <CheckCircle className="w-5 h-5 text-indigo-600" />
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-4 h-4" />
                <span className="text-md font-semibold">{award.date}</span>
              </div>
            </div>

            <li className="text-gray-600 text-lg ">{award.description}</li>

            <div className="flex items-center gap-4">
              <span className="text-lg font-bold whitespace-nowrap">Skills:</span>
              <div className="flex flex-wrap gap-2">
                {award.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 text-base bg-white border-2 border-gray-300 rounded-2xl"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {award.hasReport && (
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <img
                  src="https://placehold.co/400X300"
                  alt="Project Report"
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
                <span className="font-medium">Project Completion Report</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mx-auto flex items-center justify-center px-6 py-3 bg-[#FFC53D] hover:bg-[#FFC53D]/90 text-black font-medium rounded-md transition-colors duration-200"
      >
        {isExpanded ? 'Show Less' : 'Show all 5 Honors & Awards'}
        {isExpanded ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
      </button>
    </div>
  )
}