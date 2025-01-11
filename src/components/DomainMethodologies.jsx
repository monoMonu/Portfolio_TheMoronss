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

  const lineChartOptions = {
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        backgroundColor: 'white',
        titleColor: 'black',
        bodyColor: 'black',
        borderColor: '#ddd',
        borderWidth: 1,
        padding: 12,
        displayColors: true,
        callbacks: {
          title: (context) => {
            return `${context[0].label}, 2024`;
          },
          label: (context) => {
            return ` ${context.dataset.label}: ${context.parsed.y}`;
          },
        },
      },
    },
  };

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
    <div className="p-6 space-y-6 w-full bg-white border-2 border-gray-300 rounded-lg shadow mb-10">
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
          <div className="grid grid-cols-3 gap-4 space-y-6">
            <div className="space-y-16">
              <h3 className="text-xl font-bold">Skill Levels</h3>
              <div className="grid grid-cols-2 gap-4 justify-center">
                {[
                  { name: 'React.Js', value: 90, color: '#000000' },
                  { name: 'TensorFlow', value: 75, color: '#000000' },
                  { name: 'Node.Js', value: 87, color: '#000000' },
                  { name: 'Mongoose', value: 65, color: '#000000' },
                ].map((skill) => (
                  <div key={skill.name} className="relative w-32 h-32">
                    <svg className="w-32 h-32 -rotate-90" viewBox="0 0 36 36">
                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        className="stroke-[#FFC53D]"
                        strokeWidth="4"
                      />
                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        stroke={skill.color}
                        strokeWidth="4"
                        strokeDasharray={`${skill.value}, 100`}
                      // strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <span className="text-lg font-bold">{skill.value}%</span>
                      <span className="text-xs text-gray-900">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-1 gap-8">
              <div className="">
                <div className="w-full h-[300px] flex items-center justify-center mt-10">
                  <Doughnut data={donutChartData} options={{ maintainAspectRatio: false }} />
                </div>
                <h3 className="text-xl font-bold text-center mt-3">Role-Based Skill Tags</h3>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center h-full">
              <div className="relative bg-white rounded-xl shadow-md p-6">
                <div className="grid grid-cols-3 gap-4 place-items-center mb-4">
                  {[
                    { name: 'Design Th.', value: 66, color: '#FF6B4A' },
                    { name: 'A/B testi.', value: 31, color: '#4CAF50' },
                    { name: 'Water.', value: 7, color: '#9E9E9E' },
                  ].map((methodology, index) => (
                    <div key={methodology.name} className="relative">
                      {index < 2 && (
                        <div className="absolute top-1/2 -right-4 w-8 h-[2px] bg-gray-200" />
                      )}
                      <div className="relative w-24 h-24 rounded-full shadow-lg bg-white">
                        <svg className="w-24 h-24 -rotate-90" viewBox="0 0 36 36">
                          <circle
                            cx="18"
                            cy="18"
                            r="16"
                            fill="none"
                            className="stroke-[#f5f5f5]"
                            strokeWidth="3.2"
                          />
                          <circle
                            cx="18"
                            cy="18"
                            r="16"
                            fill="none"
                            stroke={methodology.color}
                            strokeWidth="3.2"
                            strokeDasharray={`${methodology.value}, 100`}
                            strokeLinecap="round"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center flex-col">
                          <span className="text-lg font-bold">{methodology.value}%</span>
                          <span className="text-xs text-gray-600">{methodology.name}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-center mt-2">Methodologies</h3>
              </div>
            </div>

          </div>
          <div className="border-2 border-gray-300 rounded-lg p-4 w-full">
            <h3 className="text-lg font-semibold mb-4">Deployment vs Testing</h3>
            <div className="w-full h-[300px]">
              <Line data={lineChartData} options={lineChartOptions} />
            </div>
          </div>

          <div className="space-y-4 border-2 border-gray-300 rounded-lg p-6 w-full">
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