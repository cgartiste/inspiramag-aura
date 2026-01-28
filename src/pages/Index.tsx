import ParticleBackground from "@/components/ParticleBackground";
import Hero from "@/components/Hero";
import ArticleList from "@/components/ArticleList";
import FeaturedSection from "@/components/FeaturedSection";
import NewsletterSection from "@/components/NewsletterSection";
import BottomNav from "@/components/BottomNav";
import ReadingProgress from "@/components/ReadingProgress";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Reading Progress Bar */}
      <ReadingProgress />
      
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <FeaturedSection />
        <ArticleList />
        <NewsletterSection />
      </main>
      
      {/* Mobile Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Index;
