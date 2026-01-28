import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form:", { name, email, subject, message });
  };

  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="container px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Contactez-<span className="gradient-text">nous</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Une question, une suggestion ou une collaboration ? 
              Notre équipe est là pour vous répondre.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="glass-card rounded-xl p-6 border border-border/50">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold mb-2">Email</h3>
                <p className="text-muted-foreground text-sm">contact@inspiramag.com</p>
              </div>

              <div className="glass-card rounded-xl p-6 border border-border/50">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold mb-2">Téléphone</h3>
                <p className="text-muted-foreground text-sm">+33 1 23 45 67 89</p>
              </div>

              <div className="glass-card rounded-xl p-6 border border-border/50">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold mb-2">Adresse</h3>
                <p className="text-muted-foreground text-sm">
                  123 Avenue de l'Innovation<br />
                  75001 Paris, France
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="glass-card rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  <h2 className="font-display text-xl font-bold">Envoyez-nous un message</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      placeholder="Votre nom"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="h-12 bg-background/50 border-border/50"
                    />
                    <Input
                      type="email"
                      placeholder="Votre email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 bg-background/50 border-border/50"
                    />
                  </div>
                  <Input
                    placeholder="Sujet"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="h-12 bg-background/50 border-border/50"
                  />
                  <Textarea
                    placeholder="Votre message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={6}
                    className="bg-background/50 border-border/50 resize-none"
                  />
                  <Button type="submit" className="w-full h-12 glow-primary">
                    <Send className="w-4 h-4 mr-2" />
                    Envoyer le message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
