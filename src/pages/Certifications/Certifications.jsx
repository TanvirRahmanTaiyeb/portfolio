import React, { useState } from "react";
import { motion } from "framer-motion";

import securityPlus from "../../assets/images/certifications/security-plus.png";
import googleCyber from "../../assets/images/certifications/google-cybersecurity.png";
import chfi from "../../assets/images/certifications/chfi.png";
import sc900 from "../../assets/images/certifications/sc900.png";
import az900 from "../../assets/images/certifications/az900.png";

const certs = [
  {
    image: securityPlus,
    org: "CompTIA",
    date: "Jan 2025",
    name: "CompTIA Security+",
    link: "/certifications/comptia-security-plus.pdf",
  },
  {
    image: googleCyber,
    org: "Google",
    date: "Jan 2025",
    name: "Google Cybersecurity Certificate",
    link: "https://www.credly.com/badges/68adf40b-d270-46ef-8e36-974a4fc7529e/public_url",
  },
  {
    image: chfi,
    org: "EC-Council",
    date: "Jun 2024",
    name: (
      <>
        Computer Hacking Forensic Investigator
        <br />
        <span className="text-cyan-200 font-bold">(CHFI v11)</span>
      </>
    ),
    link: "/certifications/chfi-v11.pdf",
  },
    {
    image: az900,
    org: "Microsoft",
    date: "Nov 2025",
    name: (
      <>
        Azure Fundamentals
        <br />
        <span className="text-cyan-200 font-bold">(AZ-900)</span>
      </>
    ),
    link: "https://learn.microsoft.com/api/credentials/share/en-us/TANVIRRAHMANTAIYEB-8194/4E9628B3A2B567BC?sharingId=BA2A723A03A87E1C",
  },
  {
    image: sc900,
    org: "Microsoft",
    date: "Jun 2024",
    name: (
      <>
        Security, Compliance & Identity Fundamentals
        <br />
        <span className="text-cyan-200 font-bold">(SC-900)</span>
      </>
    ),
    link: "https://learn.microsoft.com/api/credentials/share/en-us/TANVIRRAHMANTAIYEB-8194/EDA7FFCE8DBE5BB1?sharingId=BA2A723A03A87E1C",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18 },
  },
};

const cardVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const tagline = [
  "Proving expertise. Inspiring trust.",
  "Every badge tells a story.",
  "Built on knowledge, powered by passion.",
  "Each badge is a step closer to mastery.",
];

const getRandomTag = () =>
  tagline[Math.floor(Math.random() * tagline.length)];

const Certifications = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [randomTag] = useState(getRandomTag());

  return (
    <section className="min-h-screen relative overflow-hidden py-40 bg-[#04081A]">
      {/* Grid BG */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-white/[0.04] bg-[length:54px_54px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
        <div className="absolute inset-0 border border-white/[0.04] grid grid-cols-2 md:grid-cols-4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Heading + animated divider + tagline */}
        <motion.div
          initial={{ opacity: 0, y: -22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-600 bg-clip-text text-transparent mb-4 drop-shadow-xl tracking-tight">
            Certifications
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            className="mx-auto h-1 w-36 bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 rounded-full mb-5 origin-left"
          />
          <span className="text-lg md:text-xl text-cyan-200/90 font-medium tracking-wide block italic drop-shadow-sm select-none">
             {randomTag}
          </span>
        </motion.div>
        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative border group rounded-2xl py-14 px-7 transition-all duration-300
                bg-white/5 backdrop-blur-2xl shadow-[0_8px_44px_0_rgba(0,0,0,0.20)]
                flex flex-col items-center justify-center
                ${
                  hoveredIndex === index
                    ? "border-cyan-400/90 scale-[1.06] shadow-xl shadow-cyan-300/15"
                    : "border-blue-400/20"
                }
                hover:shadow-cyan-500/30
                before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none before:opacity-0 group-hover:before:opacity-100 before:transition-all before:duration-300 before:border-[2.5px] before:border-cyan-300/70 before:shadow-[0_0_16px_2px_rgba(34,211,238,0.18)]
              `}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                boxShadow:
                  hoveredIndex === index
                    ? "0 8px 64px 12px rgba(20, 200, 255, 0.13)"
                    : undefined,
                background:
                  "rgba(20, 26, 38, 0.58) linear-gradient(120deg,rgba(34,211,238,0.01) 0%,rgba(59,130,246,0.03) 100%)",
                minHeight: 360,
              }}
            >
              {/* -- Make card clickable -- */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex flex-col items-center justify-center w-full h-full outline-none focus:ring-2 focus:ring-cyan-400 rounded-2xl"
                tabIndex={0}
              >
                <img
                  src={cert.image}
                  alt={cert.org}
                  className={`mx-auto object-contain drop-shadow-xl transition-transform duration-300
                    ${
                      cert.org === "Microsoft"
                        ? "w-40 h-40 md:w-52 md:h-52 scale-110"
                        : "w-36 h-36 md:w-44 md:h-44"
                    }
                    group-hover:scale-110`}
                  style={{
                    // Microsoft badge extra scaling and glow
                    filter:
                      cert.org === "Microsoft"
                        ? "drop-shadow(0 0 24px #5ea7f4cc) drop-shadow(0 0 5px #fff)"
                        : "drop-shadow(0 1px 12px #3fdcff50)",
                  }}
                />
                <div className="mt-8 text-center">
                  <h3 className="text-2xl font-bold text-cyan-300 mb-1">{cert.org}</h3>
                  <div className="text-sm text-gray-400">{cert.date}</div>
                  <div className="text-gray-100 text-lg mt-2 font-semibold">{cert.name}</div>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
