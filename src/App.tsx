import { useEffect, useState } from 'react';
import Addtodo from '@components/Addtodo';
import { todoType } from '@type/todoType';
import Searchtod from '@components/Searchtod';
import LoadingOverlay from '@components/LoadingOverlay';
const apiUrl = import.meta.env.VITE_API_URL;

export default function App() {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState<todoType[]>([]);

  function fetchTodos() {
    setLoading(true);
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .finally(() => setLoading(false))
      .catch((error) => console.error('Error fetching todos:', error));
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      {loading && <LoadingOverlay />}
      <main className="h-screen p-[4%] overflow-y-auto">
        <h1 className="text-3xl font-bold underline text-center mb-5 ">Todo</h1>
        <div className="bg-red-500 rounded-xl space-y-4 max-w-lg mx-auto py-4  ">
          <Addtodo fetchTodos={fetchTodos} />
          {!loading && <Searchtod todos={todos} fetchTodos={fetchTodos} />}
        </div>
      </main>
    </>
  );
}
