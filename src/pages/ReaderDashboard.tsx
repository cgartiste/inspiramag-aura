import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  User, Heart, History, Settings, LogOut, 
  Clock, Bookmark, TrendingUp, ChevronRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data
const favorites = [
  { id: "1", title: "Les secrets de la créatine", category: "Supplément", date: "15 Jan 2026" },
  { id: "2", title: "Optimiser son sommeil", category: "Psychologie", date: "12 Jan 2026" },
  { id: "3", title: "Programme HIIT avancé", category: "Exercice", date: "10 Jan 2026" },
];

const history = [
  { id: "4", title: "Nutrition pré-entraînement", category: "Régime", date: "Aujourd'hui" },
  { id: "1", title: "Les secrets de la créatine", category: "Supplément", date: "Hier" },
  { id: "5", title: "Testostérone naturelle", category: "Hormones", date: "Il y a 3 jours" },
  { id: "2", title: "Optimiser son sommeil", category: "Psychologie", date: "Il y a 1 semaine" },
];

const stats = {
  articlesRead: 42,
  timeSpent: "12h 30min",
  favorites: 8,
  streak: 7,
};

const ReaderDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="container px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="font-display text-2xl font-bold text-primary-foreground">JD</span>
              </div>
              <div>
                <h1 className="font-display text-2xl font-bold">Jean Dupont</h1>
                <p className="text-muted-foreground">Membre depuis Janvier 2026</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Paramètres
              </Button>
              <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                <LogOut className="w-4 h-4 mr-2" />
                Déconnexion
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="glass-card rounded-xl p-4 border border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-display font-bold">{stats.articlesRead}</p>
                  <p className="text-xs text-muted-foreground">Articles lus</p>
                </div>
              </div>
            </div>
            <div className="glass-card rounded-xl p-4 border border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-display font-bold">{stats.timeSpent}</p>
                  <p className="text-xs text-muted-foreground">Temps de lecture</p>
                </div>
              </div>
            </div>
            <div className="glass-card rounded-xl p-4 border border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-display font-bold">{stats.favorites}</p>
                  <p className="text-xs text-muted-foreground">Favoris</p>
                </div>
              </div>
            </div>
            <div className="glass-card rounded-xl p-4 border border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Bookmark className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-display font-bold">{stats.streak} jours</p>
                  <p className="text-xs text-muted-foreground">Série en cours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="w-full justify-start bg-card border border-border/50 p-1 rounded-xl mb-6">
              <TabsTrigger value="overview" className="rounded-lg">
                <User className="w-4 h-4 mr-2" />
                Aperçu
              </TabsTrigger>
              <TabsTrigger value="favorites" className="rounded-lg">
                <Heart className="w-4 h-4 mr-2" />
                Favoris
              </TabsTrigger>
              <TabsTrigger value="history" className="rounded-lg">
                <History className="w-4 h-4 mr-2" />
                Historique
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* Recent Favorites */}
              <div className="glass-card rounded-2xl p-6 border border-border/50">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-display font-bold text-lg">Favoris récents</h2>
                  <Button variant="ghost" size="sm" onClick={() => setActiveTab("favorites")}>
                    Voir tout <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
                <div className="space-y-3">
                  {favorites.slice(0, 3).map((article) => (
                    <Link
                      key={article.id}
                      to={`/article/${article.id}`}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-muted/50 transition-colors"
                    >
                      <div>
                        <p className="font-medium mb-1">{article.title}</p>
                        <p className="text-xs text-muted-foreground">{article.category}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Reading History */}
              <div className="glass-card rounded-2xl p-6 border border-border/50">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-display font-bold text-lg">Historique récent</h2>
                  <Button variant="ghost" size="sm" onClick={() => setActiveTab("history")}>
                    Voir tout <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
                <div className="space-y-3">
                  {history.slice(0, 3).map((article, index) => (
                    <Link
                      key={`${article.id}-${index}`}
                      to={`/article/${article.id}`}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-muted/50 transition-colors"
                    >
                      <div>
                        <p className="font-medium mb-1">{article.title}</p>
                        <p className="text-xs text-muted-foreground">{article.date}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    </Link>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="favorites">
              <div className="glass-card rounded-2xl p-6 border border-border/50">
                <h2 className="font-display font-bold text-lg mb-4">Mes favoris</h2>
                <div className="space-y-3">
                  {favorites.map((article) => (
                    <Link
                      key={article.id}
                      to={`/article/${article.id}`}
                      className="flex items-center justify-between p-4 rounded-xl hover:bg-muted/50 transition-colors border border-border/30"
                    >
                      <div>
                        <p className="font-medium mb-1">{article.title}</p>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                            {article.category}
                          </span>
                          <span>{article.date}</span>
                        </div>
                      </div>
                      <Heart className="w-5 h-5 text-primary fill-primary" />
                    </Link>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="history">
              <div className="glass-card rounded-2xl p-6 border border-border/50">
                <h2 className="font-display font-bold text-lg mb-4">Historique de lecture</h2>
                <div className="space-y-3">
                  {history.map((article, index) => (
                    <Link
                      key={`${article.id}-${index}`}
                      to={`/article/${article.id}`}
                      className="flex items-center justify-between p-4 rounded-xl hover:bg-muted/50 transition-colors border border-border/30"
                    >
                      <div>
                        <p className="font-medium mb-1">{article.title}</p>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                            {article.category}
                          </span>
                          <span>{article.date}</span>
                        </div>
                      </div>
                      <Clock className="w-5 h-5 text-muted-foreground" />
                    </Link>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default ReaderDashboard;
