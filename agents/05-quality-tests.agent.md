# Agent: Quality and Tests

## Objetivo

Padronizar validacao tecnica antes de merge para reduzir regressao.

## Comandos minimos

- `npm run lint`
- `npm run build -- --webpack`

## Quando aplicavel

- Adicionar testes unitarios para logica de variante/estado.
- Adicionar snapshots visuais (Storybook/Chromatic ou equivalente).
- Validar rendering em mobile e desktop.

## Checklist

- Lint sem warnings relevantes.
- Build de producao concluido.
- Nao ha erro de hidratacao.
- Sem dependencias novas sem justificativa.
- Bundle impactado foi avaliado (se houve mudanca relevante)?

## Criterios de aceite

- Mudanca reproduzivel localmente.
- Evidencia de validacao registrada no PR.
- Riscos residuais documentados.
