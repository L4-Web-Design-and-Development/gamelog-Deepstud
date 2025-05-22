export default function HeroImage() {
  return (
    <div className="relative h-50%  overflow-hidden m-4">
      <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dducfnlfu/image/upload/v1747162020/heroImage_fidjx6.jpg')] bg-cover bg-center scale-105 blur-sm z-0" />

      <div className="relative x-50 flex items-center h-full justify-start p-8">
        <div className="text-left">
          <h1 className="text-4xl font-bold mb-4 text-white lg:text-8xl">
            Track Your <br />
            <span className="text-cyan-500">Gaming </span> <br />
            Journey With <br />
            Easy
          </h1>
          <button className=" border-2 border-cyan-600 hover:border-cyan-500 text-white font-bold   py-2 px-4 rounded">
            Add game
          </button>
        </div>
      </div>
    </div>
  );
}
