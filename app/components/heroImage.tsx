export default function HeroImage() {
  return (
    <div className="relative h-50%  overflow-hidden m-4">
      <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dducfnlfu/image/upload/v1747162020/heroImage_fidjx6.jpg')] bg-cover bg-center scale-105 blur-sm z-0" />

      <div className="relative x-50 flex items-center h-full justify-start p-8">
        <div className="text-left">
          <h1 className="text-4xl font-bold mb-4 lg:text-8xl  text-shadow-sm">
            Track Your <br />
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent leading-none">
              Gaming
            </span>
            <br />
            Journey With <br />
            Ease
          </h1>

          <button className="w-full border-2 border-cyan-600 hover:border-cyan-500 text-cyan-500 font-bold   py-2 px-4 rounded">
            Add game
          </button>
        </div>
      </div>
    </div>
  );
}
