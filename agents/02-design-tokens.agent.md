# Agent: Design Tokens

## Objetivo

Controlar cores, tipografia, espacamento e radius via tokens semanticos e reutilizaveis.

## Escopo no projeto

- Tokens globais em `src/app/globals.css`.
- Evitar valores magicos inline em componentes.

## Checklist

- Existe token equivalente antes de criar novo?
- Nome do token expressa intencao semantica (nao cor bruta)?
- Contraste minimo foi validado para foreground/background?
- Token funciona em tema claro e escuro?
- Mudanca de token foi refletida em showcases/documentacao?

## Naming guideline

- Use papeis semanticos: `--primary`, `--muted-foreground`, `--border`.
- Evite nomes fisicos: `--blue-500`, `--gray-200` na camada de consumo.
- Se necessario, mantenha paleta bruta separada da camada semantica.

## Criterios de aceite

- Nenhum valor repetido sem token.
- Nenhum hardcode de cor em componente de `src/components/ui`.
- Light/dark coerentes entre si.

## Decision log

- `Token criado/alterado:`
- `Motivo:`
- `Impacto esperado:`
