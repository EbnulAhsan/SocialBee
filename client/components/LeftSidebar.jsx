import { Link, useLocation } from "react-router-dom";
import {
  Users,
  Bookmark,
  Clock,
  Video,
  Calendar,
  ShoppingBag,
  Gamepad2,
  HelpCircle,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

const menuItems = [
  { icon: Users, label: "Friends", path: "/friends" },
  { icon: Bookmark, label: "Saved", path: "/saved" },
  { icon: Clock, label: "Memories", path: "/memories" },
  { icon: Video, label: "Video", path: "/video" },
  { icon: Calendar, label: "Events", path: "/events" },
  { icon: ShoppingBag, label: "Marketplace", path: "/marketplace" },
  { icon: Gamepad2, label: "Gaming Video", path: "/gaming" },
  { icon: HelpCircle, label: "Support", path: "/support" },
];

const shortcuts = [
  { label: "Figma designers community", path: "/group/1" },
  { label: "Java Q and A", path: "/group/2" },
];

export default function LeftSidebar() {
  const [showMore, setShowMore] = useState(false);
  const location = useLocation();

  const visibleItems = showMore ? menuItems : menuItems.slice(0, 6);

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-64 bg-white h-[calc(100vh-60px)] overflow-y-auto sticky top-16 shadow-sm">
      {/* User Profile */}
      <div className="p-4 border-b-2 border-gray-100">
        <Link
          to="/profile"
          className={`flex items-center gap-3 p-3 rounded-lg transition font-semibold ${
            isActive("/profile")
              ? "bg-blue-50 text-blue-600 shadow-md"
              : "hover:bg-gray-100 text-gray-900"
          }`}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex-shrink-0 shadow-md"></div>
          <span className="truncate">Minsara Vithanage</span>
        </Link>
      </div>

      {/* Menu Items */}
      <nav className="p-2">
        {visibleItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center gap-3 p-3 rounded-lg transition font-semibold text-sm ${
                isActive(item.path)
                  ? "bg-blue-50 text-blue-600 shadow-md"
                  : "text-gray-900 hover:bg-gray-100"
              }`}
            >
              <Icon size={24} className={isActive(item.path) ? "text-blue-600" : "text-gray-600"} />
              <span>{item.label}</span>
            </Link>
          );
        })}

        {/* See More Button */}
        <button
          onClick={() => setShowMore(!showMore)}
          className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg transition text-gray-900 font-semibold text-sm w-full"
        >
          <ChevronDown
            size={24}
            className={`text-gray-600 transition ${showMore ? "rotate-180" : ""}`}
          />
          <span>{showMore ? "See less" : "See more"}</span>
        </button>
      </nav>

      <hr className="border-gray-200" />

      {/* Shortcuts */}
      <div className="p-2">
        <h3 className="text-xs font-bold text-gray-600 uppercase px-2 py-3 tracking-wider">
          Your shortcuts
        </h3>
        {shortcuts.map((shortcut) => (
          <Link
            key={shortcut.label}
            to={shortcut.path}
            className={`flex items-center gap-3 p-3 rounded-lg transition text-sm font-semibold ${
              isActive(shortcut.path)
                ? "bg-blue-50 text-blue-600 shadow-md"
                : "text-gray-900 hover:bg-gray-100"
            }`}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex-shrink-0 shadow-md"></div>
            <span className="truncate">{shortcut.label}</span>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <div className="p-3 text-xs text-gray-500 space-y-1 border-t border-gray-200 mt-2">
        <p className="line-clamp-2">
          Privacy · Terms · Advertising · Ad Choices · Cookies · More · Meta © 2024
        </p>
      </div>
    </div>
  );
}
