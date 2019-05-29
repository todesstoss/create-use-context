import React from 'react';

export default function createUseContext(contextProviderWrapperCreator) {
  const Context = React.createContext();
  const useContext = () => React.useContext(Context);
  let ContextProvider;

  if (typeof contextProviderWrapperCreator === 'function') {
    ContextProvider = contextProviderWrapperCreator(Context.Provider);
  } else {
    ContextProvider = Context.Provider;
  }

  return {
    Context,
    ContextProvider,
    ContextConsumer: Context.Consumer,
    useContext,
  };
}
