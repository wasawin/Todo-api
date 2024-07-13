const apiUrl = import.meta.env.VITE_API_URL;

interface DeletetodoProps {
  fetchTodos: () => void;
  id: number;
}
export default function Deletetodo({ fetchTodos, id }: DeletetodoProps) {
  function fetchDeletetodo() {
    fetch(`${apiUrl}/${id}`, {
      method: 'DELETE',
    })
      .then(() => fetchTodos())
      .catch((error) => console.error('Error adding todo:', error));
  }

  return (
    <button
      className="bg-red-300 p-2 rounded-md hover:bg-black hover:text-white"
      onClick={fetchDeletetodo}
    >
      delete
    </button>
  );
}
