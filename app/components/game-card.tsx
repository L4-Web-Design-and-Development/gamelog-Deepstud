export default function GameCard(game) {
  return (
    <div
      key={game.id}
      className=" flex flex-col items-left justify-start p-1  rounded shadow-md  w-96"
    >
      <section>
        <img
          className="h-48 w-full object-cover  rounded"
          src="/app/assets/png/field-game-background.png"
          alt={game.title}
        />
      </section>
      <div className=" flex justify-between items-start gap-4">
        <section className="flex flex-col gap-3 mx-2 my-3 ">
          <h1 className="text-lg  font-semibold">{game.title}</h1>
          <h2 className="text-cyan-500">genres </h2>
          <h3 className=" text-gray-700">£{game.price}</h3>
        </section>
        <section className="flex flex-col gap-2 ">
          <button className="border-2 border-cyan-100 rounded-lg my-2 p-2">
            Edit
          </button>
          <button className=" border-2 border-red-600 rounded-md my-2 p-2">
            Delete
          </button>
        </section>
      </div>
    </div>
  );
}
