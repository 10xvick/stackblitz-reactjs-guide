import * as React from 'react';
import { useState, useMemo, useCallback } from 'react';

export function C_useMemo_vs_useCallback() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const memoizedValue = useMemo(() => {
    return count * 2;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
      <p>Memoized value: {memoizedValue}</p>

      <div>
        <h3>Behavior of useMemo:</h3>
        <p>
          The memoized value will only be re-computed if the count changes.
          This means that the value will remain the same until the count
          changes, even if other parts of the component re-render.
        </p>
        <br />
      </div>

      <div>
        <h3>Behavior of useCallback:</h3>
        <p>
          The callback function will only be re-created if the count changes.
          This means that the same function instance will be used for the
          onClick event of the button, even if other parts of the component
          re-render.
        </p>
        <br />
      </div>
    </div>
  );
}
