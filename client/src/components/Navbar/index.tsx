import { Bell, Menu, Settings, Sun } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mb-7">
      {/* left */}
      <div className="flex items-center justify-between gap-5">
        <button className="px-3 py-3 rounded-full bg-gray-100 hover:bg-blue-100">
          <Menu className="w-4 h-4" />
        </button>

        <div className="relative">
          <input
            type="text"
            name="search"
            placeholder="Start typing to search products..."
            className="pl-10 pr-4 py-2 w-52 md:w-80 border-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded-lg"
          />
          <Bell
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            size={18}
          />
        </div>
      </div>

      {/* right */}
      <div className="flex gap-5 items-center">
        <div className="hidden md:flex items-center justify-between gap-5">
          <div>
            <button>
              <Sun className="text-gray-500" size={24} />
            </button>
          </div>
          <div className="relative">
            <Bell className="text-gray-500" size={24} />
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-red-100 bg-red-500 rounded-full text-xs font-semibold leading-none">
              3
            </span>
          </div>
          <hr className="w-0 h-7 border border-gray-300" />
          <div className="flex items-center gap-3 border border-gray-300">
            <div className="w-4 h-4">image</div>
            <p>Robiul Islam</p>
          </div>
        </div>
        <Link href="/settings">
          <Settings size={24} className="text-gray-500" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
