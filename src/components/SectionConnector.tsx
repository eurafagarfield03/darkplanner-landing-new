export const SectionConnector = () => {
  return (
    <div className="relative py-8 md:py-12">
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-foreground/20 to-transparent -translate-x-1/2"></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary glow-effect"></div>
    </div>
  );
};
