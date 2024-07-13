import React, { useState } from 'react';
import { todoType } from '@/type/todoType';

const apiUrl = import.meta.env.VITE_API_URL;

interface EdittitleProps {
  fetchTodos: () => void;
  todo: todoType;
}

function Edittitle({ fetchTodos, todo }: EdittitleProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleTitleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newTitle = formData.get('title') as string;

    fetch(`${apiUrl}/${todo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: newTitle,
      }),
    })
      .then(() => {
        fetchTodos();
        setIsModalOpen(false);
      })
      .catch((error) => console.error('Error updating todo:', error));
  }

  function Modal() {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-md">
          <h2 className="text-lg font-bold mb-2">Edit Title</h2>
          <form onSubmit={handleTitleSubmit} className="space-y-2">
            <input
              type="text"
              name="title"
              defaultValue={todo.title}
              className="border p-3  w-full"
            />
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-300 p-2 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 p-2 rounded-md text-white hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <>
      <button
        className="bg-blue-300 p-2 rounded-md hover:bg-black hover:text-white"
        onClick={() => setIsModalOpen(true)}
      >
        Edit
      </button>
      {isModalOpen && <Modal />}
    </>
  );
}

export default Edittitle;
