import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import MainLayout from "@/components/MainLayout";

export default function NotFound() {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-8 text-center border-2 border-gray-100">
          <h1 className="text-6xl font-bold mb-4 text-gray-900 animate-bounce">404</h1>
          <p className="text-2xl text-gray-600 mb-6 font-semibold">Oops! Page not found</p>
          <Link
            to="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition transform hover:scale-105"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
