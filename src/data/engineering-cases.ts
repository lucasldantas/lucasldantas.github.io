import type { Locale } from '@/data/portfolio';

export type EngineeringCase = {
  slug: string;
  number: string;
  type: string;
  title: string;
  organization: string;
  summary: string;
  challenge: string;
  solution: string;
  contribution: string;
  impact: string;
  technologies: string[];
  flow: string[];
  flowNote: string;
};

export const engineeringCases: Record<Locale, EngineeringCase[]> = {
  pt: [{
    slug: 'implantacao-gestao-glpi-itsm',
    number: '01',
    type: 'Case profissional',
    title: 'Implantação e Gestão do GLPI como Plataforma de ITSM',
    organization: 'Arco Educação',
    summary: 'Participação na implantação, administração e evolução de uma plataforma central para chamados, ativos e processos de TI.',
    challenge: 'Consolidar serviços de TI, inventário e rotinas operacionais em uma plataforma capaz de organizar o atendimento e sustentar a evolução contínua dos processos.',
    solution: 'O GLPI foi adotado como plataforma de ITSM para centralizar chamados, incidentes, requisições, ativos e inventário corporativo, com configuração contínua dos recursos necessários à operação.',
    contribution: 'Participei da implantação e atuo na administração e evolução do ambiente: organização de processos de atendimento, manutenção funcional, gestão de chamados e ativos e desenvolvimento de integrações e automações relacionadas à plataforma.',
    impact: 'A plataforma oferece uma referência central para serviços e ativos de TI, melhora a organização dos fluxos operacionais e cria uma base sustentável para integrações e evolução dos processos. Os benefícios são qualitativos e não representam métricas públicas da organização.',
    technologies: ['GLPI', 'ITSM', 'Gestão de ativos', 'Inventário', 'REST APIs', 'Automação'],
    flow: ['Usuário', 'Central de Serviços GLPI', 'Chamados / Gestão de Ativos', 'Processos Operacionais'],
    flowNote: 'Representação conceitual para fins de portfólio. Não descreve a arquitetura interna real da organização.'
  }],
  en: [{
    slug: 'glpi-itsm-implementation-management',
    number: '01',
    type: 'Professional case',
    title: 'GLPI Implementation & Management as an ITSM Platform',
    organization: 'Arco Educação',
    summary: 'Contributing to the implementation, administration, and evolution of a central platform for tickets, assets, and IT processes.',
    challenge: 'Consolidate IT services, inventory, and operational routines into a platform capable of organizing support and sustaining the continuous evolution of processes.',
    solution: 'GLPI was adopted as the ITSM platform to centralize tickets, incidents, requests, assets, and corporate inventory, with ongoing configuration of the capabilities required by operations.',
    contribution: 'I contributed to the implementation and work on the administration and evolution of the environment: support process organization, functional maintenance, ticket and asset management, and platform-related integrations and automation.',
    impact: 'The platform provides a central reference for IT services and assets, improves the organization of operational workflows, and creates a sustainable foundation for integrations and process evolution. These are qualitative benefits, not public organizational metrics.',
    technologies: ['GLPI', 'ITSM', 'Asset management', 'Inventory', 'REST APIs', 'Automation'],
    flow: ['User', 'GLPI Service Desk', 'Tickets / Asset Management', 'Operational Processes'],
    flowNote: 'Conceptual representation for portfolio purposes. It does not describe the organization’s actual internal architecture.'
  }]
};

export function engineeringCaseHref(locale: Locale, slug: string) {
  return locale === 'pt' ? `/cases/${slug}/` : `/en/cases/${slug}/`;
}
