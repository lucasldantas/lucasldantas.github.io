export type Locale = 'pt' | 'en';

export type Project = {
  slug: string;
  number: string;
  type: string;
  title: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  architecture: string[];
  technologies: string[];
  repo?: string;
  status: string;
};

export const projects: Record<Locale, Project[]> = {
  pt: [
    {
      slug: 'gestao-conformidade-ativos',
      number: '01',
      type: 'Estudo de caso anonimizado',
      title: 'Gestão e Conformidade de Ativos de TI',
      summary: 'Uma camada central para correlacionar dispositivos, normalizar registros e transformar dados isolados em sinais operacionais de conformidade.',
      challenge: 'Informações sobre um mesmo equipamento viviam em plataformas diferentes, com identificadores, formatos e ciclos de atualização distintos. A operação precisava localizar divergências sem depender de conferências manuais entre telas e planilhas.',
      approach: 'A solução foi desenhada como um pipeline de integração: coleta por APIs, normalização, correlação por regras, classificação de inconsistências e apresentação em dashboards. O case é apresentado com nomes funcionais e dados sintéticos para preservar o contexto corporativo.',
      outcome: 'O resultado é uma visão unificada dos ativos, capaz de evidenciar registros ausentes, vínculos inconsistentes e desvios de conformidade, além de preparar a operação para sincronizações automatizadas.',
      architecture: ['GLPI, JumpCloud e Zscaler', 'Coleta por APIs REST', 'Normalização e correlação', 'Regras de conformidade', 'Dashboards e indicadores'],
      technologies: ['TypeScript', 'React', 'PostgreSQL', 'Prisma', 'REST APIs', 'GLPI'],
      status: 'Case interno · versão pública anonimizada'
    },
    {
      slug: 'glpi-whatsapp-bot',
      number: '02',
      type: 'Integração e automação',
      title: 'GLPI WhatsApp Bot',
      summary: 'Atendimento conversacional conectado ao GLPI, com fluxo visual, handoff humano e provedores de WhatsApp intercambiáveis.',
      challenge: 'Criar um canal conversacional que abrisse e consultasse chamados, mantivesse contexto e transferisse o usuário para atendimento humano sem acoplar toda a solução a um único gateway.',
      approach: 'Um backend em TypeScript atua como ponte e API de negócio. Ele normaliza mensagens, conversa com o Typebot, integra o GLPI e entrega o handoff ao Chatwoot. Uma interface de providers separa Evolution API e Meta Cloud API.',
      outcome: 'O projeto reúne identificação, abertura e consulta de chamados, anexos, transferência para analistas, transcrição do atendimento e pesquisa de satisfação em uma arquitetura documentada e executável via Docker Compose.',
      architecture: ['WhatsApp', 'Provider intercambiável', 'Bridge Node.js/TypeScript', 'Typebot e Redis', 'GLPI e Chatwoot'],
      technologies: ['TypeScript', 'Node.js', 'Express', 'Redis', 'PostgreSQL', 'Docker', 'Webhooks'],
      repo: 'https://github.com/lucasldantas/glpi_chatbot',
      status: 'Projeto público'
    },
    {
      slug: 'termos-responsabilidade-glpi',
      number: '03',
      type: 'Produto para ITSM',
      title: 'Termos de Responsabilidade no GLPI',
      summary: 'Plugin para gerar, assinar e auditar termos de entrega e devolução de equipamentos sem sair do fluxo de inventário.',
      challenge: 'Formalizar a responsabilidade por equipamentos exigia documentos, assinaturas e atualizações de inventário dispersas em etapas manuais.',
      approach: 'O plugin conecta computadores e usuários do GLPI a um fluxo de emissão, assinatura presencial ou remota, geração de PDF e devolução. Configurações, cláusulas e campos podem ser adaptados pela administração.',
      outcome: 'A solução concentra o ciclo do documento, registra evidências de assinatura, produz hash SHA-256 para integridade e pode atualizar o inventário quando um equipamento é devolvido.',
      architecture: ['Ativo e responsável no GLPI', 'Emissão do termo', 'Assinatura presencial ou remota', 'PDF e trilha de auditoria', 'Devolução e inventário'],
      technologies: ['PHP', 'GLPI 11', 'MySQL', 'JavaScript', 'TCPDF', 'CSV'],
      repo: 'https://github.com/lucasldantas/termos-responsabilidade-glpi',
      status: 'Projeto público'
    },
    {
      slug: 'automacao-winpe-wim',
      number: '04',
      type: 'Endpoint engineering',
      title: 'Automação Windows com WinPE e WIM',
      summary: 'Processo reproduzível para preparar uma mídia WinPE UEFI e aplicar uma imagem Windows personalizada.',
      challenge: 'Reduzir a variação e o trabalho manual na preparação de computadores, mantendo um caminho técnico claro para aplicar imagens e configurar o boot.',
      approach: 'O laboratório documenta a criação do ambiente WinPE, montagem da imagem, execução automatizada via script, particionamento GPT, aplicação do WIM com DISM e configuração do boot UEFI.',
      outcome: 'O guia transforma uma sequência sensível de deployment em um procedimento documentado, testável primeiro em máquina virtual e reutilizável em cenários controlados.',
      architecture: ['Windows ADK e WinPE', 'Imagem boot.wim', 'Automação de disco GPT', 'Aplicação da imagem WIM', 'Boot UEFI e validação'],
      technologies: ['Windows PE', 'WIM', 'DISM', 'Windows ADK', 'DiskPart', 'BCDBoot'],
      repo: 'https://github.com/lucasldantas/Criando-WinPE-com-imagem-.wim-personalizada',
      status: 'Guia técnico público'
    }
  ],
  en: [
    {
      slug: 'it-asset-compliance',
      number: '01',
      type: 'Anonymized case study',
      title: 'IT Asset Management & Compliance',
      summary: 'A central layer that correlates devices, normalizes records, and turns isolated data into actionable compliance signals.',
      challenge: 'Information about the same device lived across multiple platforms, each with different identifiers, formats, and update cycles. Operations needed to find discrepancies without manually comparing screens and spreadsheets.',
      approach: 'The solution was designed as an integration pipeline: API ingestion, normalization, rule-based correlation, inconsistency classification, and dashboards. Functional names and synthetic data preserve the corporate context.',
      outcome: 'The result is a unified asset view that surfaces missing records, inconsistent ownership, and compliance gaps while enabling automated synchronization.',
      architecture: ['GLPI, JumpCloud, and Zscaler', 'REST API ingestion', 'Normalization and correlation', 'Compliance rules', 'Dashboards and indicators'],
      technologies: ['TypeScript', 'React', 'PostgreSQL', 'Prisma', 'REST APIs', 'GLPI'],
      status: 'Internal case · anonymized public version'
    },
    {
      slug: 'glpi-whatsapp-bot',
      number: '02',
      type: 'Integration & automation',
      title: 'GLPI WhatsApp Bot',
      summary: 'Conversational support connected to GLPI, with visual flows, human handoff, and interchangeable WhatsApp providers.',
      challenge: 'Build a conversational channel that could open and query tickets, preserve context, and transfer users to human support without coupling the entire solution to a single gateway.',
      approach: 'A TypeScript backend works as both bridge and business API. It normalizes messages, talks to Typebot, integrates GLPI, and hands conversations to Chatwoot. A provider interface separates Evolution API from Meta Cloud API.',
      outcome: 'The project combines identification, ticket creation and queries, attachments, analyst handoff, conversation transcripts, and CSAT in a documented Docker Compose architecture.',
      architecture: ['WhatsApp', 'Interchangeable provider', 'Node.js/TypeScript bridge', 'Typebot and Redis', 'GLPI and Chatwoot'],
      technologies: ['TypeScript', 'Node.js', 'Express', 'Redis', 'PostgreSQL', 'Docker', 'Webhooks'],
      repo: 'https://github.com/lucasldantas/glpi_chatbot',
      status: 'Public project'
    },
    {
      slug: 'glpi-equipment-responsibility-terms',
      number: '03',
      type: 'ITSM product',
      title: 'Equipment Responsibility Terms for GLPI',
      summary: 'A plugin to generate, sign, and audit equipment delivery and return documents inside the inventory workflow.',
      challenge: 'Formalizing equipment ownership required documents, signatures, and inventory updates spread across manual steps.',
      approach: 'The plugin connects GLPI computers and users to issuance, in-person or remote signing, PDF generation, and return workflows. Administrators can customize fields, clauses, and templates.',
      outcome: 'The solution centralizes the document lifecycle, records signing evidence, generates a SHA-256 integrity hash, and can update inventory when equipment is returned.',
      architecture: ['GLPI asset and owner', 'Document issuance', 'In-person or remote signing', 'PDF and audit trail', 'Return and inventory update'],
      technologies: ['PHP', 'GLPI 11', 'MySQL', 'JavaScript', 'TCPDF', 'CSV'],
      repo: 'https://github.com/lucasldantas/termos-responsabilidade-glpi',
      status: 'Public project'
    },
    {
      slug: 'winpe-wim-automation',
      number: '04',
      type: 'Endpoint engineering',
      title: 'Windows Automation with WinPE & WIM',
      summary: 'A repeatable process for preparing UEFI WinPE media and applying a customized Windows image.',
      challenge: 'Reduce variation and manual work when preparing computers while keeping a clear technical path for image deployment and boot configuration.',
      approach: 'The lab documents WinPE creation, image mounting, scripted execution, GPT partitioning, WIM application through DISM, and UEFI boot configuration.',
      outcome: 'The guide turns a sensitive deployment sequence into a documented procedure that can be tested in a virtual machine before controlled use.',
      architecture: ['Windows ADK and WinPE', 'boot.wim image', 'GPT disk automation', 'WIM image application', 'UEFI boot and validation'],
      technologies: ['Windows PE', 'WIM', 'DISM', 'Windows ADK', 'DiskPart', 'BCDBoot'],
      repo: 'https://github.com/lucasldantas/Criando-WinPE-com-imagem-.wim-personalizada',
      status: 'Public technical guide'
    }
  ]
};

export const copy = {
  pt: {
    lang: 'pt-BR',
    shortLang: 'PT',
    switchLabel: 'EN',
    switchHref: '/en/',
    metaTitle: 'Lucas Lopes Dantas — Engenharia de TI, Automação e Integrações',
    metaDescription: 'Portfólio de Lucas Lopes Dantas: GLPI, engenharia de endpoints, automação, integrações e desenvolvimento de soluções para operações de TI.',
    nav: [
      ['Projetos', '#projetos'],
      ['Especialidades', '#especialidades'],
      ['Trajetória', '#trajetoria'],
      ['Contato', '#contato']
    ],
    role: 'Analista de Suporte Sênior · Engenharia aplicada à operação',
    heroTitle: 'Engenharia de TI, automação e integrações.',
    heroLead: 'Projeto e desenvolvo soluções para ambientes corporativos — da gestão de plataformas e endpoints à automação, integração de sistemas e criação de ferramentas operacionais.',
    primaryCta: 'Conheça os projetos',
    secondaryCta: 'Vamos conversar',
    availability: 'Consultoria, projetos independentes e oportunidades',
    proof: [
      ['10+', 'anos em Tecnologia da Informação'],
      ['4', 'frentes conectadas: ITSM, endpoints, automação e software'],
      ['Natal/RN', 'atuação remota e ambientes corporativos']
    ],
    statementEyebrow: 'Da causa à solução',
    statement: 'Não resolvo apenas o sintoma. Investigo o ambiente, conecto as informações e construo uma solução que a operação consegue sustentar.',
    statementBody: 'Minha trajetória começou próxima dos usuários e dos equipamentos. Essa base evoluiu para administração de plataformas, troubleshooting avançado, automação, integrações e desenvolvimento de sistemas. É essa visão de ponta a ponta que levo para cada projeto.',
    projectsEyebrow: 'Trabalho selecionado',
    projectsTitle: 'Soluções construídas para problemas reais.',
    projectsIntro: 'Projetos públicos e estudos de caso que mostram como infraestrutura, plataformas e software podem trabalhar como um único sistema.',
    viewCase: 'Ver estudo de caso',
    expertiseEyebrow: 'Como posso ajudar',
    expertiseTitle: 'Capacidade técnica com contexto operacional.',
    expertise: [
      { code: '01', title: 'ITSM e plataformas', text: 'Administração e evolução de GLPI, inventário, ativos, chamados, workflows e ferramentas de serviço.', tags: ['GLPI', 'CMDB', 'Jira Service Management', 'Freshdesk'] },
      { code: '02', title: 'Endpoint engineering', text: 'Padronização, provisionamento e automação do ciclo de preparação de computadores Windows.', tags: ['Windows', 'WinPE', 'WIM', 'DISM', 'ADK', 'Drivers'] },
      { code: '03', title: 'Automação e integrações', text: 'Scripts, APIs e webhooks que reduzem trabalho manual e conectam plataformas corporativas.', tags: ['PowerShell', 'REST APIs', 'Webhooks', 'Slack', 'JumpCloud', 'Zscaler'] },
      { code: '04', title: 'Soluções web internas', text: 'Ferramentas voltadas à gestão operacional, conformidade, logística, dashboards e portais.', tags: ['TypeScript', 'Node.js', 'React', 'PHP', 'PostgreSQL', 'Prisma'] }
    ],
    methodEyebrow: 'Método',
    methodTitle: 'Entender antes de automatizar.',
    methodSteps: [
      ['Investigar', 'Mapear o problema, o fluxo atual, as dependências e a causa raiz.'],
      ['Projetar', 'Definir limites, integrações, dados e um caminho sustentável de evolução.'],
      ['Construir', 'Implementar automações e ferramentas com foco em operação e manutenção.'],
      ['Validar', 'Testar o fluxo completo, documentar decisões e observar o resultado.']
    ],
    timelineEyebrow: 'Trajetória',
    timelineTitle: 'Uma evolução construída dentro da operação.',
    timelineIntro: 'Mais de uma década entre atendimento, suporte especializado, endpoints, plataformas e engenharia de soluções.',
    timeline: [
      { period: '2026 — atual', company: 'Arco Educação', role: 'Analista de Suporte Sênior' },
      { period: '2024 — 2026', company: 'Arco Educação', role: 'Analista de Suporte Pleno' },
      { period: '2023 — 2024', company: 'Riachuelo', role: 'Analista de Suporte Pleno' },
      { period: '2022 — 2023', company: 'Riachuelo', role: 'Analista de Suporte Júnior' },
      { period: '2018 — 2021', company: 'Riachuelo', role: 'Técnico de Microinformática Jr' },
      { period: '2015 — 2018', company: 'Riachuelo', role: 'Atendente de telemarketing' }
    ],
    educationTitle: 'Formação e desenvolvimento',
    education: [
      ['Gestão da Tecnologia da Informação', 'UNINASSAU'],
      ['Administração de Redes', 'Senac Brasil'],
      ['Trilha Digital · Coders 24 · DevOps', 'Ada Tech'],
      ['DevOps Fundamentals', 'DIO'],
      ['Programming Basics', 'Descomplica']
    ],
    contactEyebrow: 'Próximo passo',
    contactTitle: 'Tem um processo para simplificar ou um sistema para conectar?',
    contactText: 'Estou aberto a consultoria, projetos independentes e conversas sobre oportunidades em que infraestrutura, automação e desenvolvimento precisem trabalhar juntos.',
    emailLabel: 'Enviar um e-mail',
    footer: 'Projetado com clareza, construído com evidências.'
  },
  en: {
    lang: 'en',
    shortLang: 'EN',
    switchLabel: 'PT',
    switchHref: '/',
    metaTitle: 'Lucas Lopes Dantas — IT Engineering, Automation & Integrations',
    metaDescription: 'Lucas Lopes Dantas’ portfolio: GLPI, endpoint engineering, automation, integrations, and software solutions for IT operations.',
    nav: [
      ['Work', '#work'],
      ['Expertise', '#expertise'],
      ['Experience', '#experience'],
      ['Contact', '#contact']
    ],
    role: 'Senior Support Analyst · Engineering applied to operations',
    heroTitle: 'IT engineering, automation, and integrations.',
    heroLead: 'I design and build solutions for corporate IT environments — from platforms and endpoints to automation, systems integration, and operational tools.',
    primaryCta: 'View selected work',
    secondaryCta: 'Start a conversation',
    availability: 'Consulting, independent projects, and opportunities',
    proof: [
      ['10+', 'years in Information Technology'],
      ['4', 'connected areas: ITSM, endpoints, automation, and software'],
      ['Natal, Brazil', 'remote work and corporate environments']
    ],
    statementEyebrow: 'From cause to solution',
    statement: 'I do not stop at the symptom. I investigate the environment, connect the information, and build a solution the operation can sustain.',
    statementBody: 'My career began close to users and devices. That foundation evolved into platform administration, advanced troubleshooting, automation, integrations, and software development. This end-to-end perspective shapes every project I take on.',
    projectsEyebrow: 'Selected work',
    projectsTitle: 'Solutions built for real problems.',
    projectsIntro: 'Public projects and case studies showing how infrastructure, platforms, and software can work as one system.',
    viewCase: 'View case study',
    expertiseEyebrow: 'How I can help',
    expertiseTitle: 'Technical depth with operational context.',
    expertise: [
      { code: '01', title: 'ITSM & platforms', text: 'GLPI administration and evolution, inventory, assets, tickets, workflows, and service platforms.', tags: ['GLPI', 'CMDB', 'Jira Service Management', 'Freshdesk'] },
      { code: '02', title: 'Endpoint engineering', text: 'Standardization, provisioning, and automation across the Windows device preparation lifecycle.', tags: ['Windows', 'WinPE', 'WIM', 'DISM', 'ADK', 'Drivers'] },
      { code: '03', title: 'Automation & integrations', text: 'Scripts, APIs, and webhooks that reduce manual work and connect corporate platforms.', tags: ['PowerShell', 'REST APIs', 'Webhooks', 'Slack', 'JumpCloud', 'Zscaler'] },
      { code: '04', title: 'Internal web solutions', text: 'Tools for operations management, compliance, logistics, dashboards, and internal portals.', tags: ['TypeScript', 'Node.js', 'React', 'PHP', 'PostgreSQL', 'Prisma'] }
    ],
    methodEyebrow: 'Method',
    methodTitle: 'Understand before automating.',
    methodSteps: [
      ['Investigate', 'Map the problem, current workflow, dependencies, and root cause.'],
      ['Design', 'Define boundaries, integrations, data, and a sustainable path forward.'],
      ['Build', 'Implement automation and tools with operations and maintenance in mind.'],
      ['Validate', 'Test the full flow, document decisions, and observe the outcome.']
    ],
    timelineEyebrow: 'Experience',
    timelineTitle: 'A career built from inside operations.',
    timelineIntro: 'More than a decade across customer service, specialized support, endpoints, platforms, and solution engineering.',
    timeline: [
      { period: '2026 — present', company: 'Arco Educação', role: 'Senior Support Analyst' },
      { period: '2024 — 2026', company: 'Arco Educação', role: 'Mid-Level Support Analyst' },
      { period: '2023 — 2024', company: 'Riachuelo', role: 'Mid-Level Support Analyst' },
      { period: '2022 — 2023', company: 'Riachuelo', role: 'Junior Support Analyst' },
      { period: '2018 — 2021', company: 'Riachuelo', role: 'Junior Microcomputer Technician' },
      { period: '2015 — 2018', company: 'Riachuelo', role: 'Customer Service Representative' }
    ],
    educationTitle: 'Education & development',
    education: [
      ['IT Management', 'UNINASSAU'],
      ['Network Administration', 'Senac Brasil'],
      ['Digital Track · Coders 24 · DevOps', 'Ada Tech'],
      ['DevOps Fundamentals', 'DIO'],
      ['Programming Basics', 'Descomplica']
    ],
    contactEyebrow: 'Next step',
    contactTitle: 'Have a process to simplify or a system to connect?',
    contactText: 'I am open to consulting, independent projects, and conversations about opportunities where infrastructure, automation, and software need to work together.',
    emailLabel: 'Send an email',
    footer: 'Designed with clarity, built on evidence.'
  }
} as const;

export function projectHref(locale: Locale, slug: string) {
  return locale === 'pt' ? `/projetos/${slug}/` : `/en/projects/${slug}/`;
}
