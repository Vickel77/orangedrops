// components/CoreValues.jsx
import {
  FaLeaf,
  FaBalanceScale,
  FaLightbulb,
  FaCheckCircle,
} from "react-icons/fa";

const values = [
  {
    icon: <FaLeaf className="text-4xl text-green-400" />,
    title: "Sustainability",
    // gradient: "from-green-100 to-green-200",
    gradient: "green-200",
  },
  {
    icon: <FaBalanceScale className="text-4xl text-blue-400" />,
    title: "Transparency",
    // gradient: "from-blue-100 to-blue-200",
    gradient: "blue-200",
  },
  {
    icon: <FaLightbulb className="text-4xl text-yellow-400" />,
    title: "Inventiveness",
    // gradient: "from-yellow-100 to-yellow-200",
    gradient: "yellow-200",
  },
  {
    icon: <FaCheckCircle className="text-4xl text-purple-400" />,
    title: "Viability",
    // gradient: "from-purple-100 to-purple-200",
    gradient: "purple-200",
  },
];

export default function CoreValues() {
  return (
    <div className="container mx-auto py-12 mt-32">
      <h2 className="text-4xl font-bold text-center mb-5 opacity-50">
        Our Core Values
      </h2>
      <div className="flex flex-wrap justify-center">
        {values.map((value, index) => (
          <div
            data-aos="fade-in"
            data-aos-delay={index * 100}
            key={index}
            className={`flex hover:scale-110 items-center bg-gradient-to-r border-2  border-${value.gradient} bg-${value.gradient} bg-opacity-10  p-6 m-4  rounded-xl shadow-md`}
          >
            <div className="mr-4">{value.icon}</div>
            <div>
              <p className="text-xl">{value.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
