
import React, { useEffect, useState } from 'react'
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
      <main className="h-screen  p-[4%] ">
        <h1 className="text-3xl font-bold underline text-center ">
          Todo
        </h1>
        <div className="bg-red-500  rounded-xl space-y-5 max-w-lg mx-auto ">

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

          <div className="bg-slate-300 grow w-[70%]">
            {todos.map((todos) =>

              < Todoitem todo={todos} />
            )

            }
          </div>
        </div>
      </main>
    </>
  )
}