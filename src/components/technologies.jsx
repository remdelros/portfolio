import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiCsharp, SiDotnet, SiTypescript, SiMongodb, SiNextdotjs } from "react-icons/si";
import { SiRust } from "react-icons/si"; 

const technologies = [
  { name: "React", icon: <FaReact className="text-7xl text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-7xl text-green-500" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-7xl text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-7xl text-blue-600" /> },
  { name: "JavaScript", icon: <FaJs className="text-7xl text-yellow-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-7xl text-cyan-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-7xl text-blue-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-7xl text-blue-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-7xl text-green-600" /> }, 
  { name: "Java", icon: <FaJava className="text-7xl text-orange-600" /> },
  { name: "C#", icon: <SiCsharp className="text-7xl text-purple-600" /> },
  { name: "ASP.NET", icon: <SiDotnet className="text-7xl text-green-600" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-7xl text-gray" /> }, 
  { name: "Rust", icon: <SiRust className="text-7xl text-orange-600" /> }, 
  { name: "Git", icon: <FaGitAlt className="text-7xl text-red-500" /> },
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {technologies.map((tech, index) => (
          <div key={index} className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center">
            {tech.icon}
            <span className="mt-2 text-center text-lg">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
