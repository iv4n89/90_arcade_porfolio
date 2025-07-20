export const SkillsGrid: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{children}</div>
  );
};
