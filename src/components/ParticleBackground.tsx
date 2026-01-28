import { motion } from "framer-motion";

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 10 + 10,
  delay: Math.random() * 5,
}));

const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-accent/5 rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: "3s" }} />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/30"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid Lines */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `
          linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
          linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }} />
    </div>
  );
};

export default ParticleBackground;
