



export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-3">
      <h1 className="text-3xl font-bold underline ">
        Todo
      </h1>
      <div className="bg-red-500 w-[70%] min-h-[500px] rounded-xl space-y-5 flex flex-col items-center justify-center">

        <form action="" className="flex w-[70%]">
          <input type="text" className="bg-slate-200 p-2 grow" placeholder="Search your todo" />

          <button type="submit" className="bg-blue-300 p-2 ">find</button>
        </form>


        <div className="bg-slate-300 grow w-[70%]">
          <div className="flex">
            TEST
          </div>
        </div>






      </div>

    </main>

  )
}