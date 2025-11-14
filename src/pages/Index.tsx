import { MenuHeader } from "@/components/MenuHeader";
import { MenuSection } from "@/components/MenuSection";
import { PaymentSection } from "@/components/PaymentSection";
import { ParticleBackground } from "@/components/ParticleBackground";
import { StarryBackground } from "@/components/StarryBackground";
import { FestiveScene3D } from "@/components/FestiveScene3D";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [enable3D, setEnable3D] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-dark relative overflow-hidden">
      <FestiveScene3D enabled={enable3D} />
      <ParticleBackground />
      <StarryBackground />
      
      <Button
        onClick={() => setEnable3D(!enable3D)}
        className="fixed top-4 right-4 z-50"
        variant="outline"
        size="sm"
      >
        3D {enable3D ? 'ON' : 'OFF'}
      </Button>
      
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
