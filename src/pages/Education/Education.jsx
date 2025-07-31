import React, { useState } from "react";
import { Award, Calendar, BookOpen, Trophy } from "lucide-react";
import { motion } from "framer-motion";

// Suggested taglines—edit, add, or randomize as you wish
const taglines = [
  "Where curiosity meets opportunity, learning becomes transformation.",
  "Academic milestones, real-world impact.",
  "Pushing boundaries through knowledge and innovation.",
  "A journey of curiosity, commitment, and growth.",
  "Building a smarter future, one lesson at a time.",
];

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Random tagline each time
  const tagline = taglines[Math.floor(Math.random() * taglines.length)];

  const educationData = [
    {
      degree: "Bachelor of Information Technology",
      school: "Deakin University · Australia",
      mascot: "🎓",
      year: "Mar 2023 - Jul 2025",
      achievements: [
        "WAM: 82.5% (High Distinction)",
        "Major: Cyber Security"
      ],
      skills: [
        "Cybersecurity",
        "AI Applications",
        "Networking",
        "Secure System Design"
      ],
      description:
        "Developed strong technical expertise in cyber security, AI integration, and network architecture, while delivering real-world projects focusing on penetration testing and secure design."
    },
    {
      degree: "Bachelor of Computer Science",
      school: "RMIT University (Royal Melbourne Institute of Technology) · Australia",
      mascot: "🎓",
      year: "Jun 2022 - Feb 2023",
      achievements: [
        "WAM: Distinction Average",
        "Core: Programming & Algorithms"
      ],
      skills: [
        "Software Engineering",
        "Database Systems",
        "Object-Oriented Programming",
        "Problem Solving"
      ],
      description:
        "Strengthened foundations in computer science concepts, programming languages, and software development before transitioning to cybersecurity specialization."
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      school: "Dhaka College · Bangladesh",
      mascot: "📗",
      year: "2019 - 2022",
      achievements: ["GPA: 5.00 (A+ in all subjects)", "Science Stream"],
      skills: ["Physics", "Chemistry", "Biology", "Higher Mathematics", "ICT", "English"],
      description:
        "Achieved top grades in all science subjects, gaining advanced knowledge in core STEM disciplines and strengthening problem-solving and analytical thinking."
    },
    {
      degree: "Secondary School Certificate (SSC)",
      school: "Ideal School and College · Bangladesh",
      mascot: "📘",
      year: "2017 - 2019",
      achievements: ["GPA: 5.00", "Science Stream"],
      skills: ["Mathematics", "Physics", "Chemistry", "Biology", "ICT"],
      description:
        "Established a strong foundation in science and technology, excelling across all core subjects and preparing for higher academic challenges."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-40 bg-[#04081A]">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
        <div className="absolute inset-0 border border-white/[0.05] grid grid-cols-2 md:grid-cols-4" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Heading (with animated underline & tagline) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-600 bg-clip-text text-transparent mb-4 drop-shadow-xl tracking-tight">
            Educational Journey
          </h2>
          {/* --- MATCHES THE CERTIFICATIONS UNDERLINE EXACTLY --- */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            className="mx-auto h-1 w-36 bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 rounded-full mb-5 origin-left"
          />
          <span className="text-lg md:text-xl text-cyan-200/90 font-medium tracking-wide block italic drop-shadow-sm select-none">
            {tagline}
          </span>
        </motion.div>

        {/* Education Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative border rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm ${
                hoveredIndex === index
                  ? "border-teal-500 scale-[1.02]"
                  : "border-blue-400/20"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-6">
                {/* Degree and School */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{edu.mascot}</span>
                    <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                  </div>
                  <p className="text-lg text-gray-300 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-teal-500" />
                    {edu.school}
                  </p>
                  <p className="text-gray-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {edu.year}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm italic border-l-2 border-teal-500 pl-3">
                  {edu.description}
                </p>

                {/* Achievements */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    Key Achievements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 flex items-center gap-2 text-sm"
                      >
                        <Award className="w-4 h-4" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
