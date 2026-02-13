# Agent: Accessibility

## Objetivo

Garantir conformidade minima de acessibilidade para todos os componentes e fluxos interativos.

## Checklist obrigatorio

- Navegacao por teclado funciona (Tab, Shift+Tab, Enter, Space, Esc quando aplicavel)?
- Focus visivel e consistente com tokens de `--ring`?
- `aria-*` foi adicionado apenas quando necessario e correto?
- Labels e nomes acessiveis existem para inputs e botoes icon-only?
- Contraste de texto e controles atende WCAG AA?
- Dialogs e menus respeitam foco inicial, trap e retorno de foco?

## Regras

- Nunca remover `outline` sem substituto equivalente.
- Nao usar `div` clicavel quando `button` resolver.
- Estados de erro devem ser anunciaveis por leitores de tela.

## Criterios de aceite

- Sem bloqueio de uso apenas por teclado.
- Sem elementos interativos sem nome acessivel.
- Sem regressao de contraste apos mudanca de token.
