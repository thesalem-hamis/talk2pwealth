import { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo-black.png";
import { Sparkles, Zap, Star, Flame, CircleDot } from "lucide-react";

const achievements = [
  "25+ YEARS OF IMPACT",
  "180+ PARENTS COACHED",
  "4 PUBLISHED BOOKS",
  "20,000+ LIVES REACHED",
  "4 ACTIVE PROGRAMS",
  "SUPER FM LAGOS",
  "EXECUTIVE COACH",
  "YOUTH DEVELOPMENT EXPERT",

  // duplicate for seamless loop
  "25+ YEARS OF IMPACT",
  "180+ PARENTS COACHED",
  "4 PUBLISHED BOOKS",
  "20,000+ LIVES REACHED",
  "4 ACTIVE PROGRAMS",
  "SUPER FM LAGOS",
  "EXECUTIVE COACH",
  "YOUTH DEVELOPMENT EXPERT",
];

export default function AuthorityBar() {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="
        w-full
        overflow-hidden
        // bg-gradient-to-r
        // from-zinc-100
        // via-zinc-50
        // to-zinc-100
        bg-white
        border-b
        border-black/10
      "
    >
      {/* AUTHORITY RIBBON */}
      <div className="flex items-center overflow-hidden">
        {/* LOGO BLOCK */}
        <div
          className="
            shrink-0
            flex
            items-center
            gap-5
            px-8
            md:px-12
            py-8
            border-r
            border-black/10
            bg-white
            relative
            z-20
          "
        >
          <img
            src={logo}
            alt="Dapo Bankole"
            className="h-14 md:h-16 w-auto object-contain"
          />

          <div className="hidden sm:block">
            <h3 className="font-['Poppins'] font-bold text-xl text-black">
              Pastor Wealth
            </h3>

            <p className="font-['Poppins'] uppercase tracking-[0.3em] text-xs text-black/50 mt-1">
              Executive Coach
            </p>
          </div>
        </div>

        {/* MARQUEE */}
        <div className="relative flex-1 overflow-hidden py-8">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex items-center gap-16 whitespace-nowrap w-max animate-[marquee_28s_linear_infinite]">
            {achievements.map((item, index) => (
              <div key={index} className="flex items-center gap-16">
                <span
                  className="
                    font-['Poppins']
                    font-bold
                    text-2xl
                    md:text-5xl
                    tracking-tight
                    text-black/80
                  "
                >
                  {item}
                </span>

                {/* Abstract Icon - Star with sparkle effect */}
                <div className="text-black/90">
                  {/* <Star 
                    size={36} 
                    className="inline-block md:w-10 md:h-10"
                    strokeWidth={1.5}
                    fill="#0052FF"
                    fillOpacity={0.3}
                  /> */}
                  |
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}