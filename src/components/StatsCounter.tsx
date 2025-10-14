import { useEffect, useState, useRef } from "react";

interface StatProps {
  end: number;
  label: string;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

const StatCounter = ({ end, label, suffix = "", prefix = "", duration = 2000 }: StatProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const increment = end / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-black mb-2">
        <span className="text-gradient">
          {prefix}
          {count.toLocaleString()}
          {suffix}
        </span>
      </div>
      <div className="text-muted-foreground font-semibold text-lg">
        {label}
      </div>
    </div>
  );
};

export const StatsCounter = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10"></div>
      
      <div className="container max-w-6xl relative z-10">
        <div className="glass-card rounded-3xl p-12 md:p-16 border-2 border-primary/20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-3">
              Números que comprovam
            </h2>
            <p className="text-muted-foreground text-lg">
              Resultados reais de creators usando Dark Planner
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-12">
            <StatCounter end={2000} label="Creators Ativos" suffix="+" />
            <StatCounter end={5} label="Milhões de Vídeos" suffix="M+" />
            <StatCounter end={20} label="Horas Economizadas" suffix="h/semana" />
            <StatCounter end={300} label="Crescimento Médio" suffix="%" />
          </div>
        </div>
      </div>
    </section>
  );
};
