export default function GameCard(game) {
  return (
    <div className="flex flex-wrap justify-evenly my-auto py-4">
      <div
        key={game.id}
        className="w-64 h-96 flex flex-col items-left justify-evenly p-1  rounded shadow-md "
      >
        <section>
          <img
            className="h-48 w-full object-cover rounded"
            src="/app/assets/png/field-game-background.png"
            alt={game.title}
          />
        </section>
        <div className="flex justify-between items-start gap-4">
          <section className="flex flex-col max-w-xs ">
            <h1 className="text-lg  font-semibold">{game.title}</h1>
            <h2 className="text-cyan-500">genres </h2>
            <h3 className=" text-gray-700">£{game.price}</h3>
          </section>
          <section className="flex flex-col items- ">
            <button className="border-2 border-cyan-100 rounded-sm my-2">
              Edit
            </button>
            <button className="border-2 border-red-600 rounded-sm my-2">
              Delete
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
