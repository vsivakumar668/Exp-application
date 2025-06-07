import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState({ description: '', amount: '', category: '' });

  const handleAddExpense = async () => {
    await axios.post('https://your-api-url/addExpense', {
      userId: 'user123',
      expenseId: Date.now().toString(),
      ...form,
      date: new Date().toISOString(),
    });
    alert('Expense added!');
  };

  return (
    <div>
      <h2>Expense Tracker</h2>
      <input placeholder="Description" onChange={(e) => setForm({ ...form, description: e.target.value })} />
      <input type="number" placeholder="Amount" onChange={(e) => setForm({ ...form, amount: e.target.value })} />
      <input placeholder="Category" onChange={(e) => setForm({ ...form, category: e.target.value })} />
      <button onClick={handleAddExpense}>Add Expense</button>
    </div>
  );
}

export default App;
