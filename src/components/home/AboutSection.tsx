// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { motion } from "motion/react";
// import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
// import { Highlighter } from "@/components/ui/highlighter";
// import aboutBg from "../../assets/pwealth.jpeg";

// export default function AboutSection() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const headingWrapperRef = useRef<HTMLDivElement>(null);
//   const headingRef = useRef<HTMLHeadingElement>(null);
//   const videoWrapperRef = useRef<HTMLDivElement>(null);
//   const textWrapperRef = useRef<HTMLDivElement>(null);
//   const buttonWrapperRef = useRef<HTMLDivElement>(null);

//   const [inView, setInView] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => { if (entry?.isIntersecting) setInView(true); },
//       { threshold: 0.1 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   // ── GSAP TIMELINE ORCHESTRATION ──
//   useEffect(() => {
//     if (!inView) return;
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.4 } });
      
//       // Outer wrapper fade-in + Inner H1 clean focus reveal
//       tl.fromTo(headingWrapperRef.current, 
//         { opacity: 0 }, 
//         { opacity: 1, duration: 0.4 }
//       )
//       .fromTo(headingRef.current,
//         { 
//           y: 50, 
//           opacity: 0, 
//           filter: "blur(15px)", 
//           scale: 0.96 
//         },
//         { 
//           y: 0, 
//           opacity: 1, 
//           filter: "blur(0px)", 
//           scale: 1,
//           ease: "power3.out",
//           duration: 1.6
//         },
//         "-=0.4"
//       )
//       .fromTo(videoWrapperRef.current, 
//         { y: 40, opacity: 0, scale: 0.97 }, 
//         { y: 0, opacity: 1, scale: 1 }, 
//         "-=1.1"
//       )
//       .fromTo(textWrapperRef.current, 
//         { y: 25, opacity: 0 }, 
//         { y: 0, opacity: 1 }, 
//         "-=1.2"
//       )
//       .fromTo(buttonWrapperRef.current, 
//         { y: 15, opacity: 0 }, 
//         { y: 0, opacity: 1 }, 
//         "-=1.3"
//       );
//     });
//     return () => ctx.revert();
//   }, [inView]);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full bg-[#060606] text-white py-12 md:py-20 overflow-hidden flex items-center justify-center min-h-[80vh]"
//     >
//       {/* ── BRIGHTENED BACKGROUND IMAGE LAYER ── */}
//       <div
//         className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-45 pointer-events-none select-none"
//         style={{ backgroundImage: `url(${aboutBg})` }}
//       />

//       {/* ── LIGHTENED GLASS & GRADIENT OVERLAYS ── */}
//       <div
//         className="absolute inset-0 z-[1] pointer-events-none"
//         style={{
//           background: "radial-gradient(circle at center, rgba(6,6,6,0.1) 0%, rgba(6,6,6,0.85) 100%)",
//         }}
//       />
//       <div
//         className="absolute inset-0 z-[1] backdrop-blur-[6px] pointer-events-none"
//         style={{
//           background: "linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.3) 100%)",
//         }}
//       />

//       {/* Soft Ambient Core Light */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white/[0.03] blur-[100px] pointer-events-none z-[1]" />

//       {/* ── CONDENSED CONTENT CORE ── */}
//       <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col items-center text-center space-y-6 md:space-y-8">

//         {/* H1 CONTAINER (GSAP managed outer layout & inner premium focus reveal) */}
//         <div ref={headingWrapperRef} className="w-full opacity-0 [will-change:transform,opacity]">
//           <motion.h1
//             ref={headingRef}
//             whileHover={{ scale: 1.01 }}
//             transition={{ type: "spring", stiffness: 300, damping: 20 }}
//             className="w-full max-w-3xl mx-auto text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.06em] leading-[1.1] text-white select-none [will-change:transform,filter,opacity]"
//           >
//             Architecting Intentional Legacies for{" "}
//             <Highlighter 
//               action="circle" 
//               color="#0052FF" 
//               strokeWidth={2.5}
//               animationDuration={850}
//               iterations={1}
//               padding={6}
//             >
//               25
//             </Highlighter>{" "}
//             Years.
//           </motion.h1>
//         </div>

//         {/* VIDEO CONTAINER (GSAP reveal + Framer Motion cinematic float & hover ring) */}
//         <div ref={videoWrapperRef} className="w-full flex justify-center opacity-0 [will-change:transform,opacity]">
//           <motion.div 
//             animate={{ y: [0, -4, 0] }}
//             transition={{
//               repeat: Infinity,
//               duration: 5,
//               ease: "easeInOut"
//             }}
//             whileHover={{ 
//               scale: 1.015,
//               borderColor: "rgba(0, 82, 255, 0.4)",
//               boxShadow: "0 25px 60px -15px rgba(0, 82, 255, 0.25)"
//             }}
//             className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-2xl aspect-video border-4 border-white/10 bg-black/40 backdrop-blur-md p-1.5 transition-colors duration-500"
//           >
//             <iframe
//               className="w-full h-full rounded-lg"
//               src="https://www.youtube.com/embed/dQw4w9WgXcQ"
//               title="YouTube video player"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             />
//           </motion.div>
//         </div>

//         {/* BODY TEXT & BUTTON WRAPPERS */}
//         <div className="max-w-2xl flex flex-col items-center space-y-5">
          
//           <div ref={textWrapperRef} className="opacity-0 [will-change:transform,opacity]">
//             <motion.p
//               whileHover={{ color: "rgba(255,255,255,0.9)" }}
//               transition={{ duration: 0.3 }}
//               className="text-white/70 text-sm md:text-base font-normal leading-relaxed transition-colors duration-300"
//             >
//               Pwealth translates 25 years of deep developmental, spiritual, and
//               clinical exposure into execution structures for high-intent African homes. We
//               dismantle systemic friction points between parents and emerging adults to
//               produce deep-seated alignment.
//             </motion.p>
//           </div>

//           <div ref={buttonWrapperRef} className="opacity-0 [will-change:transform,opacity]">
//             <motion.div
//               whileHover={{ scale: 1.04 }}
//               whileTap={{ scale: 0.98 }}
//               transition={{ type: "spring", stiffness: 400, damping: 15 }}
//             >
//               <a href="#biography" className="block">
//                 <InteractiveHoverButton 
//                   className="bg-[#0052FF] text-white hover:bg-[#0041cc] transition-all duration-300 shadow-lg shadow-blue-600/10"
//                 >
//                   Read Full Story
//                 </InteractiveHoverButton>
//               </a>
//             </motion.div>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }


import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion } from "motion/react";
import { Highlighter } from "@/components/ui/highlighter";
import { ArrowRight } from "lucide-react"; // Imported for the button icon
import aboutBg from "../../assets/pwealth.jpeg";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingWrapperRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const textWrapperRef = useRef<HTMLDivElement>(null);
  const buttonWrapperRef = useRef<HTMLDivElement>(null);

  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry?.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ── GSAP TIMELINE ORCHESTRATION ──
  useEffect(() => {
    if (!inView) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.4 } });
      
      tl.fromTo(headingWrapperRef.current, 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.4 }
      )
      .fromTo(headingRef.current,
        { 
          y: 50, 
          opacity: 0, 
          filter: "blur(15px)", 
          scale: 0.96 
        },
        { 
          y: 0, 
          opacity: 1, 
          filter: "blur(0px)", 
          scale: 1,
          ease: "power3.out",
          duration: 1.6
        },
        "-=0.4"
      )
      .fromTo(videoWrapperRef.current, 
        { y: 40, opacity: 0, scale: 0.97 }, 
        { y: 0, opacity: 1, scale: 1 }, 
        "-=1.1"
      )
      .fromTo(textWrapperRef.current, 
        { y: 25, opacity: 0 }, 
        { y: 0, opacity: 1 }, 
        "-=1.2"
      )
      .fromTo(buttonWrapperRef.current, 
        { y: 15, opacity: 0 }, 
        { y: 0, opacity: 1 }, 
        "-=1.3"
      );
    });
    return () => ctx.revert();
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#060606] text-white py-12 md:py-20 overflow-hidden flex items-center justify-center min-h-[80vh]"
    >
      {/* ── BACKGROUND IMAGE LAYER ── */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-45 pointer-events-none select-none"
        style={{ backgroundImage: `url(${aboutBg})` }}
      />

      {/* ── GLASS & GRADIENT OVERLAYS ── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(6,6,6,0.1) 0%, rgba(6,6,6,0.85) 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-[1] backdrop-blur-[6px] pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.3) 100%)",
        }}
      />

      {/* Soft Ambient Core Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white/[0.03] blur-[100px] pointer-events-none z-[1]" />

      {/* ── CONTENT CORE ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col items-center text-center space-y-6 md:space-y-8">

        {/* H1 CONTAINER */}
        <div ref={headingWrapperRef} className="w-full opacity-0 [will-change:transform,opacity]">
          <motion.h1
            ref={headingRef}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-full max-w-3xl mx-auto text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.06em] leading-[1.1] text-white select-none [will-change:transform,filter,opacity]"
          >
            Architecting Intentional Legacies for{" "}
            <Highlighter 
              action="circle" 
              color="#0052FF" 
              strokeWidth={2.5}
              animationDuration={850}
              iterations={1}
              padding={6}
            >
              25
            </Highlighter>{" "}
            Years.
          </motion.h1>
        </div>

        {/* VIDEO CONTAINER */}
        <div ref={videoWrapperRef} className="w-full flex justify-center opacity-0 [will-change:transform,opacity]">
          <motion.div 
            animate={{ y: [0, -4, 0] }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut"
            }}
            whileHover={{ 
              scale: 1.015,
              borderColor: "rgba(0, 82, 255, 0.4)",
              boxShadow: "0 25px 60px -15px rgba(0, 82, 255, 0.25)"
            }}
            className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-2xl aspect-video border-4 border-white/10 bg-black/40 backdrop-blur-md p-1.5 transition-colors duration-500"
          >
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </div>

        {/* BODY TEXT & HERO-MATCHED BLUE CTA */}
        <div className="max-w-2xl flex flex-col items-center space-y-6">
          
          <div ref={textWrapperRef} className="opacity-0 [will-change:transform,opacity]">
            <motion.p
              whileHover={{ color: "rgba(255,255,255,0.9)" }}
              transition={{ duration: 0.3 }}
              className="text-white/70 text-sm md:text-base font-normal leading-relaxed transition-colors duration-300"
            >
              Pwealth translates 25 years of deep developmental, spiritual, and
              clinical exposure into execution structures for high-intent African homes. We
              dismantle systemic friction points between parents and emerging adults to
              produce deep-seated alignment.
            </motion.p>
          </div>

          {/* Solid Architectural Brand Button with Arrow Icon */}
          <div ref={buttonWrapperRef} className="opacity-0 [will-change:transform,opacity] pt-2">
            <a href="#biography" className="block">
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "#0041cc" }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="
                  inline-flex items-center gap-3
                  px-8 py-4 rounded-none border-0
                  bg-[#0052FF] text-white font-semibold text-xs tracking-wider uppercase
                  transition-colors duration-300 cursor-pointer select-none group
                "
              >
                <span>Read Full Story</span>
                <ArrowRight 
                  size={14} 
                  className="transition-transform duration-300 group-hover:translate-x-1" 
                />
              </motion.button>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}