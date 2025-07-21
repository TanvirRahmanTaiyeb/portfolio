import HeroImg from "@/assets/images/hero.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
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
              <p className="text-white">
                Hello! I'm Tanvir Rahman Taiyeb, a developer passionate about turning ideas into intelligent, secure, and connected systems.
                With a background in Information Technology and a major in Cyber Security,
                I thrive at the intersection of artificial intelligence, ethical hacking, and network design.{" "}
              </p>
                
              <p className="text-white">
                My goal is simple: build technology that solves real problems.
                From coding AI-powered tools to automating network tasks and securing digital systems,
                I'm constantly exploring how code can do more — not just work smarter, but work with purpose.
                This is what drives me every day.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
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
        </div>
      </section>
    </>
  );
}
