import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ArticleCard from "@/components/ArticleCard";

// Mock articles data
const allArticles = [
  {
    id: "1",
    title: "Les secrets de la créatine pour optimiser vos performances",
    excerpt: "Découvrez comment ce supplément peut transformer votre entraînement.",
    category: "supplement",
    categoryLabel: "Supplément",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600",
    readTime: "8 min",
    date: "15 Jan 2026",
  },
  {
    id: "2",
    title: "Programme HIIT : Brûlez plus de calories en moins de temps",
    excerpt: "Le guide complet pour des entraînements haute intensité efficaces.",
    category: "exercice",
    categoryLabel: "Exercice",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600",
    readTime: "12 min",
    date: "14 Jan 2026",
  },
  {
    id: "3",
    title: "Le jeûne intermittent : Guide scientifique complet",
    excerpt: "Tout ce que vous devez savoir sur cette méthode populaire.",
    category: "regime",
    categoryLabel: "Régime",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600",
    readTime: "15 min",
    date: "13 Jan 2026",
  },
  {
    id: "4",
    title: "Optimiser son sommeil pour la récupération musculaire",
    excerpt: "Les clés d'un sommeil réparateur pour maximiser vos gains.",
    category: "psychologie",
    categoryLabel: "Psychologie",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600",
    readTime: "10 min",
    date: "12 Jan 2026",
  },
  {
    id: "5",
    title: "Testostérone naturelle : Comment l'optimiser",
    excerpt: "Les méthodes naturelles pour booster votre production hormonale.",
    category: "hormones",
    categoryLabel: "Hormones",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600",
    readTime: "11 min",
    date: "11 Jan 2026",
  },
];

const categoryNames: Record<string, string> = {
  exercice: "Exercice",
  regime: "Régime",
  supplement: "Supplément",
  psychologie: "Psychologie",
  hormones: "Hormones",
};

const Category = () => {
  const { slug } = useParams();
  const categoryName = categoryNames[slug || ""] || slug;
  
  const filteredArticles = allArticles.filter(
    (article) => article.category === slug
  );

  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Catégorie
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {categoryName}
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explorez tous nos articles dans la catégorie {categoryName?.toLowerCase()}
            </p>
          </div>

          {/* Articles Grid */}
          {filteredArticles.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ArticleCard {...article} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground">
                Aucun article dans cette catégorie pour le moment.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Category;
