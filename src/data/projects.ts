export type ProjectStatus = 'En cours' | 'Planifié' | 'Terminé';

export type Project = {
  id: string;
  title: string;
  context: string;
  shortDesc: string;
  description: string;
  tech: string[];
  skills: string[];
  status: ProjectStatus;
  github?: string;
  link?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: 'lifehub',
    title: 'LifeHub',
    context: 'Projet personnel — développement logiciel',
    shortDesc: 'Application web auto-hébergée (PWA) conçue comme un « OS personnel » : gestion de tâches, habitudes flexibles, planification et aide à la décision.',
    description: `Application web full-stack auto-hébergée pensée comme un système d'exploitation personnel.
Architecture modulaire couvrant : gestion de tâches avec time-blocking, suivi d'habitudes flexibles,
planification tenant compte du niveau d'énergie, priorisation automatique, triage intelligent,
planification inversée des échéances, métriques de santé, et assistance IA proactive.
L'ensemble est relié par un modèle d'objets unifié et une couche LLM provider-agnostic.`,
    tech: ['Next.js 14', 'TypeScript', 'Prisma', 'SQLite', 'Docker', 'Caddy', 'PWA', 'LLM API'],
    skills: ['Architecture full-stack', 'Modélisation de données', 'Conteneurisation & déploiement', 'UX orientée besoin réel', 'Intégration LLM'],
    status: 'En cours',
    featured: true,
  },
  {
    id: 'homelab',
    title: 'Infrastructure self-hosted',
    context: 'Projet personnel — homelab & auto-hébergement',
    shortDesc: 'Conception et exploitation d\'une infrastructure personnelle complète : hyperviseur Proxmox, stockage, VPN mesh, reverse proxy et hébergement d\'applications.',
    description: `Infrastructure personnelle complète conçue et exploitée de bout en bout.
Hyperviseur Proxmox VE hébergeant plusieurs VMs et conteneurs LXC, avec stockage personnel type NAS,
réseau VPN mesh pour l'accès distant sécurisé (sans ouverture de ports), reverse proxy avec gestion
automatique des certificats TLS, et hébergement de divers services (monitoring, gestion de fichiers,
applications web). L'infrastructure est maintenue et évolutive, utilisée comme environnement de test
et d'apprentissage continu.`,
    tech: ['Proxmox VE', 'Linux', 'WireGuard / Tailscale', 'Reverse proxy', 'Docker', 'LXC'],
    skills: ['Virtualisation', 'Administration système Linux', 'Sécurisation des accès distants', 'Réseau & VPN', 'Exploitation de services'],
    status: 'En cours',
    featured: true,
  },
  {
    id: 'ids-ips',
    title: 'Détection d\'intrusion réseau (pare-feu + IPS)',
    context: 'Projet académique — 13 h en autonomie',
    shortDesc: 'Infrastructure réseau multi-VM simulant le réseau d\'une petite entreprise, avec pare-feu et IPS, et scripts de test pour valider la politique de filtrage.',
    description: `Mise en place d'une infrastructure réseau virtualisée multi-VM reproduisant le réseau
d'une petite entreprise. Déploiement d'un pare-feu couplé à un IPS (Intrusion Prevention System)
pour contrôler et analyser le trafic. Développement de scripts de test automatisés pour valider
la politique de filtrage et le comportement de l'IPS face à des scénarios d'intrusion simulés.
Méthodologie : définition des règles, simulation d'attaques, analyse des logs, ajustement.`,
    tech: ['pfSense', 'Suricata / Snort', 'Virtualisation (VM)', 'Python', 'Bash', 'Nmap'],
    skills: ['Architecture réseau sécurisée', 'Filtrage & détection d\'intrusion', 'Automatisation de tests', 'Analyse de logs', 'Méthodologie sécurité'],
    status: 'Planifié',
    featured: true,
  },
  {
    id: 'grille-eval',
    title: 'Digitalisation — Grille d\'évaluation Éducation Nationale',
    context: 'Projet client — Académie de Lyon, 2024-2025',
    shortDesc: 'Outil de digitalisation de la grille d\'évaluation des enseignants à destination des Inspecteurs de l\'Éducation Nationale.',
    description: `Développement d'un outil web permettant aux Inspecteurs de l'Éducation Nationale
de dématérialiser et compléter les grilles d'évaluation des enseignants directement en inspection.
Recueil du besoin auprès des utilisateurs finaux, modélisation du schéma de données relationnelles,
développement de l'interface et de la couche de persistance. Livraison d'un outil métier opérationnel
à l'Académie de Lyon.`,
    tech: ['HTML', 'CSS', 'JavaScript', 'SQL'],
    skills: ['Développement web', 'Modélisation relationnelle', 'Recueil de besoin', 'Livraison d\'outil métier'],
    status: 'Terminé',
  },
];
