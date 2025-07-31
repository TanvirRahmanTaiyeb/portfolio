import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Paintbrush, Database, Layout, Cpu, Cloud } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaFigma,
  FaAws,
} from "react-icons/fa";
import { Shield } from "lucide-react";
import {
  MdOutlineScience,
  MdOutlinePhotoCamera,
  MdLock,
  MdImage,
  MdOutlineStorage,
} from "react-icons/md";
import { FaShieldAlt, FaTools } from "react-icons/fa";
import { AiOutlineBarChart } from "react-icons/ai";
import { GiBrain } from "react-icons/gi";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiJest,
  SiWebpack,
  SiRedux,
  SiFirebase,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";
import { FcWorkflow } from "react-icons/fc";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
  {
    icon: Code2,
    title: "Programming & Scripting",
    color: "text-blue-400",
    skills: [
      { name: "Python", icon: <FaPython className="w-4 h-4 text-[#3776AB]" /> },
      { name: "Java", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" /> },
      { name: "JavaScript", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#F7DF1E]" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" /> },
      { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
      { name: "Vue.js (Vue3)", icon: <SiVite className="w-4 h-4 text-[#42B883]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4 text-white" /> },
      { name: "Node.js", icon: <FaNodeJs className="w-4 h-4 text-[#339933]" /> },
      { name: "HTML5", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" /> },
      { name: "CSS3", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#1572B6]" /> },
      { name: "SQL", icon: <SiPostgresql className="w-4 h-4 text-[#336791]" /> },
      { name: "Bash", icon: <TbBrandVscode className="w-4 h-4 text-[#4EAA25]" /> },
      { name: "PowerShell", icon: <TbBrandVscode className="w-4 h-4 text-[#5391FE]" /> },
    ],
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    color: "text-purple-400",
    skills: [
      { name: "GPT-4 API", icon: <SiGraphql className="w-4 h-4 text-[#A259FF]" /> },
      { name: "Google Gemini", icon: <SiGraphql className="w-4 h-4 text-[#34A853]" /> },
      { name: "Prompt Engineering", icon: <GiBrain className="w-4 h-4 text-[#8B5CF6]" /> },
      { name: "Scikit-learn", icon: <SiGraphql className="w-4 h-4 text-[#F7931E]" /> },
      { name: "Pandas", icon: <SiGraphql className="w-4 h-4 text-[#130754]" /> },
      { name: "NumPy", icon: <SiGraphql className="w-4 h-4 text-[#013243]" /> },
      { name: "TensorFlow", icon: <SiGraphql className="w-4 h-4 text-[#FF6F00]" /> },
      { name: "AI Concepts", icon: <SiGraphql className="w-4 h-4 text-[#7E57C2]" /> },
    ],
  },
  {
    icon: Shield,
    title: "Cybersecurity & Vulnerability Testing",
    color: "text-red-400",
    skills: [
      { name: "Kali Linux", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
      { name: "Ubuntu", icon: <FaLinux className="w-4 h-4 text-[#E95420]" /> },
      { name: "VirtualBox", icon: <MdOutlineScience className="w-4 h-4 text-[#6C63FF]" /> },
      { name: "Metasploit", icon: <FaTools className="w-4 h-4 text-[#E91E63]" /> },
      { name: "Nessus", icon: <MdLock className="w-4 h-4 text-[#0EA5E9]" /> },
      { name: "Burp Suite", icon: <MdLock className="w-4 h-4 text-[#F97316]" /> },
      { name: "Nmap", icon: <MdLock className="w-4 h-4 text-[#2563EB]" /> },
      { name: "Hping3", icon: <MdLock className="w-4 h-4 text-[#10B981]" /> },
      { name: "Traceroute", icon: <MdLock className="w-4 h-4 text-[#3B82F6]" /> },
      { name: "PhoneSploit", icon: <MdLock className="w-4 h-4 text-[#9C27B0]" /> },
      { name: "DoS/DDoS Simulation", icon: <MdLock className="w-4 h-4 text-[#DC2626]" /> },
      { name: "Social Engineering", icon: <MdLock className="w-4 h-4 text-[#F59E0B]" /> },
    ],
  },
  {
    icon: Database,
    title: "Network Analysis & Traffic Monitoring",
    color: "text-green-400",
    skills: [
      { name: "Wireshark", icon: <MdOutlineScience className="w-4 h-4 text-[#1F8ACB]" /> },
      { name: "Cisco Packet Tracer", icon: <MdOutlineScience className="w-4 h-4 text-[#00A1E4]" /> },
      { name: "DNS Configuration", icon: <MdOutlineScience className="w-4 h-4 text-[#9333EA]" /> },
      { name: "Ping Tools", icon: <MdOutlineScience className="w-4 h-4 text-[#F59E0B]" /> },
    ],
  },
  {
    icon: Cpu,
    title: "Digital Forensics & Evidence Handling",
    color: "text-pink-400",
    skills: [
      { name: "Autopsy", icon: <MdOutlineScience className="w-4 h-4 text-[#F87171]" /> },
      { name: "FTK Imager", icon: <MdOutlinePhotoCamera className="w-4 h-4 text-[#F59E0B]" /> },
      { name: "Sleuth Kit", icon: <MdOutlineScience className="w-4 h-4 text-[#F87171]" /> },
      { name: "Volatility", icon: <GiBrain className="w-4 h-4 text-[#8B5CF6]" /> },
      { name: "ExifTool", icon: <MdImage className="w-4 h-4 text-[#FBBF24]" /> },
      { name: "CyberChef", icon: <FaTools className="w-4 h-4 text-[#EC4899]" /> },
      { name: "John the Ripper", icon: <MdLock className="w-4 h-4 text-[#10B981]" /> },
      { name: "Zsteg", icon: <MdLock className="w-4 h-4 text-[#F59E0B]" /> },
      { name: "Steghide", icon: <MdLock className="w-4 h-4 text-[#6B7280]" /> },
      { name: "HxD", icon: <MdOutlineStorage className="w-4 h-4 text-[#6B7280]" /> },
      { name: "HashCalc", icon: <MdOutlineStorage className="w-4 h-4 text-[#6B7280]" /> },
      { name: "Ophcrack", icon: <MdOutlineStorage className="w-4 h-4 text-[#6B7280]" /> },
      { name: "Rainbow Tables", icon: <MdOutlineStorage className="w-4 h-4 text-[#6B7280]" /> },
      { name: "CrypTool", icon: <MdOutlineStorage className="w-4 h-4 text-[#6B7280]" /> },
    ],
  },
  {
    icon: Cloud,
    title: "Automation & DevOps",
    color: "text-orange-400",
    skills: [
      { name: "Jenkins (CI/CD)", icon: <FcWorkflow className="w-4 h-4" /> },
      { name: "Docker", icon: <FaDocker className="w-4 h-4 text-[#2496ED]" /> },
      { name: "GitHub Actions", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
      { name: "Firebase SDK", icon: <SiFirebase className="w-4 h-4 text-[#FFCA28]" /> },
      { name: "AWS", icon: <FaAws className="w-4 h-4 text-[#FF9900]" /> },
      { name: "Google Cloud", icon: <FaAws className="w-4 h-4 text-[#34A853]" /> },
      { name: "Microsoft Azure", icon: <FaAws className="w-4 h-4 text-[#2563EB]" /> },
    ],
  },
  {
    icon: Layout,
    title: "UI/UX & Design Tools",
    color: "text-indigo-400",
    skills: [
      { name: "Figma", icon: <FaFigma className="w-4 h-4 text-[#F24E1E]" /> },
      { name: "InVision", icon: <Layout className="w-4 h-4 text-[#E91E63]" /> },
      { name: "Miro", icon: <Layout className="w-4 h-4 text-[#FFCC00]" /> },
      { name: "Lucidchart", icon: <Layout className="w-4 h-4 text-[#2563EB]" /> },
      { name: "Microsoft Visio", icon: <Layout className="w-4 h-4 text-[#0078D4]" /> },
      { name: "Responsive Design", icon: <Layout className="w-4 h-4 text-[#38B2AC]" /> },
      { name: "Wireframing", icon: <BsGrid1X2 className="w-4 h-4 text-[#9CA3AF]" /> },
      { name: "Prototyping", icon: <MdAnimation className="w-4 h-4 text-[#F59E0B]" /> },
    ],
  },
  {
    icon: Paintbrush,
    title: "Collaboration & Project Management",
    color: "text-yellow-400",
    skills: [
      { name: "Jira", icon: <Layout className="w-4 h-4 text-[#0052CC]" /> },
      { name: "Trello", icon: <Layout className="w-4 h-4 text-[#0079BF]" /> },
      { name: "Atlassian Suite", icon: <Layout className="w-4 h-4 text-[#2684FF]" /> },
      { name: "Microsoft Teams Planner", icon: <Layout className="w-4 h-4 text-[#6264A7]" /> },
      { name: "SharePoint", icon: <Layout className="w-4 h-4 text-[#0078D4]" /> },
      { name: "Google Workspace", icon: <Layout className="w-4 h-4 text-[#EA4335]" /> },
      { name: "MS Office Suite", icon: <Layout className="w-4 h-4 text-[#0078D4]" /> },
    ],
  },
];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
