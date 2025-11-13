export const StarryBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0L11.5451 7.45492L19 9L11.5451 10.5451L10 18L8.45492 10.5451L1 9L8.45492 7.45492L10 0Z"
              fill="url(#gradient)"
              opacity="0.6"
            />
            <defs>
              <linearGradient
                id="gradient"
                x1="10"
                y1="0"
                x2="10"
                y2="18"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFD700" />
                <stop offset="1" stopColor="#D4AF37" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}
    </div>
  );
};
