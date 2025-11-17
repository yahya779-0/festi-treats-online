import { MenuHeader } from "@/components/MenuHeader";
import { MenuSection } from "@/components/MenuSection";
import { PaymentSection } from "@/components/PaymentSection";
import festiveBg from "@/assets/festive-champagne.jpg";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${festiveBg})` }}
      />
      <div className="absolute inset-0 bg-background/60" />
      
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <MenuHeader />
        <MenuSection />
        <PaymentSection />
      </div>
      
      <footer className="text-center py-8 text-muted-foreground text-sm border-t border-border/30 relative z-10">
        <p>Le Slimana © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Index;
