import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        {/* logo */}
        <Link to={"/"}>
          <h1 className="font-bold text-[16px] sm:text-2xl flex-wrap">
            <span className="text-slate-500">Easy</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        {/* search input */}
        <form className="flex items-center bg-slate-100 p-2 rounded-lg">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-20 sm:w-64 pr-2"
          />
          <FaSearch className="text-slate-600" />
        </form>
        {/* Nav links */}
        <ul className="flex items-center gap-1 sm:gap-6 text-[16px] sm:text-[19px]">
          <Link to={"/"}>
            <li className="hidden sm:inline text-slate-700 hover:text-slate-900">
              Home
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="hidden sm:inline text-slate-700 hover:text-slate-900">
              About
            </li>
          </Link>
          <Link to={"/sign-in"}>
            <li className="text-slate-700 hover:text-slate-900">Sign In</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
