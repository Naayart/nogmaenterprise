export default function Navbar() {
  return (
    <>
      <nav>
        <h1>
          <span>Nogma</span>
          <span>H</span>
          <span>Enterprise</span>
        </h1>

        <div className=" space-x-5 inline-block ">
          <button className="font-bold ">Login</button>
          <button className="bg-[#7848F4] text-white px-7 py-2 rounded-sm">
            Signup
          </button>
        </div>
      </nav>
    </>
  );
}
