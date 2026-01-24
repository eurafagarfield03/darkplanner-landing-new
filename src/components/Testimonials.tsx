import { Star, Quote } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      nameKey: "socialProof.testimonials.carlos.name",
      roleKey: "socialProof.testimonials.carlos.role",
      contentKey: "socialProof.testimonials.carlos.content",
      rating: 5,
      avatar: "C"
    },
    {
      nameKey: "socialProof.testimonials.ana.name",
      roleKey: "socialProof.testimonials.ana.role",
      contentKey: "socialProof.testimonials.ana.content",
      rating: 5,
      avatar: "A"
    },
    {
      nameKey: "socialProof.testimonials.marcos.name",
      roleKey: "socialProof.testimonials.marcos.role",
      contentKey: "socialProof.testimonials.marcos.content",
      rating: 5,
      avatar: "M"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="container max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            {t("socialProof.testimonialsTitle")} <span className="text-gradient">{t("socialProof.testimonialsTitleHighlight")}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-10 h-10 text-primary mb-4 opacity-50" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                "{t(testimonial.contentKey)}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold">{t(testimonial.nameKey)}</div>
                  <div className="text-sm text-muted-foreground">{t(testimonial.roleKey)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
