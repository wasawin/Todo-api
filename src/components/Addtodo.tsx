import { useState } from 'react';
const apiUrl = import.meta.env.VITE_API_URL;

interface AddtodoProps {
  fetchTodos: () => void;
}

export default function Addtodo({ fetchTodos }: AddtodoProps) {
  function fetchAddtodo(input: string) {
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: input, completed: false }),
    })
      .then(() => fetchTodos())
      .catch((error) => console.error('Error adding todo:', error));
  }

  const [input, setInput] = useState('');
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!input.trim()) {
      return;
    }
    fetchAddtodo(input);
    setInput('');
  }

  return (
    <form
      action=""
      className="flex justify-center p-3 "
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add your todo"
        className="bg-slate-200 rounded-s-md grow text-start p-2"
      />

      <button
        type="submit"
        className="bg-blue-300 p-3 rounded-e-md hover:bg-black hover:text-white"
      >
        Add
      </button>
    </form>
  );
}
