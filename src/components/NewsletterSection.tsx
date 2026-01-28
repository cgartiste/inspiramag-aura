import { motion } from "framer-motion";
import { Mail, Zap } from "lucide-react";

const NewsletterSection = () => {
  return (
    <section className="relative py-20 px-4 mb-20 md:mb-0">
      <div className="container max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 glow-primary">
            <Mail className="w-7 h-7 text-primary" />
          </div>

          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Rejoignez l'élite de la <span className="gradient-text">performance</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Recevez chaque semaine les dernières découvertes scientifiques 
            pour optimiser votre corps et votre esprit.
          </p>

          {/* Form */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="votre@email.com"
              className="flex-1 px-5 py-3 rounded-full bg-card border border-border focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
            />
            <button className="group px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105 glow-primary">
              S'inscrire
              <Zap className="w-4 h-4 group-hover:animate-pulse" />
            </button>
          </div>

          <p className="text-xs text-muted-foreground mt-4">
            Gratuit • Pas de spam • Désinscription en 1 clic
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
