import { useState } from 'react'
// const apiUrl = import.meta.env.VITE_API_URL;

// import { todoType } from '../type/todoType'

// interface AddtodoProps {
//     todo: todoType
// }


export default function Addtodo() {




    const [input, setInput] = useState('')

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (!input.trim()) {
            return
        }
        setInput('');
    }

    return (
        <form action=""
            className="flex justify-center p-3"
            onSubmit={handleSubmit}>

            <input type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add your todo"
                className="bg-slate-200 rounded-s-md grow text-center"
            />

            <button
                type="submit"
                className="bg-blue-300 p-3 rounded-e-md hover:bg-black hover:text-white">
                Add</button>
        </form>
    )
}
