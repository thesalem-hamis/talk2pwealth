// import { cn } from "@/lib/utils"
// import { Marquee } from "@/components/ui/marquee" 

// const reviews = [
//   {
//     name: "Jack",
//     username: "@jack",
//     body: "I've never seen anything like this before. It's amazing. I love it.",
//     img: "https://avatar.vercel.sh/jack",
//   },
//   {
//     name: "Jill",
//     username: "@jill",
//     body: "I don't know what to say. I'm speechless. This is amazing.",
//     img: "https://avatar.vercel.sh/jill",
//   },
//   {
//     name: "John",
//     username: "@john",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/john",
//   },
//   {
//     name: "Jane",
//     username: "@jane",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/jane",
//   },
//   {
//     name: "Jenny",
//     username: "@jenny",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/jenny",
//   },
//   {
//     name: "James",
//     username: "@james",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/james",
//   },
// ]

// const firstRow = reviews.slice(0, reviews.length / 2)
// const secondRow = reviews.slice(reviews.length / 2)

// const ReviewCard = ({
//   img,
//   name,
//   username,
//   body,
// }: {
//   img: string
//   name: string
//   username: string
//   body: string
// }) => {
//   return (
//     <figure
//       className={cn(
//         "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-5",
//         // light styles
//         "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
//         // dark styles
//         "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
//       )}
//     >
//       <div className="flex flex-row items-center gap-2">
//         <img className="rounded-full" width="32" height="32" alt={name} src={img} />
//         <div className="flex flex-col">
//           <figcaption className="text-sm font-medium dark:text-white">
//             {name}
//           </figcaption>
//           <p className="text-xs font-medium dark:text-white/40">{username}</p>
//         </div>
//       </div>
//       <blockquote className="mt-2 text-sm text-gray-700 dark:text-gray-300">{body}</blockquote>
//     </figure>
//   )
// }

// export function TestimonialsSection() {
//   return (
//     <section className="py-16 bg-background text-foreground w-full">
//       {/* Centered Heading Layout */}
//       <div className="container mx-auto px-4 mb-12 text-center">
//         <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900 dark:text-white">
//           What Parents & Teens Are Saying
//         </h1>
//         <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
//           Discover how our platform is making a difference in communities everywhere.
//         </p>
//       </div>

//       {/* Marquee Display Container */}
//       <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-y-4">
//         {/* Row 1: Forward Direction */}
//         <Marquee pauseOnHover className="[--duration:20s]">
//           {firstRow.map((review) => (
//             <ReviewCard key={review.username} {...review} />
//           ))}
//         </Marquee>

//         {/* Row 2: Reverse Direction */}
//         <Marquee reverse pauseOnHover className="[--duration:20s]">
//           {secondRow.map((review) => (
//             <ReviewCard key={review.username} {...review} />
//           ))}
//         </Marquee>

//         {/* Left Edge Gradient Fade */}
//         <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent z-10"></div>
        
//         {/* Right Edge Gradient Fade */}
//         <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent z-10"></div>
//       </div>
//     </section>
//   )
// }


import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee" 

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-2xl border p-5 transition-colors duration-200",
        // Crisp borders and soft background tint for white layouts
        "border-gray-200/70 bg-gray-50/50 hover:bg-gray-50"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt={name} src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold text-gray-900">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-gray-400">{username}</p>
        </div>
      </div>
      <blockquote className="mt-3 text-sm leading-relaxed text-gray-600">{body}</blockquote>
    </figure>
  )
}

export function TestimonialsSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 md:px-8">
      {/* MATCHING PREMIUM CENTERED HEADER LAYOUT */}
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center mb-12 md:mb-20">
        <h1 className="w-full max-w-4xl text-4xl xs:text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.06em] leading-[1.05] text-gray-900 select-none mb-6">
          What Parents & Teens Are Saying
        </h1>
        <p className="text-gray-500 text-sm md:text-base font-normal leading-relaxed max-w-xl mx-auto">
          Discover how our platform is making a difference in communities everywhere.
        </p>
      </div>

      {/* Marquee Display Container */}
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-y-4">
        {/* Row 1: Forward Direction */}
        <Marquee pauseOnHover className="[--duration:25s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>

        {/* Row 2: Reverse Direction */}
        <Marquee reverse pauseOnHover className="[--duration:25s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>

        {/* Left Edge Gradient Fade matching crisp white bg */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white to-transparent z-10" />
        
        {/* Right Edge Gradient Fade matching crisp white bg */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </section>
  )
}