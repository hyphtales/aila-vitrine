import {
  Brain,
  PenLine,
  Telescope,
  Shield,
  Users,
  BarChart3,
  type LucideIcon,
} from 'lucide-react';

export interface Service {
  icon: LucideIcon;
  title: string;
  accent: string;
  items: string[];
}

export const SERVICES: Service[] = [
  {
    icon: Brain,
    title: 'Mémoire & Organisation',
    accent: 'from-bleu-profond to-bleu-clair',
    items: [a
      'Retenir tout — idées, décisions, échanges, projets',
      'Classer et ranger — retrouver facilement ce qui a été dit',
      'Résumer — condenser ce qui est long en points clés',
      'Rappeler — prévenir des échéances et des étapes à venir',
      'Relier les idées — faire le lien entre le passé et ce qui vient',
    ],
  },
  {
    icon: PenLine,
    title: 'Création & Rédaction',
    accent: 'from-bleu-moyen to-bleu-clair',
    items: [
      'Aider à écrire — propositions, textes, présentations',
      'Structurer — mettre en ordre ce qui est confus',
      'Proposer des formulations — d\'autres façons d\'exprimer une idée',
      'Brainstorming — lancer des pistes et des perspectives nouvelles',
      'Mettre en forme — rendre clair, lisible et agréable',
    ],
  },
  {
    icon: Telescope,
    title: 'Anticipation & Vision',
    accent: 'from-bleu-clair to-bleu-profond',
    items: [
      'Prévoir — ce qui peut arriver, favorable ou difficile',
      'Comparer — plusieurs chemins possibles, avantages et risques',
      'Planifier — étapes, ordre, délais prévus',
      'Prévenir — signaler ce qui mérite attention avant qu\'il ne soit trop tard',
      'Suivre l\'avancement — voir où on en est, ce qui est fait ou en cours',
    ],
  },
  {
    icon: Shield,
    title: 'Surveillance & Sécurité',
    accent: 'from-bleu-profond to-bleu-moyen',
    items: [
      'Vérifier — que tout fonctionne comme convenu',
      'Alerter — signaler ce qui change ou ce qui dépasse les limites',
      'Rappeler les limites — ce qui est autorisé et ce qui ne l\'est pas',
      'Contrôler l\'accès — qui peut voir ou faire quoi',
      'Garantir la transparence — tout est tracé, tout est visible',
    ],
  },
  {
    icon: Users,
    title: 'Collaboration & Équipe',
    accent: 'from-bleu-moyen to-bleu-profond',
    items: [
      'Partager l\'information — transmettre ce qui est utile à chaque partie',
      'Coordonner — faire travailler les modules ensemble',
      'Synchroniser — mettre à jour tout le monde en même temps',
      'Centraliser — un seul endroit pour voir l\'ensemble',
      'Réunir — rassembler ce qui est dispersé',
    ],
  },
  {
    icon: BarChart3,
    title: 'Suivi & Amélioration',
    accent: 'from-bleu-clair to-bleu-moyen',
    items: [
      'Enregistrer les progrès — voir l\'évolution dans le temps',
      'Analyser ce qui fonctionne — repérer les bonnes méthodes',
      'Ajuster — corriger ce qui ne marche pas bien',
      'Apprendre des expériences — retenir ce qui a donné de bons résultats',
      'Montrer l\'état du système — clair, direct, compréhensible',
    ],
  },
];

export const LIMITS: string[] = [
  'Il ne prend jamais de décision à ta place',
  'Il n\'agit jamais sans ton accord',
  'Il ne cache rien',
  'Il ne remplace pas ton jugement',
  'Il n\'impose rien',
];
