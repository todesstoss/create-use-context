import { describe, it, expect } from 'vitest';
import {
  createContext,
  createElement,
  useState,
  type FC,
  type ReactNode,
} from 'react';
import { renderHook, act } from '@testing-library/react';
import { createUseContext, EMPTY_CONTEXT_VALUE } from './createUseContext';

type Value = { count: number; increment: () => void };

describe('createUseContext', () => {
  const TestContext = createContext<Value | typeof EMPTY_CONTEXT_VALUE>(
    EMPTY_CONTEXT_VALUE
  );
  TestContext.displayName = 'TestContext';
  const useTestContext = createUseContext(TestContext);

  const Provider: FC<{ children?: ReactNode }> = ({ children }) => {
    const [count, setCount] = useState(0);
    const value: Value = {
      count,
      increment: () => setCount((c) => c + 1),
    };
    return createElement(TestContext.Provider, { value }, children);
  };

  it('returns context value inside Provider', () => {
    const { result } = renderHook(() => useTestContext(), {
      wrapper: ({ children }) => createElement(Provider, null, children),
    });

    expect(result.current.count).toBe(0);
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  it('throws when used outside Provider', () => {
    expect(() => {
      renderHook(() => useTestContext());
    }).toThrow('useTestContext has to be used within <TestContext.Provider>');
  });
});
