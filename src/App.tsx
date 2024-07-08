import React, { useEffect, useState } from 'react';
import Todoitem from './components/Todoitem';
import Addtodo from './components/Addtodo';
import { todoType } from './type/todoType';
const apiUrl = import.meta.env.VITE_API_URL;

function LoadingOverlay() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="text-white text-2xl">Loading...</div>
    </div>
  );
}


export default function App() {
  const [input, setInput] = useState('');
  const [searchTerm, setSearchTerm] = useState(''); // สถานะสำหรับค่าการค้นหา
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState<todoType[]>([]);



  function fetchTodos() {
    setLoading(true);
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setTodos(data))
      .finally(() => setLoading(false))
      .catch(error => console.error('Error fetching todos:', error));
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  // ฟังก์ชันกรอง todos

  const filteredTodos = todos.filter((todo: todoType) =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {loading && <LoadingOverlay />}
      <main className="h-screen p-[4%]">
        <h1 className="text-3xl font-bold underline text-center mb-5">
          Todo
        </h1>
        <div className="bg-red-500 rounded-xl space-y-4 max-w-lg mx-auto py-4">
          <form className="flex justify-center p-3">
            <input
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setSearchTerm(e.target.value); // ตั้งค่า searchTerm ทันทีที่มีการเปลี่ยนแปลงในช่องค้นหา
              }}
              placeholder="Search your todo"
              className="bg-slate-200 rounded-s-md grow text-center p-2"

            />
          </form>

          <Addtodo fetchTodos={fetchTodos} />


          {!loading && (


            <div className="bg-slate-300 grow rounded-xl mx-3 p-4 space-y-3">
              {todos.length === 0 && <>
                <div className="text-center text-xl py-10">Start your to-do list</div>
              </>}
              {filteredTodos.map((todo, index) => (
                <Todoitem todo={todo} key={index} fetchTodos={fetchTodos} />
              ))}
            </div>

          )}
        </div>
      </main>
    </>
  );
}
