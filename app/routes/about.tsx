export default function About() {
  return (
    <div className="flex items-start justify-evenly min-h-screen">
      <div className="flex flex-col container border-2 border-cyan-600 rounded-2xl p-6  max-w-2xl">
        <section>
          <h1 className="text-2xl font-bold mb-4 flex items-center justify-center">
            About <span className="text-cyan-400 ml-2">GameLog</span>
          </h1>
          <p className="text-center text-white">
            At GameLog we are passionate about games. Based in the Island of
            Jersey, our small team is dedicated to helping you manage your game
            stats. Visit us in-store for the best selection of games on the
            Island.
          </p>
          <p>
            Our website is current under development, please let us know if you
            have any issues.
          </p>
        </section>
      </div>
    </div>
  );
}
