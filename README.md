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
import React, { Component, useState } from 'react';

import { createUseContext, createWithContext } from 'create-use-context';

const {
  Context: MyContext,
  ContextProvider: MyContextProvider,
  ContextConsumer: MyContextConsumer,
  useContext: useMyContext,
} = createUseContext((Provider) => ({ children }) => {
  const [counter, setCounter] = useState(0);

  return <Provider value={{ counter, setCounter }}>{children}</Provider>;
});

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

// You might also need a High Order Component to wrap your class Components
// if you don't line Render Prop pattern with a Consumer Component.

// So you can use `createWithContext` helper function:

const withMyContext = createWithContext(MyContext, 'my');

class ClassComponent extends Component {
  render() {
    const { counter, setCounter } = this.props.my;

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
}

const ClassCompoenntWithHOC = withMyContext(ClassComponent);

function App() {
  return (
    <MyContextProvider>
      <ComponentWithHook />
      <ComponentWithConsumer />
      <ClassCompoenntWithHOC />
    </MyContextProvider>
  );
}

export default App;
```
