import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Crown, Shield, Eye } from 'lucide-react';

const FOUNDER_IMAGE =
  'https://images.pexels.com/photos/17049771/pexels-photo-17049771.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const QUALITIES = [
  {
    icon: Crown,
    title: 'Vision Originelle',
    text: 'Conception et direction par une seule volonté — celle du fondateur, garant de l\'unité du système.',
  },
  {
    icon: Shield,
    title: 'Intégrité Totale',
    text: 'Transparence dans chaque processus, traçabilité de chaque action, rien n\'est laissé dans l\'ombre.',
  },
  {
    icon: Eye,
    title: 'Surveillance Constante',
    text: 'Veille permanente sur le fonctionnement, la cohérence et le respect des règles établies.',
  },
];

export default function Founder() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="fondateur"
      className="py-24 px-5 md:px-[5%] bg-gradient-to-br from-bleu-pale via-white to-bleu-pale/30"
    >
      <div className="text-center mb-16">
        <h2 className="section-title">Le Fondateur</h2>
        <span className="section-title-line" />
      </div>

      <div
        ref={ref}
        className="flex gap-8 md:gap-12 items-center max-w-5xl mx-auto flex-wrap"
      >
        <div className={`flex-1 min-w-[280px] max-w-sm mx-auto ${visible ? 'animate-slide-in-left' : 'opacity-0'}`}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-bleu-profond to-dore rounded-3xl blur-2xl opacity-20" />
            <img
              src={FOUNDER_IMAGE}
              alt="Doucet Thomas, Fondateur"
              className="relative w-full rounded-3xl shadow-2xl shadow-bleu-profond/25 object-cover"
            />
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-bleu-profond to-bleu-moyen text-white px-6 py-2.5 rounded-xl shadow-xl border border-dore/40 whitespace-nowrap">
              <p className="font-display font-semibold">Doucet Thomas</p>
              <p className="text-dore-clair text-xs tracking-wide">Fondateur & Directeur</p>
            </div>
          </div>
        </div>

        <div className={`flex-1 min-w-[280px] space-y-6 ${visible ? 'animate-slide-in-right' : 'opacity-0'}`}>
          {QUALITIES.map((q) => {
            const Icon = q.icon;
            return (
              <div key={q.title} className="flex gap-4">
                <div className="flex-shrink-0 p-3 rounded-xl bg-white shadow-lg border border-dore/20">
                  <Icon size={24} className="text-dore" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-bleu-profond font-display mb-1">
                    {q.title}
                  </h3>
                  <p className="text-gris-ardoise text-sm leading-relaxed">{q.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
