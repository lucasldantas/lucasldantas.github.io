/**
 * Rascunhos editoriais. Este módulo não é importado por páginas ou componentes,
 * portanto os itens abaixo não entram no build público até revisão explícita.
 */
export const unpublishedEngineeringCaseDrafts = [
  {
    slug: 'engenharia-endpoints-implantacao-windows',
    published: false,
    topics: ['Padronização Windows', 'Imagens customizadas', 'Windows PE', 'WIM e DISM', 'Windows ADK e MDT', 'Drivers por fabricante e modelo', 'PowerShell'],
    verificationNote: 'Confirmar contexto, atuação, escopo e resultados antes da publicação.'
  },
  {
    slug: 'integracao-plataformas-gestao-ativos',
    published: false,
    topics: ['GLPI', 'JumpCloud', 'Zscaler', 'Integração de inventários', 'Correlação de dispositivos', 'Inconsistências', 'Dashboards de conformidade'],
    verificationNote: 'Não afirmar implantação, liderança ou métricas sem validação.'
  },
  {
    slug: 'automacoes-operacoes-ti',
    published: false,
    topics: ['Scripts', 'APIs', 'Tarefas repetitivas', 'Ferramentas para suporte e engenharia', 'Redução de trabalho manual'],
    verificationNote: 'Validar exemplos publicáveis e benefícios antes da publicação.'
  }
] as const;
