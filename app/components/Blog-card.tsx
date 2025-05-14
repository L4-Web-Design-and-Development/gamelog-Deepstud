interface BlogCardProps {
  title: string;
  releaseDate: string;
  content: string;
  Account: string;
  profileImage: string;
}

export default function BlogCard(props: BlogCardProps) {
  const formattedDate = props.releaseDate.slice(0, 10);
  return (
    <div className="flex flex-col w-96 p-4 rounded-lg border-2 border-cyan-400 ">
      <section>
        <h1 className="text-xl font-bold text-center">{props.title}</h1>
      </section>

      <section className="flex items-center space-x-3 bg-cyan-600 m-3 p-4 rounded-xl">
        <img
          src={props.profileImage}
          className="w-10 h-10 rounded-full object-cover"
          alt="Profile"
        />
        <div>
          <h2 className="text-sm font-semibold">By {props.Account}</h2>
          <p className="text-xs text-gray-500">{formattedDate}</p>
        </div>
      </section>

      <section>
        <p className=" text-lg text-left text-gray-800 bg-white rounded-xl m-5 p-5">
          {props.content}
        </p>
      </section>
    </div>
  );
}
