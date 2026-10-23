import type { Locale } from '@/data/portfolio';

export type BrandKey =
  | 'glpi' | 'jumpcloud' | 'zscaler' | 'sentinelone' | 'cloudflare'
  | 'windows' | 'microsoft' | 'slack' | 'googleworkspace' | 'powershell'
  | 'python' | 'javascript' | 'typescript' | 'react' | 'nodejs'
  | 'postgresql' | 'git' | 'github' | 'php' | 'mysql' | 'redis'
  | 'rest' | 'webhooks' | 'winpe';

export type TechnologyItem = {
  name: string;
  brand: BrandKey;
  description: string;
};

export type TechnologyCategory = {
  code: string;
  title: string;
  description: string;
  items: TechnologyItem[];
};

export const technologyCategories: Record<Locale, TechnologyCategory[]> = {
  pt: [
    {
      code: '01',
      title: 'ITSM e Gestão de TI',
      description: 'Plataformas e práticas utilizadas para organizar serviços, chamados, inventário e ativos.',
      items: [
        { name: 'GLPI', brand: 'glpi', description: 'Administração, chamados, inventário, ativos e evolução de processos.' },
        { name: 'Gestão de serviços', brand: 'rest', description: 'Incidentes, requisições, catálogo e fluxos operacionais.' }
      ]
    },
    {
      code: '02',
      title: 'Endpoint Engineering',
      description: 'Padronização, provisionamento e sustentação do ciclo de preparação de endpoints Windows.',
      items: [
        { name: 'Windows', brand: 'windows', description: 'Ambientes corporativos, diagnóstico e implantação.' },
        { name: 'PowerShell', brand: 'powershell', description: 'Automação de configuração e tarefas operacionais.' },
        { name: 'WinPE · WIM · DISM', brand: 'winpe', description: 'Imagens, mídia de implantação e manutenção do Windows.' }
      ]
    },
    {
      code: '03',
      title: 'Segurança e Plataformas Corporativas',
      description: 'Produtos corporativos presentes em rotinas de dispositivos, acesso, segurança e conectividade.',
      items: [
        { name: 'JumpCloud', brand: 'jumpcloud', description: 'Identidade, diretório e gestão de dispositivos.' },
        { name: 'Zscaler', brand: 'zscaler', description: 'Conectividade e controles de segurança em ambiente corporativo.' },
        { name: 'SentinelOne', brand: 'sentinelone', description: 'Proteção e visibilidade de endpoints.' },
        { name: 'Cloudflare', brand: 'cloudflare', description: 'Serviços de rede, segurança e entrega de aplicações.' },
        { name: 'Microsoft', brand: 'microsoft', description: 'Ecossistema de produtividade e administração corporativa.' },
        { name: 'Google Workspace', brand: 'googleworkspace', description: 'Produtividade e colaboração em nuvem.' }
      ]
    },
    {
      code: '04',
      title: 'Automação e Integração',
      description: 'Conexão entre plataformas e redução de etapas manuais por scripts e interfaces de aplicação.',
      items: [
        { name: 'PowerShell', brand: 'powershell', description: 'Scripts para operação e administração.' },
        { name: 'REST APIs', brand: 'rest', description: 'Coleta, sincronização e execução de ações entre sistemas.' },
        { name: 'Webhooks', brand: 'webhooks', description: 'Eventos e automações orientadas a mudanças.' },
        { name: 'Slack', brand: 'slack', description: 'Integrações e ferramentas para comunicação operacional.' }
      ]
    },
    {
      code: '05',
      title: 'Desenvolvimento',
      description: 'Tecnologias aplicadas à criação de integrações, ferramentas internas, APIs e interfaces web.',
      items: [
        { name: 'JavaScript', brand: 'javascript', description: 'Interfaces e automações para web.' },
        { name: 'TypeScript', brand: 'typescript', description: 'Aplicações e integrações com tipagem estática.' },
        { name: 'React', brand: 'react', description: 'Interfaces operacionais e dashboards.' },
        { name: 'Node.js', brand: 'nodejs', description: 'APIs, serviços e processamento de integrações.' },
        { name: 'Python', brand: 'python', description: 'Scripts, processamento e automação.' },
        { name: 'PHP', brand: 'php', description: 'Plugins e extensões para plataformas web.' },
        { name: 'Git', brand: 'git', description: 'Versionamento e rastreabilidade do código.' },
        { name: 'GitHub', brand: 'github', description: 'Repositórios, documentação e entrega contínua.' }
      ]
    },
    {
      code: '06',
      title: 'Dados',
      description: 'Persistência e estruturas de apoio para aplicações, integrações e filas de trabalho.',
      items: [
        { name: 'PostgreSQL', brand: 'postgresql', description: 'Dados relacionais para aplicações e integrações.' },
        { name: 'MySQL', brand: 'mysql', description: 'Persistência em soluções web e extensões.' },
        { name: 'Redis', brand: 'redis', description: 'Estado temporário, cache e coordenação de fluxos.' }
      ]
    }
  ],
  en: [
    {
      code: '01', title: 'ITSM & IT Management', description: 'Platforms and practices used to organize services, tickets, inventory, and assets.',
      items: [
        { name: 'GLPI', brand: 'glpi', description: 'Administration, tickets, inventory, assets, and process evolution.' },
        { name: 'Service management', brand: 'rest', description: 'Incidents, requests, service catalog, and operational workflows.' }
      ]
    },
    {
      code: '02', title: 'Endpoint Engineering', description: 'Standardization, provisioning, and support across the Windows endpoint preparation lifecycle.',
      items: [
        { name: 'Windows', brand: 'windows', description: 'Corporate environments, troubleshooting, and deployment.' },
        { name: 'PowerShell', brand: 'powershell', description: 'Configuration and operational task automation.' },
        { name: 'WinPE · WIM · DISM', brand: 'winpe', description: 'Windows imaging, deployment media, and servicing.' }
      ]
    },
    {
      code: '03', title: 'Security & Corporate Platforms', description: 'Corporate products used across devices, access, security, and connectivity routines.',
      items: [
        { name: 'JumpCloud', brand: 'jumpcloud', description: 'Identity, directory, and device management.' },
        { name: 'Zscaler', brand: 'zscaler', description: 'Connectivity and security controls in corporate environments.' },
        { name: 'SentinelOne', brand: 'sentinelone', description: 'Endpoint protection and visibility.' },
        { name: 'Cloudflare', brand: 'cloudflare', description: 'Network, security, and application delivery services.' },
        { name: 'Microsoft', brand: 'microsoft', description: 'Corporate productivity and administration ecosystem.' },
        { name: 'Google Workspace', brand: 'googleworkspace', description: 'Cloud productivity and collaboration.' }
      ]
    },
    {
      code: '04', title: 'Automation & Integration', description: 'Connecting platforms and reducing manual steps through scripts and application interfaces.',
      items: [
        { name: 'PowerShell', brand: 'powershell', description: 'Scripts for operations and administration.' },
        { name: 'REST APIs', brand: 'rest', description: 'Data collection, synchronization, and cross-system actions.' },
        { name: 'Webhooks', brand: 'webhooks', description: 'Event-driven integration and automation.' },
        { name: 'Slack', brand: 'slack', description: 'Integrations and tools for operational communication.' }
      ]
    },
    {
      code: '05', title: 'Development', description: 'Technologies applied to integrations, internal tools, APIs, and web interfaces.',
      items: [
        { name: 'JavaScript', brand: 'javascript', description: 'Web interfaces and automation.' },
        { name: 'TypeScript', brand: 'typescript', description: 'Typed applications and integrations.' },
        { name: 'React', brand: 'react', description: 'Operational interfaces and dashboards.' },
        { name: 'Node.js', brand: 'nodejs', description: 'APIs, services, and integration processing.' },
        { name: 'Python', brand: 'python', description: 'Scripting, processing, and automation.' },
        { name: 'PHP', brand: 'php', description: 'Plugins and extensions for web platforms.' },
        { name: 'Git', brand: 'git', description: 'Source control and code traceability.' },
        { name: 'GitHub', brand: 'github', description: 'Repositories, documentation, and continuous delivery.' }
      ]
    },
    {
      code: '06', title: 'Data', description: 'Persistence and supporting structures for applications, integrations, and work queues.',
      items: [
        { name: 'PostgreSQL', brand: 'postgresql', description: 'Relational data for applications and integrations.' },
        { name: 'MySQL', brand: 'mysql', description: 'Persistence for web solutions and extensions.' },
        { name: 'Redis', brand: 'redis', description: 'Temporary state, caching, and workflow coordination.' }
      ]
    }
  ]
};
