export type ProjectStatus = 'En cours' | 'Planifié' | 'Terminé';

export type Screenshot = {
  url: string;
  caption?: string;
};

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
  screenshots?: Screenshot[];
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
    screenshots: [
      {
        url: '/screenshots/lifehub/architecture.svg',
        caption: 'Architecture système — 4 couches : Client (PWA), API Routes, Données (Prisma/SQLite), Déploiement (Docker/Caddy).',
      },
      {
        url: '/screenshots/lifehub/modules.svg',
        caption: 'Modèle de données — 5 entités reliées à un User central : Task, Habit, TimeBlock, HealthMetric, AIContext.',
      },
    ],
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
    title: 'Infrastructure pare-feu + IPS (DMZ, NAT, Suricata)',
    context: 'Projet académique BUT3 — en autonomie',
    shortDesc: 'Déploiement d\'une infrastructure réseau virtualisée multi-zones (DMZ publique, DMZ privée, intranet) protégée par un pare-feu nftables stateful et l\'IPS Suricata couplé via NFQUEUE.',
    description: `Architecture simulée sous Proxmox avec 5 VMs Debian interconnectées en 4 zones distinctes :
Internet (5.5.5.5), DMZ publique (66.6.6.4/30 — DNS/HTTP), réseau interne (10.0.0.0/24) et DMZ privée
(10.0.1.0/24 — SSH). Le pare-feu central gère 4 interfaces réseau en dual-stack IPv4/IPv6.

Configuration nftables (netfilter) :
Politique par défaut DROP sur toutes les chaînes. Filtrage stateful avec suivi de connexions (conntrack).
NAT masquerade depuis le réseau interne vers la DMZ publique (eth1) et depuis la DMZ privée vers
Internet (eth0). Protection anti-spoofing et rejet des paquets invalides. Règles par zone :
Internet → pare-feu (ICMP echo-request, Time Exceeded), Internet → DMZ publique (HTTP, DNS UDP, ICMP),
réseau interne → DMZ publique (DNS UDP + NAT), réseau interne → DMZ privée (SSH IPv6),
DMZ privée → Internet (SSH + NAT), pare-feu → DMZ privée (SSH IPv6).

IPS Suricata couplé à nftables via NFQUEUE :
3 règles de détection/blocage actives — requêtes DNS vers malicious.com (drop immédiat),
ping flood détecté au-delà de 10 paquets ICMP/s (validé avec hping3 --flood),
brute-force SSH bloqué au-delà de 5 tentatives/s (validé avec hping3 -S -p 22 --faster).

Tests de validation : matrice de flux inter-zones vérifiée avec ping, curl et ssh,
scénarios d'intrusion rejoués avec nmap et hping3, logs analysés dans Suricata eve.json
et compteurs nftables (nft list ruleset).`,
    tech: ['Debian Linux', 'nftables / netfilter', 'Suricata (IPS)', 'Proxmox VE', 'IPv4 / IPv6', 'NAT', 'NFQUEUE', 'hping3', 'Nmap'],
    skills: ['Architecture réseau multi-zones', 'Filtrage stateful & NAT', 'Prévention d\'intrusion (IPS)', 'Écriture de règles de détection', 'Tests d\'intrusion contrôlés', 'Analyse de logs réseau'],
    status: 'Terminé',
    featured: true,
    screenshots: [
      {
        url: '/screenshots/ids-ips/architecture-reseau.svg',
        caption: 'Architecture réseau — 4 zones (Internet, DMZ publique, Intranet, DMZ privée) avec pare-feu nftables et IPS Suricata.',
      },
    ],
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
