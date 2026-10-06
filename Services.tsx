import { SERVICES } from '@/data/services';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Check } from 'lucide-react';

export default function Services() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="systeme" className="py-24 px-5 md:px-[5%] bg-white">
      <div className="text-center mb-16">
        <h2 className="section-title">Les Services du Système</h2>
        <span className="section-title-line" />
        <p className="text-gris-ardoise mt-6 max-w-2xl mx-auto">
          Six modules complémentaires pour accompagner chaque aspect de votre organisation
        </p>
      </div>

      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {SERVICES.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className={`glass-card p-7 hover:shadow-2xl hover:shadow-bleu-profond/15 hover:-translate-y-1.5 ${
                visible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.accent} text-white mb-5 shadow-lg`}>
                <Icon size={26} />
              </div>

              <h3 className="text-xl font-bold text-bleu-profond mb-4 font-display">
                {service.title}
              </h3>

              <ul className="space-y-3">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gris-ardoise leading-relaxed">
                    <Check size={18} className="text-dore flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
