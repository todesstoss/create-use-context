# create-use-context

A small helper around React `useContext` for context objects that use a **sentinel default** (`EMPTY_CONTEXT_VALUE`, defined in [`src/createUseContext.ts`](https://github.com/todesstoss/create-use-context/blob/master/src/createUseContext.ts)). The hook throws if the tree is not under a matching `Provider`. TypeScript types the hook’s return as your real value type only by using [`Exclude`](https://www.typescriptlang.org/docs/handbook/utility-types.html#excludeuniontype-excludedmembers) to drop the sentinel from the union—unlike `NonNullable`, which only removes `null` and `undefined`.

## Installation

This package is **ESM-only** (`import` / bundlers). It does not ship CommonJS; use `import` or a bundler that resolves ESM.

Using pnpm:

```sh
pnpm add create-use-context
```

Using npm:

```sh
npm install create-use-context
```

Using Yarn:

```sh
yarn add create-use-context
```

## Usage

Declare context as `YourValue | typeof EMPTY_CONTEXT_VALUE`, pass `EMPTY_CONTEXT_VALUE` to `createContext` as the default (no provider), then wrap with `createUseContext`. The returned hook is typed like `() => YourValue`: you can still use `null` or `undefined` inside `YourValue` if you need them; the sentinel is only for “no provider mounted.”

```tsx
import {
  createContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from 'react';
import { createUseContext, EMPTY_CONTEXT_VALUE } from 'create-use-context';

const INITIAL_COUNT = 0;

export interface CounterContextValue {
  counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
}

export const CounterContext = createContext<
  CounterContextValue | typeof EMPTY_CONTEXT_VALUE
>(EMPTY_CONTEXT_VALUE);

CounterContext.displayName = 'CounterContext';

export function CounterContextProvider({ children }: { children: ReactNode }) {
  const [counter, setCounter] = useState(INITIAL_COUNT);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
}

export const useCounterContext = createUseContext(CounterContext);

export function CounterApp() {
  const { counter, setCounter } = useCounterContext();

  return (
    <button type="button" onClick={() => setCounter(counter + 1)}>
      {counter} — add one
    </button>
  );
}

export function App() {
  return (
    <CounterContextProvider>
      <CounterApp />
    </CounterContextProvider>
  );
}
```

## Development

Requires **Node.js ≥ 20.19** (for the tsdown toolchain).

```sh
pnpm install
pnpm typecheck
pnpm test
pnpm build
```
