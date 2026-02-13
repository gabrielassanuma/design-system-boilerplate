# Agents de Governanca do Design System

Este diretorio padroniza como evoluir o design system sem perder consistencia entre projetos.

## Como usar

1. Inicie pelo `00-design-system-orchestrator.agent.md`.
2. Execute os agentes na ordem numerica.
3. Registre decisoes em PR/commit usando a secao "Decision log" sugerida por cada agente.
4. Nao pule o `08-consistency-guardian.agent.md` antes de merge/release.

## Ordem recomendada

- `00-design-system-orchestrator.agent.md`
- `01-product-principles.agent.md`
- `02-design-tokens.agent.md`
- `03-components.agent.md`
- `04-accessibility.agent.md`
- `05-quality-tests.agent.md`
- `06-docs-storybook.agent.md`
- `07-release-versioning.agent.md`
- `08-consistency-guardian.agent.md`

## Convencoes

- Todos os agentes retornam: contexto, decisoes, checklist e riscos.
- Sem decisoes subjetivas sem criterio objetivo.
- Toda mudanca visual deve apontar token de origem.
- Toda mudanca de API de componente deve ter estrategia de migracao.
