# Agent: Release and Versioning

## Objetivo

Padronizar publicacao e versionamento do design system.

## Regras de versao

- `patch`: fix sem alterar API/contrato.
- `minor`: nova funcionalidade sem quebra.
- `major`: breaking change.

## Checklist pre-release

- CHANGELOG atualizado?
- Breaking changes sinalizadas?
- Guia de migracao criado (se necessario)?
- Versao semantica coerente com impacto real?
- Tag/release notes preparadas?

## Template de release notes

- `Resumo`
- `Novidades`
- `Correcoes`
- `Breaking changes`
- `Migracao`

## Criterios de aceite

- Consumidores conseguem entender impacto em menos de 5 minutos.
- Nenhuma quebra relevante sem instrucoes de migracao.
