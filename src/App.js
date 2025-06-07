import React, { useState } from 'react';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [input, setInput] = useState({ description: '', amount: '' });

  const handleAdd = () => {
    if (!input.description || !input.amount) return;
    setExpenses([...expenses, input]);
    setInput({ description: '', amount: '' });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Expense Tracker</h1>
      <input
        placeholder="Description"
        value={input.description}
        onChange={(e) => setInput({ ...input, description: e.target.value })}
      />
      <input
        type="number"
        placeholder="Amount"
        value={input.amount}
        onChange={(e) => setInput({ ...input, amount: e.target.value })}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {expenses.map((e, i) => (
          <li key={i}>
            {e.description} - ₹{e.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;






import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';

function App() {
  return (
    <div>
      <h1>Welcome to Expense App</h1>
      {/* Your app content here */}
    </div>
  );
}

// Wrap withAuthenticator HOC to add signup/signin UI automatically
export default withAuthenticator(App);
