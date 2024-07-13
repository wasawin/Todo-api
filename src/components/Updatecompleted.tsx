import { todoType } from '@/type/todoType';
const apiUrl = import.meta.env.VITE_API_URL;
interface updateCompletedProps {
  todo: todoType;
  fetchTodos: () => void;
}

export const Updatecompleted = ({ todo, fetchTodos }: updateCompletedProps) => {
  function changeCompleted(id: number) {
    fetch(`${apiUrl}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed: !todo.completed }),
    })
      .then(() => fetchTodos())
      .catch((error) => console.error('Error adding todo:', error));
  }

  return (
    <>
      <input
        type="checkbox"
        name=""
        id=""
        checked={todo.completed}
        onChange={() => changeCompleted(todo.id)}
        className="size-5 rounded "
      />
    </>
  );
};
