// "use client";

// import { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Particles } from "@/components/ui/particles";
// import { IMPACT_STATS } from "../../data/constants";

// gsap.registerPlugin(ScrollTrigger);

// const GRID_SPANS  = ["md:col-span-2", "md:col-span-1", "md:col-span-3"];
// const MOBILE_TOPS = ["top-[72px]", "top-[96px]", "top-[120px]"];
// const MOBILE_Z    = [10, 20, 30];

// // ── Framer variants ───────────────────────────────────────────
// const containerVariants = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 40, scale: 0.97 },
//   show: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: { type: "spring", stiffness: 90, damping: 18 },
//   },
// };

// // ── Shared card inner ─────────────────────────────────────────
// function CardInner({ stat }: { stat: (typeof IMPACT_STATS)[number] }) {
//   return (
//     <>
//       {/* Hover glow */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.09),transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

//       <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-blue-400 transition-colors duration-300 mb-2">
//         {stat.label}
//       </span>

//       <div className="flex items-baseline justify-center mb-1">
//         <span className="text-4xl md:text-5xl font-black tracking-tight text-blue-400 drop-shadow-[0_0_25px_rgba(59,130,246,0.25)]">
//           {stat.number.toLocaleString()}
//           <span className="text-blue-500 ml-0.5">{stat.suffix}</span>
//         </span>
//       </div>

//       <h3 className="text-sm font-bold text-zinc-100 mb-2 tracking-tight">
//         {stat.tag}
//       </h3>

//       <p className="text-zinc-400 text-xs font-medium leading-relaxed max-w-md">
//         {stat.context}
//       </p>
//     </>
//   );
// }

// export default function MissionImpactStats() {
//   const sectionRef  = useRef<HTMLElement>(null);
//   const cursiveRef  = useRef<HTMLSpanElement>(null);
//   const h1Ref       = useRef<HTMLHeadingElement>(null);

//   // ── GSAP: cursive + h1 word stagger ──────────────────────────
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Cursive — handwriting slide-in
//       gsap.fromTo(
//         cursiveRef.current,
//         { opacity: 0, x: -28, skewX: -5 },
//         {
//           opacity: 1, x: 0, skewX: 0,
//           duration: 1.1, ease: "power4.out",
//           scrollTrigger: { trigger: cursiveRef.current, start: "top 86%", once: true },
//         }
//       );

//       // H1 — word-by-word flip up
//       const words = h1Ref.current?.querySelectorAll<HTMLSpanElement>(".word");
//       if (words?.length) {
//         gsap.fromTo(
//           words,
//           { opacity: 0, y: 44, rotateX: -28 },
//           {
//             opacity: 1, y: 0, rotateX: 0,
//             duration: 0.88, stagger: 0.08, ease: "power4.out",
//             scrollTrigger: { trigger: h1Ref.current, start: "top 83%", once: true },
//           }
//         );
//       }
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   const h1Words = "The Numbers Behind the Mission".split(" ");

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full py-20 md:py-28 px-4 overflow-hidden min-h-screen flex items-center bg-[#0a0a0c]"
//     >
//       {/* ── PARTICLES BG ───────────────────────────────────────── */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         <Particles
//           className="absolute inset-0 w-full h-full"
//           quantity={90}
//           color="#60a5fa"
//           ease={80}
//           size={0.6}
//         />
//         {/* Vignette */}
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, #0a0a0c 100%)",
//           }}
//         />
//       </div>

//       {/* ── CONTENT ────────────────────────────────────────────── */}
//       <div className="max-w-3xl mx-auto w-full relative z-10 flex flex-col items-start">

//         {/* HEADER */}
//         <div className="text-left mb-12 md:mb-16 w-full" style={{ perspective: "800px" }}>

//           {/* Cursive — GSAP */}
//           <span
//             ref={cursiveRef}
//             className="inline-block text-2xl md:text-3xl text-blue-400 mb-3 opacity-0"
//             style={{ fontFamily: "'Dancing Script', 'Brush Script MT', cursive" }}
//           >
//             What 25 years looks like...
//           </span>

//           {/* H1 — GSAP word stagger */}
//           <h1
//             ref={h1Ref}
//             className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-[-0.06em] max-w-2xl"
//           >
//             {h1Words.map((word, i) => (
//               <span
//                 key={i}
//                 className="word inline-block opacity-0 mr-[0.22em] last:mr-0"
//               >
//                 {word}
//               </span>
//             ))}
//           </h1>
//         </div>

//         {/* ── DESKTOP GRID (Framer Motion) ─────────────────────── */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, margin: "-40px" }}
//           className="hidden md:grid md:grid-cols-3 gap-5 w-full"
//         >
//           {IMPACT_STATS.map((stat, idx) => (
//             <motion.div
//               key={stat.id}
//               variants={cardVariants}
//               whileHover={{ scale: 1.015, y: -4, transition: { duration: 0.22 } }}
//               className={`${GRID_SPANS[idx]} relative overflow-hidden bg-zinc-950/80 backdrop-blur-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center group rounded-2xl`}
//               style={{
//                 border: "2.5px solid rgba(255,255,255,0.22)",
//                 boxShadow: "0 20px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)",
//               }}
//             >
//               <CardInner stat={stat} />
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* ── MOBILE STICKY STACK (Framer Motion) ─────────────── */}
//         <div className="flex md:hidden flex-col w-full pb-[55vw]">
//           {IMPACT_STATS.map((stat, idx) => (
//             <motion.div
//               key={stat.id}
//               initial={{ opacity: 0, y: 32 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.15 }}
//               transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
//               className={`sticky ${MOBILE_TOPS[idx]} w-full overflow-hidden bg-zinc-950/88 backdrop-blur-2xl px-6 py-9 flex flex-col items-center justify-center text-center rounded-2xl min-h-[220px] group`}
//               style={{
//                 zIndex: MOBILE_Z[idx],
//                 border: "2.5px solid rgba(255,255,255,0.22)",
//                 boxShadow: "0 20px 48px rgba(0,0,0,0.72), inset 0 1px 0 rgba(255,255,255,0.08)",
//                 marginBottom: "1.5rem",
//               }}
//             >
//               <CardInner stat={stat} />
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IMPACT_STATS } from "../../data/constants";
import aboutBg from "../../assets/pwealth.jpeg";

gsap.registerPlugin(ScrollTrigger);

const GRID_SPANS  = ["md:col-span-2", "md:col-span-1", "md:col-span-3"];
const MOBILE_TOPS = ["top-[72px]", "top-[96px]", "top-[120px]"];
const MOBILE_Z    = [10, 20, 30];

// ── Framer variants ───────────────────────────────────────────
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 90, damping: 18 },
  },
};

// ── Shared card inner (Fully Monochromatic) ───────────────────
function CardInner({ stat }: { stat: (typeof IMPACT_STATS)[number] }) {
  return (
    <>
      {/* Monochromatic white/gray hover glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors duration-300 mb-2">
        {stat.label}
      </span>

      <div className="flex items-baseline justify-center mb-1">
        <span className="text-4xl md:text-5xl font-black tracking-tight text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.12)]">
          {stat.number.toLocaleString()}
          <span className="text-zinc-400 ml-0.5 font-medium">{stat.suffix}</span>
        </span>
      </div>

      <h3 className="text-sm font-bold text-zinc-100 mb-2 tracking-tight">
        {stat.tag}
      </h3>

      <p className="text-zinc-400 text-xs font-medium leading-relaxed max-w-md">
        {stat.context}
      </p>
    </>
  );
}

export default function MissionImpactStats() {
  const sectionRef  = useRef<HTMLElement>(null);
  const cursiveRef  = useRef<HTMLSpanElement>(null);
  const h1Ref       = useRef<HTMLHeadingElement>(null);

  // ── GSAP: cursive + h1 word stagger ──────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cursive — handwriting slide-in
      gsap.fromTo(
        cursiveRef.current,
        { opacity: 0, x: -28, skewX: -5 },
        {
          opacity: 1,
          x: 0,
          skewX: 0,
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: { trigger: cursiveRef.current, start: "top 86%", once: true },
        }
      );

      // H1 — word-by-word flip up
      const words = h1Ref.current?.querySelectorAll<HTMLSpanElement>(".word");
      if (words?.length) {
        gsap.fromTo(
          words,
          { opacity: 0, y: 44, rotateX: -28 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.88,
            stagger: 0.08,
            ease: "power4.out",
            scrollTrigger: { trigger: h1Ref.current, start: "top 83%", once: true },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const h1Words = "The Numbers Behind the Mission".split(" ");

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 md:py-28 px-4 overflow-hidden min-h-screen flex items-center bg-[#0a0a0c]"
    >
      {/* ── BACKGROUND IMAGE LAYER (Increased opacity for better visual clarity) ── */}
      <img
        src={aboutBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 z-0 w-full h-full object-cover object-top opacity-65 pointer-events-none select-none"
        style={{ objectPosition: "center 10%" }}
      />

      {/* ── LIGHTENED DIAGONAL MASK LAYER ── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.65) 100%)",
        }}
      />

      {/* ── OPTIMIZED RADIAL VIGNETTE GLASS FILTER (Reduced blur and core tint) ── */}
      <div
        className="absolute inset-0 z-[1] backdrop-blur-[2px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(10,10,12,0.05) 0%, rgba(10,10,12,0.85) 100%)",
        }}
      />

      {/* Soft Ambient Core Light Flare Layer */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.02] blur-[120px] pointer-events-none z-[1]"
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.02, 0.04, 0.02]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── CONTENT ────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto w-full relative z-10 flex flex-col items-start">

        {/* HEADER */}
        <div className="text-left mb-12 md:mb-16 w-full" style={{ perspective: "800px" }}>

          {/* Cursive — GSAP */}
          <span
            ref={cursiveRef}
            className="inline-block text-2xl md:text-3xl text-[#086AD8] mb-3 opacity-0 drop-shadow-md"
            style={{ fontFamily: "'Dancing Script', 'Brush Script MT', cursive" }}
          >
            What 25 years looks like...
          </span>

          {/* H1 — GSAP word stagger */}
          <h1
            ref={h1Ref}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-[-0.06em] max-w-2xl select-none drop-shadow-lg"
          >
            {h1Words.map((word, i) => (
              <span
                key={i}
                className="word inline-block opacity-0 mr-[0.22em] last:mr-0"
              >
                {word}
              </span>
            ))}
          </h1>
        </div>

        {/* ── DESKTOP GRID (Framer Motion) ─────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="hidden md:grid md:grid-cols-3 gap-5 w-full"
        >
          {IMPACT_STATS.map((stat, idx) => (
            <motion.div
              key={stat.id}
              variants={cardVariants}
              whileHover={{ scale: 1.015, y: -4, transition: { duration: 0.22 } }}
              className={`${GRID_SPANS[idx]} relative overflow-hidden bg-zinc-950/50 backdrop-blur-xl p-6 md:p-8 flex flex-col items-center justify-center text-center group rounded-2xl`}
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.03)",
              }}
            >
              <CardInner stat={stat} />
            </motion.div>
          ))}
        </motion.div>

        {/* ── MOBILE STICKY STACK (Framer Motion) ─────────────── */}
        <div className="flex md:hidden flex-col w-full pb-[55vw]">
          {IMPACT_STATS.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`sticky ${MOBILE_TOPS[idx]} w-full overflow-hidden bg-zinc-950/60 backdrop-blur-xl px-6 py-9 flex flex-col items-center justify-center text-center rounded-2xl min-h-[220px] group`}
              style={{
                zIndex: MOBILE_Z[idx],
                border: "1px solid rgba(255,255,255,0.2)",
                boxShadow: "0 20px 48px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.03)",
                marginBottom: "1.5rem",
              }}
            >
              <CardInner stat={stat} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}