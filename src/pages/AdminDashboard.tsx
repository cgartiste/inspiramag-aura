import { useState } from "react";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, FileText, Users, BarChart3, Settings, 
  Plus, Edit, Trash2, Eye, TrendingUp, TrendingDown,
  UserCheck, Clock, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data
const articles = [
  { id: "1", title: "Les secrets de la créatine", status: "published", views: 1234, date: "15 Jan 2026" },
  { id: "2", title: "Optimiser son sommeil", status: "published", views: 856, date: "12 Jan 2026" },
  { id: "3", title: "Programme HIIT avancé", status: "draft", views: 0, date: "10 Jan 2026" },
  { id: "4", title: "Nutrition pré-entraînement", status: "published", views: 2103, date: "8 Jan 2026" },
];

const users = [
  { id: "1", name: "Jean Dupont", email: "jean@email.com", role: "reader", joined: "15 Jan 2026" },
  { id: "2", name: "Marie Martin", email: "marie@email.com", role: "reader", joined: "12 Jan 2026" },
  { id: "3", name: "Thomas Bernard", email: "thomas@email.com", role: "author", joined: "1 Jan 2026" },
];

const stats = {
  totalViews: 45678,
  totalUsers: 1234,
  totalArticles: 156,
  avgReadTime: "4:32",
  viewsTrend: 12.5,
  usersTrend: 8.3,
};

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="container px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="font-display text-3xl font-bold mb-2">
                Dashboard <span className="gradient-text">Admin</span>
              </h1>
              <p className="text-muted-foreground">Gérez votre contenu et vos utilisateurs</p>
            </div>
            <Button className="glow-primary">
              <Plus className="w-4 h-4 mr-2" />
              Nouvel article
            </Button>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="glass-card rounded-xl p-5 border border-border/50">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <div className="flex items-center gap-1 text-xs text-green-400">
                  <TrendingUp className="w-3 h-3" />
                  +{stats.viewsTrend}%
                </div>
              </div>
              <p className="text-2xl font-display font-bold">{stats.totalViews.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">Vues totales</p>
            </div>

            <div className="glass-card rounded-xl p-5 border border-border/50">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-secondary" />
                </div>
                <div className="flex items-center gap-1 text-xs text-green-400">
                  <TrendingUp className="w-3 h-3" />
                  +{stats.usersTrend}%
                </div>
              </div>
              <p className="text-2xl font-display font-bold">{stats.totalUsers.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">Utilisateurs</p>
            </div>

            <div className="glass-card rounded-xl p-5 border border-border/50">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-accent" />
                </div>
              </div>
              <p className="text-2xl font-display font-bold">{stats.totalArticles}</p>
              <p className="text-xs text-muted-foreground">Articles publiés</p>
            </div>

            <div className="glass-card rounded-xl p-5 border border-border/50">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
              </div>
              <p className="text-2xl font-display font-bold">{stats.avgReadTime}</p>
              <p className="text-xs text-muted-foreground">Temps moyen de lecture</p>
            </div>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="w-full justify-start bg-card border border-border/50 p-1 rounded-xl mb-6 overflow-x-auto">
              <TabsTrigger value="overview" className="rounded-lg">
                <LayoutDashboard className="w-4 h-4 mr-2" />
                Aperçu
              </TabsTrigger>
              <TabsTrigger value="articles" className="rounded-lg">
                <FileText className="w-4 h-4 mr-2" />
                Articles
              </TabsTrigger>
              <TabsTrigger value="users" className="rounded-lg">
                <Users className="w-4 h-4 mr-2" />
                Utilisateurs
              </TabsTrigger>
              <TabsTrigger value="analytics" className="rounded-lg">
                <BarChart3 className="w-4 h-4 mr-2" />
                Analytics
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="grid lg:grid-cols-2 gap-6">
              {/* Recent Articles */}
              <div className="glass-card rounded-2xl p-6 border border-border/50">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-display font-bold text-lg">Articles récents</h2>
                  <Button variant="ghost" size="sm" onClick={() => setActiveTab("articles")}>
                    Voir tout <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
                <div className="space-y-3">
                  {articles.slice(0, 4).map((article) => (
                    <div key={article.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-muted/50 transition-colors">
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate mb-1">{article.title}</p>
                        <div className="flex items-center gap-2 text-xs">
                          <span className={`px-2 py-0.5 rounded-full ${
                            article.status === "published" 
                              ? "bg-green-500/10 text-green-400" 
                              : "bg-yellow-500/10 text-yellow-400"
                          }`}>
                            {article.status === "published" ? "Publié" : "Brouillon"}
                          </span>
                          <span className="text-muted-foreground">{article.views} vues</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                          <Edit className="w-4 h-4 text-muted-foreground" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Users */}
              <div className="glass-card rounded-2xl p-6 border border-border/50">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-display font-bold text-lg">Nouveaux utilisateurs</h2>
                  <Button variant="ghost" size="sm" onClick={() => setActiveTab("users")}>
                    Voir tout <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
                <div className="space-y-3">
                  {users.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                          <span className="text-sm font-bold text-primary-foreground">
                            {user.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-xs text-muted-foreground">{user.email}</p>
                        </div>
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        user.role === "author" 
                          ? "bg-primary/10 text-primary" 
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {user.role === "author" ? "Auteur" : "Lecteur"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="articles">
              <div className="glass-card rounded-2xl border border-border/50 overflow-hidden">
                <div className="p-4 border-b border-border/50 flex items-center justify-between">
                  <h2 className="font-display font-bold">Tous les articles</h2>
                  <Button size="sm" className="glow-primary">
                    <Plus className="w-4 h-4 mr-2" />
                    Nouveau
                  </Button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">Titre</th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">Statut</th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">Vues</th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">Date</th>
                        <th className="text-right px-4 py-3 text-sm font-medium text-muted-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {articles.map((article) => (
                        <tr key={article.id} className="border-t border-border/30 hover:bg-muted/30">
                          <td className="px-4 py-3 font-medium">{article.title}</td>
                          <td className="px-4 py-3">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              article.status === "published" 
                                ? "bg-green-500/10 text-green-400" 
                                : "bg-yellow-500/10 text-yellow-400"
                            }`}>
                              {article.status === "published" ? "Publié" : "Brouillon"}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-muted-foreground">{article.views.toLocaleString()}</td>
                          <td className="px-4 py-3 text-muted-foreground">{article.date}</td>
                          <td className="px-4 py-3">
                            <div className="flex items-center justify-end gap-1">
                              <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                                <Eye className="w-4 h-4 text-muted-foreground" />
                              </button>
                              <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                                <Edit className="w-4 h-4 text-muted-foreground" />
                              </button>
                              <button className="p-2 hover:bg-destructive/10 rounded-lg transition-colors">
                                <Trash2 className="w-4 h-4 text-destructive" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="users">
              <div className="glass-card rounded-2xl border border-border/50 overflow-hidden">
                <div className="p-4 border-b border-border/50 flex items-center justify-between">
                  <h2 className="font-display font-bold">Tous les utilisateurs</h2>
                  <div className="text-sm text-muted-foreground">
                    {stats.totalUsers} utilisateurs
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">Utilisateur</th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">Email</th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">Rôle</th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">Inscrit le</th>
                        <th className="text-right px-4 py-3 text-sm font-medium text-muted-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr key={user.id} className="border-t border-border/30 hover:bg-muted/30">
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                <span className="text-xs font-bold text-primary-foreground">
                                  {user.name.charAt(0)}
                                </span>
                              </div>
                              <span className="font-medium">{user.name}</span>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-muted-foreground">{user.email}</td>
                          <td className="px-4 py-3">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              user.role === "author" 
                                ? "bg-primary/10 text-primary" 
                                : "bg-muted text-muted-foreground"
                            }`}>
                              {user.role === "author" ? "Auteur" : "Lecteur"}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-muted-foreground">{user.joined}</td>
                          <td className="px-4 py-3">
                            <div className="flex items-center justify-end gap-1">
                              <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                                <Edit className="w-4 h-4 text-muted-foreground" />
                              </button>
                              <button className="p-2 hover:bg-destructive/10 rounded-lg transition-colors">
                                <Trash2 className="w-4 h-4 text-destructive" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="analytics">
              <div className="glass-card rounded-2xl p-8 border border-border/50 text-center">
                <BarChart3 className="w-16 h-16 text-primary mx-auto mb-4 opacity-50" />
                <h2 className="font-display text-xl font-bold mb-2">Analytics détaillées</h2>
                <p className="text-muted-foreground mb-6">
                  Graphiques et statistiques avancées sur vos performances
                </p>
                <Button variant="outline">
                  Voir les analytics complètes
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;
