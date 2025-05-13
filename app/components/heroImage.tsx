export default function HeroImage() {
  return (
    <div className="relative h-50%  overflow-hidden">
      <div className="absolute inset-0 blur bg-[url('https://res.cloudinary.com/dducfnlfu/image/upload/v1747162020/heroImage_fidjx6.jpg')] bg-cover bg-center scale-105 blur-xl z-0" />

      <div className="relative z-10 flex items-center h-full justify-start p-8">
        <div className="text-left">
          <h1 className="text-4xl md:text-6xl  mb-4 text-white">
            Track Your <br />
            <span className="text-cyan-500">Gaming </span> <br />
            Journey With <br />
            Easy
          </h1>
          <button className="border-2 border-cyan-400 hover:bg-blue-700 text-white font-bold   py-2 px-4 rounded">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
