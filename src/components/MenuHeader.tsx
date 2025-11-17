export const MenuHeader = () => {
  return (
    <div className="text-center mb-12 animate-fade-in">
      <h1 className="text-5xl md:text-7xl font-light text-primary mb-4 tracking-widest drop-shadow-[0_10px_25px_rgba(249,215,102,0.5)] hover:scale-105 transition-transform duration-300" style={{ textShadow: '0 0 40px hsl(43 95% 68% / 0.4)' }}>
        MENU DE FÊTES
      </h1>
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="h-px w-20 bg-gradient-gold shadow-3d"></div>
        <h2 className="text-2xl md:text-3xl font-light text-foreground tracking-wider drop-shadow-lg">
          LE SLIMANA
        </h2>
        <div className="h-px w-20 bg-gradient-gold shadow-3d"></div>
      </div>
      <div className="h-px w-40 mx-auto bg-border/50"></div>
    </div>
  );
};
