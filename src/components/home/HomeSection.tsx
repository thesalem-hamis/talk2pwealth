// import { useState, useEffect } from "react";
// import logo from "../../assets/mainlogo.png";
// import { NAV_LINKS, MOBILE_LINKS } from "../../data/constants";
// import { X, ChevronDown, ArrowRight } from "lucide-react";
// import heroBg from "../../assets/hero.jpeg";

// export default function HeroSection() {
//   const [open, setOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//   const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const programsLink = NAV_LINKS.find((l) => l.name === "Programs");

//   return (
//     <>
//       {/* PAGE WRAPPER - No extra padding to avoid increasing height */}
//       <section className="bg-white p-0 m-0">

//         {/* MAIN DARK CARD — fixed at 130vh to display image fully */}
//         <div
//           className="relative overflow-hidden rounded-[28px] w-full h-[110vh] bg-[#080808]"
//           style={{
//             border: "1px solid rgba(180,180,180,0.25)",
//             boxShadow:
//               "0 0 0 1px rgba(200,200,200,0.08), 0 0 40px 0 rgba(160,160,160,0.12)",
//           }}
//         >
//           {/* BACKGROUND IMAGE — focused on head/top part */}
//           <img
//             src={heroBg}
//             alt=""
//             aria-hidden="true"
//             className="absolute inset-0 z-0 w-full h-full object-cover object-top"
//             style={{ objectPosition: "center 10%" }}
//           />

//           {/* OVERLAY 1 — diagonal dark gradient */}
//           <div
//             className="absolute inset-0 z-[1]"
//             style={{
//               background:
//                 "linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.75) 100%)",
//             }}
//           />

//           {/* OVERLAY 2 — radial fade from bottom */}
//           <div
//             className="absolute inset-0 z-[1]"
//             // style={{
//             //   background:
//             //     "radial-gradient(ellipse 80% 60% at 50% 0%, transparent 30%, rgba(8,8,8,0.9) 100%)",
//             // }}
//           />

//           {/* ── NAVBAR (Moved up slightly via padding optimization) ───────────────── */}
//           <div className="absolute top-0 left-0 right-0 z-50 pt-2 md:pt-3 px-4 md:px-6">
//             <nav
//               className={`
//                 mx-auto max-w-7xl rounded-full border transition-all duration-300
//                 ${scrolled
//                   ? "bg-black/40 backdrop-blur-2xl border-white/20 shadow-lg"
//                   : "bg-white/10 backdrop-blur-md border-white/15"}
//               `}
//             >
//               <div className="flex items-center justify-between h-[64px] px-6">

//                 {/* LOGO */}
//                 <a href="/" className="shrink-0">
//                   <img
//                     src={logo}
//                     alt="Logo"
//                     className="h-8 lg:h-9 w-auto object-contain brightness-0 invert"
//                   />
//                 </a>

//                 {/* RIGHT SIDE */}
//                 <div className="flex items-center gap-6 lg:gap-8">

//                   {/* DESKTOP LINKS */}
//                   <ul className="hidden md:flex items-center gap-6 lg:gap-8 list-none m-0 p-0">
//                     {NAV_LINKS.map((link) => (
//                       <li
//                         key={link.name}
//                         className="relative"
//                         onMouseEnter={() => link.dropdown && setOpenDropdown(link.name)}
//                         onMouseLeave={() => setOpenDropdown(null)}
//                       >
//                         <a
//                           href={link.href}
//                           className="flex items-center gap-1 text-[15px] font-medium text-white/90 hover:text-white transition-colors whitespace-nowrap"
//                         >
//                           {link.name}
//                           {link.dropdown && (
//                             <ChevronDown size={14} className="text-white/50" />
//                           )}
//                         </a>

//                         {/* DROPDOWN */}
//                         {link.dropdown && openDropdown === link.name && (
//                           <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[480px] rounded-xl border border-white/10 bg-[#111111]/95 backdrop-blur-xl shadow-2xl overflow-hidden">
//                             <div className="p-3 grid grid-cols-2 gap-1">
//                               {link.dropdown.map((item, idx) => {
//                                 const Icon = item.icon;
//                                 return (
//                                   <a
//                                     key={idx}
//                                     href={item.href}
//                                     className="flex gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition items-start"
//                                   >
//                                     {Icon && (
//                                       <div className="flex items-center justify-center w-8 h-8 rounded-md bg-white/10 shrink-0 mt-0.5">
//                                         <Icon className="w-4 h-4 text-white/70" />
//                                       </div>
//                                     )}
//                                     <div>
//                                       <h4 className="text-white text-sm font-semibold leading-tight">
//                                         {item.title}
//                                       </h4>
//                                       <p className="text-white/40 text-xs mt-0.5 leading-snug">
//                                         {item.description}
//                                       </p>
//                                     </div>
//                                   </a>
//                                 );
//                               })}
//                             </div>
//                           </div>
//                         )}
//                       </li>
//                     ))}
//                   </ul>

//                   {/* DESKTOP CTA */}
//                   <a
//                     href="#book"
//                     className="
//                       hidden md:inline-flex items-center gap-2.5
//                       pl-5 pr-2 py-1.5 rounded-full
//                       bg-[#0052FF] text-white font-semibold text-sm
//                       hover:bg-[#0041cc] transition-all duration-300
//                       shadow-lg shadow-[#0052FF]/20 group
//                     "
//                   >
//                     Talk To Pwealth
//                     <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/10">
//                       <ArrowRight
//                         size={14}
//                         className="transition-all duration-300 group-hover:translate-x-0.5"
//                       />
//                     </span>
//                   </a>

//                   {/* MOBILE HAMBURGER */}
//                   <button
//                     onClick={() => setOpen(true)}
//                     className="md:hidden flex flex-col gap-[5px] p-2 rounded-full bg-white/10 border border-white/10"
//                     aria-label="Open menu"
//                   >
//                     <span className="block w-6 h-[2px] bg-white rounded-full" />
//                     <span className="block w-4 h-[2px] bg-white rounded-full ml-auto" />
//                     <span className="block w-5 h-[2px] bg-white rounded-full" />
//                   </button>

//                 </div>
//               </div>
//             </nav>
//           </div>
//           {/* ── END NAVBAR ───────────────────────────────────── */}


//           {/* HERO CONTENT — vertically centered */}
//           <div className="absolute inset-0 z-10 flex items-center px-6 lg:px-15">
//             <div className="max-w-[750px] w-full">
//               {/* Adjusted typography for a tighter viewport layout scale on mobile viewports */}
//               <h1
//                 className="
//                   text-white font-medium mt-1 md:mt-10
//                   text-[12vw] xs:text-5xl sm:text-6xl md:text-6xl lg:text-7xl
//                   leading-[1.05] tracking-[-0.08em]
//                 "
//               >
//                 Nigeria's Voice for   
//                 <br />
//                 Teens, Parents & Purposeful Families.
//               </h1>

//               <p className="mt-6 text-white/70 max-w-md text-sm md:text-base leading-relaxed">
//                 For over 25 years, Pwealth has stood at the intersection of faith, family, 
//                 and teen development — equipping parents to parent with wisdom and helping teenagers discover who they were created to be.
//               </p>

//               <div className="mt-8">
//                 <button
//                   className="
//                     inline-flex items-center gap-3
//                     px-7 py-3.5 rounded-xl
//                     bg-[#0052FF] text-white font-semibold text-sm md:text-base
//                     transition-all duration-300
//                     hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/10
//                   "
//                 >
//                   Talk to Pwealth 
//                   <ArrowRight size={18} />
//                 </button>
//               </div>

//               <div className="mt-4 md:mt-7 text-white/70 font-light">
//                 <p>....Faith, Family, Legecy  </p>
//               </div>
              
//             </div>
//           </div>

//         </div>
//       </section>


//       {/* ── MOBILE MENU ──────────────────────────────────────── */}
//       <div
//         className={`
//           fixed inset-0 z-[999] bg-black/60 backdrop-blur-2xl
//           transition-all duration-300 ease-out
//           ${open
//             ? "opacity-100 pointer-events-auto"
//             : "opacity-0 pointer-events-none"}
//         `}
//       >
//         {/* CLOSE */}
//         <button
//           onClick={() => setOpen(false)}
//           className="absolute top-6 right-6 text-white p-2 rounded-full bg-white/10 border border-white/10 z-50"
//         >
//           <X size={24} />
//         </button>

//         <div className="h-full flex flex-col justify-between pt-24 px-6 pb-10 max-w-md mx-auto">
//           <ul className="flex flex-col gap-2 list-none m-0 p-0 overflow-y-auto pr-1">
//             {MOBILE_LINKS.map((link, i) => (
//               <li
//                 key={link.name}
//                 style={{
//                   transition: `all 400ms ease ${i * 40}ms`,
//                   transform: open ? "translateY(0)" : "translateY(20px)",
//                   opacity: open ? 1 : 0,
//                 }}
//               >
//                 {link.name === "Programs" ? (
//                   <div className="rounded-2xl bg-white/5 border border-white/5 p-4 mb-2">
//                     <button
//                       onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
//                       className="flex items-center justify-between w-full text-white"
//                     >
//                       <span className="text-2xl font-semibold tracking-tight">
//                         Programs
//                       </span>
//                       <ChevronDown
//                         size={20}
//                         className={`transition-transform duration-300 text-white/60 ${
//                           mobileProgramsOpen ? "rotate-180" : ""
//                         }`}
//                       />
//                     </button>

//                     {mobileProgramsOpen && (
//                       <div className="mt-3 flex flex-col gap-2 pl-2 border-l border-white/10">
//                         {programsLink?.dropdown?.map((item, idx) => {
//                           const Icon = item.icon;
//                           return (
//                             <a
//                               key={idx}
//                               href={item.href}
//                               onClick={() => setOpen(false)}
//                               className="flex items-center gap-3 py-1.5 group"
//                             >
//                               {Icon && (
//                                 <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 shrink-0">
//                                   <Icon className="w-4 h-4 text-white/70" />
//                                 </div>
//                               )}
//                               <span className="text-white/80 text-base font-medium">
//                                 {item.title}
//                               </span>
//                             </a>
//                           );
//                         })}
//                       </div>
//                     )}
//                   </div>
//                 ) : (
//                   <a
//                     href={link.href}
//                     onClick={() => setOpen(false)}
//                     className="block rounded-2xl bg-white/5 border border-white/5 px-5 py-4 text-white text-2xl font-semibold tracking-tight mb-2 hover:bg-white/10 transition-colors"
//                   >
//                     {link.name}
//                   </a>
//                 )}
//               </li>
//             ))}
//           </ul>

//           {/* MOBILE CTA */}
//           <div
//             style={{
//               transition: `all 400ms ease ${MOBILE_LINKS.length * 40}ms`,
//               transform: open ? "translateY(0)" : "translateY(20px)",
//               opacity: open ? 1 : 0,
//             }}
//           >
//             <a
//               href="#book"
//               onClick={() => setOpen(false)}
//               className="
//                 inline-flex items-center gap-3
//                 py-4 rounded-full
//                 bg-[#0052FF] text-white font-semibold text-base
//                 w-full justify-center shadow-lg shadow-[#0052FF]/20
//               "
//             >
//               Talk To Pwealth
//               <ArrowRight size={18} />
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../../assets/mainlogo.png";
import { NAV_LINKS, MOBILE_LINKS } from "../../data/constants";
import { X, ChevronDown, ArrowRight } from "lucide-react";
import heroBg from "../../assets/hero.jpeg";
import { TypingAnimation } from "@/components/ui/typing-animation";

export default function HeroSection() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const programsLink = NAV_LINKS.find((l) => l.name === "Programs");

  // Split h1 into words for stagger
  const h1Lines = [
    "Nigeria's Voice",
    "for Teens, Parents",
    "& Purposeful Families.",
  ];

  return (
    <>
      <section className="bg-white p-0 m-0">
        <div
          className="relative overflow-hidden rounded-none w-full h-[110vh] bg-[#080808] border border-zinc-200/20"
          style={{ boxShadow: "0 0 40px 0 rgba(160,160,160,0.05)" }}
        >
          {/* BG IMAGE */}
          <img
            src={heroBg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 z-0 w-full h-full object-cover object-top"
            style={{ objectPosition: "center 10%" }}
          />

          {/* OVERLAY */}
          <div
            className="absolute inset-0 z-[1]"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.75) 100%)",
            }}
          />

          {/* NAVBAR */}
          <div className="absolute top-0 left-0 right-0 z-50 pt-0 px-0">
            <nav
              className={`mx-auto w-full border-b transition-all duration-300 rounded-none ${
                scrolled
                  ? "bg-black/60 backdrop-blur-2xl border-white/10 shadow-md"
                  : "bg-white/5 backdrop-blur-md border-white/10"
              }`}
            >
              <div className="flex items-center justify-between h-[72px] px-6 max-w-7xl mx-auto">
                <a href="/" className="shrink-0">
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-8 lg:h-9 w-auto object-contain brightness-0 invert"
                  />
                </a>

                <div className="flex items-center gap-6 lg:gap-8">
                  <ul className="hidden md:flex items-center gap-6 lg:gap-8 list-none m-0 p-0">
                    {NAV_LINKS.map((link) => (
                      <li
                        key={link.name}
                        className="relative h-[72px] flex items-center"
                        onMouseEnter={() => link.dropdown && setOpenDropdown(link.name)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <a
                          href={link.href}
                          className="flex items-center gap-1 text-[14px] font-medium uppercase tracking-wider text-white/80 hover:text-white transition-colors whitespace-nowrap"
                        >
                          {link.name}
                          {link.dropdown && <ChevronDown size={14} className="text-white/40" />}
                        </a>

                        {link.dropdown && openDropdown === link.name && (
                          <div className="absolute top-full left-1/2 -translate-x-1/2 w-[480px] rounded-none border border-white/10 bg-[#111111] backdrop-blur-xl shadow-xl overflow-hidden">
                            <div className="p-4 grid grid-cols-2 gap-2">
                              {link.dropdown.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                  <a
                                    key={idx}
                                    href={item.href}
                                    className="flex gap-3 px-3 py-3 hover:bg-white/5 transition items-start"
                                  >
                                    {Icon && (
                                      <div className="flex items-center justify-center w-8 h-8 bg-white/5 shrink-0 mt-0.5">
                                        <Icon className="w-4 h-4 text-white/60" />
                                      </div>
                                    )}
                                    <div>
                                      <h4 className="text-white text-sm font-semibold leading-tight tracking-tight">{item.title}</h4>
                                      <p className="text-white/40 text-[11px] mt-1 leading-normal">{item.description}</p>
                                    </div>
                                  </a>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#book"
                    className="hidden md:inline-flex items-center gap-3 px-6 py-3.5 rounded-none border-0 bg-[#0052FF] text-white font-semibold text-xs tracking-wider uppercase hover:bg-[#0041cc] transition-all duration-300 group select-none"
                  >
                    <span>Talk To Pwealth</span>
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </a>

                  <button
                    onClick={() => setOpen(true)}
                    className="md:hidden flex flex-col gap-[5px] p-2.5 rounded-none bg-white/5"
                    aria-label="Open menu"
                  >
                    <span className="block w-6 h-[2px] bg-white" />
                    <span className="block w-4 h-[2px] bg-white ml-auto" />
                    <span className="block w-5 h-[2px] bg-white" />
                  </button>
                </div>
              </div>
            </nav>
          </div>

          {/* ── HERO CONTENT ── */}
          <div className="absolute inset-0 z-10 flex items-center px-6 md:px-12 lg:px-16">
            <div className="w-full max-w-7xl mx-auto text-left">
              <div className="w-full">

                {/* H1 — Framer Motion line-by-line stagger */}
                <h1
                  className="
                    text-white font-bold
                    mt-24 xs:mt-28 sm:mt-32 md:mt-32 lg:mt-40
                    text-[10vw] xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                    leading-[1.1] md:leading-[1.05] tracking-[-0.05em]
                    max-w-none md:max-w-2xl lg:max-w-3xl
                  "
                >
                  {h1Lines.map((line, i) => (
                    <motion.span
                      key={i}
                      className="block overflow-hidden"
                      initial={{ opacity: 0, y: 56 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.9,
                        delay: 0.2 + i * 0.14,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      {line}
                    </motion.span>
                  ))}
                </h1>

                {/* Subtext */}
                <motion.p
                  className="mt-6 text-white/70 max-w-xl text-sm md:text-base leading-relaxed font-normal"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  For over 25 years, Pwealth has stood at the intersection of faith, family,
                  and teen development — equipping parents to parent with wisdom and helping teenagers discover who they were created to be.
                </motion.p>

                {/* CTA */}
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                  <button className="inline-flex items-center gap-3 px-8 py-4 rounded-none border-0 bg-[#0052FF] text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-[#0041cc] active:scale-98">
                    <span>Talk to Pwealth</span>
                    <ArrowRight size={14} className="translate-y-[-0.5px]" />
                  </button>
                </motion.div>

                {/* Typing animation */}
                <motion.div
                  className="mt-12 md:mt-16 h-6 text-white font-serif font-bold italic text-sm sm:text-base tracking-wide select-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <TypingAnimation>... Faith, Family, Legacy</TypingAnimation>
                </motion.div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[999] bg-black/75 backdrop-blur-xl transition-all duration-300 ease-out rounded-none ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 text-white p-3 rounded-none bg-white/5 z-50"
        >
          <X size={20} />
        </button>

        <div className="h-full flex flex-col justify-between pt-24 px-6 pb-10 max-w-md mx-auto">
          <ul className="flex flex-col gap-3 list-none m-0 p-0 overflow-y-auto pr-1">
            {MOBILE_LINKS.map((link, i) => (
              <li
                key={link.name}
                style={{
                  transition: `all 300ms ease ${i * 30}ms`,
                  transform: open ? "translateY(0)" : "translateY(15px)",
                  opacity: open ? 1 : 0,
                }}
              >
                {link.name === "Programs" ? (
                  <div className="rounded-none bg-white/5 p-4 mb-1">
                    <button
                      onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                      className="flex items-center justify-between w-full text-white"
                    >
                      <span className="text-xl font-bold uppercase tracking-wider text-sm">Programs</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 text-white/50 ${mobileProgramsOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {mobileProgramsOpen && (
                      <div className="mt-4 flex flex-col gap-3 pl-3 border-l border-white/20">
                        {programsLink?.dropdown?.map((item, idx) => {
                          const Icon = item.icon;
                          return (
                            <a key={idx} href={item.href} onClick={() => setOpen(false)} className="flex items-center gap-3 py-1">
                              {Icon && (
                                <div className="flex items-center justify-center w-7 h-7 bg-white/10 shrink-0">
                                  <Icon className="w-3.5 h-3.5 text-white/60" />
                                </div>
                              )}
                              <span className="text-white/80 text-sm font-medium">{item.title}</span>
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-none bg-white/5 px-5 py-4 text-white text-base font-bold uppercase tracking-wider mb-1 hover:bg-white/10 transition-colors"
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>

          <div
            style={{
              transition: `all 300ms ease ${MOBILE_LINKS.length * 30}ms`,
              transform: open ? "translateY(0)" : "translateY(15px)",
              opacity: open ? 1 : 0,
            }}
          >
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-3 py-4 rounded-none border-0 bg-[#0052FF] text-white font-semibold text-xs tracking-wider uppercase w-full justify-center shadow-md"
            >
              <span>Talk To Pwealth</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}