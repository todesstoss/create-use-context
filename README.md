# create-use-context

A helper method which wraps original React `createContext` method and provides additional functionality like wrapping a `Context.Provider`, `useContext` helper, etc.

## Installation

```
# with NPM:

npm install create-use-context

# with Yarn:

yarn add create-use-context
```

## Usage

```javascript
import React, { useState } from 'react';

import createUseContext from 'create-use-context';

const [
  MyContext,
  MyContextProvider,
  MyContextConsumer,
  useMyContext,
] = createUseContext((Provider) => ({ children }) => {
  const [counter, setCounter] = useState(0);

  return <Provider value={{ counter, setCounter }}>{children}</Provider>;
});

function App() {
  return (
    <MyContextProvider>
      <ComponentWithHook />
      <ComponentWithConsumer />
    </MyContextProvider>
  );
}

function ComponentWithHook() {
  const { counter, setCounter } = useMyContext();

  return (
    <button
      onClick={() => {
        setCounter(counter + 1);
      }}
    >
      {counter} - add one
    </button>
  );
}

function ComponentWithConsumer() {
  return (
    <MyContextConsumer>
      {({ counter, setCounter }) => (
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          {counter} - add one
        </button>
      )}
    </MyContextConsumer>
  );
}

export default App;
```
