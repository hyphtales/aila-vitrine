import { ArrowRight, Sparkles } from 'lucide-react';

const HERO_IMAGE =
  'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export default function Hero() {
  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center gap-8 md:gap-16 px-5 md:px-[5%] pt-36 md:pt-44 pb-16 bg-gradient-to-br from-bleu-pale via-white to-bleu-pale/50 relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-bleu-clair/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-dore/8 rounded-full blur-3xl animate-pulse-soft" />

      <div className="flex-1 relative z-10 animate-slide-in-left">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dore/15 text-dore-fonce text-sm font-semibold mb-5">
          <Sparkles size={16} />
          Intelligence éclaire — l'humain décide
        </div>

        <h1 className="text-4xl md:text-6xl leading-tight mb-3 text-bleu-profond font-display font-bold">
          AILA CORE SYSTEMS
        </h1>

        <p className="text-xl md:text-2xl text-dore font-semibold mb-6">
          Votre système intelligent de gestion et d'organisation
        </p>

        <p className="text-base md:text-lg text-gris-ardoise mb-8 max-w-xl leading-relaxed">
          Un compagnon numérique qui mémorise, structure, anticipe et protège —
          pour que chaque décision soit éclairée et chaque action maîtrisée.
          L'intelligence au service de votre vision.
        </p>

        <div className="flex gap-5 flex-wrap">
          <a href="#systeme" className="btn-primary flex items-center gap-2">
            Découvrir le système
            <ArrowRight size={18} />
          </a>
          <a href="#contact" className="btn-secondary">
            Nous contacter
          </a>
        </div>
      </div>

      <div className="flex-1 flex justify-center relative z-10 animate-slide-in-right">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-bleu-profond/20 to-dore/20 rounded-3xl blur-2xl" />
          <img
            src={HERO_IMAGE}
            alt="Intelligence artificielle et réseau numérique"
            className="relative w-full max-w-md rounded-3xl shadow-2xl shadow-bleu-profond/25 animate-float object-cover"
          />
          <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-md rounded-2xl px-5 py-3 shadow-xl border border-dore/30">
            <p className="text-bleu-profond font-bold text-sm">6 Modules</p>
            <p className="text-gris-ardoise text-xs">au service de votre gestion</p>
          </div>
        </div>
      </div>
    </section>
  );
}
