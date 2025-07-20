import React from 'react';

interface ParticleSystemProps {
  particleCount?: number;
  color?: string;
  className?: string;
}

const ParticleSystem: React.FC<ParticleSystemProps> = ({
  particleCount = 4,
  color = 'cyan-400',
  className = ''
}) => {
  const particles = React.useMemo(
    () =>
      [...Array(particleCount)].map((_, i) => ({
        id: i,
        left: `${20 + Math.random() * 60}%`,
        top: `${20 + Math.random() * 60}%`,
        duration: `${4 + Math.random() * 3}s`,
        delay: `${Math.random() * 2}s`,
      })),
    [particleCount]
  );

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute w-1 h-1 bg-${color} rounded-full opacity-40`}
          style={{
            left: particle.left,
            top: particle.top,
            animation: `float ${particle.duration} ease-in-out infinite`,
            animationDelay: particle.delay,
            boxShadow: "0 0 6px currentColor",
          }}
        />
      ))}
    </div>
  );
};

export default ParticleSystem;
