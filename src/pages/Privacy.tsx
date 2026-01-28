import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const Privacy = () => {
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
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Politique de <span className="gradient-text">Confidentialité</span>
            </h1>
            <p className="text-muted-foreground">
              Dernière mise à jour : 15 janvier 2026
            </p>
          </div>

          {/* Content */}
          <div className="glass-card rounded-2xl p-8 md:p-12 border border-border/50 prose prose-invert max-w-none">
            <h2 className="font-display">1. Collecte des données</h2>
            <p className="text-muted-foreground">
              Nous collectons les informations que vous nous fournissez directement, 
              comme votre nom, adresse email et préférences de lecture lorsque vous 
              créez un compte ou vous inscrivez à notre newsletter.
            </p>

            <h2 className="font-display">2. Utilisation des données</h2>
            <p className="text-muted-foreground">
              Vos données sont utilisées pour :
            </p>
            <ul className="text-muted-foreground">
              <li>Personnaliser votre expérience de lecture</li>
              <li>Vous envoyer notre newsletter (si vous l'avez demandé)</li>
              <li>Améliorer nos services et contenus</li>
              <li>Assurer la sécurité de votre compte</li>
            </ul>

            <h2 className="font-display">3. Protection des données</h2>
            <p className="text-muted-foreground">
              Nous mettons en œuvre des mesures de sécurité appropriées pour protéger 
              vos informations personnelles contre tout accès non autorisé, modification, 
              divulgation ou destruction.
            </p>

            <h2 className="font-display">4. Cookies</h2>
            <p className="text-muted-foreground">
              Nous utilisons des cookies pour améliorer votre expérience sur notre site. 
              Vous pouvez configurer votre navigateur pour refuser les cookies, mais 
              certaines fonctionnalités pourraient ne pas fonctionner correctement.
            </p>

            <h2 className="font-display">5. Vos droits</h2>
            <p className="text-muted-foreground">
              Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, 
              de suppression et de portabilité de vos données. Pour exercer ces droits, 
              contactez-nous à privacy@inspiramag.com.
            </p>

            <h2 className="font-display">6. Contact</h2>
            <p className="text-muted-foreground">
              Pour toute question concernant cette politique de confidentialité, 
              vous pouvez nous contacter à : privacy@inspiramag.com
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
