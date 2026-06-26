export type SkillCategory = {
  name: string;
  icon: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    name: 'Cybersécurité & Réseaux',
    icon: 'shield',
    items: [
      'Qualification logicielle',
      'PSSI',
      'Analyse DIC',
      'Wireshark',
      'Mitmproxy',
      'pfSense',
      'Nmap',
      'TCP/IP',
      'VLANs',
    ],
  },
  {
    name: 'Systèmes & Virtualisation',
    icon: 'server',
    items: [
      'Linux (RedHat, Debian, Ubuntu)',
      'Windows Server',
      'Active Directory / GPO',
      'Proxmox VE',
      'VMware',
      'LXC / Docker',
    ],
  },
  {
    name: 'Stockage & Sauvegarde',
    icon: 'database',
    items: [
      'NetApp',
      'HPE 3PAR',
      'Brocade SAN',
      'CommVault',
      'NetBackup',
      'Avamar',
    ],
  },
  {
    name: 'Programmation',
    icon: 'code',
    items: [
      'PowerShell',
      'Python',
      'TypeScript',
      'SQL',
      'C / C++',
      'HTML / CSS',
      'JavaScript',
      'Bash',
    ],
  },
  {
    name: 'Outils d\'analyse',
    icon: 'microscope',
    items: [
      'Procmon',
      'Process Hacker',
      'DIE (Detect It Easy)',
      'Wireshark',
      'Mitmproxy',
    ],
  },
  {
    name: 'Langues & Certifications',
    icon: 'globe',
    items: [
      'Anglais (B2)',
      'Allemand (notions)',
      'Fortinet Fundamentals',
    ],
  },
];
