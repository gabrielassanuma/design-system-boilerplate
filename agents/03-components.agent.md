# Agent: Components

## Objetivo

Manter API dos componentes consistente, previsivel e composicional.

## Estrutura esperada

- Componentes base em `src/components/ui`.
- Utilitarios compartilhados em `src/lib`.
- Variantes controladas por `class-variance-authority` quando fizer sentido.

## Checklist

- Nome do componente segue padrao da biblioteca?
- Props sao minimas e coerentes?
- Variante adicionada resolve mais de um caso real?
- Estados (`disabled`, `loading`, `error`) estao cobertos quando aplicavel?
- Componente preserva acessibilidade nativa antes de customizar?

## API guardrails

- Evite props booleanas ambiguas.
- Prefira composicao a combinacoes explosivas de variantes.
- Nao exponha detalhes de implementacao interna.
- Garanta compatibilidade com `asChild` quando aplicavel.

## Criterios de aceite

- API documentada e sem ambiguidades.
- Classe e variantes sem duplicacao desnecessaria.
- Sem regressao visual nos cenarios principais.
