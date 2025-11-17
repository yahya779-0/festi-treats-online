import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const PaymentSection = () => {
  const navigate = useNavigate();

  const handlePayment = () => {
    navigate("/paiement");
  };

  return (
    <div className="text-center mt-16 animate-fade-in">
      <div className="mb-8 backdrop-blur-sm bg-card/30 inline-block px-12 py-6 rounded-2xl border border-primary/30 shadow-luxury">
        <p className="text-5xl md:text-6xl font-light text-primary mb-3 tracking-wider drop-shadow-[0_0_15px_rgba(245,203,92,0.4)]">
          2200 DH
        </p>
        <p className="text-base text-muted-foreground tracking-widest uppercase">par personne</p>
      </div>
      
      <Button
        onClick={handlePayment}
        size="lg"
        className="bg-gradient-gold hover:opacity-90 text-primary-foreground font-semibold px-16 py-8 text-xl rounded-full shadow-luxury transition-all duration-300 hover:scale-105 hover:shadow-[0_30px_80px_-20px_rgba(245,203,92,0.5)] border-2 border-primary/20"
      >
        <CreditCard className="mr-3 h-6 w-6" />
        Réserver Maintenant
      </Button>
      
      <p className="mt-6 text-sm text-muted-foreground backdrop-blur-sm bg-background/20 inline-block px-6 py-2 rounded-full">
        🔒 Paiement sécurisé
      </p>
    </div>
  );
};
