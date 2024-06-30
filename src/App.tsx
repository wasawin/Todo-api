
import React, { useEffect, useState } from 'react'
import Todoitem from './components/Todoitem';
import Addtodo from './components/Addtodo';
const apiUrl = import.meta.env.VITE_API_URL;


export default function App() {
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!input.trim()) {
      return
    }
    setInput('');
  }

  const [todos, setTodos] = useState([])
  function fetchTodos() {
    setLoading(true);
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setTodos(data))
      .finally(() => setLoading(false))
      .catch(error => console.error('Error fetching todos:', error));
  }


  useEffect(() => {
    fetchTodos()
  }, [])

  function LoadingOverlay() {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-100 z-50">
        <div className="text-black text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <>

      {loading && <LoadingOverlay />}
      <main className="h-screen  p-[4%] ">
        <h1 className="text-3xl font-bold underline text-center mb-5">
          Todo
        </h1>
        <div className="bg-red-500  rounded-xl space-y-4 max-w-lg mx-auto  py-4">

          <form action=""
            className="flex justify-center p-3"
            onSubmit={handleSubmit}>

            <input type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search your todo"
              className="bg-slate-200 rounded-s-md grow text-center"
            />

            <button
              type="submit"
              className="bg-blue-300 p-3 rounded-e-md hover:bg-black hover:text-white">
              find</button>
          </form>

          <Addtodo fetchTodos={fetchTodos} />


          <div className="bg-slate-300 grow rounded-xl mx-3 p-4 space-y-3">
            {todos.map((todos, index) => (
              <Todoitem todo={todos} key={index} fetchTodos={fetchTodos} />
            ))}
          </div>

        </div>
      </main>
    </>
  )
}