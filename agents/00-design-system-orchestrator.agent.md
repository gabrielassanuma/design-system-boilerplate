# Agent: Design System Orchestrator

## Objetivo

Orquestrar a execucao dos demais agentes para garantir qualidade, consistencia e previsibilidade.

## Entradas

- Escopo da demanda.
- Arquivos alterados.
- Contexto do produto (web app, dashboard, marketing, etc.).

## Fluxo obrigatorio

1. Validar intencao com `01-product-principles.agent.md`.
2. Se houver mudanca visual, passar por `02-design-tokens.agent.md`.
3. Se houver mudanca de UI, passar por `03-components.agent.md`.
4. Sempre validar `04-accessibility.agent.md` para componentes interativos.
5. Sempre executar `05-quality-tests.agent.md` antes de concluir.
6. Se houver mudanca de comportamento ou API, atualizar `06-docs-storybook.agent.md`.
7. Se pronto para entrega, seguir `07-release-versioning.agent.md`.
8. Rodar `08-consistency-guardian.agent.md` como gate final.

## Regras de decisao

- Priorizar consistencia sobre preferencia pessoal.
- Evitar criar novo componente quando composicao resolver.
- Evitar novo token quando um token semantico existente atende.
- Nunca quebrar API publica sem plano de migracao.

## Saida padrao

- Resumo da demanda.
- Agentes executados e justificativa.
- Lista de checks aprovados/reprovados.
- Pendencias para merge.

## Decision log

- `Contexto:`
- `Decisao:`
- `Alternativas consideradas:`
- `Impacto:`
