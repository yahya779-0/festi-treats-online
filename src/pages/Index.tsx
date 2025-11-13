import { MenuHeader } from "@/components/MenuHeader";
import { MenuSection } from "@/components/MenuSection";
import { PaymentSection } from "@/components/PaymentSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <MenuHeader />
        <MenuSection />
        <PaymentSection />
      </div>
      
      <footer className="text-center py-8 text-muted-foreground text-sm border-t border-border/30">
        <p>Le Slimana © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Index;
