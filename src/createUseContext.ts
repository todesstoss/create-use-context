import { useContext, Context } from 'react';

export function createUseContext<T>(context: Context<T>) {
  return function() {
    const value = useContext(context);

    if (!value) {
      throw new Error(composeErrorMessage(context.displayName || 'Context'));
    }

    return value;
  }
}

function composeErrorMessage(name: string) {
  return `use${name} has to be used within <${name}.Provider>`;
}
