import { MenuHeader } from "@/components/MenuHeader";
import { MenuSection } from "@/components/MenuSection";
import { PaymentSection } from "@/components/PaymentSection";
import { ParticleBackground } from "@/components/ParticleBackground";
import { StarryBackground } from "@/components/StarryBackground";
import { FestiveScene3D } from "@/components/FestiveScene3D";
import { SnowEffect } from "@/components/SnowEffect";

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <FestiveScene3D />
      <ParticleBackground />
      <StarryBackground />
      <SnowEffect />
      
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
