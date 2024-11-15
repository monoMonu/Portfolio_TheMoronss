import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js'
import { Line, Doughnut } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
)

export default function Component() {
  const [isExpanded, setIsExpanded] = useState(false)

  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Deployment',
        data: [100, 50, 200, 300, 400, 300, 200, 300, 400, 200, 100, 400],
        borderColor: 'rgb(79, 70, 229)',
        backgroundColor: 'rgba(79, 70, 229, 0.5)',
      },
      {
        label: 'Testing',
        data: [50, 100, 150, 250, 300, 400, 300, 200, 100, 300, 400, 350],
        borderColor: 'rgb(244, 63, 94)',
        backgroundColor: 'rgba(244, 63, 94, 0.5)',
      },
    ],
  }

  // Data for the role-based skills donut chart
  const donutChartData = {
    labels: ['Full St.', 'ML', 'AL'],
    datasets: [
      {
        data: [45, 35, 20],
        backgroundColor: ['#383B7E', '#FF9B9B', '#B8B5FF'],
      },
    ],
  }

  return (
    <div className="p-6 space-y-6 w-full bg-white border-2 border-gray-300 rounded-lg shadow">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-600 mb-5">Domain Methodologies</h1>
        <h2 className="text-2xl font-bold text-gray-900">Frameworks & Process Analysis</h2>
      </div>

      <hr className="border-gray-500" />

      <div className="space-y-8">
        <div className="flex flex-row gap-5 items-center">
          <h3 className="text-xl font-bold">Core Frameworks</h3>
          <div className="flex flex-wrap gap-3">
            {["React.js", "Node.js", "TensorFlow", "Mongoose"].map((framework) => (
              <span key={framework} className="px-4 py-2 text-base bg-white border-2 border-gray-400 rounded-2xl">
                {framework}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-row gap-5 items-center">
          <h3 className="text-xl font-bold">Role-Based Skill Tags</h3>
          <div className="flex flex-wrap gap-3">
            {["Full Stack", "Machine Learning", "AI"].map((skill) => (
              <span key={skill} className="px-4 py-2 text-base bg-white border-2 border-gray-400 rounded-2xl">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-row gap-5 items-center">
          <h3 className="text-xl font-bold">Project Lifecycle Understanding</h3>
          <div className="flex flex-wrap gap-3">
            {["Development", "Debugging", "Deployment", "Testing", "Maintenance"].map((stage) => (
              <span key={stage} className="px-4 py-2 text-base bg-white border-2 border-gray-400 rounded-2xl">
                {stage}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-row gap-5 items-center">
          <h3 className="text-xl font-bold">Methodologies Used</h3>
          <div className="flex flex-wrap gap-3">
            {["Design Thinking", "Agile", "Waterfall", "A/B Testing"].map((methodology) => (
              <span key={methodology} className="px-4 py-2 text-base bg-white border-2 border-gray-400 rounded-2xl">
                {methodology}
              </span>
            ))}
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="space-y-8 pt-6 border-t border-gray-200">
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Skill Levels</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'React.Js', value: 97 },
                { name: 'TensorFlow', value: 75 },
                { name: 'Node.Js', value: 87 },
                { name: 'Mongoose', value: 65 },
              ].map((skill) => (
                <div key={skill.name} className="relative w-24 h-24">
                  <svg className="w-24 h-24" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#eee"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="black"
                      strokeWidth="3"
                      strokeDasharray={`${skill.value}, 100`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-lg font-bold">{skill.value}%</span>
                    <span className="text-xs text-gray-500">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Role-Based Skill Tags</h3>
              <div className="w-full h-[300px] flex items-center justify-center">
                <Doughnut data={donutChartData} options={{ maintainAspectRatio: false }} />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Deployment vs Testing</h3>
              <div className="w-full h-[300px]">
                <Line data={lineChartData} options={{ maintainAspectRatio: false }} />
              </div>
            </div>
          </div>

          <div className="space-y-4 border rounded-lg p-6">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold">Summary</h3>
              <span className="text-gray-400 text-sm">⚡ Moronss AI Generated</span>
            </div>
            <div className="space-y-1 text-gray-600">
              <p>
                Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget
                condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus.
              </p>
              <p className="indent-8">
                Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi.
                Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum.
              </p>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mx-auto flex items-center justify-center px-6 py-3 bg-[#FFC53D] hover:bg-[#FFC53D]/90 font-bold rounded-md transition-colors duration-200"
      >
        <span className={isExpanded ? 'text-gray-600' : 'text-black'}>
          {isExpanded ? 'View Less' : 'Advanced Section'}
        </span>
        {isExpanded ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
      </button>
    </div>
  )
}