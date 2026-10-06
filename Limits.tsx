import { LIMITS } from '@/data/services';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { XCircle, Quote } from 'lucide-react';

export default function Limits() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="limites"
      className="py-24 px-5 md:px-[5%] bg-gradient-to-b from-bleu-profond to-bleu-moyen text-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-dore to-transparent" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-dore/10 rounded-full blur-3xl" />

      <div className="text-center mb-14 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white font-display mb-4">
          Ce que le système ne fera jamais
        </h2>
        <span className="block w-20 h-1 bg-dore mx-auto mt-4 rounded-full" />
        <p className="text-dore-clair/80 mt-6 max-w-2xl mx-auto">
          Des limites claires, garanties et inviolables — pour que l'humain reste toujours maître
        </p>
      </div>

      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto relative z-10"
      >
        {LIMITS.map((limit, idx) => (
          <div
            key={limit}
            className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15
                        transition-all duration-500 hover:bg-white/15 hover:border-dore/40 hover:-translate-y-1
                        ${visible ? 'animate-fade-up' : 'opacity-0'}`}
            style={{ animationDelay: `${idx * 120}ms` }}
          >
            <XCircle size={28} className="text-dore mb-3" />
            <p className="text-white/95 leading-relaxed text-sm">{limit}</p>
          </div>
        ))}
      </div>

      {/* Devise */}
      <div className="text-center mt-16 relative z-10">
        <div className="inline-block">
          <Quote size={32} className="text-dore/60 mx-auto mb-3" />
          <p className="font-display text-2xl md:text-3xl text-dore-clair italic">
            « L'intelligence éclaire — l'humain décide. »
          </p>
        </div>
      </div>
    </section>
  );
}
