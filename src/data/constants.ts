import {
  HiOutlineHome,
  HiOutlineUserGroup,
  HiOutlineBookOpen,
  HiOutlinePlayCircle,
  HiOutlineNewspaper,
  HiOutlineSparkles,
  HiOutlineAcademicCap,
  HiOutlineFire,
  HiOutlineBriefcase,
} from "react-icons/hi2";

export const NAV_LINKS = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Programs",
    href: "/programs",
    dropdown: [
      {
        title: "Parenting Teens Academy",
        description:
          "Helping parents intentionally raise confident and purpose-driven teens.",
        href: "/programs/parenting-teens-academy",
        icon: HiOutlineAcademicCap,
      },
      {
        title: "Not Too Young for Wealth",
        description:
          "Equipping young people with practical wealth and financial wisdom.",
        href: "/programs/not-too-young-for-wealth",
        icon: HiOutlineSparkles,
      },
      {
        title: "Fireside Legacy Connect",
        description:
          "Conversations and mentorship that inspire generational impact.",
        href: "/programs/fireside-legacy-connect",
        icon: HiOutlineFire,
      },
      {
        title: "Preparing for Adulthood with PWealth",
        description:
          "Practical life systems and growth strategies for young adults.",
        href: "/programs/preparing-for-adulthood",
        icon: HiOutlineBriefcase,
      },
    ],
  },
  {
    name: "Books",
    href: "/books",
  },
  {
    name: "Media",
    href: "/media",
  },
  // {
  //   name: "Feed / Blog",
  //   href: "/blog",
  // },
];

export const MOBILE_LINKS = [
  {
    name: "Home",
    href: "/",
    icon: HiOutlineHome,
  },
  {
    name: "About",
    href: "/about",
    icon: HiOutlineUserGroup,
  },
  {
    name: "Programs",
    href: "/programs",
    icon: HiOutlineAcademicCap,
  },
  {
    name: "Books",
    href: "/books",
    icon: HiOutlineBookOpen,
  },
  {
    name: "Media",
    href: "/media",
    icon: HiOutlinePlayCircle,
  },
  // {
  //   name: "Feed / Blog",
  //   href: "/blog",
  //   icon: HiOutlineNewspaper,
  // },
];



import { Users, TrendingUp, Flame, GraduationCap, type LucideIcon } from "lucide-react";
// import ptaLogo     from "@/assets/programs/pta-logo.svg";
// import ntywLogo    from "@/assets/programs/ntyw-logo.svg";
// import firesideLogo from "@/assets/programs/fireside-logo.svg";
// import pwealthLogo  from "@/assets/programs/pwealth-logo.svg";

import ptaBg from "../assets/parenting.jpg";
import ntywBg from "../assets/ntyfw.jpg";
import firesideBg from "../assets/firesidechat.jpg";
import pwealthBg from "../assets/pwealth-bg.jpeg";

// ─── Types ────────────────────────────────────────────────────────────────────

export type Program = {
  id: number;
  tag: string;
  title: string;
  shortLabel: string;
  description: string;
  cta: string;
  href: string;
  /** Lucide icon — used as fallback when logo is not set */
  Icon: LucideIcon;
  /** Optional: imported SVG/PNG logo. Replaces the Lucide icon when present. */
  logo?: string;
  /** Optional: imported background image for the card */
  bgImage?: string;
  // ─── Color tokens ───────────────────────────────────────────────────────────
  accent: string;
  accentLight: string;
  accentText: string;
  tagClass: string;
  iconBg: string;
  iconColor: string;
  ctaColor: string;
};

// ─── Section copy ─────────────────────────────────────────────────────────────

export const SECTION_HEADING = "Every program. One mission.";

export const SECTION_SUBHEADING =
  "Whether you're a parent, a teenager, a church, or a school — there is a seat at the table for you.";

// ─── Program data ─────────────────────────────────────────────────────────────

export const PROGRAMS: Program[] = [
  {
    id: 0,
    tag: "FOR PARENTS",
    title: "Parenting Teens Academy",
    shortLabel: "Parenting",
    description:
      "Equipping 180+ committed parents to raise teenagers with wisdom, understanding, and intentionality.",
    cta: "Join the Academy",
    href: "#parenting-teens",
    Icon: Users,
    logo: undefined,       // replace with: ptaLogo
    bgImage: ptaBg,    // replace with: ptaBg
    accent: "#D85A30",
    accentLight: "#FAECE7",
    accentText: "#993C1D",
    tagClass: "bg-orange-100 text-orange-700",
    iconBg: "bg-[#FAECE7]",
    iconColor: "text-[#D85A30]",
    ctaColor: "text-[#D85A30] hover:text-[#993C1D]",
  },
  {
    id: 1,
    tag: "FOR YOUNG PEOPLE",
    title: "Not Too Young for Wealth",
    shortLabel: "NTYW",
    description:
      "Building financial intelligence and entrepreneurial thinking in teenagers and young adults since 2021.",
    cta: "Discover NTYW",
    href: "#ntyw",
    Icon: TrendingUp,
    logo: undefined,       // replace with: ntywLogo
    bgImage: ntywBg,    // replace with: ntywBg
    accent: "#3B6D11",
    accentLight: "#EAF3DE",
    accentText: "#27500A",
    tagClass: "bg-green-100 text-green-800",
    iconBg: "bg-[#EAF3DE]",
    iconColor: "text-[#3B6D11]",
    ctaColor: "text-[#3B6D11] hover:text-[#27500A]",
  },
  {
    id: 2,
    tag: "FOR FAMILIES",
    title: "Fireside Legacy Connect",
    shortLabel: "Fireside",
    description:
      "A movie-based discipleship and family bonding initiative that starts conversations that change generations.",
    cta: "Join the Movement",
    href: "#fireside",
    Icon: Flame,
    logo: undefined,       // replace with: firesideLogo
    bgImage: firesideBg,    // replace with: firesideBg
    accent: "#534AB7",
    accentLight: "#EEEDFE",
    accentText: "#3C3489",
    tagClass: "bg-purple-100 text-purple-800",
    iconBg: "bg-[#EEEDFE]",
    iconColor: "text-[#534AB7]",
    ctaColor: "text-[#534AB7] hover:text-[#3C3489]",
  },
  {
    id: 3,
    tag: "FOR TEENS & YOUNG ADULTS",
    title: "Preparing for Adulthood with PWealth",
    shortLabel: "PWealth",
    description:
      "A monthly virtual mentorship session equipping teens and young adults with the wisdom and skills to navigate adult life.",
    cta: "Register Now",
    href: "#pwealth",
    Icon: GraduationCap,
    logo: undefined,       // replace with: pwealthLogo
    bgImage: pwealthBg,    // replace with: pwealthBg
    accent: "#185FA5",
    accentLight: "#E6F1FB",
    accentText: "#0C447C",
    tagClass: "bg-blue-100 text-blue-800",
    iconBg: "bg-[#E6F1FB]",
    iconColor: "text-[#185FA5]",
    ctaColor: "text-[#185FA5] hover:text-[#0C447C]",
  },
];


export type Stat = {
  id: string;
  isNumeric: true;
  number: number;
  suffix: string;
  tag: string;
  label: string;
  context: string;
  color: "blue" | "orange" | "green";
};

export const IMPACT_STATS: Stat[] = [
  {
    id: "teens",
    isNumeric: true,
    number: 125,
    suffix: "+",
    tag: "Teens Impacted",
    label: "Young Leaders",
    context:
      "Through Teens Voice, Not Too Young for Wealth, and active mentoring — young people building businesses, pursuing purpose, and leading with character.",
    color: "blue",
  },
  {
    id: "parents",
    isNumeric: true,
    number: 180,
    suffix: "+",
    tag: "Parents, Growing Weekly",
    label: "Committed Parents",
    context:
      "The Parenting Teens Academy is a thriving, committed community reshaping how parents show up for their teenagers.",
    color: "orange",
  },
  {
    id: "views",
    isNumeric: true,
    number: 10000,
    suffix: "+",
    tag: "Views & Counting",
    label: "Masterclass Reach",
    context:
      "The weekly Parenting Teens Academy Masterclass reaches parents across Nigeria and beyond with practical, faith-rooted insight.",
    color: "green",
  },
];


export type Testimonial = {
  name: string;
  username: string;
  role: string;
  body: string;
  img: string;
};
 
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Adaeze Okonkwo",
    username: "@adaeze_o",
    role: "Parent, Lagos",
    body: "The Parenting Teens Academy completely changed how I communicate with my 16-year-old. We went from constant conflict to actual conversations. Pwealth gave me the tools I didn't know I needed.",
    img: "https://avatar.vercel.sh/adaeze",
  },
  {
    name: "Emeka Nwosu",
    username: "@emeka_n",
    role: "Parent, Abuja",
    body: "I used to dread my son's teenage years. After joining PTA, I now look forward to them. The weekly masterclass is something I genuinely anticipate every single week.",
    img: "https://avatar.vercel.sh/emeka",
  },
  {
    name: "Toluwanimi Adeyemi",
    username: "@tolu_wealth",
    role: "Teen, 17 — NTYW Alum",
    body: "Not Too Young for Wealth taught me how to think about money before I even finished secondary school. I started my first small business at 16 because of this program.",
    img: "https://avatar.vercel.sh/toluwanimi",
  },
  {
    name: "Blessing Eze",
    username: "@blessingeze",
    role: "Parent, Port Harcourt",
    body: "Pwealth doesn't just give theory — it gives you conversations to have at the dinner table tonight. Practical, faith-based, and deeply human.",
    img: "https://avatar.vercel.sh/blessing",
  },
  {
    name: "Chukwuemeka Dike",
    username: "@emeka_dike",
    role: "Young Adult, 21",
    body: "Preparing for Adulthood helped me figure out who I am before life forced me to. The mentorship sessions felt personal, not like a lecture.",
    img: "https://avatar.vercel.sh/chukwuemeka",
  },
  {
    name: "Ngozi Obi",
    username: "@ngozi_obi",
    role: "Parent & School Counselor",
    body: "As a counselor I've seen many parenting programs. Pwealth is different — it bridges the gap between parents and teenagers with genuine empathy and lived experience.",
    img: "https://avatar.vercel.sh/ngozi",
  },
  {
    name: "Seun Adesanya",
    username: "@seun_a",
    role: "Teen, 15 — Teens Voice",
    body: "Teens Voice gave me a platform to speak and be heard. I walked out of that event feeling like my voice actually mattered. That changed something in me.",
    img: "https://avatar.vercel.sh/seun",
  },
  {
    name: "Funmilayo Bakare",
    username: "@funmi_b",
    role: "Parent, Ibadan",
    body: "My husband and I were on different pages about how to parent our teenagers. Pwealth gave us a shared language and a shared goal. Our home feels different now.",
    img: "https://avatar.vercel.sh/funmilayo",
  },
  {
    name: "Damilola Fashola",
    username: "@dami_f",
    role: "Young Adult, 19",
    body: "I didn't expect a coaching program to make me cry — in the best way. Pwealth helped me connect the dots between my faith, my future, and my family.",
    img: "https://avatar.vercel.sh/damilola",
  },
  {
    name: "Ifeoma Chibuike",
    username: "@ifeoma_c",
    role: "Parent, Enugu",
    body: "The Fireside Legacy Connect movie nights are brilliant. My kids are talking about values, purpose, and legacy — and they think it was just a fun family evening.",
    img: "https://avatar.vercel.sh/ifeoma",
  },
  {
    name: "Kehinde Olawale",
    username: "@kehinde_o",
    role: "Teen, 16 — NTYW",
    body: "Before NTYW I thought wealth was only for adults. Now I know I can build something before I'm 20. The mindset shift alone is worth everything.",
    img: "https://avatar.vercel.sh/kehinde",
  },
  {
    name: "Amaka Okafor",
    username: "@amaka_ok",
    role: "Parent, Lagos",
    body: "25 years of experience shows in every session. This isn't guesswork — Pwealth speaks from a place of deep knowledge, and you feel it immediately.",
    img: "https://avatar.vercel.sh/amaka",
  },
];

// booksData.ts
import React from "react"

export interface BentoBookFeature {
  name: string
  description: string
  href: string
  cta: string
  className: string
  imageUrl: string
  // Optional background element parameter used if required by the grid system
  background?: React.ReactNode 
}

export const bookFeatures: BentoBookFeature[] = [
  {
    name: "Guiding the Modern Teen",
    description: "A battle-tested blueprint for parents navigating counter-cultural faith, digital boundaries, and deep connection in a chaotic world.",
    href: "https://yourcheckout.com/buy/modern-teen",
    cta: "Buy Now",
    className: "col-span-3 lg:col-span-1",
    imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "The Intentional Family",
    description: "Practical strategies to move your household from survival mode to purpose-driven discipleship on a daily basis.",
    href: "https://yourcheckout.com/buy/intentional-family",
    cta: "Buy Now",
    className: "col-span-3 lg:col-span-2",
    imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Resilient Faith",
    description: "Equipping the next generation with deep intellectual roots and unshakable conviction before they step out into the world.",
    href: "https://yourcheckout.com/buy/resilient-faith",
    cta: "Buy Now",
    className: "col-span-3 lg:col-span-2",
    imageUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "The Shelter of Home",
    description: "Creating an emotionally safe, spiritually vibrant environment where pre-teens and teenagers genuinely love to belong.",
    href: "https://yourcheckout.com/buy/shelter-of-home",
    cta: "Buy Now",
    className: "col-span-3 lg:col-span-1",
    imageUrl: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=600",
  },
]