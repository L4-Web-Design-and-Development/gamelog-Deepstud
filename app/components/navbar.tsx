export default function NavBar() {
  return (
    <nav className="flex items-center py-4 justify-between">
      <div className="flex items-center">
        <img
          className="h-10 w-auto mr-4"
          src="/app/assets/svg/gamelog-logo.svg"
          alt=""
        />
        <h1 className="text-5xl font-bold">
          Game <span className="text-blue-800">Log</span>!
        </h1>
      </div>
      <ul className="flex  space-x-6 my-5">
        <li>Games</li>
        <li>About</li>
        <li>Online Journal</li>
      </ul>
    </nav>
  );
}
