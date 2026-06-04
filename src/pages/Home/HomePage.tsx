import AboutSection from "@/components/home/AboutSection"
import HeroSection from "@/components/home/HomeSection"
import ImpactSection from "@/components/home/ImpactCard"
import Marquee from "@/components/home/Marquee"
import { MediaSection } from "@/components/home/MediaSection"
import  NewsFeedSection   from "@/components/home/NewsfeedSection"
import ProgramsOverview from "@/components/home/ProgramsOverview"
import {TestimonialsSection} from "@/components/home/TestimonialSection"
import PublicationShelf from "@/components/home/PublicationShelf"
import FiresideLegacyConnect from "@/components/home/FiresideLegacyConnect"
import TransformYourFamily from "@/components/home/TransformYourFamily"




const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Marquee />
      <AboutSection />
      <ProgramsOverview />
      <ImpactSection />
      <TestimonialsSection/>
      <PublicationShelf />
      <MediaSection />
      <NewsFeedSection />
      <FiresideLegacyConnect />
      <TransformYourFamily />
    </div>
    
  )
}

export default HomePage