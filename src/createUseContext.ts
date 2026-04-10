import { useContext, Context } from 'react';

export const EMPTY_CONTEXT_VALUE = Symbol('Context empty value');

export function createUseContext<T>(context: Context<T>) {
  return function () {
    const value = useContext(context);

    if (value === EMPTY_CONTEXT_VALUE) {
      throw new Error(composeErrorMessage(context.displayName || 'Context'));
    }

    return value as Exclude<T, typeof EMPTY_CONTEXT_VALUE>;
  };
}

function composeErrorMessage(name: string) {
  return `use${name} has to be used within <${name}.Provider>`;
}
