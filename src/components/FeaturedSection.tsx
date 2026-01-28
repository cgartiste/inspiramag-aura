import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

const FeaturedSection = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Card Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-card to-secondary/10" />
          <div className="absolute inset-0 glass-card" />
          
          {/* Content */}
          <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                Article vedette
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                La science derrière l'hypertrophie musculaire
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Plongez dans les mécanismes cellulaires qui régissent la croissance musculaire. 
                Des protéines à l'ADN, découvrez comment optimiser chaque variable.
              </p>
              <button className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold transition-all hover:scale-105">
                Lire l'article
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            {/* Visual Element */}
            <div className="relative w-full md:w-1/3">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1579722820308-d74e571900a9?w=400&h=400&fit=crop"
                  alt="Muscle science"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -left-4 bottom-1/4 glass-card px-4 py-2 rounded-xl border border-primary/20"
              >
                <p className="text-xs text-muted-foreground">Temps de lecture</p>
                <p className="font-display font-bold text-primary">15 min</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -right-4 top-1/4 glass-card px-4 py-2 rounded-xl border border-secondary/20"
              >
                <p className="text-xs text-muted-foreground">Catégorie</p>
                <p className="font-display font-bold text-secondary">Science</p>
              </motion.div>
            </div>
          </div>
          
          {/* Border Glow */}
          <div className="absolute inset-0 rounded-3xl border border-primary/20" />
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedSection;
