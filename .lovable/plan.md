

## Corrigir erros de build do projeto

O projeto tem dois erros de TypeScript que impedem o build. Ambos vieram do repositório GitHub e precisam ser corrigidos:

### Correções necessárias

**1. `src/components/theme-provider.tsx`** — O tipo `ThemeProviderProps` não existe mais na versão instalada do `next-themes`. Solução: usar `React.ComponentProps<typeof NextThemesProvider>` no lugar.

**2. `src/components/ui/hand-writing-text.tsx`** — O tipo `ease` com array de números `[0.43, 0.13, 0.23, 0.96]` não é aceito diretamente como `Variants`. Solução: fazer cast do objeto `draw` como `any` ou usar tipo `as const` com assertion para contornar a incompatibilidade de tipos do framer-motion.

### Detalhes técnicos
- No theme-provider, trocar a linha do import e o tipo para `React.ComponentProps<typeof NextThemesProvider>`
- No hand-writing-text, adicionar `as any` no `variants={draw as any}` para evitar o erro de tipos complexos do framer-motion

