import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const Terms = () => {
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
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Conditions <span className="gradient-text">d'Utilisation</span>
            </h1>
            <p className="text-muted-foreground">
              Dernière mise à jour : 15 janvier 2026
            </p>
          </div>

          {/* Content */}
          <div className="glass-card rounded-2xl p-8 md:p-12 border border-border/50 prose prose-invert max-w-none">
            <h2 className="font-display">1. Acceptation des conditions</h2>
            <p className="text-muted-foreground">
              En accédant à InspiraMag, vous acceptez d'être lié par ces conditions 
              d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas 
              utiliser notre service.
            </p>

            <h2 className="font-display">2. Description du service</h2>
            <p className="text-muted-foreground">
              InspiraMag est une plateforme de contenu dédiée à la science de la 
              performance, du fitness et de l'optimisation personnelle. Nous 
              fournissons des articles, des guides et des ressources éducatives.
            </p>

            <h2 className="font-display">3. Compte utilisateur</h2>
            <p className="text-muted-foreground">
              Pour accéder à certaines fonctionnalités, vous devez créer un compte. 
              Vous êtes responsable de maintenir la confidentialité de vos identifiants 
              et de toutes les activités sous votre compte.
            </p>

            <h2 className="font-display">4. Propriété intellectuelle</h2>
            <p className="text-muted-foreground">
              Tout le contenu présent sur InspiraMag, incluant textes, images, logos 
              et designs, est protégé par les droits d'auteur. Toute reproduction 
              sans autorisation est interdite.
            </p>

            <h2 className="font-display">5. Limitation de responsabilité</h2>
            <p className="text-muted-foreground">
              Les informations fournies sur InspiraMag sont à titre informatif 
              uniquement et ne constituent pas des conseils médicaux. Consultez 
              un professionnel de santé avant de modifier votre régime ou programme 
              d'exercice.
            </p>

            <h2 className="font-display">6. Modifications</h2>
            <p className="text-muted-foreground">
              Nous nous réservons le droit de modifier ces conditions à tout moment. 
              Les modifications entreront en vigueur dès leur publication sur le site.
            </p>

            <h2 className="font-display">7. Contact</h2>
            <p className="text-muted-foreground">
              Pour toute question concernant ces conditions, contactez-nous à : 
              legal@inspiramag.com
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
