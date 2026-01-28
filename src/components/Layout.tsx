import { Outlet } from "react-router-dom";
import Header from "./Header";
import ParticleBackground from "./ParticleBackground";
import ReadingProgress from "./ReadingProgress";
import BottomNav from "./BottomNav";
import heroBg from "@/assets/hero-bg.jpg";

const Layout = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Global Background Image */}
      <div className="fixed inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
      </div>

      {/* Reading Progress Bar */}
      <ReadingProgress />
      
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Outlet />
      </main>
      
      {/* Mobile Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Layout;
