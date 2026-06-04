// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ShimmerButton } from "@/components/ui/shimmer-button";
// import { ArrowRight } from "lucide-react";
// import firesideBg from "../../assets/firesidechat.jpg";

// gsap.registerPlugin(ScrollTrigger);

// export default function FiresideLegacyConnect() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const tagRef = useRef<HTMLSpanElement>(null);
//   const headlineRef = useRef<HTMLHeadingElement>(null);
//   const quoteRef = useRef<HTMLParagraphElement>(null);
//   const bodyRef = useRef<HTMLParagraphElement>(null);
//   const buttonsRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: { trigger: sectionRef.current, start: "top 70%", once: true },
//       });

//       tl.fromTo(tagRef.current,
//         { opacity: 0, y: 16 },
//         { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
//       )
//       .fromTo(headlineRef.current,
//         { opacity: 0, y: 40 },
//         { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
//         "-=0.4"
//       )
//       .fromTo(quoteRef.current,
//         { opacity: 0, y: 24 },
//         { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
//         "-=0.6"
//       )
//       .fromTo(bodyRef.current,
//         { opacity: 0, y: 20 },
//         { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
//         "-=0.6"
//       )
//       .fromTo(buttonsRef.current,
//         { opacity: 0, y: 16 },
//         { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
//         "-=0.5"
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <>
//       <link
//         href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
//         rel="stylesheet"
//       />

//       <section
//         ref={sectionRef}
//         className="relative w-full min-h-[700px] flex items-center py-28 px-6 md:px-16 overflow-hidden"
//       >
//         {/* ── BACKGROUND IMAGE ── */}
//         <div className="absolute inset-0 z-0">
//           <img
//             src={firesideBg}
//             alt=""
//             aria-hidden="true"
//             className="w-full h-full object-cover"
//           />
//           {/* Black + glass-gray overlay */}
//           <div
//             className="absolute inset-0"
//             style={{
//               background:
//                 "linear-gradient(160deg, rgba(0,0,0,0.88) 0%, rgba(20,20,24,0.78) 50%, rgba(0,0,0,0.92) 100%)",
//             }}
//           />
//           <div className="absolute inset-0 backdrop-blur-[2px]" />
//         </div>

//         {/* ── CONTENT — centered ── */}
//         <div className="relative z-10 max-w-3xl mx-auto w-full flex flex-col items-center text-center">

//           {/* Tag — left of center on its own line but text-left feel via inline-block */}
//           <span
//             ref={tagRef}
//             className="inline-block text-[#4A7FD4] font-semibold tracking-[0.18em] uppercase text-[10px] mb-6 opacity-0"
//             style={{ fontFamily: "'Poppins', sans-serif" }}
//           >
//             Introducing The Movement
//           </span>

//           {/* H1 */}
//           <h2
//             ref={headlineRef}
//             className="text-5xl md:text-7xl font-black tracking-[-0.04em] leading-[0.95] text-white mb-10 opacity-0"
//             style={{ fontFamily: "'Poppins', sans-serif" }}
//           >
//             Fireside Legacy Connect
//           </h2>

//           {/* Big centered quote — normal weight, Poppins */}
//           <p
//             ref={quoteRef}
//             className="text-[clamp(20px,3vw,30px)] font-light text-white/90 leading-[1.55] mb-8 opacity-0 max-w-2xl"
//             style={{ fontFamily: "'Poppins', sans-serif" }}
//           >
//             "What happens when a family sits together, watches a powerful story, and talks about what really matters? Generations change."
//           </p>

//           {/* Body paragraph — centered */}
//           <p
//             ref={bodyRef}
//             className="text-[15px] font-light text-white/55 leading-[1.85] mb-10 opacity-0 max-w-xl"
//             style={{ fontFamily: "'Poppins', sans-serif" }}
//           >
//             Fireside Legacy Connect is a hybrid, movie-based discipleship and family bonding initiative designed to reclaim the heart of your home.
//             We invite you to step into the narrative and take the Fireside Legacy Challenge to begin your journey.
//           </p>

//           {/* Buttons — centered */}
//           <div
//             ref={buttonsRef}
//             className="flex flex-wrap items-center justify-center gap-5 opacity-0"
//           >
//             <ShimmerButton
//               background="#0B3FB4"
//               className="rounded-none px-8 py-3"
//               onClick={() => window.location.href = "/challenge"}
//             >
//               <span
//                 className="flex items-center gap-2 text-sm font-semibold"
//                 style={{ fontFamily: "'Poppins', sans-serif" }}
//               >
//                 Join the Challenge <ArrowRight className="w-4 h-4" />
//               </span>
//             </ShimmerButton>

//             <button
//               className="text-white/80 font-semibold text-xs tracking-[0.14em] uppercase border-b border-white/30 pb-0.5 hover:text-white hover:border-white transition-colors"
//               style={{ fontFamily: "'Poppins', sans-serif" }}
//             >
//               Learn More
//             </button>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// }


"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import heroBg from "../../assets/firesidechat.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function FiresideLegacyConnect() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (containerRef.current?.children) {
        gsap.fromTo(
          containerRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleLearnMore = () => {
    window.location.href = "/about";
  };

  return (
    <section ref={sectionRef} className="w-full py-0">
      <div
        className="relative overflow-hidden rounded-none w-full min-h-[110vh] bg-[#050505] border border-zinc-200/20"
        style={{ boxShadow: "0 0 40px 0 rgba(0,0,0,0.8)" }}
      >
        {/* BACKGROUND IMAGE */}
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 z-0 w-full h-full object-cover object-top"
        />

        {/* DARKER OVERLAY */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.90) 50%, rgba(0,0,0,0.98) 100%)",
          }}
        />

        {/* CONTENT LAYER */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-24 py-24 max-w-7xl mx-auto font-['Poppins',_sans-serif]">
          
          {/* LEFT ALIGNED INTRO & H1 */}
          <div className="mb-16 text-left">
            <span className="inline-block text-zinc-400 font-bold tracking-[0.2em] uppercase text-[10px] mb-4">
              Introducing The Movement
            </span>
            <h2 className="text-[clamp(2.5rem,8vw,4rem)] font-bold text-white tracking-[-0.04em] leading-[0.9] mb-3">
              Fireside Legacy Connect
            </h2>
          </div>

          {/* CENTERED BODY & BUTTONS */}
          <div ref={containerRef} className="flex flex-col items-center text-center max-w-3xl mx-auto">
            
            {/* Italic/Bold Quote */}
            <p className="text-[clamp(1.5rem,5vw,3rem)] font-medium italic text-white leading-[1.2] mb-8">
              "What happens when a family sits together, watches a powerful story, and talks about what really matters? Generations change."
            </p>

            <p className="text-zinc-400 text-sm md:text-xl font-light leading-relaxed mb-10 max-w-2xl">
              Fireside Legacy Connect is a hybrid, movie-based discipleship and family bonding initiative designed to reclaim the heart of your home. 
              We invite you to step into the narrative and take the Fireside Legacy Challenge to begin your journey.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a
                href="#challenge"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-none bg-[#0052FF] text-white font-semibold text-xs tracking-wider uppercase hover:bg-[#0041cc] transition-all duration-300 group select-none"
              >
                <span>Join the Challenge</span>
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <button
                type="button"
                className="text-white font-bold text-xs tracking-[0.2em] uppercase border-b border-white pb-1 hover:text-[#4A7FD4] hover:border-[#4A7FD4] transition-colors"
                onClick={handleLearnMore}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}