import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/ui/WhyChooseUs";

export default function Home() {
  return (
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <h1 className="text-2xl text-center">
          <HeroSection/>
          <FeaturedCourses/>
          <WhyChooseUs/>
          <MusicSchoolTestimonials/>
        </h1>
      </main>
  );
}