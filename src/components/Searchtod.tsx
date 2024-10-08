import { todoType } from '@/type/todoType';
import { useState } from 'react';
import Todoitem from '@/components/Todoitem';

function Searchtod({
  todos,
  fetchTodos,
}: {
  todos: todoType[];
  fetchTodos: () => void;
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [input, setInput] = useState('');
  const filteredTodos = todos.filter((todo: todoType) =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <form className="flex justify-center p-3">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setSearchTerm(e.target.value);
          }}
          placeholder="Search your todo"
          className="bg-slate-200 rounded-s-md grow text-center p-2"
        />
      </form>

      <div className="bg-slate-300 grow rounded-xl mx-3 p-4 space-y-3 ">
        {todos.length === 0 && (
          <>
            <div className="text-center text-xl py-10">
              Start your to-do list
            </div>
          </>
        )}
        {filteredTodos.length === 0 && todos.length !== 0 && (
          <>
            <div className="text-center text-xl py-10">No to-do found</div>
          </>
        )}
        {filteredTodos.map((todo, index) => (
          <Todoitem
            index={index}
            todo={todo}
            key={index}
            fetchTodos={fetchTodos}
          />
        ))}
      </div>
    </>
  );
}

export default Searchtod;
