import { motion } from "framer-motion";
import { Scale } from "lucide-react";

const Legal = () => {
  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="container px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Scale className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Mentions <span className="gradient-text">Légales</span>
            </h1>
          </div>

          {/* Content */}
          <div className="glass-card rounded-2xl p-8 md:p-12 border border-border/50 prose prose-invert max-w-none">
            <h2 className="font-display">Éditeur du site</h2>
            <p className="text-muted-foreground">
              <strong>InspiraMag SAS</strong><br />
              Capital social : 10 000 €<br />
              RCS Paris B 123 456 789<br />
              Siège social : 123 Avenue de l'Innovation, 75001 Paris<br />
              Téléphone : +33 1 23 45 67 89<br />
              Email : contact@inspiramag.com
            </p>

            <h2 className="font-display">Directeur de la publication</h2>
            <p className="text-muted-foreground">
              Alexandre Martin, Président
            </p>

            <h2 className="font-display">Hébergement</h2>
            <p className="text-muted-foreground">
              Le site est hébergé par :<br />
              <strong>Lovable Technologies</strong><br />
              San Francisco, CA, USA
            </p>

            <h2 className="font-display">Propriété intellectuelle</h2>
            <p className="text-muted-foreground">
              L'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) 
              est protégé par le droit d'auteur. Toute reproduction, représentation, 
              modification, publication, transmission, ou dénaturation, totale ou 
              partielle du site ou de son contenu, par quelque procédé que ce soit, 
              et sur quelque support que ce soit est interdite.
            </p>

            <h2 className="font-display">Données personnelles</h2>
            <p className="text-muted-foreground">
              Conformément à la loi Informatique et Libertés du 6 janvier 1978 
              modifiée et au Règlement Général sur la Protection des Données (RGPD), 
              vous disposez d'un droit d'accès, de rectification et de suppression 
              des données vous concernant.
            </p>
            <p className="text-muted-foreground">
              Pour exercer ce droit, veuillez contacter : privacy@inspiramag.com
            </p>

            <h2 className="font-display">Cookies</h2>
            <p className="text-muted-foreground">
              Ce site utilise des cookies pour améliorer l'expérience utilisateur 
              et réaliser des statistiques de visite. En poursuivant votre navigation, 
              vous acceptez l'utilisation de cookies conformément à notre politique 
              de confidentialité.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Legal;
