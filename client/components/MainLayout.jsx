import Header from "./Header";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar - hidden on mobile */}
        <div className="hidden lg:block border-r-2 border-gray-200">
          <LeftSidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>

        {/* Right Sidebar - hidden on tablets and below */}
        <div className="hidden xl:block border-l-2 border-gray-200">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
