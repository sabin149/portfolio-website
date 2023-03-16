import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="text-gray-600 body-font bg-[#e6e6e6] flex flex-wrap">
      <div className="container mx-auto flex px-5 flex-col md:flex-row items-center h-14 ">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl font-semibold tracking-wide uppercase text-[#DD7930]">
            Kritik Rawal
          </span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center justify-center text-lg font-bold text-slate-900 cursor-pointer  capitalize">
          <NavLink to="/" className="mr-14 hover:underline">
            Home
          </NavLink>
          <NavLink to="/about-me" className="mr-14 hover:underline">
            About Me
          </NavLink>
          <NavLink to="/blogs" className="mr-14 hover:underline">
            Blogs
          </NavLink>
          <NavLink to="media-coverage" className="mr-14 hover:underline">
            Media Coverage
          </NavLink>
        </nav>
        <button className="bg-[#DD7930] hover:bg-[rgba(255,130,40,0.84)] text-gray-50 border-0 py-2 px-5 focus:outline-none rounded-lg text-lg font-bold mt-4 md:mt-0">
          Contact
        </button>
      </div>
    </header>
  );
};

export default Header;
