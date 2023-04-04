import { useContext, Context } from 'react';

export function createUseContext<T>(context: Context<T>) {
  const value = useContext(context);

  if (!value) {
    throw new Error(getErrorMessage(context));
  }

  return value;
};

function getErrorMessage({ displayName }: { displayName?: string }) {
  return displayName
    ? composeErrorMessage(displayName)
    : composeErrorMessage('Context');
}

function composeErrorMessage(name: string) {
  return `use${name} has to be used within <${name}.Provider>`;
}
