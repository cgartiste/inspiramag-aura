import { motion } from "framer-motion";
import { Filter, TrendingUp } from "lucide-react";
import ArticleCard from "./ArticleCard";

const articles = [
  {
    id: 1,
    title: "Créatine : Le guide ultime pour optimiser votre performance",
    excerpt: "Découvrez les mécanismes moléculaires de la créatine et comment elle peut transformer votre entraînement.",
    category: "Science",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Protéines et récupération musculaire : Ce que dit la science",
    excerpt: "Analyse approfondie des dernières études sur la synthèse protéique et la fenêtre anabolique.",
    category: "Nutrition",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "HIIT vs Cardio traditionnel : Le verdict scientifique",
    excerpt: "Comparaison métabolique des deux approches et leurs effets sur la composition corporelle.",
    category: "Fitness",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Neuroplasticité et performance sportive",
    excerpt: "Comment entraîner votre cerveau pour atteindre des niveaux de performance inédits.",
    category: "Mindset",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Les acides aminés essentiels : Votre arsenal secret",
    excerpt: "Guide complet sur les BCAAs, la leucine et leur rôle dans l'hypertrophie musculaire.",
    category: "Science",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Sommeil et hormones de croissance : Le lien crucial",
    excerpt: "L'impact du sommeil profond sur la sécrétion de GH et la récupération musculaire.",
    category: "Récupération",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&h=400&fit=crop",
  },
];

const categories = ["Tous", "Science", "Nutrition", "Fitness", "Mindset", "Récupération"];

const ArticleList = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/20 mb-6">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Tendances</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Articles <span className="gradient-text">populaires</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Les dernières découvertes scientifiques pour optimiser votre performance
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 overflow-x-auto pb-4 mb-8 scrollbar-none"
        >
          <button className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-border shrink-0">
            <Filter className="w-4 h-4" />
            <span className="text-sm">Filtres</span>
          </button>
          {categories.map((category, index) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium shrink-0 transition-all ${
                index === 0
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border hover:border-primary/50"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <ArticleCard key={article.id} {...article} index={index} />
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 rounded-full glass-card border border-primary/30 font-semibold transition-all hover:border-primary hover:bg-primary/5 hover:glow-primary">
            Charger plus d'articles
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticleList;
