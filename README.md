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
  ExampleContext,
  ExampleContextProvider,
  ExampleContextConsumer,
  useExampleContext,
] = createUseContext((Provider) => ({ children }) => {
  const [counter, setCounter] = useState(0);

  return <Provider value={{ counter, setCounter }}>{children}</Provider>;
});

export { ExampleContextConsumer, ExampleContextProvider, useExampleContext };

export default ExampleContext;
```
