import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";
import { toast } from "sonner";

export const PaymentSection = () => {
  const handlePayment = () => {
    toast.info("Le paiement sera disponible bientôt");
  };

  return (
    <div className="text-center mt-12 animate-fade-in">
      <div className="mb-6">
        <p className="text-3xl md:text-4xl font-light text-primary mb-2">
          2200 DH
        </p>
        <p className="text-sm text-muted-foreground">par personne</p>
      </div>
      
      <Button
        onClick={handlePayment}
        size="lg"
        className="bg-gradient-gold hover:opacity-90 text-primary-foreground font-semibold px-12 py-6 text-lg rounded-full shadow-luxury transition-all duration-300 hover:scale-105"
      >
        <CreditCard className="mr-2 h-5 w-5" />
        Réserver Maintenant
      </Button>
      
      <p className="mt-4 text-xs text-muted-foreground">
        Paiement sécurisé
      </p>
    </div>
  );
};
