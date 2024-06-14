import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [isCountButtonActive, setIsButtonActive] = useState(true);

  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        gap: '5px',
        justifyContent: 'flex-start'
      }}
    >
      <button
        disabled={!isCountButtonActive}
        {...(isCountButtonActive && {
          onClick: () => setCount(currentCount => currentCount + 1)
        })}
      >
        Increment count
      </button>
      <button onClick={() => setIsButtonActive(currentState => !currentState)}>
        Toggle count button state
      </button>
      <span>Current count: {count}. Increment {isCountButtonActive ? 'enabled' : 'disabled'}</span>
    </div>
  );
}

export default App;
