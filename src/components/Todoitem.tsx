import { todoType } from '@type/todoType';
import Deletetodo from '@components/Deletetodo';
import { Updatecompleted } from '@components/Updatecompleted';
import Edittitle from '@components/Edittitle';
interface todoItemProps {
  todo: todoType;
  index: number;
  fetchTodos: () => void;
}

export default function Todoitem({ todo, fetchTodos, index }: todoItemProps) {
  return (
    <>
      <div className="flex items-center justify-between ">
        <div className="flex gap-3 items-center">
          <div className="">{index + 1}</div>
          <Updatecompleted todo={todo} fetchTodos={fetchTodos} />

          <div className="">{todo.title}</div>
        </div>
        <div className="flex items-center gap-3">
          <Edittitle fetchTodos={fetchTodos} todo={todo} />
          <Deletetodo fetchTodos={fetchTodos} id={todo.id} />
        </div>
      </div>
    </>
  );
}
