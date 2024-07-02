import { todoType } from '@type/todoType'
import Deletetodo from '@components/Deletetodo';
interface todoItemProps {
    todo: todoType
    fetchTodos: () => void;
}


export default function Todoitem({ todo, fetchTodos }: todoItemProps) {
    return (
        <div>
            <div className='flex items-center justify-between'>
                <div className='flex' >
                    <div className=''>{todo.id}</div>
                    <div className=' bg-slate-500'>{todo.title}</div>

                </div>
                <div className="flex">
                    <Deletetodo fetchTodos={fetchTodos} id={todo.id} />

                </div>
            </div>
        </div>
    )
}
