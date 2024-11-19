import { Calendar } from 'lucide-react'
import { useState } from 'react'

export default function Volunteering() {
    const [showAll, setShowAll] = useState(false)
    
    const volunteeringData = {
        openSource: {
          title: "Open-Source Contributions",
          date: "Sept 2024 - Oct 2024",
          description: "Detail any open-source contributions (e.g., GitHub repos) to significant projects, including your role and the impact of your contributions.",
          skills: ["NodeJS", "MongoDB", "ExpressJS", "Mongoose", "HTML", "CSS", "JavaScript"],
          domain: ["Technical"],
          report: "Project Completion Report",
          verified: true
        },
        mentorship: {
      title: "Mentorship Roles",
      date: "Sept 2024 - Oct 2024",
      description: "Led weekly coding sessions at Code.org, mentoring 20+ students in web development fundamentals. Organized hands-on workshops and provided one-on-one guidance for building full-stack applications.",
      skills: ["NodeJS", "MongoDB", "ExpressJS", "Mongoose", "HTML", "CSS", "JavaScript"],
      domain: ["Technical"],
      report: "Project Completion Report",
      verified: false
    },
    workshops: {
      title: "Technical Workshops or Coding Bootcamps",
      date: "Sept 2024 - Oct 2024",
      description: "Conducted intensive weekend bootcamps for local tech community, covering MERN stack development. Created comprehensive learning materials and guided participants through real-world project implementations.",
      skills: ["NodeJS", "MongoDB", "ExpressJS", "Mongoose", "HTML", "CSS", "JavaScript"],
      domain: ["Technical"],
      report: "Project Completion Report",
      verified: true
    },
    communityMentor: {
      title: "Community Tech Mentor",
      date: "Aug 2024 - Sept 2024",
      description: "Volunteer mentor at local tech meetups, helping newcomers transition into tech careers. Provided guidance on learning paths and project development.",
      skills: ["React", "Node.js", "Git", "Career Guidance"],
      domain: ["Technical", "Career Development"],
      report: "Project Completion Report",
      verified: false
    },
    hackathonMentor: {
      title: "Hackathon Mentor",
      date: "July 2024 - Aug 2024",
      description: "Served as technical mentor for university hackathons, supporting teams in project ideation and implementation.",
      skills: ["Problem Solving", "API Integration", "System Design"],
      domain: ["Technical", "Project Management"],
      report: "Project Completion Report",
      verified: true
    }
  }

  const VolunteerSection = ({ data }) => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold">{data.title}</h2>
          {data.verified && (
            <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Calendar className="w-4 h-4" />
          <span className="text-lg font-semibold">{data.date}</span>
        </div>
      </div>

      <li className="text-black text-xl">{data.description}</li>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-lg whitespace-nowrap">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white border border-gray-300 rounded-full text-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <h3 className="font-semibold text-lg whitespace-nowrap">Domain</h3>
          <div className="flex flex-wrap gap-2">
            {data.domain.map((item, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white border border-gray-300 rounded-full text-md"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 mb-2">
          <img
            src="https://placehold.co/600x400"
            alt="Project Report"
            className="w-24 h-24 object-cover rounded-lg"
          />
          <span className="font-semibold text-lg">{data.report}</span>
        </div>
      </div>
    </div>
  )

  const volunteering = Object.values(volunteeringData)
  const displayedVolunteering = showAll ? volunteering : volunteering.slice(0, 2)

  return (
    <div className="p-6 space-y-8 bg-white border-2 border-gray-300 rounded-lg mb-10">
      <h1 className="text-3xl font-bold text-gray-600">Volunteering</h1>

      <hr />
      
      {displayedVolunteering.map((item, index) => (
        <div key={item.title}>
          {index > 0 && <hr className="my-8" />}
          <VolunteerSection data={item} />
        </div>
      ))}
      
      <div className="flex justify-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-3 bg-yellow-400 rounded-lg font-medium flex items-center gap-2 hover:bg-yellow-500 transition-colors"
        >
          {showAll ? 'Show less' : `Show all ${volunteering.length} Volunteering`}
          <svg
            className={`w-5 h-5 transition-transform ${showAll ? 'rotate-180' : ''}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  )
} 