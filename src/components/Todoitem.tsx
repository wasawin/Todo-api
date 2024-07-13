import { todoType } from '@type/todoType';
import Deletetodo from '@components/Deletetodo';
import { Updatecompleted } from '@components/Updatecompleted';

interface todoItemProps {
  todo: todoType;
  index: number;
  fetchTodos: () => void;
}

export default function Todoitem({ todo, fetchTodos, index }: todoItemProps) {
  return (
    <>
      <div className="flex items-center justify-between ">
        <div className="flex gap-4">
          <div className="">{index + 1}</div>
          <div className="">{todo.title}</div>
        </div>
        <div className="flex items-center gap-3">
          <Deletetodo fetchTodos={fetchTodos} id={todo.id} />
          <Updatecompleted todo={todo} fetchTodos={fetchTodos} />
        </div>
      </div>
    </>
  );
}
