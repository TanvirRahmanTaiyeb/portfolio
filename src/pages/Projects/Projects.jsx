import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

// Image imports for projects
import ptguiDemo from "../../assets/images/project/ptgui-demo-output.png";
import devdeakinDemo from "../../assets/images/project/devdeakin-demo.png";
import pingDemo from "../../assets/images/project/ping-demo.png"; // <-- Make sure to save your screenshot here!

const projects = [
  {
    title: "PT-GUI: AI-Powered Penetration Testing Toolkit",
    description:
      "PT-GUI is a student-led, open-source GUI toolkit for penetration testing and cybersecurity education at Deakin University. As 2025 project lead, I designed and implemented the AI Scenario Training module (GPT-4 powered custom scenario generator) and PentestGPT (output-aware next-step adviser). These features enable users to simulate realistic attack chains or get AI-powered guidance after tool scans, making PT-GUI a uniquely effective platform for hands-on learning and advanced workflow automation.",
    src: ptguiDemo,
    link: "https://github.com/Hardhat-Enterprises/Deakin-Detonator-Toolkit",
    color: "#0080ff",
    githubLink: "https://github.com/Hardhat-Enterprises/Deakin-Detonator-Toolkit",
    liveLink: "https://youtu.be/k5-7Kz4Y220?si=0ZWtptBdQcB2jpLn",
  },
  {
    title: "DevDeakin Q&A Platform (Full-stack, Premium Features)",
    description:
      "A full-stack Q&A platform built with React, Firebase, and Stripe. Users can post questions with Markdown/code, upload images, search, and upgrade to premium via Stripe payments. Newsletter and transactional emails are powered by SendGrid. I designed and implemented all features including authentication, payments, premium content, and newsletter automation. The project demonstrates modern full-stack development and scalable cloud integration.",
    src: devdeakinDemo,
    link: "https://github.com/TanvirRahmanTaiyeb/devdeakin-qa-platform",
    color: "#FBBF24",
    githubLink: "https://github.com/TanvirRahmanTaiyeb/devdeakin-qa-platform",
    liveLink: "https://youtu.be/AcIcTJSyZPg?si=9gyUKYQTHVaNd2Sl",
  },
  {
    title: "Python Ping Application (Raw Socket ICMP Tool)",
    description:
      "A Python-based ICMP Ping utility developed using raw sockets. This educational tool replicates the core behavior of the native ping command by manually crafting ICMP Echo Request/Reply packets, with RTT/TTL reporting and checksum validation. Built for cybersecurity and networking learners to deeply understand protocol-level diagnostics and packet inspection. Cross-platform, real-time, and perfect for hands-on protocol exploration.",
    src: pingDemo,
    link: "https://github.com/TanvirRahmanTaiyeb/ping-application-python",
    color: "#4ADE80",
    githubLink: "https://github.com/TanvirRahmanTaiyeb/ping-application-python",
    liveLink: "https://youtu.be/03eXKgsISiM?si=TDNfcJIiT2kKRirR",
  },
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // Add specific styles for 1366x768 resolution
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    // Resolution check function
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.src}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        {/* Modern split card design */}
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          {/* Image section - full width on mobile, 55% on desktop */}
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
            <motion.img
              src={url}
              alt={title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

            {/* Colored overlay on hover */}
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />

            {/* Project number */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Project {i + 1}
            </div>
          </div>

          {/* Content section - full width on mobile, 45% on desktop */}
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-md">
                {description}
              </p>
            </div>

            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

              <div className="flex items-center gap-4">
                {/* GitHub Link */}
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Code
                  </span>
                </motion.a>

                {/* Live Link: Show YouTube icon and Video Demo if liveLink is YouTube, else globe */}
                {liveLink && liveLink.includes("youtube") ? (
                  <motion.a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2"
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {/* YouTube icon */}
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-red-500">
                      <path d="M23.498 6.186a2.994 2.994 0 00-2.108-2.116C19.364 3.5 12 3.5 12 3.5s-7.364 0-9.39.57A2.994 2.994 0 00.502 6.186C0 8.211 0 12 0 12s0 3.789.502 5.814a2.994 2.994 0 002.108 2.116C4.636 20.5 12 20.5 12 20.5s7.364 0 9.39-.57a2.994 2.994 0 002.108-2.116C24 15.789 24 12 24 12s0-3.789-.502-5.814zM9.545 15.568V8.432l6.545 3.568-6.545 3.568z"/>
                    </svg>
                    <span
                      className="text-xs md:text-sm font-medium"
                      style={{ color }}
                    >
                      Video Demo
                    </span>
                  </motion.a>
                ) : (
                  <motion.a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2"
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={color}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                    <span
                      className="text-xs md:text-sm font-medium"
                      style={{ color }}
                    >
                      Live
                    </span>
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Add PropTypes validation
Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};
