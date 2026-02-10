import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Home,
  Tv,
  ShoppingBag,
  Users,
  MessageCircle,
  Bell,
  Settings,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-500 border-b-4 border-blue-700 sticky top-0 z-50 shadow-lg">
      <div className="flex items-center justify-between px-4 py-3 max-w-full">
        {/* Left - Logo and Search */}
        <div className="flex items-center gap-4 flex-1">
          <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition">
            <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition transform hover:scale-105">
              <span className="text-blue-600 font-black text-2xl">f</span>
            </div>
            <span className="hidden sm:inline font-black text-2xl text-white drop-shadow-sm">
              facebook
            </span>
          </Link>

          {/* Search Bar */}
          <div className="hidden sm:flex items-center bg-white rounded-full px-4 py-2 flex-1 max-w-xs shadow-md">
            <span className="text-gray-400 mr-2">🔍</span>
            <input
              type="text"
              placeholder="Search Facebook"
              className="bg-transparent outline-none text-sm w-full text-gray-700 placeholder-gray-500"
            />
          </div>
        </div>

        {/* Center - Navigation Icons */}
        <div className="hidden md:flex items-center gap-1 mx-4">
          <Link
            to="/"
            className={`p-3 rounded-lg transition font-semibold flex items-center gap-2 ${
              isActive("/")
                ? "bg-blue-700 text-white shadow-md"
                : "text-white hover:bg-blue-700"
            }`}
          >
            <Home size={24} />
            <span className="text-sm">Home</span>
          </Link>
          
          <Link
            to="/video"
            onClick={() => setMobileMenuOpen(false)}
            className={`p-3 rounded-lg transition font-semibold flex items-center gap-2 ${
              isActive("/video")
                ? "bg-blue-700 text-white shadow-md"
                : "text-white hover:bg-blue-700"
            }`}
          >
            <Tv size={24} />
            <span className="text-sm">Videos</span>
          </Link>
          
          <Link
            to="/marketplace"
            onClick={() => setMobileMenuOpen(false)}
            className={`p-3 rounded-lg transition font-semibold flex items-center gap-2 ${
              isActive("/marketplace")
                ? "bg-blue-700 text-white shadow-md"
                : "text-white hover:bg-blue-700"
            }`}
          >
            <ShoppingBag size={24} />
            <span className="text-sm">Marketplace</span>
          </Link>
          
          <Link
            to="/friends"
            onClick={() => setMobileMenuOpen(false)}
            className={`p-3 rounded-lg transition font-semibold flex items-center gap-2 ${
              isActive("/friends")
                ? "bg-blue-700 text-white shadow-md"
                : "text-white hover:bg-blue-700"
            }`}
          >
            <Users size={24} />
            <span className="text-sm">Friends</span>
          </Link>
        </div>

        {/* Right - Icons */}
        <div className="flex items-center gap-1 ml-4">
          <Link
            to="/messages"
            onClick={() => setMobileMenuOpen(false)}
            className={`p-3 hover:bg-blue-700 rounded-full transition hidden sm:block ${
              isActive("/messages") ? "bg-blue-700" : ""
            }`}
            title="Messages"
          >
            <MessageCircle size={24} className="text-white" />
          </Link>
          
          <button
            onClick={() => {}}
            className="p-3 hover:bg-blue-700 rounded-full transition hidden sm:block"
            title="Notifications"
          >
            <Bell size={24} className="text-white" />
          </button>
          
          <Link
            to="/profile"
            onClick={() => setMobileMenuOpen(false)}
            className={`p-3 rounded-full transition ${
              isActive("/profile") ? "bg-blue-700" : "hover:bg-blue-700"
            }`}
            title="Settings & Profile"
          >
            <Settings size={24} className="text-white" />
          </Link>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-3 hover:bg-blue-700 rounded-lg transition md:hidden"
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-2 border-blue-700 bg-blue-600 shadow-lg">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center gap-3 p-4 transition font-semibold ${
              isActive("/") ? "bg-blue-700 text-white" : "text-white hover:bg-blue-700"
            }`}
          >
            <Home size={20} />
            <span>Home</span>
          </Link>
          
          <Link
            to="/video"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center gap-3 p-4 transition font-semibold ${
              isActive("/video") ? "bg-blue-700 text-white" : "text-white hover:bg-blue-700"
            }`}
          >
            <Tv size={20} />
            <span>Videos</span>
          </Link>
          
          <Link
            to="/marketplace"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center gap-3 p-4 transition font-semibold ${
              isActive("/marketplace") ? "bg-blue-700 text-white" : "text-white hover:bg-blue-700"
            }`}
          >
            <ShoppingBag size={20} />
            <span>Marketplace</span>
          </Link>
          
          <Link
            to="/friends"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center gap-3 p-4 transition font-semibold ${
              isActive("/friends") ? "bg-blue-700 text-white" : "text-white hover:bg-blue-700"
            }`}
          >
            <Users size={20} />
            <span>Friends</span>
          </Link>
          
          <Link
            to="/messages"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center gap-3 p-4 transition font-semibold ${
              isActive("/messages") ? "bg-blue-700 text-white" : "text-white hover:bg-blue-700"
            }`}
          >
            <MessageCircle size={20} />
            <span>Messages</span>
          </Link>
        </div>
      )}
    </header>
  );
}
