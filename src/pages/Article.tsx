import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, User, Heart, Bookmark, Share2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock article data
const mockArticle = {
  id: "1",
  title: "Les secrets de la créatine pour optimiser vos performances",
  category: "Supplément",
  author: "Dr. Marie Laurent",
  date: "15 Jan 2026",
  readTime: "8 min",
  image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200",
  content: `
    <p>La créatine est l'un des suppléments les plus étudiés et les plus efficaces pour améliorer les performances sportives. Dans cet article, nous explorons les mécanismes scientifiques derrière son efficacité.</p>
    
    <h2>Qu'est-ce que la créatine ?</h2>
    <p>La créatine est un composé naturellement présent dans nos muscles, synthétisé à partir de trois acides aminés : l'arginine, la glycine et la méthionine. Elle joue un rôle crucial dans la production d'énergie pendant les efforts intenses.</p>
    
    <h2>Les bénéfices prouvés</h2>
    <p>Les recherches scientifiques ont démontré plusieurs avantages majeurs :</p>
    <ul>
      <li>Augmentation de la force musculaire de 5 à 15%</li>
      <li>Amélioration des performances en sprint</li>
      <li>Accélération de la récupération</li>
      <li>Potentiels bénéfices cognitifs</li>
    </ul>
    
    <h2>Dosage optimal</h2>
    <p>La dose recommandée est de 3 à 5g par jour. Une phase de charge n'est pas nécessaire mais peut accélérer la saturation musculaire.</p>
    
    <h2>Conclusion</h2>
    <p>La créatine reste un incontournable pour tout athlète cherchant à optimiser ses performances. Son profil de sécurité excellent et son efficacité prouvée en font un choix de premier ordre.</p>
  `,
  likes: 234,
  comments: 45,
};

const Article = () => {
  const { slug } = useParams();

  return (
    <div className="min-h-screen pt-20 pb-24">
      {/* Back Button */}
      <div className="container px-4 py-4">
        <Button variant="ghost" size="sm" asChild>
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4" />
            Retour
          </Link>
        </Button>
      </div>

      {/* Article Header */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container px-4"
      >
        {/* Category Badge */}
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          {mockArticle.category}
        </span>

        {/* Title */}
        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          {mockArticle.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            {mockArticle.author}
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {mockArticle.date}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {mockArticle.readTime} de lecture
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative rounded-2xl overflow-hidden mb-8">
          <img
            src={mockArticle.image}
            alt={mockArticle.title}
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>

        {/* Action Bar */}
        <div className="flex items-center justify-between py-4 border-y border-border/50 mb-8">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Heart className="w-5 h-5" />
              <span className="text-sm">{mockArticle.likes}</span>
            </button>
            <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm">{mockArticle.comments}</span>
            </button>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors">
              <Bookmark className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-invert prose-lg max-w-none
            prose-headings:font-display prose-headings:text-foreground
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-strong:text-foreground
            prose-ul:text-muted-foreground
            prose-li:marker:text-primary"
          dangerouslySetInnerHTML={{ __html: mockArticle.content }}
        />

        {/* Author Card */}
        <div className="glass-card rounded-2xl p-6 mt-12 border border-border/50">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-display font-bold text-lg mb-1">{mockArticle.author}</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Expert en nutrition sportive et performance athlétique. 
                Docteur en sciences du sport.
              </p>
              <Button variant="outline" size="sm">
                Voir le profil
              </Button>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
};

export default Article;
