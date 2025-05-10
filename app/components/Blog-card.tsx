interface BlogCardProps {
  title: string;
  releaseDate: string;
  content: string;
  Account: string;
}

export default function BlogCard(props: BlogCardProps) {
  const formattedDate = props.releaseDate.slice(0, 10);
  return (
    <div className=" flex flex-col items-left justify-start p-1  rounded shadow-md  w-96">
      <div className=" flex justify-between items-start gap-4">
        <section className="flex flex-col gap-3 mx-2 my-3 ">
          <h1 className="text-lg  font-semibold">{props.title}</h1>
          <h3 className=" text-gray-700">{formattedDate}</h3>
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
