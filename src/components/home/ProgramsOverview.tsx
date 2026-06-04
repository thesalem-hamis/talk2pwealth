// "use client";

// import { useState, useEffect, useRef, useCallback } from "react";
// import { ArrowRight, ArrowUpRight } from "lucide-react";
// import { motion } from "motion/react";
// import { PROGRAMS, type Program } from "../../data/constants";
// import { LightRays } from "@/components/ui/light-rays";

// function ProgramIcon({
//   program,
//   size = 20,
//   className = "",
// }: {
//   program: Program;
//   size?: number;
//   className?: string;
// }) {
//   if (program.logo) {
//     return (
//       <img src={program.logo} alt={program.title} width={size} height={size} className={className} />
//     );
//   }
//   const { Icon } = program;
//   return <Icon size={size} className={className} />;
// }

// function DesktopCard({
//   program,
//   isActive,
//   onActivate,
// }: {
//   program: Program;
//   isActive: boolean;
//   onActivate: () => void;
// }) {
//   return (
//     <div
//       className={[
//         "relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
//         isActive ? "flex-[5]" : "flex-[0.8] hover:flex-[1]",
//       ].join(" ")}
//       style={{
//         minWidth: 0,
//         height: "520px",
//         border: isActive
//           ? "1px solid rgba(255,255,255,0.18)"
//           : "1px solid rgba(255,255,255,0.08)",
//         boxShadow: isActive
//           ? "0 0 0 1px rgba(255,255,255,0.06), 0 32px 64px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.12)"
//           : "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
//       }}
//       onMouseEnter={onActivate}
//       onClick={onActivate}
//       role="button"
//       tabIndex={0}
//       aria-selected={isActive}
//       onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onActivate()}
//     >
//       {/* LIGHT RAYS BG - only show on active card */}
//       {isActive && (
//         <LightRays
//           count={8}
//           color="rgba(255,255,255,0.25)"
//           blur={40}
//           speed={12}
//           length="100%"
//           className="z-[2]"
//         />
//       )}

//       {program.bgImage && (
//         <div className="absolute inset-0 transition-all duration-500 z-0">
//           <img
//             src={program.bgImage}
//             alt=""
//             aria-hidden="true"
//             className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
//               isActive ? "scale-105" : "scale-100"
//             }`}
//           />
//           <div className="absolute inset-0 bg-black/40" />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/15" />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/25 to-transparent" />
//           <div
//             className="absolute inset-x-0 top-0 h-px"
//             style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)" }}
//           />
//           <div
//             className="absolute inset-y-0 left-0 w-px"
//             style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.15), transparent 60%)" }}
//           />
//         </div>
//       )}

//       {!program.bgImage && (
//         <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm" />
//       )}

//       {/* EXPANDED */}
//       <div
//         className={[
//           "relative z-10 h-full p-8 flex flex-col justify-between transition-all duration-300",
//           isActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none absolute inset-0",
//         ].join(" ")}
//       >
//         <div>
//           {program.logo ? (
//             <img src={program.logo} alt="" className="h-8 w-auto object-contain mb-6 brightness-0 invert" />
//           ) : (
//             <div
//               className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg"
//               style={{ backgroundColor: program.accent, boxShadow: `0 4px 16px ${program.accent}40` }}
//             >
//               <ProgramIcon program={program} size={22} className="text-white" />
//             </div>
//           )}

//           <span
//             className="inline-block text-[11px] font-bold tracking-wider uppercase rounded-full px-3 py-1 mb-4"
//             style={{ backgroundColor: program.accentLight, color: program.accentText }}
//           >
//             {program.tag}
//           </span>

//           <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight max-w-2xl mb-4">
//             {program.title}
//           </h3>
//           <p className="text-white/75 text-base leading-relaxed max-w-lg mb-6">
//             {program.description}
//           </p>
//         </div>

//         <div className="mt-auto flex flex-col gap-6">
//           {program.quote && (
//             <div
//               className="max-w-3xl pl-4 py-3 pr-4 rounded-xl"
//               style={{
//                 borderLeft: `2px solid ${program.accent}80`,
//                 background: "rgba(255,255,255,0.04)",
//                 backdropFilter: "blur(8px)",
//               }}
//             >
//               <p className="text-white/85 text-sm font-medium italic leading-relaxed mb-1">
//                 "{program.quote}"
//               </p>
//               {program.author && (
//                 <p className="text-white/60 text-xs font-semibold uppercase tracking-wider">
//                   — {program.author}
//                 </p>
//               )}
//             </div>
//           )}

//           <div className="flex items-center justify-between pt-2">
//             <a
//               href={program.href}
//               className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white hover:underline group"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {program.cta || "Learn More"}
//               <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
//             </a>
//           </div>
//         </div>

//         <a
//           href={program.href}
//           className="absolute bottom-6 right-6 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
//           style={{
//             background: "rgba(255,255,255,0.12)",
//             backdropFilter: "blur(12px)",
//             border: "1px solid rgba(255,255,255,0.2)",
//             boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15)",
//             color: "white",
//           }}
//           onClick={(e) => e.stopPropagation()}
//           aria-label={`Open ${program.title}`}
//         >
//           <ArrowUpRight size={16} />
//         </a>
//       </div>

//       {/* COLLAPSED */}
//       <div
//         className={[
//           "absolute inset-0 z-10 py-8 px-4 flex flex-col items-center justify-between transition-all duration-300",
//           isActive ? "opacity-0 pointer-events-none" : "opacity-100",
//         ].join(" ")}
//       >
//         <div
//           className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md"
//           style={{ backgroundColor: program.accent, boxShadow: `0 4px 12px ${program.accent}50` }}
//         >
//           <ProgramIcon program={program} size={22} className="text-white" />
//         </div>
//         <div className="font-bold text-white/60 tracking-widest text-xs uppercase select-none [writing-mode:vertical-rl] rotate-180 my-auto">
//           {program.shortLabel || program.tag.split(" ").pop()}
//         </div>
//         <div className="w-1.5 h-1.5 rounded-full opacity-40" style={{ backgroundColor: program.accent }} />
//       </div>
//     </div>
//   );
// }

// function MobileView({
//   active,
//   setActive,
// }: {
//   active: number;
//   setActive: (i: number) => void;
// }) {
//   const [fading, setFading] = useState(false);
//   const [displayed, setDisplayed] = useState(active);

//   const switchTo = useCallback(
//     (idx: number) => {
//       if (idx === active) return;
//       setFading(true);
//       setTimeout(() => {
//         setActive(idx);
//         setDisplayed(idx);
//         setFading(false);
//       }, 200);
//     },
//     [active, setActive]
//   );

//   useEffect(() => {
//     if (!fading) setDisplayed(active);
//   }, [active, fading]);

//   const prog = PROGRAMS[displayed];
//   const [touchStart, setTouchStart] = useState(0);

//   const handleTouchEnd = (e: React.TouchEvent) => {
//     const diff = touchStart - e.changedTouches[0].clientX;
//     if (Math.abs(diff) > 50) {
//       if (diff > 0) switchTo((active + 1) % PROGRAMS.length);
//       else switchTo((active - 1 + PROGRAMS.length) % PROGRAMS.length);
//     }
//   };

//   return (
//     <div className="flex flex-col gap-5">
//       <div
//         className="flex flex-row gap-3 overflow-x-auto pb-2"
//         style={{ scrollbarWidth: "none" }}
//         role="tablist"
//       >
//         {PROGRAMS.map((p, idx) => (
//           <button
//             key={p.id}
//             onClick={() => switchTo(idx)}
//             className={`flex flex-col items-center gap-2 flex-shrink-0 transition-all duration-200 focus:outline-none ${
//               idx === active ? "opacity-100 scale-105" : "opacity-40 hover:opacity-70"
//             }`}
//             role="tab"
//             aria-selected={idx === active}
//           >
//             <div
//               className="w-14 h-14 rounded-full flex items-center justify-center shadow-md transition-all duration-200"
//               style={{ backgroundColor: idx === active ? p.accent : "#1a1a1a" }}
//             >
//               <ProgramIcon
//                 program={p}
//                 size={24}
//                 className={idx === active ? "text-white" : "text-white/40"}
//               />
//             </div>
//             <span className="text-xs font-semibold text-gray-500 max-w-[70px] text-center truncate">
//               {p.shortLabel}
//             </span>
//           </button>
//         ))}
//       </div>

//       <div
//         className={`relative rounded-3xl overflow-hidden min-h-[440px] transition-opacity duration-200 ${
//           fading ? "opacity-0" : "opacity-100"
//         }`}
//         style={{
//           border: "1px solid rgba(255,255,255,0.12)",
//           boxShadow: "0 0 0 1px rgba(255,255,255,0.04), 0 24px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
//         }}
//         onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
//         onTouchEnd={handleTouchEnd}
//       >
//         {/* LightRays on mobile active card */}
//         <LightRays
//           count={6}
//           color="rgba(255,255,255,0.2)"
//           blur={35}
//           speed={14}
//           length="100%"
//           className="z-[2]"
//         />

//         {prog.bgImage && (
//           <div className="absolute inset-0 z-0">
//             <img src={prog.bgImage} alt="" className="w-full h-full object-cover" />
//             <div className="absolute inset-0 bg-black/35" />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/15" />
//             <div
//               className="absolute inset-x-0 top-0 h-px"
//               style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)" }}
//             />
//           </div>
//         )}

//         {!prog.bgImage && (
//           <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 to-gray-800" />
//         )}

//         <div className="relative z-10 h-full p-6 flex flex-col justify-between min-h-[440px]">
//           <div>
//             <div className="flex items-center justify-between mb-5">
//               <span
//                 className="text-[10px] font-bold tracking-wider uppercase rounded-full px-3 py-1 text-white"
//                 style={{ backgroundColor: prog.accent }}
//               >
//                 {prog.tag}
//               </span>
//               {prog.logo && (
//                 <img src={prog.logo} alt="" className="h-6 object-contain brightness-0 invert" />
//               )}
//             </div>
//             <h3 className="text-2xl font-bold text-white mb-3 leading-tight">{prog.title}</h3>
//             <p className="text-white/70 text-sm leading-relaxed mb-5">{prog.description}</p>
//           </div>

//           {prog.quote && (
//             <div
//               className="pl-3 py-2 pr-3 rounded-lg mb-5"
//               style={{
//                 borderLeft: `2px solid ${prog.accent}70`,
//                 background: "rgba(255,255,255,0.05)",
//                 backdropFilter: "blur(8px)",
//               }}
//             >
//               <p className="text-white/75 text-xs italic">"{prog.quote}"</p>
//               {prog.author && (
//                 <p className="text-white/50 text-[10px] font-semibold uppercase tracking-wider mt-1">
//                   — {prog.author}
//                 </p>
//               )}
//             </div>
//           )}

//           <div className="flex items-center justify-between mt-auto">
//             <a
//               href={prog.href}
//               className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:underline"
//             >
//               {prog.cta || "Explore Now"}
//               <ArrowRight size={14} />
//             </a>
//             <a
//               href={prog.href}
//               className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-105"
//               style={{
//                 background: "rgba(255,255,255,0.1)",
//                 backdropFilter: "blur(8px)",
//                 border: "1px solid rgba(255,255,255,0.18)",
//               }}
//               aria-label={`Open ${prog.title}`}
//             >
//               <ArrowUpRight size={15} className="text-white" />
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="flex justify-center items-center gap-2 mt-1">
//         {PROGRAMS.map((p, i) => (
//           <button
//             key={p.id}
//             onClick={() => switchTo(i)}
//             aria-label={`Go to ${p.title}`}
//             className="h-1.5 rounded-full transition-all duration-300"
//             style={{
//               width: i === active ? 24 : 6,
//               backgroundColor: i === active ? p.accent : "rgba(0,0,0,0.15)",
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function ProgramsOverview() {
//   const [activeDesktop, setActiveDesktop] = useState(0);
//   const [activeMobile, setActiveMobile] = useState(0);

//   // First box starts active and stays until user hovers another
//   const handleActivate = useCallback((idx: number) => {
//     setActiveDesktop(idx);
//   }, []);

//   return (
//     <section className="w-full bg-white py-16 md:py-24 px-4 md:px-8">
//       <div className="max-w-7xl mx-auto">
        
//         {/* HEADER */}
//         <motion.div
//           className="text-center mb-12 md:mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-80px" }}
//           transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//         >
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
//             Every Program. One Mission.
//           </h2>
//           <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
//             Whether you're a parent, a teenager, a church, or a school — there is a seat at the table for you.
//           </p>
//         </motion.div>

//         {/* DESKTOP CARDS - No auto-rotate */}
//         <motion.div
//           className="hidden md:flex gap-3 rounded-3xl"
//           style={{ height: "520px" }}
//           role="region"
//           aria-label="Programs carousel"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-60px" }}
//           transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
//         >
//           {PROGRAMS.map((program, idx) => (
//             <DesktopCard
//               key={program.id}
//               program={program}
//               isActive={activeDesktop === idx}
//               onActivate={() => handleActivate(idx)}
//             />
//           ))}
//         </motion.div>

//         {/* MOBILE */}
//         <div className="md:hidden">
//           <MobileView active={activeMobile} setActive={setActiveMobile} />
//         </div>

//       </div>
//     </section>
//   );
// }


"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { PROGRAMS, type Program } from "../../data/constants";
import { LightRays } from "@/components/ui/light-rays";

function ProgramIcon({
  program,
  size = 20,
  className = "",
}: {
  program: Program;
  size?: number;
  className?: string;
}) {
  if (program.logo) {
    return (
      <img src={program.logo} alt={program.title} width={size} height={size} className={className} />
    );
  }
  const { Icon } = program;
  return <Icon size={size} className={className} />;
}

function DesktopCard({
  program,
  isActive,
  onActivate,
}: {
  program: Program;
  isActive: boolean;
  onActivate: () => void;
}) {
  return (
    <div
      className={[
        "relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
        isActive ? "flex-[5]" : "flex-[0.8] hover:flex-[1]",
      ].join(" ")}
      style={{
        minWidth: 0,
        height: "520px",
        border: isActive
          ? "1px solid rgba(255,255,255,0.25)"
          : "1px solid rgba(0,0,0,0.06)",
        boxShadow: isActive
          ? "0 0 0 1px rgba(255,255,255,0.1), 0 32px 64px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.2)"
          : "0 8px 24px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.6)",
      }}
      onMouseEnter={onActivate}
      onClick={onActivate}
      role="button"
      tabIndex={0}
      aria-selected={isActive}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onActivate()}
    >
      {/* LIGHT RAYS BG - High visibility blend */}
      {isActive && (
        <LightRays
          count={10}
          color="rgba(255,255,255,0.5)"
          blur={30}
          speed={10}
          length="100%"
          className="z-[2]"
        />
      )}

      {program.bgImage && (
        <div className="absolute inset-0 transition-all duration-500 z-0">
          <img
            src={program.bgImage}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              isActive ? "scale-105" : "scale-100"
            }`}
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
          <div
            className="absolute inset-x-0 top-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)" }}
          />
          <div
            className="absolute inset-y-0 left-0 w-px"
            style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.2), transparent 60%)" }}
          />
        </div>
      )}

      {!program.bgImage && (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 to-gray-800" />
      )}

      {/* EXPANDED */}
      <div
        className={[
          "relative z-10 h-full p-8 flex flex-col justify-between transition-all duration-300",
          isActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none absolute inset-0",
        ].join(" ")}
      >
        <div>
          {program.logo ? (
            <img src={program.logo} alt="" className="h-8 w-auto object-contain mb-6 brightness-0 invert" />
          ) : (
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg"
              style={{ backgroundColor: "#0B3FB4", boxShadow: "0 4px 16px rgba(11, 63, 180, 0.3)" }}
            >
              <ProgramIcon program={program} size={22} className="text-white" />
            </div>
          )}

          <span
            className="inline-block text-[11px] font-bold tracking-wider uppercase rounded-full px-3 py-1 mb-4"
            style={{ backgroundColor: program.accentLight, color: program.accentText }}
          >
            {program.tag}
          </span>

          <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight max-w-2xl mb-4">
            {program.title}
          </h3>
          <p className="text-white/85 text-base leading-relaxed max-w-lg mb-6">
            {program.description}
          </p>
        </div>

        <div className="mt-auto flex flex-col gap-6">
          {program.quote && (
            <div
              className="max-w-3xl pl-4 py-3 pr-4 rounded-xl"
              style={{
                borderLeft: "2px solid rgba(11, 63, 180, 0.6)",
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(8px)",
              }}
            >
              <p className="text-white/90 text-sm font-medium italic leading-relaxed mb-1">
                "{program.quote}"
              </p>
              {program.author && (
                <p className="text-white/65 text-xs font-semibold uppercase tracking-wider">
                  — {program.author}
                </p>
              )}
            </div>
          )}

          <div className="flex items-center justify-between pt-2">
            <a
              href={program.href}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white hover:underline group"
              onClick={(e) => e.stopPropagation()}
            >
              {program.cta || "Learn More"}
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <a
          href={program.href}
          className="absolute bottom-6 right-6 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
          style={{
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.25)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2)",
            color: "white",
          }}
          onClick={(e) => e.stopPropagation()}
          aria-label={`Open ${program.title}`}
        >
          <ArrowUpRight size={16} />
        </a>
      </div>

      {/* COLLAPSED */}
      <div
        className={[
          "absolute inset-0 z-10 py-8 px-4 flex flex-col items-center justify-between transition-all duration-300",
          isActive ? "opacity-0 pointer-events-none" : "opacity-100",
        ].join(" ")}
      >
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md"
          style={{ backgroundColor: "#0B3FB4", boxShadow: "0 4px 12px rgba(11, 63, 180, 0.4)" }}
        >
          <ProgramIcon program={program} size={22} className="text-white" />
        </div>
        <div className="font-bold text-white/70 tracking-widest text-xs uppercase select-none [writing-mode:vertical-rl] rotate-180 my-auto">
          {program.shortLabel || program.tag.split(" ").pop()}
        </div>
        <div className="w-1.5 h-1.5 rounded-full opacity-50" style={{ backgroundColor: "#0B3FB4" }} />
      </div>
    </div>
  );
}

function MobileView({
  active,
  setActive,
}: {
  active: number;
  setActive: (i: number) => void;
}) {
  const [fading, setFading] = useState(false);
  const [displayed, setDisplayed] = useState(active);

  const switchTo = useCallback(
    (idx: number) => {
      if (idx === active) return;
      setFading(true);
      setTimeout(() => {
        setActive(idx);
        setDisplayed(idx);
        setFading(false);
      }, 200);
    },
    [active, setActive]
  );

  useEffect(() => {
    if (!fading) setDisplayed(active);
  }, [active, fading]);

  const prog = PROGRAMS[displayed];
  const [touchStart, setTouchStart] = useState(0);

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) switchTo((active + 1) % PROGRAMS.length);
      else switchTo((active - 1 + PROGRAMS.length) % PROGRAMS.length);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      
      {/* PERFECTLY SPREAD OUT TOGGLE ICONS WITH PREMIUM DARK BLUE BACKGROUND */}
      <div
        className="w-full flex items-center justify-between px-2 mb-2"
        role="tablist"
      >
        {PROGRAMS.map((p, idx) => (
          <button
            key={p.id}
            onClick={() => switchTo(idx)}
            className={`flex-1 flex flex-col items-center gap-2.5 transition-all duration-200 focus:outline-none ${
              idx === active ? "opacity-100 scale-105" : "opacity-40 hover:opacity-70"
            }`}
            role="tab"
            aria-selected={idx === active}
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center shadow-md transition-all duration-200"
              style={{ backgroundColor: idx === active ? "#0B3FB4" : "#f3f4f6" }}
            >
              <ProgramIcon
                program={p}
                size={24}
                className={idx === active ? "text-white" : "text-gray-500"}
              />
            </div>
            <span className="text-xs font-semibold text-gray-500 text-center tracking-tight">
              {p.shortLabel}
            </span>
          </button>
        ))}
      </div>

      {/* MOBILE DISPLAY CARD - Unchanged Layout & Radius */}
      <div
        className={`relative rounded-3xl overflow-hidden min-h-[440px] transition-opacity duration-200 ${
          fading ? "opacity-0" : "opacity-100"
        }`}
        style={{
          border: "1px solid rgba(0,0,0,0.08)",
          boxShadow: "0 24px 48px rgba(0,0,0,0.2)",
        }}
        onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
        onTouchEnd={handleTouchEnd}
      >
        <LightRays
          count={8}
          color="rgba(255,255,255,0.4)"
          blur={25}
          speed={12}
          length="100%"
          className="z-[2]"
        />

        {prog.bgImage && (
          <div className="absolute inset-0 z-0">
            <img src={prog.bgImage} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/15" />
          </div>
        )}

        {!prog.bgImage && (
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 to-gray-800" />
        )}

        <div className="relative z-10 h-full p-6 flex flex-col justify-between min-h-[440px]">
          <div>
            <div className="flex items-center justify-between mb-5">
              <span
                className="text-[10px] font-bold tracking-wider uppercase rounded-full px-3 py-1 text-white bg-[#0B3FB4]"
              >
                {prog.tag}
              </span>
              {prog.logo && (
                <img src={prog.logo} alt="" className="h-6 object-contain brightness-0 invert" />
              )}
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 leading-tight">{prog.title}</h3>
            <p className="text-white/75 text-sm leading-relaxed mb-5">{prog.description}</p>
          </div>

          {prog.quote && (
            <div
              className="pl-3 py-2 pr-3 rounded-lg mb-5"
              style={{
                borderLeft: "2px solid rgba(11, 63, 180, 0.5)",
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(8px)",
              }}
            >
              <p className="text-white/80 text-xs italic">"{prog.quote}"</p>
              {prog.author && (
                <p className="text-white/55 text-[10px] font-semibold uppercase tracking-wider mt-1">
                  — {prog.author}
                </p>
              )}
            </div>
          )}

          <div className="flex items-center justify-between mt-auto">
            <a
              href={prog.href}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:underline"
            >
              {prog.cta || "Explore Now"}
              <ArrowRight size={14} />
            </a>
            <a
              href={prog.href}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-105"
              style={{
                background: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
              aria-label={`Open ${prog.title}`}
            >
              <ArrowUpRight size={15} className="text-white" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-2 mt-1">
        {PROGRAMS.map((p, i) => (
          <button
            key={p.id}
            onClick={() => switchTo(i)}
            aria-label={`Go to ${p.title}`}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{
              width: i === active ? 24 : 6,
              backgroundColor: i === active ? "#0B3FB4" : "rgba(0,0,0,0.1)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function ProgramsOverview() {
  const [activeDesktop, setActiveDesktop] = useState(0);
  const [activeMobile, setActiveMobile] = useState(0);

  const handleActivate = useCallback((idx: number) => {
    setActiveDesktop(idx);
  }, []);

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* CENTERED PREMIUM DARK H1 HEADER WITH 2-LINE DESKTOP DESCRIPTION */}
        <motion.div
          className="w-full flex flex-col items-center text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.4, ease: "power4.out" }}
        >
          <h1 className="w-full max-w-4xl text-4xl xs:text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.06em] leading-[1.05] text-gray-900 select-none mb-6">
            Every Program. One Mission.
          </h1>
          <p className="text-gray-500 text-sm md:text-base font-normal leading-relaxed max-w-xl mx-auto">
            Whether you're a parent, a teenager, a church, or a school — there is a seat at the table for you.
          </p>
        </motion.div>

        {/* DESKTOP CARDS */}
        <motion.div
          className="hidden md:flex gap-3 rounded-3xl"
          style={{ height: "520px" }}
          role="region"
          aria-label="Programs carousel"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {PROGRAMS.map((program, idx) => (
            <DesktopCard
              key={program.id}
              program={program}
              isActive={activeDesktop === idx}
              onActivate={() => handleActivate(idx)}
            />
          ))}
        </motion.div>

        {/* MOBILE */}
        <div className="md:hidden">
          <MobileView active={activeMobile} setActive={setActiveMobile} />
        </div>

      </div>
    </section>
  );
}