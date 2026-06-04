// "use client";

// import { useEffect, useRef } from "react";
// import { ArrowRight, Image as ImageIcon } from "lucide-react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// interface FeedPost {
//   id: string;
//   category: "Parenting" | "Teen Dev" | "Faith" | "Wealth" | "Highlights";
//   label: string;
//   title: string;
//   excerpt: string;
//   date: string;
//   imageUrl?: string;
// }

// const FEED_POSTS: FeedPost[] = [
//   {
//     id: "post-1",
//     category: "Parenting",
//     label: "Parenting Wins & Wisdom",
//     title: "Navigating the Silent Years: Connecting with Your Teen Beyond Monosyllables",
//     excerpt: "When 'fine' becomes the default answer, it is time to change the framework of your conversations. Discover three subtle communication shifts that open doors without pushing boundaries.",
//     date: "October 12, 2026",
//   },
//   {
//     id: "post-2",
//     category: "Teen Dev",
//     label: "Teen Development & Identity",
//     title: "The Architecture of Core Identity in a Digitally Saturated Landscape",
//     excerpt: "Teens aren't just consuming media; they are building mirrors out of algorithms. Learn how to foster a grounded sense of self-worth that functions independently of external digital validation.",
//     date: "October 09, 2026",
//   },
//   {
//     id: "post-3",
//     category: "Wealth",
//     label: "Financial Intelligence",
//     title: "Generational Wealth Frameworks: Teaching Assets vs Liabilities Early",
//     excerpt: "Financial literacy is caught, not taught. Break down complex investment concepts into practical, age-appropriate family challenges that establish healthy economic habits for life.",
//     date: "October 05, 2026",
//   },
//   {
//     id: "post-4",
//     category: "Highlights",
//     label: "Program Highlights & Testimonials",
//     title: "Inside the 2026 Summer Leadership Accelerator Intensive",
//     excerpt: "An exclusive look at the breakthroughs, peer-to-peer vulnerability milestones, and capstone project defenses from this year's top cohort graduating seniors.",
//     date: "September 28, 2026",
//     imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop", // Clean placeholder image
//   },
// ];

// export default function NewsFeedPreview() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const cursiveRef = useRef<HTMLSpanElement>(null);
//   const h1Ref = useRef<HTMLHeadingElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Small cursive script slide-in
//       gsap.fromTo(
//         cursiveRef.current,
//         { opacity: 0, x: -28, skewX: -5 },
//         {
//           opacity: 1,
//           x: 0,
//           skewX: 0,
//           duration: 1.1,
//           ease: "power4.out",
//           scrollTrigger: { trigger: cursiveRef.current, start: "top 86%", once: true },
//         }
//       );

//       // H1 word-by-word flip animation
//       const words = h1Ref.current?.querySelectorAll<HTMLSpanElement>(".word");
//       if (words?.length) {
//         gsap.fromTo(
//           words,
//           { opacity: 0, y: 44, rotateX: -28 },
//           {
//             opacity: 1,
//             y: 0,
//             rotateX: 0,
//             duration: 0.88,
//             stagger: 0.08,
//             ease: "power4.out",
//             scrollTrigger: { trigger: h1Ref.current, start: "top 83%", once: true },
//           }
//         );
//       }
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   const h1Words = "Stay in the Conversation".split(" ");

//   return (
//     <section
//       ref={sectionRef}
//       className="w-full py-20 md:py-28 px-4 bg-white text-zinc-900 overflow-hidden"
//     >
//       <div className="max-w-6xl mx-auto w-full flex flex-col items-start">
        
//         {/* ── HEADER ── */}
//         <div className="text-left mb-16 w-full" style={{ perspective: "800px" }}>
//           <span
//             ref={cursiveRef}
//             className="inline-block text-2xl md:text-3xl text-zinc-900/40 font-medium mb-3 opacity-0 tracking-tight"
//             style={{ fontFamily: "'Dancing Script', 'Brush Script MT', cursive" }}
//           >
//             Fresh From the Feed
//           </span>

//           <h1
//             ref={h1Ref}
//             className="text-5xl md:text-6xl lg:text-7xl font-black text-zinc-950 leading-[1.05] tracking-[-0.06em] max-w-3xl select-none"
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

//         {/* ── RICH CONTENT MASONRY GRID ── */}
//         <div className="columns-1 md:columns-2 gap-6 [column-fill:_balance] w-full space-y-6">
//           {FEED_POSTS.map((post) => (
//             <div
//               key={post.id}
//               className="break-inside-avoid relative group flex flex-col p-6 bg-zinc-50/70 hover:bg-zinc-50 rounded-[32px] border border-zinc-200/60 transition-all duration-400 hover:shadow-xl hover:shadow-zinc-200/30"
//             >
//               {/* Card Meta Row */}
//               <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
//                 <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-zinc-900 transition-colors duration-300">
//                   {post.category}
//                 </span>
//                 <span className="text-xs text-zinc-400 font-medium">
//                   {post.date}
//                 </span>
//               </div>

//               {/* IMAGE ELEMENT (Conditionally rendered for Highlights Pillar) */}
//               {post.imageUrl && (
//                 <div className="w-full aspect-[16/9] overflow-hidden rounded-2xl mb-6 bg-zinc-200 border border-zinc-200 relative group-hover:border-zinc-300 transition-colors duration-300">
//                   <img
//                     src={post.imageUrl}
//                     alt={post.title}
//                     className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
//                   />
//                   <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-md p-2 rounded-full shadow-sm">
//                     <ImageIcon className="w-4 h-4 text-zinc-700" />
//                   </div>
//                 </div>
//               )}

//               {/* Post Body Content */}
//               <div className="flex-1 flex flex-col items-start mb-6">
//                 <span className="text-xs font-semibold text-zinc-400 mb-1.5 block">
//                   {post.label}
//                 </span>
//                 <h3 className="text-xl md:text-2xl font-black text-zinc-950 tracking-tight leading-snug mb-3 group-hover:text-zinc-800 transition-colors duration-200">
//                   {post.title}
//                 </h3>
//                 <p className="text-zinc-500 text-sm font-medium leading-relaxed max-w-2xl">
//                   {post.excerpt}
//                 </p>
//               </div>

//               {/* Action Navigation Underline Link */}
//               <div className="w-full pt-4 border-t border-zinc-200/50 flex justify-end">
//                 <a
//                   href={`#posts/${post.id}`}
//                   className="inline-flex items-center gap-1.5 text-sm font-bold text-zinc-900 group/link relative pb-0.5"
//                 >
//                   <span className="relative">
//                     Read More
//                     <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-zinc-900 scale-x-100 origin-left transition-transform duration-300 group-hover/link:bg-zinc-400" />
//                   </span>
//                   <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* ── VIEW ALL FOOTER ACTION BUTTON ── */}
//         <div className="w-full flex justify-center mt-16 md:mt-24">
//           <button 
//             type="button"
//             className="group inline-flex items-center gap-2 px-8 py-4 bg-zinc-950 text-white font-bold text-sm tracking-tight rounded-full hover:bg-zinc-900 transition-all duration-300 shadow-xl shadow-zinc-950/10 hover:shadow-zinc-950/20 active:scale-98"
//           >
//             <span>View All Posts</span>
//             <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FeedPost {
  id: string;
  category: "Parenting" | "Teen Dev" | "Faith" | "Wealth" | "Highlights";
  label: string;
  title: string;
  excerpt: string;
  date: string;
}

const FEED_POSTS: FeedPost[] = [
  {
    id: "post-1",
    category: "Parenting",
    label: "Parenting Wins & Wisdom",
    title: "Navigating the Silent Years: Connecting with Your Teen Beyond Monosyllables",
    excerpt: "When 'fine' becomes the default answer, it's time to change the framework of your conversations. Discover three subtle communication shifts that open doors without pushing boundaries.",
    date: "June 02, 2026",
  },
  {
    id: "post-2",
    category: "Teen Dev",
    label: "Teen Development & Identity",
    title: "The Architecture of Core Identity in a Digitally Saturated Landscape",
    excerpt: "Teens aren't just consuming media; they are building mirrors out of algorithms. Learn how to foster a grounded sense of self-worth that functions independently of external digital validation.",
    date: "May 28, 2026",
  },
  {
    id: "post-3",
    category: "Faith",
    label: "Faith & Family",
    title: "Anchoring Family Rhythms in an Accelerated World",
    excerpt: "Building intentional traditions that serve as spiritual and emotional anchors. Explore actionable strategies for protecting family time against shifting cultural paces.",
    date: "May 24, 2026",
  },
  {
    id: "post-4",
    category: "Wealth",
    label: "Financial Intelligence",
    title: "Generational Wealth Frameworks: Teaching Assets vs Liabilities Early",
    excerpt: "Financial literacy is caught, not taught. Break down complex investment concepts into practical, age-appropriate family challenges that establish healthy economic habits for life.",
    date: "May 19, 2026",
  },
  {
    id: "post-5",
    category: "Highlights",
    label: "Program Highlights & Testimonials",
    title: "Inside the Summer Leadership Accelerator Intensive",
    excerpt: "An exclusive look at the breakthroughs, peer-to-peer vulnerability milestones, and capstone project defenses from this year's top cohort graduating seniors.",
    date: "May 12, 2026",
  },
];

export default function NewsFeedPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const cursiveRef = useRef<HTMLSpanElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Handwriting sub-heading slide-in
      gsap.fromTo(
        cursiveRef.current,
        { opacity: 0, x: -20, skewX: -3 },
        {
          opacity: 1,
          x: 0,
          skewX: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: cursiveRef.current, start: "top 88%", once: true },
        }
      );

      // Signature word-by-word flip animation
      const words = h1Ref.current?.querySelectorAll<HTMLSpanElement>(".word");
      if (words?.length) {
        gsap.fromTo(
          words,
          { opacity: 0, y: 30, rotateX: -15 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.9,
            stagger: 0.06,
            ease: "power3.out",
            scrollTrigger: { trigger: h1Ref.current, start: "top 85%", once: true },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const h1Words = "Stay in the Conversation".split(" ");

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 md:py-32 px-6 bg-white text-zinc-900 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col items-start">
        
        {/* ── HEADER ── */}
        <div className="text-left mb-16 md:mb-20 w-full" style={{ perspective: "1000px" }}>
          <span
            ref={cursiveRef}
            className="inline-block text-2xl md:text-3xl text-black font-normal mb-2 opacity-0 tracking-tight select-none"
            style={{ fontFamily: "'Dancing Script', 'Brush Script MT', cursive" }}
          >
            Fresh From the Feed
          </span>

          <h1
            ref={h1Ref}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-zinc-950 leading-[1.05] tracking-[-0.05em] max-w-3xl select-none"
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

        {/* ── CRISP MINIMALIST GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {FEED_POSTS.map((post) => (
            <div
              key={post.id}
              className="rounded-none relative group flex flex-col justify-between p-6 md:p-8 bg-white hover:bg-zinc-50/50 border border-zinc-200/80 transition-all duration-300 hover:shadow-sm"
            >
              <div>
                {/* Metadata Header Track */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-zinc-600 transition-colors duration-300">
                    {post.category}
                  </span>
                  <span className="text-xs text-zinc-400 font-light">
                    {post.date}
                  </span>
                </div>

                {/* Typography Block */}
                <div className="flex flex-col items-start mb-6">
                  <span className="text-xs font-semibold text-zinc-400/80 mb-2 block">
                    {post.label}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-zinc-900 tracking-tight leading-snug mb-3 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-zinc-500 text-sm font-normal leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More Anchor Interaction Bar */}
              <div className="w-full pt-4 border-t border-zinc-100 flex justify-end">
                <a
                  href={`#posts/${post.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-900 group/link relative pb-0.5"
                >
                  <span className="relative">
                    Read More
                    <span className="absolute bottom-0 left-0 w-full h-[1.2px] bg-zinc-900 scale-x-100 origin-left transition-transform duration-300 group-hover/link:bg-zinc-400" />
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ── CRISP ACTION ACTION TRIGGER ── */}
        <div className="w-full flex justify-center mt-16 md:mt-24">
          <button 
            type="button"
            className="rounded-none group inline-flex items-center gap-2 px-8 py-4 bg-[#0052FF] text-white font-semibold text-xs tracking-wider uppercase hover:bg-zinc-900 transition-all duration-300 shadow-md shadow-zinc-950/5 active:scale-98"
          >
            <span>View All Posts</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
}