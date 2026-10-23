# Lucas Lopes Dantas — Portfolio

Portfólio profissional bilíngue de Lucas Lopes Dantas, com foco em Engenharia de TI, automação, integrações, ITSM e endpoint engineering.

## Destaques

- Conteúdo em português do Brasil e inglês.
- Case profissional destacado, projetos públicos e estudo anonimizado visualmente separados.
- Página dedicada ao case de implantação e gestão do GLPI como plataforma de ITSM.
- Vitrine de tecnologias dividida por contexto de utilização, com logos acessíveis.
- Três futuros cases preservados como rascunhos não publicados.
- Direção visual **Engineering Blueprint**.
- Site estático, responsivo e acessível.
- SEO, Open Graph, dados estruturados e sitemap.
- Deploy automático no GitHub Pages.

## Stack

- [Astro](https://astro.build/)
- TypeScript
- CSS nativo
- Simple Icons 16.35.0
- Font Awesome Free Brands 7.3.1
- GitHub Actions
- GitHub Pages

## Desenvolvimento local

```bash
npm install
npm run dev
```

Validação e build de produção:

```bash
npm run build
```

## Estrutura

```text
src/
  components/   Componentes de páginas e interface
  data/         Conteúdo bilíngue, cases, tecnologias e rascunhos
  layouts/      Metadados, SEO e estrutura base
  pages/        Rotas em português e inglês
  styles/       Sistema visual responsivo
public/
  assets/       Imagens e logos públicos
```

## Organização editorial

- **Cases de Engenharia:** experiência profissional confirmada em ambientes corporativos.
- **Projetos públicos:** código e documentação disponíveis no GitHub.
- **Estudos anonimizados:** abordagem técnica sem exposição de contexto sensível.
- **Rascunhos:** `src/data/case-drafts.ts` não é importado por nenhuma rota e não entra na navegação.

O diagrama do case GLPI é uma representação conceitual para portfólio e não descreve a arquitetura interna da Arco Educação. O site não apresenta métricas, SLAs ou volumes não autorizados.

## Marcas e logos

Consulte [THIRD_PARTY_ASSETS.md](THIRD_PARTY_ASSETS.md). As marcas identificam tecnologias utilizadas e não representam certificação, parceria ou endosso.

## Publicação

Todo push para `main` executa a validação, gera o site estático e publica o conteúdo no GitHub Pages.

## Licença

O código-fonte está disponível sob a licença MIT. Textos, identidade pessoal e fotografia não são cobertos por essa licença e permanecem © Lucas Lopes Dantas.

---

Professional bilingual portfolio for Lucas Lopes Dantas, focused on IT engineering, automation, integrations, ITSM, and endpoint engineering. Built with Astro and automatically deployed to GitHub Pages.
