import { TrendingUp, Users, Clock, DollarSign } from "lucide-react";

const metrics = [
  {
    icon: Users,
    value: "2.000+",
    label: "Creators Ativos"
  },
  {
    icon: TrendingUp,
    value: "5M+",
    label: "Vídeos Gerados"
  },
  {
    icon: Clock,
    value: "20h",
    label: "Economizadas/Semana"
  },
  {
    icon: DollarSign,
    value: "300%",
    label: "Aumento Médio"
  }
];

export const Results = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
      
      <div className="container max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Resultados <span className="text-gradient">comprovados</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Médias mensais com Dark Planner
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                <metric.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-black mb-2 text-gradient">
                {metric.value}
              </div>
              <div className="text-muted-foreground font-semibold">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
