# Changelog

## 3.0.1

### Fix

- Widen **`react` peer dependency** to `>=16.8.0` so npm can install with React 17, 18, and 19 (`^16.8.0` only matched 16.x and triggered `ERESOLVE` with React 19).

## 3.0.0

### Breaking changes

- **ESM-only**: published build is `dist/index.js` (ESM) plus types. CommonJS output and `require()` are no longer supported.
- **Entry layout**: replace `dist/cjs/*` and `dist/esm/*` with a flat `dist/` and a `package.json` `exports` map (`import` + `types`).

### API (unchanged contract)

- **`EMPTY_CONTEXT_VALUE`**: exported sentinel `Symbol` for `createContext`’s default when no provider is mounted. Pass `Value | typeof EMPTY_CONTEXT_VALUE` as the context type and `EMPTY_CONTEXT_VALUE` as the default; `createUseContext` throws outside a matching `Provider` and types the hook return as `Exclude<…, typeof EMPTY_CONTEXT_VALUE>`.

### Chores

- Build with **tsdown** (Rolldown) instead of Rollup.
- **pnpm** for installs; **TypeScript 6.0.2**.

## 2.0.2

### Fix

- Terser plugin removed
- Fix `createUseContext` returned value instead hook

## 2.0.0

### New features

- Library Rewritten in TypeScript
- Now `createUseContext` returns only hook, to actually use `Context` in a type-safe manner
- All the wrappers for Providers removed
- Helper `createWithContext` removed as non actual
