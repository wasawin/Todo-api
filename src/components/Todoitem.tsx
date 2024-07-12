import { todoType } from '@type/todoType'
import Deletetodo from '@components/Deletetodo';
const apiUrl = import.meta.env.VITE_API_URL;

interface todoItemProps {
    todo: todoType
    index: number;
    fetchTodos: () => void;
}


export default function Todoitem({ todo, fetchTodos, index }: todoItemProps) {

    function changeCompleted(id: number) {
        fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ completed: !todo.completed })
        }).then(() => fetchTodos())
            .catch(error => console.error('Error adding todo:', error));
    }

    return (
        <>
            <div className='flex items-center justify-between '>
                <div className='flex gap-4' >
                    <div className=''>{index + 1}</div>
                    <div className=''>{todo.title}</div>

                </div>
                <div className="flex">
                    <Deletetodo fetchTodos={fetchTodos} id={todo.id} />

                    <div className='p-2 flex'>
                        <input type="checkbox" name="" id="" checked={todo.completed} onChange={() => changeCompleted(todo.id)} />
                    </div>

                </div>
            </div>
        </>
    )
}
