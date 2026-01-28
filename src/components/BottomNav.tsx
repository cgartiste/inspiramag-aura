import { motion } from "framer-motion";
import { Home, Search, Bookmark, User } from "lucide-react";
import { useState } from "react";

const navItems = [
  { icon: Home, label: "Accueil" },
  { icon: Search, label: "Recherche" },
  { icon: Bookmark, label: "Sauvegardés" },
  { icon: User, label: "Profil" },
];

const BottomNav = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
    >
      {/* Blur Background */}
      <div className="absolute inset-0 glass-card border-t border-border/50" />
      
      {/* Navigation Items */}
      <div className="relative flex items-center justify-around py-3 px-4">
        {navItems.map((item, index) => (
          <button
            key={item.label}
            onClick={() => setActiveIndex(index)}
            className="relative flex flex-col items-center gap-1 px-4 py-2"
          >
            {/* Active Indicator */}
            {activeIndex === index && (
              <motion.div
                layoutId="activeTab"
                className="absolute -top-1 w-12 h-1 rounded-full bg-primary glow-primary"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            
            <motion.div
              whileTap={{ scale: 0.9 }}
              className={`transition-colors ${
                activeIndex === index ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <item.icon className="w-5 h-5" />
            </motion.div>
            
            <span
              className={`text-[10px] font-medium transition-colors ${
                activeIndex === index ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>

      {/* Safe Area Padding for iOS */}
      <div className="h-safe-area-inset-bottom bg-background/80" />
    </motion.nav>
  );
};

export default BottomNav;
