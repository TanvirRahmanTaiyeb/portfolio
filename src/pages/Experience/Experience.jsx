import React, { useState } from "react";
import { Cpu, Layers, Activity, MapPin } from "lucide-react";
import { motion } from "framer-motion";

// --- 3D Flip Card ---
const ExperienceCard = ({
  title,
  company,
  location,
  period,
  description,
  details,
  icon: Icon,
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group relative cursor-pointer perspective select-none"
      style={{ perspective: "1500px", minHeight: 370 }}
      onClick={() => setFlipped((prev) => !prev)}
      tabIndex={0}
      onKeyPress={e => { if (e.key === "Enter") setFlipped(f => !f); }}
      aria-label={`${title} card. Press Enter to flip.`}
    >
      <div
        className={`
          relative w-full h-full transition-transform duration-[900ms] [transform-style:preserve-3d]
          ${flipped ? "rotate-y-180" : ""}
        `}
      >
        {/* FRONT */}
        <div className="absolute inset-0 [backface-visibility:hidden] flex flex-col">
          <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-2xl shadow-xl" />
          <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 group-focus:opacity-100 animate-gradient-xy transition-all duration-500 blur-[2px]" />
          <div className="relative bg-gray-900/90 rounded-2xl p-8 h-full border border-gray-800/60 shadow-2xl flex flex-col justify-between overflow-hidden">
            {/* ICON */}
            <div className="relative mb-6">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-25 rounded-full blur-xl group-hover:opacity-75 animate-pulse transition-all duration-500" />
              <Icon className="w-12 h-12 text-cyan-400 relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{title}</h3>
              {/* Company + Location + Period */}
              <div className="flex items-center gap-2 text-gray-300 text-sm mb-1">
                <span className="font-semibold text-blue-400">{company}</span>
                <span className="flex items-center gap-1 ml-2 text-cyan-300">
                  <MapPin className="w-4 h-4 inline -mt-1" />
                  {location}
                </span>
                <span className="ml-auto font-mono bg-blue-500/10 px-3 py-1 rounded-full text-gray-300">{period}</span>
              </div>
              <p className="text-gray-300 border-l-4 border-blue-500/50 pl-4 mt-2 leading-relaxed">{description}</p>
            </div>
            {/* Corners */}
            <div className="absolute top-4 right-4 w-20 h-20 pointer-events-none">
              <div className="absolute top-0 right-0 w-6 h-[2px] bg-cyan-500/50" />
              <div className="absolute top-0 right-0 w-[2px] h-6 bg-cyan-500/50" />
            </div>
            <div className="absolute bottom-4 left-4 w-20 h-20 pointer-events-none">
              <div className="absolute bottom-0 left-0 w-6 h-[2px] bg-purple-500/50" />
              <div className="absolute bottom-0 left-0 w-[2px] h-6 bg-purple-500/50" />
            </div>
          </div>
        </div>
        {/* BACK */}
        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col">
          <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-2xl shadow-xl" />
          <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 group-focus:opacity-100 animate-gradient-xy transition-all duration-500 blur-[2px]" />
          <div className="relative bg-gray-900/95 rounded-2xl p-8 h-full border border-gray-800/60 shadow-2xl flex flex-col justify-between overflow-hidden">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Key Contributions
            </h3>
            <ul className="list-disc ml-4 text-gray-200 space-y-2 text-base leading-relaxed pr-2">
              {details.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            {/* Corners */}
            <div className="absolute top-4 right-4 w-20 h-20 pointer-events-none">
              <div className="absolute top-0 right-0 w-6 h-[2px] bg-cyan-500/50" />
              <div className="absolute top-0 right-0 w-[2px] h-6 bg-cyan-500/50" />
            </div>
            <div className="absolute bottom-4 left-4 w-20 h-20 pointer-events-none">
              <div className="absolute bottom-0 left-0 w-6 h-[2px] bg-purple-500/50" />
              <div className="absolute bottom-0 left-0 w-[2px] h-6 bg-purple-500/50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Section ---
const ExperienceSection = () => {
  const experiences = [
    {
      icon: Cpu,
      title: "Cyber & AI Team Project Lead",
      company: "Hardhat Enterprises",
      location: "Melbourne, Australia",
      period: "Nov 2024 – June 2025",
      description:
        "Led the design and delivery of AI-powered penetration testing features, managed a 30+ member team, and delivered advanced scenario-based training modules.",
      details: [
        "Built a GPT-4 training AI for 30+ real-world cyber scenarios.",
        "Automated scenario generation, saving 60% manual effort.",
        "Boosted LLM output accuracy by 40% through advanced prompt engineering.",
        "Engineered TypeScript/Tauri backend for seamless tool-to-technique mapping.",
      ],
    },
    {
      icon: Layers,
      title: "Client Liaison & Technical Support Intern",
      company: "Inclusion Melbourne",
      location: "Melbourne, Australia",
      period: "Oct 2024 – Jan 2025",
      description:
        "Delivered secure and accessible WordPress solutions for a client-facing platform, improved workflows, and contributed to governance planning and client success.",
      details: [
        "Translated client needs into secure multi-role system specifications.",
        "Screened and integrated 15+ WordPress plugins with zero vulnerabilities.",
        "Optimized SharePoint/Teams workflows for smoother collaboration.",
        "Co-wrote a 2-year governance plan for data security.",
      ],
    },
    {
      icon: Activity,
      title: "Casual IT Support Officer – Exam Support Team",
      company: "Deakin University",
      location: "Geelong, Australia",
      period: "May 2025 – Feb 2026",
      description:
        "Provided real-time technical support for high-pressure university exam sessions, resolving system and network issues and ensuring seamless student experience.",
      details: [
        "Resolved exam-critical IT issues for 20+ students per session.",
        "Troubleshot Wi-Fi, login, and system errors on BYOD/managed devices.",
        "Configured and tested laptops for exam security compliance.",
        "Handled CloudDeakin uploads and performed data sanitization.",
      ],
    },
    {
      icon: Activity,
      title: "Writing Mentor (Students Helping Students Program)",
      company: "Deakin University",
      location: "Geelong, Australia",
      period: "Mar 2023 – July 2025",
      description:
        "Provided individualized academic writing support and mentoring to university students, helping them build confidence and succeed in their assignments.",
      details: [
        "Mentored 15+ students monthly on essay structure and research skills.",
        "Improved students’ ability to interpret briefs and build strong arguments.",
        "Maintained progress records in TargetConnect for measurable outcomes.",
        "Co-led Orientation Week sessions on study and research skills.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b relative overflow-hidden pt-32 pb-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[#04081A]" />
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      {/* Content container */}
      <div className="relative container mx-auto px-6 mt-10">
        {/* Section header */}
        <div className="flex flex-col items-center space-y-8 mb-20">
          <div className="relative flex flex-col items-center">
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-600 bg-clip-text text-transparent mb-4 drop-shadow-xl tracking-tight text-center">
              Professional Journey
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
              className="mx-auto h-1 w-36 bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 rounded-full mb-3 origin-left"
            />
            <span className="text-lg md:text-xl text-cyan-200/90 font-medium tracking-wide block italic drop-shadow-sm select-none text-center">
              Leadership. Collaboration. Innovation — This Is My Journey.
            </span>
          </div>
        </div>
        {/* Experience grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
      {/* Glow background effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
    </div>
  );
};

export default ExperienceSection;
