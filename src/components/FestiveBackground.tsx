import { useEffect, useState } from "react";

export const FestiveBackground = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const particleArray = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 3,
    }));
    setParticles(particleArray);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden bg-gradient-to-b from-background via-background/95 to-background">
      {/* Champagne Glass Left */}
      <div className="absolute top-20 left-[5%] md:left-[10%] w-32 md:w-48 animate-champagne-left">
        <svg viewBox="0 0 200 400" className="w-full h-full drop-shadow-2xl">
          {/* Glass outline */}
          <path
            d="M 60 80 L 50 200 L 50 280 L 70 280 L 70 350 L 130 350 L 130 280 L 150 280 L 150 200 L 140 80 Z"
            fill="none"
            stroke="hsl(43 95% 68%)"
            strokeWidth="3"
            className="animate-glow"
          />
          {/* Champagne liquid */}
          <ellipse cx="100" cy="190" rx="45" ry="15" fill="hsl(43 80% 75% / 0.3)" className="animate-bubble" />
          <ellipse cx="100" cy="210" rx="45" ry="15" fill="hsl(43 80% 75% / 0.4)" className="animate-bubble" style={{ animationDelay: '0.3s' }} />
          {/* Bubbles */}
          <circle cx="90" cy="200" r="3" fill="hsl(43 95% 85%)" className="animate-float-up" />
          <circle cx="110" cy="220" r="2" fill="hsl(43 95% 85%)" className="animate-float-up" style={{ animationDelay: '0.5s' }} />
          <circle cx="100" cy="240" r="2.5" fill="hsl(43 95% 85%)" className="animate-float-up" style={{ animationDelay: '0.8s' }} />
          {/* Sparkles */}
          <circle cx="70" cy="100" r="2" fill="hsl(43 100% 90%)" className="animate-sparkle-bright" />
          <circle cx="130" cy="120" r="1.5" fill="hsl(43 100% 90%)" className="animate-sparkle-bright" style={{ animationDelay: '0.5s' }} />
        </svg>
        {/* Golden ribbon */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-40 h-20">
          <div className="w-full h-2 bg-gradient-to-r from-transparent via-primary to-transparent animate-ribbon-wave" />
        </div>
      </div>

      {/* Champagne Glass Right */}
      <div className="absolute top-20 right-[5%] md:right-[10%] w-32 md:w-48 animate-champagne-right">
        <svg viewBox="0 0 200 400" className="w-full h-full drop-shadow-2xl">
          {/* Glass outline */}
          <path
            d="M 60 80 L 50 200 L 50 280 L 70 280 L 70 350 L 130 350 L 130 280 L 150 280 L 150 200 L 140 80 Z"
            fill="none"
            stroke="hsl(43 95% 68%)"
            strokeWidth="3"
            className="animate-glow"
          />
          {/* Champagne liquid */}
          <ellipse cx="100" cy="190" rx="45" ry="15" fill="hsl(43 80% 75% / 0.3)" className="animate-bubble" style={{ animationDelay: '0.2s' }} />
          <ellipse cx="100" cy="210" rx="45" ry="15" fill="hsl(43 80% 75% / 0.4)" className="animate-bubble" style={{ animationDelay: '0.5s' }} />
          {/* Bubbles */}
          <circle cx="95" cy="210" r="2.5" fill="hsl(43 95% 85%)" className="animate-float-up" style={{ animationDelay: '0.3s' }} />
          <circle cx="105" cy="230" r="2" fill="hsl(43 95% 85%)" className="animate-float-up" style={{ animationDelay: '0.7s' }} />
          <circle cx="100" cy="250" r="3" fill="hsl(43 95% 85%)" className="animate-float-up" style={{ animationDelay: '1s' }} />
          {/* Sparkles */}
          <circle cx="75" cy="110" r="1.5" fill="hsl(43 100% 90%)" className="animate-sparkle-bright" style={{ animationDelay: '0.3s' }} />
          <circle cx="125" cy="130" r="2" fill="hsl(43 100% 90%)" className="animate-sparkle-bright" style={{ animationDelay: '0.8s' }} />
        </svg>
        {/* Golden ribbon */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-40 h-20">
          <div className="w-full h-2 bg-gradient-to-r from-transparent via-primary to-transparent animate-ribbon-wave" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      {/* Golden particles scattered */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-primary animate-twinkle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}

      {/* Starburst bottom left */}
      <div className="absolute bottom-20 left-10 md:left-20 w-24 md:w-32 h-24 md:h-32 animate-pulse-glow">
        <div className="absolute inset-0 flex items-center justify-center">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-12 md:h-16 bg-gradient-to-t from-primary via-primary/50 to-transparent origin-bottom"
              style={{
                transform: `rotate(${i * 22.5}deg)`,
                opacity: 0.6,
              }}
            />
          ))}
        </div>
        {/* Center glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-primary animate-pulse-bright" />
        </div>
      </div>

      {/* Starburst bottom right */}
      <div className="absolute bottom-32 md:bottom-40 right-16 md:right-32 w-20 md:w-24 h-20 md:h-24 animate-pulse-glow" style={{ animationDelay: '1s' }}>
        <div className="absolute inset-0 flex items-center justify-center">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-10 md:h-12 bg-gradient-to-t from-primary via-primary/50 to-transparent origin-bottom"
              style={{
                transform: `rotate(${i * 22.5}deg)`,
                opacity: 0.5,
              }}
            />
          ))}
        </div>
        {/* Center glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse-bright" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>

      {/* Central sparkle effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="text-primary text-4xl md:text-6xl font-bold opacity-20 animate-pulse-bright">***</div>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-[15%] left-[15%] text-primary text-2xl opacity-40 animate-twinkle">✦</div>
      <div className="absolute top-[25%] right-[20%] text-primary text-xl opacity-30 animate-twinkle" style={{ animationDelay: '0.5s' }}>✦</div>
      <div className="absolute bottom-[35%] left-[25%] text-primary text-lg opacity-35 animate-twinkle" style={{ animationDelay: '1s' }}>✦</div>
      <div className="absolute bottom-[25%] right-[15%] text-primary text-2xl opacity-40 animate-twinkle" style={{ animationDelay: '1.5s' }}>✦</div>

      {/* Ambient glow effects */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }} />
    </div>
  );
};
