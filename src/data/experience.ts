export type WorkItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  missions: {
    client?: string;
    period?: string;
    bullets: string[];
    tools?: string[];
  }[];
};

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  note?: string;
};

export const work: WorkItem[] = [
  {
    role: 'Alternant Expert Sécurité & Systèmes',
    company: 'CONSORT Group',
    location: 'Lyon',
    period: '2024 → présent',
    missions: [
      {
        client: 'Client EDF — Centre de Service Sécurité',
        period: '2025-2026',
        bullets: [
          'Qualification sécurité : pilotage d\'études de conformité sur périmètres critiques (poste de travail, réseau, IoT) selon les exigences de la PSSI.',
          'Audit & analyse : audits statiques et dynamiques en environnement sandbox pour détecter obfuscation et persistance logicielle.',
          'Analyse de risques : évaluation des impacts SI selon les critères DIC (Disponibilité, Intégrité, Confidentialité), rédaction d\'avis de sécurité.',
        ],
        tools: ['Wireshark', 'Mitmproxy', 'Procmon', 'Process Hacker', 'DIE', 'Proxmox'],
      },
      {
        client: 'Client Orange',
        period: '2024-2025',
        bullets: [
          'Infrastructure & stockage : maintien en condition opérationnelle et déploiement de baies NAS NetApp et SAN HPE 3PAR / Brocade.',
          'Sauvegarde : administration quotidienne de solutions de sauvegarde enterprise (CommVault, NetBackup, Avamar).',
          'Support & projets : résolution d\'incidents N2, décommissionnement de serveurs, gestion de châssis HPE Synergy.',
        ],
        tools: ['NetApp', 'HPE 3PAR', 'Brocade', 'CommVault', 'NetBackup', 'Avamar'],
      },
    ],
  },
  {
    role: 'Technicien Informatique (alternance)',
    company: 'Centre Scolaire Pierre Termier',
    location: 'Lyon',
    period: '2023-2024',
    missions: [
      {
        bullets: [
          'Support technique N1/N2, assistance aux utilisateurs.',
          'Gestion et maintenance du parc informatique.',
          'Réparation hardware et résolution d\'incidents software.',
        ],
      },
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: 'Cycle ingénieur Informatique (alternance)',
    institution: 'CESI',
    period: '2026-2029',
  },
  {
    degree: 'BUT Informatique — parcours DACS (alternance)',
    institution: 'Université Grenoble Alpes',
    period: '2024-2026',
  },
  {
    degree: 'BTS CIEL — Cybersécurité, Informatique & réseaux, Électronique (alternance)',
    institution: 'Sup\'Etixs',
    period: '2022-2024',
  },
  {
    degree: 'Baccalauréat Général — Section européenne Anglais (mention Assez Bien)',
    institution: 'Lycée Polyvalent Rouvière, Toulon',
    period: '2022',
  },
];
