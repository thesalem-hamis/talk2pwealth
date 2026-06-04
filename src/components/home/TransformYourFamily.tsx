import { ArrowRight } from "lucide-react";

export default function TransformYourFamily() {
  return (
    <section className="w-full bg-white py-32 px-6">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Headline */}
        <h2 className="text-[clamp(2.5rem,8vw,5rem)] font-bold text-black tracking-tighter leading-[0.9] mb-8">
          Ready to Transform Your Family?
        </h2>

        {/* Sub-headline */}
        <p className="text-[clamp(1.5rem,4vw,2.5rem)] font-medium text-black mb-12 italic">
          Your Family's Story Isn't Written Yet.
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-black max-w-2xl leading-relaxed mb-12">
          Whether you're a parent navigating a difficult season, a teenager searching for purpose, or a church wanting to invest in families — Talk2Pwealth has a path for you.
        </p>

        {/* Action Button with Arrow Icon */}
        <a
          href="#book"
          className="inline-flex items-center gap-3 px-10 py-5 bg-[#0052FF] text-white font-semibold text-sm tracking-widest uppercase hover:bg-[#0041cc] transition-all duration-300 group"
        >
          <span>Work With Me</span>
          <ArrowRight 
            size={16} 
            className="transition-transform duration-300 group-hover:translate-x-1" 
          />
        </a>
        
      </div>
    </section>
  );
}