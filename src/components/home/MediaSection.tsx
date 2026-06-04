// import React, { forwardRef, useRef, useEffect } from "react"
// import { FaSpotify, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa6"
// import { Radio } from "lucide-react"
// import { gsap } from "gsap"
// import { AnimatedBeam } from "@/components/ui/animated-beam"
// import { AnimatedList } from "@/components/ui/animated-list"
// import headshot from "../../assets/headshot.jpeg"
// import aboutBg from "../../assets/hero.jpeg" // Ensure your asset path matches

// interface Platform {
//   name: string
//   desc: string
//   href: string
//   icon: React.ComponentType<{ className?: string }>
//   label: string
// }

// const platforms: Platform[] = [
//   {
//     name: "Super FM Lagos",
//     desc: "Weekly Radio Programme",
//     href: "https://superfm.com.ng",
//     icon: Radio,
//     label: "Super FM",
//   },
//   {
//     name: "Spotify",
//     desc: "Growing Podcast Library",
//     href: "https://spotify.com",
//     icon: FaSpotify,
//     label: "Spotify",
//   },
//   {
//     name: "YouTube",
//     desc: "Masterclass Replays & Teachings",
//     href: "https://youtube.com/@talk2pwealth",
//     icon: FaYoutube,
//     label: "YouTube",
//   },
//   {
//     name: "Instagram",
//     desc: "Daily Encouragement & Insights",
//     href: "https://instagram.com/@talk2pwealth",
//     icon: FaInstagram,
//     label: "Instagram",
//   },
//   {
//     name: "Facebook",
//     desc: "Community & Conversations",
//     href: "https://facebook.com/talk2pwealth",
//     icon: FaFacebook,
//     label: "Facebook",
//   },
// ]

// interface NodeProps {
//   className?: string
//   children?: React.ReactNode
//   href: string
//   label: string
// }

// const SocialNode = forwardRef<HTMLAnchorElement, NodeProps>(
//   ({ className = "", children, href, label }, ref) => (
//     <a
//       ref={ref}
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       aria-label={label}
//       className={["z-10 flex flex-col items-center gap-1.5 group", className].join(" ")}
//     >
//       <div
//         className="
//           flex items-center justify-center
//           w-14 h-14 rounded-full
//           bg-[#060606]/90 backdrop-blur-md
//           border border-white/10 shadow-2xl
//           transition-all duration-300
//           group-hover:border-white group-hover:scale-110 group-hover:shadow-white/5
//         "
//       >
//         {children}
//       </div>
//       <span className="text-[10px] font-semibold text-slate-400 tracking-wide group-hover:text-white transition-colors duration-200">
//         {label}
//       </span>
//     </a>
//   )
// )
// SocialNode.displayName = "SocialNode"

// export function MediaSection() {
//   const sectionRef = useRef<HTMLDivElement>(null)
//   const headingRef = useRef<HTMLHeadingElement>(null)
  
//   const containerRef = useRef<HTMLDivElement>(null)
//   const centreRef = useRef<HTMLDivElement>(null)

//   const superFMRef = useRef<HTMLAnchorElement>(null)
//   const spotifyRef = useRef<HTMLAnchorElement>(null)
//   const facebookRef = useRef<HTMLAnchorElement>(null)
//   const youtubeRef = useRef<HTMLAnchorElement>(null)
//   const instagramRef = useRef<HTMLAnchorElement>(null)

//   // GSAP reveal text animation setup
//   useEffect(() => {
//     if (headingRef.current) {
//       gsap.fromTo(
//         headingRef.current,
//         { opacity: 0, y: 30, filter: "blur(4px)" },
//         { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2, ease: "power4.out", delay: 0.2 }
//       )
//     }
//   }, [])

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full bg-[#060606] text-white py-12 md:py-24 overflow-hidden flex items-center justify-center min-h-[100vh] px-6 md:px-12 lg:px-20"
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

//       {/* Main Grid Content Area */}
//       <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">

//         {/* ── Left Column: Headlines & Animated List Activity Stream ── */}
//         <div className="flex flex-col gap-8 order-last lg:order-first">
//           <div className="flex flex-col gap-4">
//             <p className="text-white/60 text-xs font-bold tracking-[0.25em] uppercase">
//               Heard on Air. Watched Online. Felt in the Room.
//             </p>

//             {/* Expansive, massive white typography with GSAP hooking */}
//             <h1 
//               ref={headingRef}
//               className="text-5xl font-black leading-[1.05] tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl"
//             >
//               Wherever <br />
//               You Are, <br />
//               Find Talk2Pwealth
//             </h1>

//             <p className="text-slate-400 text-base md:text-lg max-w-lg leading-relaxed mt-2">
//               Weekly wisdom on wealth, faith, and purpose — across every platform you already love.
//             </p>
//           </div>

//           {/* Dynamic Animated List Platform Stream (Container border fully removed) */}
//           <div className="max-w-lg w-full h-[280px] overflow-hidden relative p-1">
//             <AnimatedList delay={1800}>
//               {platforms.map((platform, idx) => {
//                 const IconComponent = platform.icon
//                 return (
//                   <div
//                     key={idx}
//                     className="flex items-center gap-5 p-4 rounded-xl border border-white/[0.03] bg-white/[0.01] backdrop-blur-md transition-all duration-300 hover:border-white/10"
//                   >
//                     {/* Icon container with thick gray framing border */}
//                     <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#060606] border-2 border-slate-800 text-white shadow-xl">
//                       <IconComponent className="h-4 w-4" />
//                     </div>
//                     <div className="flex flex-col min-w-0">
//                       <span className="text-sm font-bold text-white tracking-tight">
//                         {platform.name}
//                       </span>
//                       <span className="text-xs text-slate-400 truncate mt-0.5">
//                         {platform.desc}
//                       </span>
//                     </div>
//                   </div>
//                 )
//               })}
//             </AnimatedList>
            
//             <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#060606] to-transparent pointer-events-none" />
//           </div>
//         </div>

//         {/* ── Right Column: Dynamic Beam Framework (Container border fully removed) ── */}
//         <div
//           ref={containerRef}
//           className="relative flex items-center justify-center w-full h-[520px] order-first lg:order-last"
//         >
//           {/* Column 1: Left Anchor Elements */}
//           <SocialNode ref={superFMRef} href="https://superfm.com.ng" label="Super FM" className="absolute top-[8%] left-[4%]">
//             <Radio className="w-5 h-5 text-white" />
//           </SocialNode>

//           <SocialNode ref={spotifyRef} href="https://spotify.com" label="Spotify" className="absolute top-[50%] -translate-y-1/2 left-[0%]">
//             <FaSpotify className="w-5 h-5 text-white" />
//           </SocialNode>

//           <SocialNode ref={facebookRef} href="https://facebook.com/talk2pwealth" label="Facebook" className="absolute bottom-[8%] left-[4%]">
//             <FaFacebook className="w-5 h-5 text-white" />
//           </SocialNode>

//           {/* Column 2: Right Anchor Elements */}
//           <SocialNode ref={youtubeRef} href="https://youtube.com/@talk2pwealth" label="YouTube" className="absolute top-[8%] right-[4%]">
//             <FaYoutube className="w-5 h-5 text-white" />
//           </SocialNode>

//           <SocialNode ref={instagramRef} href="https://instagram.com/talk2pwealth" label="Instagram" className="absolute bottom-[8%] right-[4%]">
//             <FaInstagram className="w-5 h-5 text-white" />
//           </SocialNode>

//           {/* Central Profile Headshot Core Frame */}
//           <div
//             ref={centreRef}
//             className="
//               z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
//               w-28 h-28 rounded-full overflow-hidden
//               border-2 border-white/40
//               shadow-[0_0_40px_rgba(255,255,255,0.05)]
//               bg-[#060606]
//             "
//           >
//             <img
//               src={headshot}
//               alt="Talk2Pwealth Identity Hub"
//               className="w-full h-full object-cover object-top"
//             />
//           </div>

//           {/* Monochromatic white/gray connection beams */}
//           <AnimatedBeam containerRef={containerRef} fromRef={superFMRef} toRef={centreRef} curvature={-50} gradientStartColor="#334155" gradientStopColor="#94a3b8" />
//           <AnimatedBeam containerRef={containerRef} fromRef={spotifyRef} toRef={centreRef} gradientStartColor="#334155" gradientStopColor="#94a3b8" />
//           <AnimatedBeam containerRef={containerRef} fromRef={facebookRef} toRef={centreRef} curvature={50} gradientStartColor="#334155" gradientStopColor="#94a3b8" />
//           <AnimatedBeam containerRef={containerRef} fromRef={youtubeRef} toRef={centreRef} curvature={-50} reverse gradientStartColor="#334155" gradientStopColor="#94a3b8" />
//           <AnimatedBeam containerRef={containerRef} fromRef={instagramRef} toRef={centreRef} curvature={50} reverse gradientStartColor="#334155" gradientStopColor="#94a3b8" />
//         </div>

//       </div>
//     </section>
//   )
// }


import React, { forwardRef, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { FaSpotify, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa6"
import { Radio } from "lucide-react"
import { gsap } from "gsap"
import { AnimatedBeam } from "@/components/ui/animated-beam"
import { AnimatedList } from "@/components/ui/animated-list"
import headshot from "../../assets/hero.jpeg"

interface Platform {
  name: string
  desc: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  label: string
}

const platforms: Platform[] = [
  {
    name: "Super FM Lagos",
    desc: "Weekly Radio Programme",
    href: "https://superfm.com.ng",
    icon: Radio,
    label: "Super FM",
  },
  {
    name: "Spotify",
    desc: "Growing Podcast Library",
    href: "https://spotify.com",
    icon: FaSpotify,
    label: "Spotify",
  },
  {
    name: "YouTube",
    desc: "Masterclass Replays & Teachings",
    href: "https://youtube.com/@talk2pwealth",
    icon: FaYoutube,
    label: "YouTube",
  },
  {
    name: "Instagram",
    desc: "Daily Encouragement & Insights",
    href: "https://instagram.com/@talk2pwealth",
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    name: "Facebook",
    desc: "Community & Conversations",
    href: "https://facebook.com/talk2pwealth",
    icon: FaFacebook,
    label: "Facebook",
  },
]

interface NodeProps {
  className?: string
  children?: React.ReactNode
  href: string
  label: string
}

const SocialNode = forwardRef<HTMLAnchorElement, NodeProps>(
  ({ className = "", children, href, label }, ref) => (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={["z-10 flex flex-col items-center gap-1.5 group", className].join(" ")}
    >
      <div
        className="
          flex items-center justify-center
          w-14 h-14 rounded-full
          bg-[#060606]/90 backdrop-blur-md
          border border-white/10 shadow-2xl
          transition-all duration-300
          group-hover:border-white group-hover:scale-110 group-hover:shadow-white/5
        "
      >
        {children}
      </div>
      <span className="text-[10px] font-semibold text-slate-400 tracking-wide group-hover:text-white transition-colors duration-200">
        {label}
      </span>
    </a>
  )
)
SocialNode.displayName = "SocialNode"

export function MediaSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subheadingRef = useRef<HTMLParagraphElement>(null)
  
  const containerRef = useRef<HTMLDivElement>(null)
  const centreRef = useRef<HTMLDivElement>(null)

  const superFMRef = useRef<HTMLAnchorElement>(null)
  const spotifyRef = useRef<HTMLAnchorElement>(null)
  const facebookRef = useRef<HTMLAnchorElement>(null)
  const youtubeRef = useRef<HTMLAnchorElement>(null)
  const instagramRef = useRef<HTMLAnchorElement>(null)

  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView && headingRef.current && subheadingRef.current) {
      // GSAP animation for H1 with letter splitting effect
      const heading = headingRef.current
      const text = heading.innerText
      
      // Split text into words
      const words = text.split(' ')
      heading.innerHTML = words.map(word => 
        `<span class="word" style="display: inline-block; overflow: hidden; padding: 0 2px;">
          <span class="char" style="display: inline-block; transform: translateY(100%);">${word}</span>
        </span>`
      ).join(' ')
      
      const charSpans = heading.querySelectorAll('.char')
      
      // Animate each word with stagger
      gsap.fromTo(charSpans,
        { y: "100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 1,
          stagger: 0.05,
          ease: "power4.out",
          delay: 0.2,
        }
      )
      
      // Add shine effect after animation
      gsap.to(heading, {
        textShadow: "0 0 30px rgba(255,255,255,0.5), 0 0 60px rgba(0,82,255,0.3)",
        duration: 0.8,
        delay: 1,
        repeat: 1,
        yoyo: true,
        ease: "power2.inOut"
      })
      
      // Animate subheading
      gsap.fromTo(subheadingRef.current,
        { opacity: 0, y: 20, filter: "blur(4px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power4.out", delay: 0.4 }
      )
    }
  }, [isInView])

  // Framer motion variants - only for container and header elements
  // const fadeInUp = {
  //   hidden: { opacity: 0, y: 30 },
  //   visible: { 
  //     opacity: 1, 
  //     y: 0, 
  //     transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  //   }
  // }

  // const beamContainerVariants = {
  //   hidden: { opacity: 0, scale: 0.95 },
  //   visible: { 
  //     opacity: 1, 
  //     scale: 1,
  //     transition: { duration: 0.8, delay: 0.5, ease: "easeOut" }
  //   }
  // }

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#060606] text-white py-16 md:py-24 overflow-hidden flex items-center justify-center min-h-screen px-6 md:px-12 lg:px-20"
    >
      {/* ── LIGHTENED GLASS & RADIAL GRADIENT OVERLAYS ── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(6,6,6,0.1) 0%, rgba(6,6,6,0.9) 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-[1] backdrop-blur-[6px] pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      {/* Soft Ambient Core Light */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.02] blur-[120px] pointer-events-none z-[1]"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.02, 0.04, 0.02]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Structural Wrapper */}
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-12 lg:gap-16 relative z-10">
        
        {/* ── STAGE 1: Full-width Header Blocks (Always First on All Devices) ── */}
        <div className="flex flex-col gap-4 w-full">
          <motion.p 
            className="text-white/60 text-xs md:text-sm font-bold tracking-[0.25em] uppercase"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Heard on Air. Watched Online. Felt in the Room.
          </motion.p>

          <h1 
            ref={headingRef}
            className="text-5xl font-black leading-[1.1] tracking-[-0.05em] text-white sm:text-7xl lg:text-8xl xl:text-8xl w-full break-words"
          >
            Wherever You Are, Find Talk2Pwealth
          </h1>
        </div>

        {/* ── Content Row/Splitter Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          
          {/* ── STAGE 2: The Interactive Node Beam System ── */}
          <motion.div
            ref={containerRef}
            className="relative flex items-center justify-center w-full h-[460px] md:h-[500px] order-1 lg:order-2"
            // variants={beamContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Left Node Anchors */}
            <SocialNode ref={superFMRef} href="https://superfm.com.ng" label="Super FM" className="absolute top-[8%] left-[4%]">
              <Radio className="w-5 h-5 text-white" />
            </SocialNode>

            <SocialNode ref={spotifyRef} href="https://spotify.com" label="Spotify" className="absolute top-[50%] -translate-y-1/2 left-[0%]">
              <FaSpotify className="w-5 h-5 text-white" />
            </SocialNode>

            <SocialNode ref={facebookRef} href="https://facebook.com/talk2pwealth" label="Facebook" className="absolute bottom-[8%] left-[4%]">
              <FaFacebook className="w-5 h-5 text-white" />
            </SocialNode>

            {/* Right Node Anchors */}
            <SocialNode ref={youtubeRef} href="https://youtube.com/@talk2pwealth" label="YouTube" className="absolute top-[8%] right-[4%]">
              <FaYoutube className="w-5 h-5 text-white" />
            </SocialNode>

            <SocialNode ref={instagramRef} href="https://instagram.com/talk2pwealth" label="Instagram" className="absolute bottom-[8%] right-[4%]">
              <FaInstagram className="w-5 h-5 text-white" />
            </SocialNode>

            {/* Central Profile Hub */}
            <motion.div
              ref={centreRef}
              className="
                z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                w-28 h-28 rounded-full overflow-hidden
                border-2 border-white/40
                shadow-[0_0_40px_rgba(255,255,255,0.05)]
                bg-[#060606]
              "
              animate={{ 
                boxShadow: ["0 0 40px rgba(255,255,255,0.05)", "0 0 60px rgba(255,255,255,0.15)", "0 0 40px rgba(255,255,255,0.05)"]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={headshot}
                alt="Talk2Pwealth Identity Hub"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>

            {/* Monochromatic white/gray connection beams */}
            <AnimatedBeam containerRef={containerRef} fromRef={superFMRef} toRef={centreRef} curvature={-50} gradientStartColor="#334155" gradientStopColor="#94a3b8" />
            <AnimatedBeam containerRef={containerRef} fromRef={spotifyRef} toRef={centreRef} gradientStartColor="#334155" gradientStopColor="#94a3b8" />
            <AnimatedBeam containerRef={containerRef} fromRef={facebookRef} toRef={centreRef} curvature={50} gradientStartColor="#334155" gradientStopColor="#94a3b8" />
            <AnimatedBeam containerRef={containerRef} fromRef={youtubeRef} toRef={centreRef} curvature={-50} reverse gradientStartColor="#334155" gradientStopColor="#94a3b8" />
            <AnimatedBeam containerRef={containerRef} fromRef={instagramRef} toRef={centreRef} curvature={50} reverse gradientStartColor="#334155" gradientStopColor="#94a3b8" />
          </motion.div>

          {/* ── STAGE 3: Description Paragraph & Platform Activity List Stream ── */}
          <div className="flex flex-col gap-6 order-2 lg:order-1 w-full">
            <p 
              ref={subheadingRef}
              className="text-slate-400 text-base md:text-lg max-w-xl leading-relaxed"
            >
              Weekly wisdom on wealth, faith, and purpose — across every platform you already love. Connect with us in real-time or catch up on on-demand masterclasses.
            </p>

            {/* Dynamic Activity List Platform Stream - NO EXTRA FRAMER MOTION HERE */}
            <div className="max-w-xl w-full h-[280px] overflow-hidden relative p-1">
              <AnimatedList delay={1800}>
                {platforms.map((platform, idx) => {
                  const IconComponent = platform.icon
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-5 p-4 rounded-xl border border-white/[0.03] bg-white/[0.01] backdrop-blur-md transition-all duration-300 hover:border-white/10 cursor-pointer"
                    >
                      {/* Icon Container block */}
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#060606] border-2 border-slate-800 text-white shadow-xl">
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-sm font-bold text-white tracking-tight">
                          {platform.name}
                        </span>
                        <span className="text-xs text-slate-400 truncate mt-0.5">
                          {platform.desc}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </AnimatedList>
              
              <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#060606] to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}