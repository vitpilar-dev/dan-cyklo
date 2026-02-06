import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { TripsSection } from '@/components/TripsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { JoinSection } from '@/components/JoinSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TripsSection />
        <TestimonialsSection />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
