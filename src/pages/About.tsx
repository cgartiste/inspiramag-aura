import { motion } from "framer-motion";
import { Target, Users, Zap, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "Nous visons l'excellence dans chaque article, basé sur la science et les dernières recherches."
  },
  {
    icon: Users,
    title: "Communauté",
    description: "Une communauté passionnée par la performance et l'optimisation personnelle."
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "À la pointe des découvertes en matière de santé, fitness et performance mentale."
  },
  {
    icon: Award,
    title: "Intégrité",
    description: "Des informations vérifiées, sourcées et présentées avec honnêteté."
  }
];

const team = [
  { name: "Alexandre Martin", role: "Fondateur & CEO", avatar: "A" },
  { name: "Dr. Sophie Dubois", role: "Directrice Scientifique", avatar: "S" },
  { name: "Thomas Bernard", role: "Rédacteur en Chef", avatar: "T" },
  { name: "Marie Laurent", role: "Coach Performance", avatar: "M" },
];

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="container px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              À propos d'<span className="gradient-text">InspiraMag</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Votre source d'inspiration pour repousser les limites 
              de votre potentiel physique et mental.
            </p>
          </div>

          {/* Mission */}
          <div className="glass-card rounded-2xl p-8 md:p-12 border border-border/50 mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-center">
              Notre Mission
            </h2>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
              InspiraMag a été créé avec une vision claire : démocratiser l'accès aux 
              connaissances scientifiques sur la performance humaine. Nous croyons que 
              chacun mérite d'avoir accès aux meilleures informations pour optimiser 
              sa santé, son corps et son esprit. Notre équipe d'experts traduit les 
              dernières recherches en conseils pratiques et applicables au quotidien.
            </p>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-center">
              Nos Valeurs
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card rounded-xl p-6 border border-border/50 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-center">
              Notre Équipe
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card rounded-xl p-6 border border-border/50 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                    <span className="font-display text-2xl font-bold text-primary-foreground">
                      {member.avatar}
                    </span>
                  </div>
                  <h3 className="font-display font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
