export const MenuHeader = () => {
  return (
    <div className="text-center mb-16 animate-fade-in relative">
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-6xl md:text-8xl">
        🎆
      </div>
      <h1 className="text-6xl md:text-8xl font-light text-primary mb-6 tracking-widest font-['Cormorant_Garamond'] italic">
        New Year
      </h1>
      <h2 className="text-3xl md:text-5xl font-light text-primary mb-8 tracking-[0.3em]">
        Menu
      </h2>
      <div className="flex items-center justify-center gap-6 mb-6">
        <div className="text-4xl">🥂</div>
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        <div className="text-4xl">🥂</div>
      </div>
    </div>
  );
};
