
import React, { useEffect, useState } from 'react'
import { todoType } from './type/todoType';
import Todoitem from './components/Todoitem';
const apiUrl = import.meta.env.VITE_API_URL;


export default function App() {
  const [input, setInput] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!input.trim()) {
      return
    }
    setInput('');
  }

  const [todos, setTodos] = useState([])
  function fetchTodos() {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setTodos(data))

  }


  useEffect(() => {
    fetchTodos()
    console.log(todos);
  }, [])






  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-24 gap-3">
        <h1 className="text-3xl font-bold underline ">
          Todo
        </h1>
        <div className="bg-red-500 w-[100%] min-h-[500px] rounded-xl space-y-5 flex flex-col items-center justify-center">

          <form action="" className="flex w-[70%]" onSubmit={handleSubmit}>
            <input type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-slate-200 p-2 grow" placeholder="Search your todo" />

            <button
              type="submit"
              className="bg-blue-300 p-2 ">
              find</button>
          </form>

          <div className="bg-slate-300 grow w-[70%]">
            {todos.map((todos: todoType) =>
              <Todoitem todo={todos} />
            )

            }
          </div>
        </div>
      </main>
    </>
  )
}