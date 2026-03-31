import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center">
        <Link to="/" className="flex items-center gap-3">
          <div className="rounded-2xl bg-gradient-to-br from-teal to-teal/80 p-2">
            <img
              src="/logo-128.png"
              alt="TalkScroll"
              className="w-9 h-9 object-contain"
            />
          </div>
          <span className="text-lg font-bold text-gray-900">TalkScroll</span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
