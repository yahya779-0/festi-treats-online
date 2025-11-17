export const MenuHeader = () => {
  return (
    <div className="text-center mb-12 animate-fade-in bg-card/50 backdrop-blur-md border border-border/30 rounded-lg p-8 shadow-luxury">
      <h1 className="text-5xl md:text-7xl font-light text-primary mb-4 tracking-widest animate-scale-in">
        MENU DE FÊTES
      </h1>
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="h-px w-20 bg-gradient-gold"></div>
        <h2 className="text-2xl md:text-3xl font-light text-foreground tracking-wider">
          LE SLIMANA
        </h2>
        <div className="h-px w-20 bg-gradient-gold"></div>
      </div>
      <div className="h-px w-40 mx-auto bg-border/50"></div>
    </div>
  );
};
