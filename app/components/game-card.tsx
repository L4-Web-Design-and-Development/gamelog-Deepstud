import { useNavigate } from "@remix-run/react";
interface GameCardProps {
  title: string;
  releaseDate: string;
  genre: string;
  imageUrl: string;
  gameId: string;
}
export default function GameCard(props: GameCardProps) {
  const formattedDate = props.releaseDate.slice(0, 10);
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/update/${props.gameId}`);
  };

  return (
    <div className=" flex flex-col items-left justify-start p-1  rounded shadow-md  w-96">
      <section>
        <img
          className="h-48 w-full object-cover  rounded"
          src={props.imageUrl}
          alt={props.title}
        />
      </section>
      <div className=" flex justify-between items-start gap-4">
        <section className="flex flex-col gap-3 mx-2 my-3 ">
          <h1 className="text-lg  font-semibold">{props.title}</h1>
          <h2 className="text-cyan-500">{props.genre || "No category"}</h2>
          <h3 className=" text-gray-700">{formattedDate}</h3>
        </section>
        <section className="flex flex-col gap-2 ">
          <button
            onClick={handleEdit}
            className="border-2 border-cyan-100 rounded-lg my-2 p-2"
          >
            Edit
          </button>
          <form
            method="post"
            action={`/delete/${props.gameId}`}
            onSubmit={(e) => {
              if (!confirm("Are you sure you want to delete this game?")) {
                e.preventDefault();
              }
            }}
          >
            <button
              type="submit"
              className="border-2 border-red-600 rounded-md my-2 p-2"
            >
              Delete
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
