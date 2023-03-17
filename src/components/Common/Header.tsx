import { useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navigationLinks } from "data/Data";

const activeStyle = {
  color: "#DD7930",
};

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const memoizedNavigationLinks = useMemo(() => {
    return navigationLinks;
  }, []);

  return (
    <header className="flex w-full flex-col flex-wrap items-start justify-between border bg-[#e6e6e6] py-2.5 px-8 text-gray-600 lg:flex-row lg:items-center lg:px-10">
      <div className="logo__div flex w-full flex-row flex-wrap items-center justify-between border lg:w-auto lg:justify-start">
        <Link
          to="/"
          className="flex flex-row flex-wrap items-center justify-center font-medium text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-10 w-10 rounded-full bg-indigo-500 p-2 text-white"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl font-semibold uppercase tracking-wide text-[#DD7930]">
            Kritik Rawal
          </span>
        </Link>
        <div className="hamburger-icon__div block text-right text-gray-900 lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="h-7 w-7 rounded transition
            duration-300 ease-in-out"
          >
            <svg
              className={` fill-current ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
            <svg
              className={` fill-current ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          </button>
        </div>
      </div>
      <div className={` lg:block ${isOpen ? "block" : "hidden"}`}>
        <nav className="mt-2 flex w-auto flex-col flex-wrap items-start justify-center gap-2  lg:mt-0 lg:flex-row lg:items-center lg:gap-16">
          {memoizedNavigationLinks.map((link) => {
            return (
              <NavLink
                key={link.id}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to={link.url}
                className=" cursor-pointer text-lg font-bold capitalize text-slate-800 transition duration-300 
                ease-in-out hover:text-[#DD7930] md:text-xl
                "
              >
                {link.text}
              </NavLink>
            );
          })}
        </nav>
      </div>
      <div
        className={`btn__div mt-5 mb-5 lg:mb-0 lg:mt-0 lg:block ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <Link
          to="/contact"
          className=" rounded-lg border-0 bg-[#f18d62] py-2.5 px-5 text-lg font-bold text-gray-50 hover:bg-[#EC733F] focus:outline-none focus:ring-2 focus:ring-[#DD7930] focus:ring-offset-2"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
export default Header;
