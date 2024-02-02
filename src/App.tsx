import { useState } from 'react';
import './index.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-teal-700 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded"
        >
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
