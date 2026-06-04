// "use client";

// import { useEffect, useRef } from "react";
// import { ArrowRight, ShoppingCart, HeartHandshake } from "lucide-react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const BOOKS = [
//   {
//     id: "parenting-teens",
//     title: "The Parenting Blueprint",
//     description: "A battle-tested tactical guide to raising intentional, faith-rooted teenagers in a modern digital landscape.",
//     coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop",
//     buyHref: "/shop/parenting-blueprint",
//     sponsorHref: "/campaigns/book-sponsorship",
//   },
//   {
//     id: "identity-forged",
//     title: "Forged Identity",
//     description: "Helping young men and women discover unshakeable conviction, identity, and courage on the ground.",
//     coverUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600&auto=format&fit=crop",
//     buyHref: "/shop/forged-identity",
//     sponsorHref: "/campaigns/book-sponsorship",
//   },
//   {
//     id: "fireside-devotions",
//     title: "Fireside Foundations",
//     description: "Daily interactive devotionals tailored specifically for family circles and real-world environments.",
//     coverUrl: "https://images.unsplash.com/photo-1614849963640-9cc74b2a826f?q=80&w=600&auto=format&fit=crop",
//     buyHref: "/shop/fireside-foundations",
//     sponsorHref: "/campaigns/book-sponsorship",
//   },
//   {
//     id: "legacy-wealth",
//     title: "The Generational Legacy",
//     description: "Practical wisdom centered on creating true spiritual and relational wealth that endures.",
//     coverUrl: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=600&auto=format&fit=crop",
//     buyHref: "/shop/generational-legacy",
//     sponsorHref: "/campaigns/book-sponsorship",
//   },
// ];

// export default function PublishedWorksShelf() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const h1Ref = useRef<HTMLHeadingElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const words = h1Ref.current?.querySelectorAll<HTMLSpanElement>(".word");
//       if (words?.length) {
//         gsap.fromTo(
//           words,
//           { opacity: 0, y: 30, rotateX: -15 },
//           {
//             opacity: 1,
//             y: 0,
//             rotateX: 0,
//             duration: 0.9,
//             stagger: 0.06,
//             ease: "power3.out",
//             scrollTrigger: { trigger: h1Ref.current, start: "top 85%", once: true },
//           }
//         );
//       }
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   const h1Words = "Four Books. One Mandate.".split(" ");

//   return (
//     <section 
//       ref={sectionRef}
//       className="w-full bg-white py-24 md:py-32 px-6 text-zinc-900 overflow-hidden"
//     >
//       <div className="max-w-6xl mx-auto w-full flex flex-col items-start">
        
//         {/* ── HEADER BLOCK ── */}
//         <div className="text-left mb-16 md:mb-20 w-full" style={{ perspective: "1000px" }}>
//           <span className="inline-block text-xl md:text-2xl text-black font-light tracking-tight select-none mb-3">
//             The Shelf — Published Works
//           </span>

//           <h1
//             ref={h1Ref}
//             className="text-5xl md:text-6xl lg:text-7xl font-black text-zinc-950 leading-[1.05] tracking-[-0.05em] max-w-3xl select-none mb-6"
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
//           <p className="text-zinc-500 text-sm md:text-base font-normal leading-relaxed max-w-xl">
//             Each book is a resource forged from years on the ground — practical, faith-rooted, and built for real families.
//           </p>
//         </div>

//         {/* ── HIGH-FIDELITY BOOKSHELF GRID ── */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-20 md:mb-28">
//           {BOOKS.map((book) => (
//             <figure
//               key={book.id}
//               className="relative h-full w-full flex flex-col justify-between overflow-hidden bg-white border border-zinc-200 rounded-none p-0 m-0"
//             >
//               {/* Internal Content Wrapper */}
//               <div className="flex flex-col flex-grow">
//                 {/* Book Cover Image Container */}
//                 <div className="relative aspect-[4/3] w-full bg-zinc-50 flex items-center justify-center p-5 overflow-hidden">
//                   <img 
//                     src={book.coverUrl} 
//                     alt={`Book cover for ${book.title}`}
//                     className="w-full h-full object-cover rounded-xl shadow-sm"
//                   />
//                 </div>

//                 {/* Typography Metadata Body */}
//                 <div className="px-6 pb-2 pt-1 flex flex-col flex-grow">
//                   <figcaption className="text-xl font-bold text-zinc-900 tracking-tight mb-3">
//                     {book.title}
//                   </figcaption>

//                   <blockquote className="text-sm leading-relaxed text-zinc-600 flex-grow">
//                     {book.description}
//                   </blockquote>
//                 </div>
//               </div>

//               {/* ── PADDED SQUARE INTERACTIVE ACTIONS ── */}
//               <div className="flex flex-col gap-2 p-6 pt-4 w-full">
//                 <a
//                   href={book.buyHref}
//                   className="rounded-none w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-[#0B3FB4] text-white text-xs font-bold tracking-wider uppercase hover:bg-zinc-900 transition-all duration-300 border-0"
//                 >
//                   <ShoppingCart size={14} />
//                   Get Your Copy
//                 </a>
                
//                 <a
//                   href={book.sponsorHref}
//                   className="rounded-none w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-zinc-100/80 hover:bg-zinc-200/90 backdrop-blur-md text-zinc-800 text-xs font-bold tracking-wider uppercase transition-all duration-300 border-0"
//                 >
//                   <HeartHandshake size={14} className="text-zinc-500" />
//                   Sponsor a Copy
//                 </a>
//               </div>
//             </figure>
//           ))}
//         </div>

//         {/* ── RADIUS GLOBAL CTA BANNER ── */}
//         <div
//           className="relative w-full max-w-5xl mx-auto rounded-3xl border-2 border-zinc-200 bg-zinc-50/50 p-8 md:p-12 text-center flex flex-col items-center justify-center overflow-hidden"
//         >
//           <h2 className="text-xl md:text-2xl font-bold text-zinc-900 tracking-tight mb-3">
//             Can't Afford a Copy? Someone Will Sponsor One for You.
//           </h2>
//           <p className="text-zinc-500 text-sm leading-relaxed max-w-2xl mx-auto mb-8">
//             Through our Book Sponsorship Initiative, donors are putting books in the hands of parents and teens who need them most.
//           </p>
          
//           <button
//             type="button"
//             className="rounded-none group inline-flex items-center gap-2 px-8 py-4 bg-[#0B3FB4] text-white font-semibold text-xs tracking-wider uppercase hover:bg-zinc-900 transition-all duration-300 shadow-md active:scale-98"
//           >
//             <span>Learn About Book Sponsorship</span>
//             <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }


// "use client";

// import { useEffect, useRef } from "react";
// import { ArrowRight, ShoppingCart, HeartHandshake } from "lucide-react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ComicText } from "@/components/ui/comic-text";
// import { DottedMap } from "@/components/ui/dotted-map";

// gsap.registerPlugin(ScrollTrigger);

// const BOOKS = [
//   {
//     id: "parenting-teens",
//     title: "The Parenting Blueprint",
//     description: "A battle-tested tactical guide to raising intentional, faith-rooted teenagers in a modern digital landscape.",
//     coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop",
//     buyHref: "/shop/parenting-blueprint",
//     sponsorHref: "/campaigns/book-sponsorship",
//   },
//   {
//     id: "identity-forged",
//     title: "Forged Identity",
//     description: "Helping young men and women discover unshakeable conviction, identity, and courage on the ground.",
//     coverUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600&auto=format&fit=crop",
//     buyHref: "/shop/forged-identity",
//     sponsorHref: "/campaigns/book-sponsorship",
//   },
//   {
//     id: "fireside-devotions",
//     title: "Fireside Foundations",
//     description: "Daily interactive devotionals tailored specifically for family circles and real-world environments.",
//     coverUrl: "https://images.unsplash.com/photo-1614849963640-9cc74b2a826f?q=80&w=600&auto=format&fit=crop",
//     buyHref: "/shop/fireside-foundations",
//     sponsorHref: "/campaigns/book-sponsorship",
//   },
//   {
//     id: "legacy-wealth",
//     title: "The Generational Legacy",
//     description: "Practical wisdom centered on creating true spiritual and relational wealth that endures.",
//     coverUrl: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=600&auto=format&fit=crop",
//     buyHref: "/shop/generational-legacy",
//     sponsorHref: "/campaigns/book-sponsorship",
//   },
// ];

// export default function PublishedWorksShelf() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const h1Ref = useRef<HTMLHeadingElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const words = h1Ref.current?.querySelectorAll<HTMLSpanElement>(".word");
//       if (words?.length) {
//         gsap.fromTo(
//           words,
//           { opacity: 0, y: 30, rotateX: -15 },
//           {
//             opacity: 1,
//             y: 0,
//             rotateX: 0,
//             duration: 0.9,
//             stagger: 0.06,
//             ease: "power3.out",
//             scrollTrigger: { trigger: h1Ref.current, start: "top 85%", once: true },
//           }
//         );
//       }
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   const h1Words = "Four Books. One Mandate.".split(" ");

//   return (
//     <section 
//       ref={sectionRef}
//       className="w-full bg-white py-24 md:py-32 px-6 text-zinc-900 overflow-hidden"
//     >
//       <div className="max-w-6xl mx-auto w-full flex flex-col items-start">
        
//         {/* ── HEADER BLOCK ── */}
//         <div className="text-left mb-16 md:mb-20 w-full" style={{ perspective: "1000px" }}>
//           <span className="inline-block text-xl md:text-2xl text-zinc-400 font-light tracking-tight select-none mb-3">
//             The Shelf — Published Works
//           </span>

//           <h1
//             ref={h1Ref}
//             className="text-5xl md:text-6xl lg:text-7xl font-black text-zinc-950 leading-[1.05] tracking-[-0.05em] max-w-3xl select-none mb-6"
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
//           <p className="text-zinc-500 text-sm md:text-base font-normal leading-relaxed max-w-xl">
//             Each book is a resource forged from years on the ground — practical, faith-rooted, and built for real families.
//           </p>
//         </div>

//         {/* ── HIGH-FIDELITY BOOKSHELF GRID ── */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-20 md:mb-28">
//           {BOOKS.map((book) => (
//             <figure
//               key={book.id}
//               className="relative h-full w-full flex flex-col justify-between overflow-hidden bg-white border border-zinc-200 rounded-none p-0 m-0"
//             >
//               {/* Internal Content Wrapper */}
//               <div className="flex flex-col flex-grow">
//                 {/* Book Cover Image Container */}
//                 <div className="relative aspect-[4/3] w-full bg-zinc-50 flex items-center justify-center p-5 overflow-hidden">
//                   <img 
//                     src={book.coverUrl} 
//                     alt={`Book cover for ${book.title}`}
//                     className="w-full h-full object-cover rounded-xl shadow-sm"
//                   />
//                 </div>

//                 {/* Typography Metadata Body */}
//                 <div className="px-6 pb-2 pt-1 flex flex-col flex-grow">
//                   <figcaption className="text-xl font-bold text-zinc-900 tracking-tight mb-3">
//                     {book.title}
//                   </figcaption>

//                   <blockquote className="text-sm leading-relaxed text-zinc-600 flex-grow">
//                     {book.description}
//                   </blockquote>
//                 </div>
//               </div>

//               {/* ── PADDED SQUARE INTERACTIVE ACTIONS ── */}
//               <div className="flex flex-col gap-2 p-6 pt-4 w-full">
//                 <a
//                   href={book.buyHref}
//                   className="rounded-none w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-[#0B3FB4] text-white text-xs font-bold tracking-wider uppercase hover:bg-zinc-900 transition-all duration-300 border-0"
//                 >
//                   <ShoppingCart size={14} />
//                   Get Your Copy
//                 </a>
                
//                 <a
//                   href={book.sponsorHref}
//                   className="rounded-none w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-zinc-100/80 hover:bg-zinc-200/90 backdrop-blur-md text-zinc-800 text-xs font-bold tracking-wider uppercase transition-all duration-300 border-0"
//                 >
//                   <HeartHandshake size={14} className="text-zinc-500" />
//                   Sponsor a Copy
//                 </a>
//               </div>
//             </figure>
//           ))}
//         </div>

//         {/* ── RADIUS GLOBAL CTA BANNER WITH DOTTED MAP BACKGROUND & COMIC TEXT ── */}
//         <div
//           className="relative w-full max-w-5xl mx-auto rounded-3xl border-2 border-zinc-200 bg-white min-h-[400px] p-8 md:p-12 text-center flex flex-col items-center justify-center overflow-hidden"
//           style={{
//             boxShadow: "0 12px 32px rgba(0,0,0,0.02)"
//           }}
//         >
//           {/* DOTTED MAP CANVAS LAYER */}
//           <div className="absolute inset-0 z-0 opacity-60 mix-blend-multiply pointer-events-none">
//             <DottedMap />
//           </div>

//           {/* GRADIENT MASK FOR CONTRAST READABILITY */}
//           <div className="absolute inset-0 z-[1] bg-gradient-to-b from-white/40 via-white/80 to-white/95 pointer-events-none" />

//           {/* BANNER CONTENT CORE */}
//           <div className="relative z-10 flex flex-col items-center justify-center w-full">
//             <h2 className="text-xl md:text-2xl font-bold text-zinc-900 tracking-tight mb-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
//               <span>Can't Afford a Copy?</span>
//               <ComicText className="text-[#0B3FB4]">Someone Will Sponsor One for You.</ComicText>
//             </h2>
            
//             <p className="text-zinc-500 text-sm leading-relaxed max-w-2xl mx-auto mb-8 font-medium">
//               Through our Book Sponsorship Initiative, donors are putting books in the hands of parents and teens who need them most.
//             </p>
            
//             <button
//               type="button"
//               className="rounded-none group inline-flex items-center gap-2 px-8 py-4 bg-[#0B3FB4] text-white font-semibold text-xs tracking-wider uppercase hover:bg-zinc-900 transition-all duration-300 shadow-md active:scale-98"
//             >
//               <span>Learn About Book Sponsorship</span>
//               <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
//             </button>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, ShoppingCart } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DottedMap } from "@/components/ui/dotted-map";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ShinyButton } from "@/components/ui/shiny-button";

gsap.registerPlugin(ScrollTrigger);

const BOOKS = [
  {
    id: "parenting-teens",
    title: "The Parenting Blueprint",
    description: "A battle-tested tactical guide to raising intentional, faith-rooted teenagers in a modern digital landscape.",
    coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop",
    buyHref: "/shop/parenting-blueprint",
    sponsorHref: "/campaigns/book-sponsorship",
  },
  {
    id: "identity-forged",
    title: "Forged Identity",
    description: "Helping young men and women discover unshakeable conviction, identity, and courage on the ground.",
    coverUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600&auto=format&fit=crop",
    buyHref: "/shop/forged-identity",
    sponsorHref: "/campaigns/book-sponsorship",
  },
  {
    id: "fireside-devotions",
    title: "Fireside Foundations",
    description: "Daily interactive devotionals tailored specifically for family circles and real-world environments.",
    coverUrl: "https://images.unsplash.com/photo-1614849963640-9cc74b2a826f?q=80&w=600&auto=format&fit=crop",
    buyHref: "/shop/fireside-foundations",
    sponsorHref: "/campaigns/book-sponsorship",
  },
  {
    id: "legacy-wealth",
    title: "The Generational Legacy",
    description: "Practical wisdom centered on creating true spiritual and relational wealth that endures.",
    coverUrl: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=600&auto=format&fit=crop",
    buyHref: "/shop/generational-legacy",
    sponsorHref: "/campaigns/book-sponsorship",
  },
];

export default function PublishedWorksShelf() {
  const sectionRef = useRef<HTMLElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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

  const h1Words = "Four Books. One Mandate.".split(" ");

  return (
    <section 
      ref={sectionRef}
      className="relative w-full bg-white pt-0 pb-24 md:pb-32 px-6 text-zinc-900 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-[0.22] pointer-events-none">
        <DottedMap />
      </div>

      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-white/5 via-white/60 to-white/90 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-start pt-12 md:pt-16">
        
        <div className="text-left mb-16 md:mb-20 w-full" style={{ perspective: "1000px" }}>
          <span className="inline-block text-xl md:text-2xl text-zinc-400 font-light tracking-tight select-none mb-3">
            The Shelf — Published Works
          </span>

          <h1
            ref={h1Ref}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-zinc-950 leading-[1.05] tracking-[-0.05em] max-w-3xl select-none mb-6"
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
          <p className="text-zinc-500 text-sm md:text-base font-normal leading-relaxed max-w-xl">
            Each book is a resource forged from years on the ground — practical, faith-rooted, and built for real families.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-20 md:mb-28">
          {BOOKS.map((book) => (
            <figure
              key={book.id}
              className="relative h-full w-full flex flex-col justify-between overflow-hidden bg-white/90 backdrop-blur-sm border border-zinc-200 rounded-none p-0 m-0 shadow-sm"
            >
              <div className="flex flex-col flex-grow">
                <div className="relative aspect-[4/3] w-full bg-zinc-50/50 flex items-center justify-center p-5 overflow-hidden">
                  <img 
                    src={book.coverUrl} 
                    alt={`Book cover for ${book.title}`}
                    className="w-full h-full object-cover rounded-xl shadow-sm"
                  />
                </div>
                <div className="px-6 pb-2 pt-1 flex flex-col flex-grow">
                  <figcaption className="text-xl font-bold text-zinc-900 tracking-tight mb-3">
                    {book.title}
                  </figcaption>
                  <blockquote className="text-sm leading-relaxed text-zinc-600 flex-grow">
                    {book.description}
                  </blockquote>
                </div>
              </div>

              <div className="flex flex-col gap-2.5 p-6 pt-4 w-full">
                <a
                  href={book.buyHref}
                  className="rounded-none w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-[#0B3FB4] text-white text-xs font-bold tracking-wider uppercase hover:bg-zinc-900 transition-all duration-300 border-0"
                >
                  <ShoppingCart size={14} />
                  Get Your Copy
                </a>
                <ShinyButton
                  className="rounded-none w-full border border-zinc-200 bg-zinc-50 text-zinc-800 text-xs font-bold tracking-wider uppercase text-center transition-all duration-300"
                  onClick={() => window.location.href = book.sponsorHref}
                >
                  Sponsor a Copy
                </ShinyButton>
              </div>
            </figure>
          ))}
        </div>

        <div
          className="relative w-full max-w-5xl mx-auto rounded-3xl border-2 border-zinc-200 bg-white/95 backdrop-blur-md min-h-[360px] p-8 md:p-12 text-center flex flex-col items-center justify-center overflow-hidden"
          style={{ boxShadow: "0 12px 32px rgba(0,0,0,0.01)" }}
        >
          <div className="relative z-10 flex flex-col items-center justify-center w-full">
            <h2 className="text-xl md:text-2xl font-bold text-zinc-900 tracking-tight mb-4 flex flex-col sm:flex-row items-center justify-center gap-x-2 gap-y-1">
              <span>Can't Afford a Copy?</span>
              <span className="text-[#0B3FB4] font-extrabold">Someone Will Sponsor One for You.</span>
            </h2>
            
            <p className="text-zinc-500 text-sm leading-relaxed max-w-2xl mx-auto mb-8 font-medium">
              Through our Book Sponsorship Initiative, donors are putting books in the hands of parents and teens who need them most.
            </p>
            
            <ShimmerButton 
              className="text-white text-xs font-bold tracking-wider uppercase rounded-none shadow-md"
              background="#0B3FB4"
              shimmerColor="#ffffff"
              shimmerSize="0.15rem"
              shimmerDuration="2.5s"
              onClick={() => console.log("Navigate to sponsorship details")}
            >
              <span className="inline-flex items-center gap-2 px-6 py-1">
                <span>Learn About Book Sponsorship</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </ShimmerButton>
          </div>
        </div>
      </div>
    </section>
  );
}