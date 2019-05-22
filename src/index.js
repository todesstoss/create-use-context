import React from 'react';

export default function createUseContext(contextProviderWrapperCreator) {
  const NewContext = React.createContext();
  const useNewContext = () => React.useContext(NewContext);
  let NewContextProvider;

  if (typeof contextProviderWrapperCreator === 'function') {
    NewContextProvider = contextProviderWrapperCreator(NewContext.Provider);
  } else {
    NewContextProvider = NewContext.Provider;
  }

  return [NewContext, NewContextProvider, NewContext.Consumer, useNewContext];
}
