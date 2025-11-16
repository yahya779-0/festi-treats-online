import { useEffect, useState } from "react";

export const FestiveBackground = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const particleArray = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
    }));
    setParticles(particleArray);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Champagne glasses animation */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-40 h-60 animate-float" style={{ animationDelay: '0s' }}>
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="absolute top-10 right-10 w-40 h-60 animate-float" style={{ animationDelay: '1.5s' }}>
          <div className="w-full h-full bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-3xl" />
        </div>
      </div>

      {/* Golden particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-primary rounded-full animate-sparkle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      {/* Starburst elements */}
      <div className="absolute bottom-20 left-20 w-32 h-32 animate-pulse-slow opacity-40">
        <div className="absolute inset-0 flex items-center justify-center">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-16 bg-gradient-to-t from-primary to-transparent origin-bottom"
              style={{
                transform: `rotate(${i * 30}deg)`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-40 right-32 w-24 h-24 animate-pulse-slow opacity-30" style={{ animationDelay: '1s' }}>
        <div className="absolute inset-0 flex items-center justify-center">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-12 bg-gradient-to-t from-primary to-transparent origin-bottom"
              style={{
                transform: `rotate(${i * 30}deg)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Ribbon elements */}
      <div className="absolute top-1/3 left-1/4 w-40 h-2 bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-shimmer" />
      <div className="absolute top-2/3 right-1/4 w-32 h-2 bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-shimmer" style={{ animationDelay: '1.5s' }} />
    </div>
  );
};
