import { Quote } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-bleu-profond text-white text-center py-10 px-5 border-t-4 border-dore relative">
      <div className="max-w-3xl mx-auto">
        <h3 className="font-display text-xl font-bold text-dore-clair mb-3">
          AILA CORE SYSTEMS
        </h3>

        <div className="flex items-center justify-center gap-2 mb-4">
          <Quote size={20} className="text-dore/60" />
          <p className="italic text-dore-clair text-sm">
            L'intelligence éclaire — l'humain décide.
          </p>
        </div>

        <div className="w-16 h-0.5 bg-dore/40 mx-auto mb-5" />

        <p className="text-white/60 text-xs tracking-wide">
          FONDATEUR : DOUCET THOMAS — Toutes règles fixées par lui seul
        </p>
        <p className="text-white/40 text-xs mt-2">
          © {new Date().getFullYear()} AILA CORE SYSTEMS. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
