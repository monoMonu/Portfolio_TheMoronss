import { ChevronDown } from 'lucide-react'

export default function Component() {
  return (
    <div className="p-6 space-y-6 w-full bg-white border-2 border-gray-300 rounded-lg shadow">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">Domain Methodologies</h1>
        <h2 className="text-2xl font-bold text-gray-900">Frameworks & Process Analysis</h2>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Core Frameworks</h3>
          <div className="flex flex-wrap gap-2">
            {["React.js", "Node.js", "TensorFlow", "Mongoose"].map((framework) => (
              <span key={framework} className="px-2 py-1 text-sm bg-gray-100 text-gray-800 rounded-full">
                {framework}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Role-Based Skill Tags</h3>
          <div className="flex flex-wrap gap-2">
            {["Full Stack", "Machine Learning", "AI"].map((skill) => (
              <span key={skill} className="px-2 py-1 text-sm bg-gray-100 text-gray-800 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Project Lifecycle Understanding</h3>
          <div className="flex flex-wrap gap-2">
            {["Development", "Debugging", "Deployment", "Testing", "Maintenance"].map((stage) => (
              <span key={stage} className="px-2 py-1 text-sm bg-gray-100 text-gray-800 rounded-full">
                {stage}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Methodologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {["Design Thinking", "Agile", "Waterfall", "A/B Testing"].map((methodology) => (
              <span key={methodology} className="px-2 py-1 text-sm bg-gray-100 text-gray-800 rounded-full">
                {methodology}
              </span>
            ))}
          </div>
        </div>
      </div>
      <button className="mx-auto flex items-center justify-center px-6 py-3 bg-[#FFC53D] hover:bg-[#FFC53D]/90 text-black font-bold rounded-md transition-colors duration-200">
        Advanced Section
        <ChevronDown className="ml-2 h-4 w-4" />
      </button>
    </div>
  )
}