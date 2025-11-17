import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const PaymentSection = () => {
  const navigate = useNavigate();

  const handlePayment = () => {
    navigate("/paiement");
  };

  return (
    <div className="text-center mt-12 animate-fade-in">
      <div className="mb-6 p-8 bg-card/20 backdrop-blur-sm rounded-2xl shadow-3d inline-block border border-primary/20">
        <p className="text-3xl md:text-4xl font-light text-primary mb-2 drop-shadow-lg">
          2200 DH
        </p>
        <p className="text-sm text-muted-foreground">par personne</p>
      </div>
      
      <Button
        onClick={handlePayment}
        size="lg"
        className="bg-gradient-gold hover:opacity-90 text-primary-foreground font-semibold px-12 py-6 text-lg rounded-full shadow-3d-hover transition-all duration-300 hover:scale-110 hover:-translate-y-2"
        style={{ transformStyle: 'preserve-3d' }}
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
