import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  style?: React.CSSProperties;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  style = {},
  fullWidth = false
}) => {
  const baseClasses = "cursor-pointer font-mono font-bold rounded transition-all transform hover:scale-105";
  
  const sizeClasses = {
    sm: "px-3 py-1 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base"
  };

  const variantClasses = {
    primary: "bg-cyan-400 text-black hover:bg-cyan-300",
    secondary: "border border-gray-400 text-gray-400 hover:border-gray-300 hover:text-gray-300 bg-transparent"
  };

  const variantStyles = {
    primary: { boxShadow: "0 0 15px rgba(0,255,255,0.3)" },
    secondary: {}
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${className}`}
      style={{ ...variantStyles[variant], ...style }}
    >
      {children}
    </button>
  );
};

export default Button;
