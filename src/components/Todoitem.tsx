import { todoType } from '../type/todoType'

interface todoItemProps {
    todo: todoType
}


export default function Todoitem({ todo }: todoItemProps) {
    return (
        <div>
            <div className='flex items-center justify-between'>
                <div className='flex' >
                    <div className=''>{todo.id}</div>
                    <div className=' bg-slate-500'>{todo.title}</div>
                </div>
            </div>
        </div>
    )
}
