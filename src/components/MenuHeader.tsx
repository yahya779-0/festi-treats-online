export const MenuHeader = () => {
  return (
    <div className="text-center mb-16 animate-fade-in">
      <h1 className="text-6xl md:text-8xl font-light text-primary mb-6 tracking-widest drop-shadow-[0_0_20px_rgba(245,203,92,0.3)]">
        MENU DE FÊTES
      </h1>
      <div className="flex items-center justify-center gap-6 mb-8">
        <div className="h-0.5 w-24 bg-gradient-gold shadow-luxury"></div>
        <h2 className="text-3xl md:text-4xl font-light text-foreground tracking-[0.3em] backdrop-blur-sm bg-background/20 px-6 py-2 rounded-full border border-primary/20">
          LE SLIMANA
        </h2>
        <div className="h-0.5 w-24 bg-gradient-gold shadow-luxury"></div>
      </div>
      <div className="h-px w-48 mx-auto bg-gradient-gold opacity-50"></div>
    </div>
  );
};
