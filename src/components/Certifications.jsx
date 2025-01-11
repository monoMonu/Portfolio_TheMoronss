import { ChevronDown, ChevronUp, Award, Calendar } from 'lucide-react'
import { useState } from 'react'

export default function Component() {
  const [isExpanded, setIsExpanded] = useState(false)

  const certifications = [
    {
      title: "Java (Basic)",
      issuer: "Coursera",
      credentialId: "VHG9BPPLYG2U",
      date: "Issued Oct 2023",
      description: "It will cover basic topics in Java language such as classes, data structures, inheritance, exception handling, etc",
      skills: ["NodeJS", "MongoDB", "ExpressJS", "Mongoose", "JavaScript"],
      hasCredential: true
    },
    {
      title: "Python Programming",
      issuer: "Coursera",
      credentialId: "PYT123456789",
      date: "Issued Sept 2023",
      description: "Comprehensive course covering Python fundamentals, data structures, and object-oriented programming concepts",
      skills: ["Python", "Data Structures", "OOP", "Algorithm"],
      hasCredential: true
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      credentialId: "AWS-CCP-123XYZ",
      date: "Issued Aug 2023",
      description: "Fundamental understanding of AWS Cloud concepts, services, security, architecture, pricing, and support",
      skills: ["AWS", "Cloud Computing", "Security", "Architecture", "DevOps"],
      hasCredential: true
    },
    {
      title: "React Developer Certificate",
      issuer: "Meta",
      credentialId: "META-RD-456ABC",
      date: "Issued July 2023",
      description: "Advanced React concepts including hooks, state management, performance optimization, and modern React practices",
      skills: ["React", "Redux", "JavaScript", "Web Development", "UI/UX"],
      hasCredential: true
    }
  ]

  const visibleCertifications = isExpanded ? certifications : certifications.slice(0, 2)

  return (
    <div className="p-6 space-y-6 w-full bg-white border-2 border-gray-300 rounded-lg mb-10">
      <h2 className="text-3xl font-bold text-gray-600">Certifications</h2>
      
      <hr />
      
      <div className="space-y-8">
        {visibleCertifications.map((cert, index) => (
          <div key={index} className="space-y-4 pb-8 border-b border-gray-200 last:border-0">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold">{cert.title}</h3>
                <Award className="w-5 h-5 text-indigo-600" />
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-4 h-4" />
                <span className="text-md font-semibold">{cert.date}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <span className="font-medium">{cert.issuer}</span>
              <span className="text-sm">• {cert.credentialId}</span>
            </div>

            <p className="text-gray-600 text-lg">{cert.description}</p>

            <div className="flex items-center gap-4">
              <span className="text-lg font-bold whitespace-nowrap">Skills:</span>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 text-base bg-white border-2 border-gray-300 rounded-2xl"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {cert.hasCredential && (
              <button
                className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200"
              >
                Show Credential
                <span className="text-xl">↗</span>
              </button>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mx-auto flex items-center justify-center px-6 py-3 bg-[#FFC53D] hover:bg-[#FFC53D]/90 text-black font-medium rounded-md transition-colors duration-200"
      >
        {isExpanded ? 'Show Less' : `Show all ${certifications.length} Certifications`}
        {isExpanded ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
      </button>
    </div>
  )
} 