# Evolução: cases profissionais e identidade visual

## Mudanças implementadas

1. Inclusão da seção **Cases de Engenharia** antes dos projetos públicos.
2. Criação do case bilíngue **Implantação e Gestão do GLPI como Plataforma de ITSM**.
3. Estrutura narrativa do case: desafio, solução, atuação, tecnologias e impacto qualitativo.
4. Fluxo conceitual: Usuário → Central de Serviços GLPI → Chamados / Gestão de Ativos → Processos Operacionais.
5. Separação editorial e visual entre case profissional, projetos públicos e estudo anonimizado.
6. Reorganização da navegação para priorizar cases.
7. Substituição da antiga lista textual de especialidades por uma vitrine visual com seis categorias.
8. Uso de SVG oficial do GLPI e ícones do Simple Icons quando disponíveis; demais marcas recebem tratamento tipográfico.
9. Criação de `src/data/case-drafts.ts` com três rascunhos não publicados e sem importação nas rotas.
10. Inclusão de tratamentos responsivos e suporte contínuo a `prefers-reduced-motion`.

## Limites de conteúdo

- Nenhuma métrica, SLA, volume de chamados, quantidade de dispositivos ou percentual foi inventado.
- O case não contém URL interna, IP, credencial, token, dado de colaborador ou configuração sensível.
- A Arco Educação é citada somente como contexto profissional; nenhum logo ou material corporativo da organização foi utilizado.
- O diagrama é identificado como conceitual e não representa arquitetura interna real.

## Como publicar um rascunho no futuro

Antes de criar uma rota ou importar um item de `case-drafts.ts`, confirmar com Lucas: contexto, participação, escopo, tecnologias, resultados publicáveis e eventuais restrições de confidencialidade.
