import HeroImg from "@/assets/images/hero.jpg";

const languages = [
  {
    name: "English",
    level: "Fluent",
    percent: 98,
    color: "from-blue-400 via-cyan-500 to-blue-700",
    ring: "border-blue-400 shadow-blue-500/50",
    icon: (
      <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M6 18L18 6M6 6l12 12" />
      </svg>
    )
  },
  {
    name: "Bengali",
    level: "Native",
    percent: 100,
    color: "from-green-400 via-emerald-400 to-green-700",
    ring: "border-green-400 shadow-green-400/40",
    icon: (
      <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
      </svg>
    )
  },
  {
    name: "Hindi",
    level: "Intermediate",
    percent: 65,
    color: "from-yellow-200 via-yellow-400 to-yellow-700",
    ring: "border-yellow-400 shadow-yellow-400/30",
    icon: (
      <svg className="w-6 h-6 text-yellow-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect x="5" y="5" width="14" height="14" rx="4" />
      </svg>
    )
  },
  {
    name: "Urdu",
    level: "Intermediate",
    percent: 60,
    color: "from-pink-300 via-pink-400 to-pink-700",
    ring: "border-pink-400 shadow-pink-400/30",
    icon: (
      <svg className="w-6 h-6 text-pink-200" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.478 2 12s4.477 10 10 10 10-4.478 10-10S17.523 2 12 2z" />
      </svg>
    )
  },
  {
    name: "Arabic",
    level: "Intermediate",
    percent: 55,
    color: "from-indigo-300 via-indigo-500 to-indigo-900",
    ring: "border-indigo-400 shadow-indigo-400/30",
    icon: (
      <svg className="w-6 h-6 text-indigo-200" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="5" />
      </svg>
    )
  }
];

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Code Breaker, AI Developer, System Defender, Future Builder
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>
            <div className="relative space-y-4">
              <p>
                Hello! I'm Tanvir Rahman Taiyeb, a developer passionate about turning ideas into intelligent, secure, and connected systems.
                With a background in Information Technology and a major in Cyber Security,
                I thrive at the intersection of artificial intelligence, ethical hacking, and network design.
              </p>
              <p>
                My goal is simple: build technology that solves real problems.
                From coding AI-powered tools to automating network tasks and securing digital systems,
                I'm constantly exploring how code can do more — not just work smarter, but work with purpose.
                This is what drives me every day.
              </p>
              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p>
                    I believe great technology doesn't just work — it thinks, adapts, and protects.
                    That's why I'm drawn to building AI-enhanced tools, defensive systems, and smart networks that make the complex feel effortless.
                  </p>
                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Tanvir Rahman Taiyeb
                    </cite>
                    <div className="text-white text-sm">
                      AI Innovator | Cyber Explorer | Network Learner | Code Maker
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>

          {/* --- LANGUAGES GLASS CARD WITH BARS --- */}
          <div className="w-full flex flex-col items-center pt-14">
            <div className="relative w-full md:w-[90%] lg:w-[70%] mx-auto rounded-2xl overflow-visible border border-cyan-500/40 shadow-[0_4px_40px_0_rgba(36,203,255,0.08)] backdrop-blur-[6px] bg-white/5 transition">
              {/* Section Title */}
              <div className="flex items-center gap-3 px-8 pt-8 pb-3">
                <svg className="w-7 h-7 text-cyan-400 animate-spin-slow" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" className="opacity-20" />
                  <circle cx="12" cy="12" r="8" className="opacity-70" />
                </svg>
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent tracking-tight">
                  Languages I Speak
                </h3>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 pb-8 pt-2">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className={`relative flex flex-col items-start justify-between self-stretch h-auto min-w-[200px] w-full max-w-xs px-6 py-6 mb-2 rounded-2xl border glass-card backdrop-blur-md ${lang.ring} hover:scale-[1.03] transition`}
                    style={{
                      boxShadow: `0 0 24px 3px var(--tw-shadow-color)`
                    }}
                  >
                    <div className="flex items-center justify-between flex-wrap gap-2 w-full mb-2">
                      <div className="flex items-center gap-2">
                        {lang.icon}
                        <span className="text-xl font-bold">{lang.name}</span>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-medium uppercase tracking-wide whitespace-nowrap">
                        {lang.level}
                      </span>
                    </div>
                    <div className="w-full pt-3">
                      <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden relative">
                        <div
                          className={`absolute left-0 top-0 h-4 rounded-full animate-pulse-bar bg-gradient-to-r ${lang.color} shadow-lg`}
                          style={{
                            width: `${lang.percent}%`,
                            boxShadow: `0 0 12px 3px rgba(36,203,255,0.10)`
                          }}
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-bold text-cyan-200/90 drop-shadow">
                          {lang.percent}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* --- END LANGUAGES GLASS CARD --- */}
        </div>
      </section>

      <style>
        {`
        .glass-card {
          background: linear-gradient(135deg, rgba(22,25,60,0.92) 60%, rgba(36,203,255,0.06) 100%);
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        .animate-pulse-bar {
          animation: pulse-bar 2.5s infinite cubic-bezier(.4,0,.6,1);
        }
        @keyframes pulse-bar {
          0%,100% { filter: brightness(1.05) blur(0.5px);}
          50% { filter: brightness(1.17) blur(1.5px);}
        }
        `}
      </style>
    </>
  );
}
