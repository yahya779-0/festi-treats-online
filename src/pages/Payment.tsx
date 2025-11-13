import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ArrowLeft, CreditCard, Calendar, Users, Mail, Phone, User } from "lucide-react";
import { z } from "zod";

const paymentSchema = z.object({
  firstName: z.string().trim().min(2, "Le prénom doit contenir au moins 2 caractères").max(50),
  lastName: z.string().trim().min(2, "Le nom doit contenir au moins 2 caractères").max(50),
  email: z.string().trim().email("Email invalide").max(255),
  phone: z.string().trim().min(10, "Numéro de téléphone invalide").max(15),
  guests: z.number().min(1, "Minimum 1 personne").max(20, "Maximum 20 personnes"),
  date: z.string().min(1, "Veuillez sélectionner une date"),
});

const Payment = () => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    guests: 1,
    date: "",
  });

  const pricePerPerson = 2200;
  const totalPrice = formData.guests * pricePerPerson;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? parseInt(value) || 1 : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Validation
      paymentSchema.parse(formData);
      
      setIsProcessing(true);
      
      // Simuler le traitement du paiement
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      toast.success("Réservation confirmée ! Vous recevrez un email de confirmation.");
      
      // Rediriger vers la page d'accueil après 2 secondes
      setTimeout(() => {
        navigate("/");
      }, 2000);
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.forEach((err) => {
          toast.error(err.message);
        });
      } else {
        toast.error("Une erreur s'est produite. Veuillez réessayer.");
      }
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-dark">
      <div className="container mx-auto px-4 py-12">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour au menu
        </Button>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Résumé de la commande */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-8 h-fit shadow-luxury">
            <h2 className="text-3xl font-light text-primary mb-6 tracking-wider">
              Résumé
            </h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-start pb-4 border-b border-border/30">
                <div>
                  <h3 className="text-xl font-light text-foreground mb-2">
                    Menu de Fêtes
                  </h3>
                  <p className="text-sm text-muted-foreground">Le Slimana</p>
                </div>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Prix par personne</span>
                <span className="text-foreground">{pricePerPerson} DH</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Nombre de personnes</span>
                <span className="text-foreground">× {formData.guests}</span>
              </div>

              {formData.date && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Date</span>
                  <span className="text-foreground">
                    {new Date(formData.date).toLocaleDateString('fr-FR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </span>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-border/30">
              <div className="flex justify-between items-center">
                <span className="text-xl font-light text-foreground">Total</span>
                <span className="text-3xl font-light text-primary">{totalPrice} DH</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-secondary/30 rounded-lg">
              <p className="text-xs text-muted-foreground text-center">
                Paiement sécurisé et crypté
              </p>
            </div>
          </Card>

          {/* Formulaire de paiement */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-8 shadow-luxury">
            <h2 className="text-3xl font-light text-primary mb-6 tracking-wider">
              Informations de réservation
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-foreground/80">
                    Prénom
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Jean"
                      required
                      className="pl-10 bg-background/50 border-border/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-foreground/80">
                    Nom
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Dupont"
                      required
                      className="pl-10 bg-background/50 border-border/50"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground/80">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="jean.dupont@exemple.com"
                    required
                    className="pl-10 bg-background/50 border-border/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground/80">
                  Téléphone
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+212 6XX XXX XXX"
                    required
                    className="pl-10 bg-background/50 border-border/50"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="guests" className="text-foreground/80">
                    Nombre de personnes
                  </Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="guests"
                      name="guests"
                      type="number"
                      min="1"
                      max="20"
                      value={formData.guests}
                      onChange={handleInputChange}
                      required
                      className="pl-10 bg-background/50 border-border/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date" className="text-foreground/80">
                    Date souhaitée
                  </Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="pl-10 bg-background/50 border-border/50"
                    />
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-gradient-gold hover:opacity-90 text-primary-foreground font-semibold py-6 text-lg rounded-full shadow-luxury transition-all duration-300 hover:scale-105"
              >
                {isProcessing ? (
                  <span className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground mr-2"></div>
                    Traitement en cours...
                  </span>
                ) : (
                  <>
                    <CreditCard className="mr-2 h-5 w-5" />
                    Confirmer et Payer {totalPrice} DH
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                En confirmant votre réservation, vous acceptez nos conditions générales de vente
              </p>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Payment;
