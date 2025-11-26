export const SectionContainer: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => {
  return <div className={`max-w-6xl mx-auto ${className}`}>{children}</div>;
};
